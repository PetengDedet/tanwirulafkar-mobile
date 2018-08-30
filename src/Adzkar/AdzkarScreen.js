import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    Text,
    Button
} from 'native-base';

export default class AdzkarScreen extends Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button>
                    <Text>AdzkarScreen</Text>
                </Button>
            </View>
        );
    }
}