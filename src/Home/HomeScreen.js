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
                        return (
                            <HomeCard key={index} title={item.title} />
                            // <View key={index} style={{}}>
                            //     <Text>{item.title}</Text>
                            // </View>
                        )
                    })
            )
        }
        
        return <Text>No Data</Text>;
    }

    render() {
        return (
            <Container stylesss={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Content style={{paddingLeft: 20, paddingRight: 20}}>
                    {this.renderCard()}
                </Content>
            </Container>
        );
    }
}