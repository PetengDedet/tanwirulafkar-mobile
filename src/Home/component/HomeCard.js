import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Text,
    Card
} from 'native-base';

export default class HomeCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{padding: 20, borderRadius: 10, marginBottom: 20}}>
                <Text>{this.props.title}</Text>
            </Card>
        );
    }
}