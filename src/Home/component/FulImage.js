import React, {Component} from 'react';
import {View} from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default class FullWidthImage extends Component {
    constructor() {
        super();

        this.state = {
            width: 0,
            height: 0
        };
    }

    _onLayout(event) {
        const containerWidth = event.nativeEvent.layout.width;

        if (this.props.ratio) {
            this.setState({
                width: containerWidth,
                height: containerWidth * this.props.ratio
            });
        } else {
            Image.getSize(this.props.source, (width, height) => {
                this.setState({
                    width: containerWidth,
                    height: containerWidth * height / width
                });
            });
        }
    }

    render() {
        return (
            <View onLayout={this._onLayout.bind(this)} style={{
                borderRadius: 10, 
                shadowRadius: 10,
                shadowRadius: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2}}>
                <Image
                    source={this.props.source}
                    indicator={ProgressBar}
                    indicatorProps={{
                        size: 80,
                        borderWidth: 0,
                        unfilledColor: 'rgba(200, 200, 200, 0.2)',
                        color: 'rgba(150, 150, 150, 1)'
                    }}
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        borderRadius: 10,
                    }} />
            </View>
        );
    }
}