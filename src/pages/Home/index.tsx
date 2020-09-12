import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { View, Text } from 'react-native';

function Home() {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    );
}

export default Home;

