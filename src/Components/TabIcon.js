import React, {Component} from 'react';
import {Stylesheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class TabIcon extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    
                }}
            >
                <Icon
                    //style={{width: 25, height: 25 }}
                    name={this.props.iconName || 'x'}
                    size={25}
                    color={this.props.color}
                />
            </View>
        );
    } 
}

export default TabIcon;