import React from 'react';
import {
    Platform
} from 'react-native';

import {Router, Scene, Actions} from 'react-native-router-flux';
import TabIcon from './Components/TabIcon';
import HomeScreen from './Home/HomeScreen';
import LibraryScreen from './Library/LibraryScreen';
import AdzkarScreen from './Adzkar/AdzkarScreen';

const BIRU = '#007AFF';

const App = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: 'white'}}>
            <Scene key="root">
                {/* Tab Container */}
                <Scene
                    key="tabbar"
                    tabs={true}
                    // tabBarStyle={{backgroundColor: '#ffffff'}}
                    hideNavBar={true}
                    navigationBarStyle={{borderBottomColor: '#ffffff', backgroundColor: '#ffffff'}}
                    //inActiveTintColor="#f5f5f5"
                    activeTintColor={BIRU}
                    activeBackgroundColor="#eeeeee"
                    swipeEnabled={true}
                    lazy={true}
                    showLabel={false}
                    tabBarPosition="bottom"
                >
                    <Scene key="tabhome" 
                        title="Home" 
                        navBarButtonColor={BIRU}
                        icon={({focused}) => <TabIcon color={focused ? 'black' : 'gray'} iconName="home"/>}
                        hideNavBar={Platform.OS == 'android' ? true : false}
                    >
                        <Scene key="home"
                            component={HomeScreen}
                            title="Tanwirul Afkar"
                        />
                    </Scene>
                    <Scene key="tablibrary"
                        title="Library"
                        navBarButtonColor={BIRU}
                        icon={({focused}) => <TabIcon color={focused ? 'black' : 'gray'} iconName="book"/>}
                        hideNavBar={Platform.OS == 'android' ? true : false}
                    >
                        <Scene key="home"
                            component={LibraryScreen}
                            title="Tanwirul Afkar"
                        />
                    </Scene>
                    <Scene key="tabadzkar"
                        title="Adzkar"
                        navBarButtonColor={BIRU}
                        icon={({focused}) => <TabIcon color={focused ? 'black' : 'gray'} iconName="tv"/>}
                        hideNavBar={Platform.OS == 'android' ? true : false}
                    >
                        <Scene key="home"
                            component={AdzkarScreen}
                            title="Tanwirul Afkar"
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
}


export default App;