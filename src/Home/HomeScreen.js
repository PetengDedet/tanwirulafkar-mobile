import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Container,
    Content,
    Text,
    Button,

} from 'native-base';
import HomeCard from './component/HomeCard';
import axios from 'axios';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : []
        }
    }

    componentDidMount() {
        this.getRssFeed();
    }

    getRssFeed() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Falifmagz.com%2Ffeed%2F')
            .then(rsp => {
                var rsp = rsp.data;

                if(rsp.items != null && rsp.items != 'undefined') {
                    this.setState({data: rsp.items});
                }

                console.log(rsp);
                console.log(this.state.data)
            });

    }

    renderCard() {
        if(this.state.data.length > 0) {
            return (
                    this.state.data.map((item, index) => {
                        let hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad'];
                        let bulan = ['Januari', 'Pebruari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
                        var d = new Date(item.pubDate);
                        d = hari[d.getDay()] + ', ' + d.getDate() + ' ' + bulan[d.getMonth()];
                        d = d.toString().toUpperCase();

                        return (
                            <HomeCard 
                                key={index} 
                                title={item.title} 
                                date={d}
                                thumbnail={item.thumbnail}
                                categories={item.categories}
                                description={item.description}
                            />
                        )
                    })
            )
        }
        
        return <Text>No Data</Text>;
    }

    render() {
        return (
            <Container stylesss={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Content style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
                    {this.renderCard()}
                </Content>
            </Container>
        );
    }
}