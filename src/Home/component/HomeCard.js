import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import {
    Text,
    Card,
    H3
} from 'native-base';
import FullWidthImage from './FulImage';

export default class HomeCard extends Component {

    constructor(props) {
        super(props);
    }

    renderDescriptive() {
        return (
            <Card style={{padding: 20, borderRadius: 10, marginBottom: 20, borderColor: '#fff', shadowRadius: 10, shadowOpacity: 0.2}}>
                <Text style={{fontWeight: 'bold', fontSize: 12, color: 'lightgray', marginBottom: 10}}>{this.props.date}</Text>
                <H3 style={{fontWeight: 'bold'}}>{this.props.title}</H3>
                <Text style={{color: 'dimgray'}}>{this.props.description}</Text>
            </Card>
        );
    }

    renderThumbnail() {

        return (
            
            <Card style={{borderRadius: 10, marginBottom: 20, borderColor: '#fff', shadowRadius: 10}}>
                <FullWidthImage source={{uri : this.props.thumbnail.toString().replace('http://', 'https://')}} />
                <View style={{backgroundColor: 'rgba(50, 50, 50, 0.5)', position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12, color: 'lightgray'}}>{this.props.date}</Text>
                    <H3 style={{fontWeight: 'bold', color: 'white'}}>{this.props.title}</H3>
                </View>
            </Card>
        )
    }

    render() {
        if(this.props.thumbnail.length > 0) {
            return this.renderThumbnail();
        }

        return this.renderDescriptive();
    }
}