// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Historic from '../pages/Historic';
import SymptomsAndPrevention from '../pages/SymptomsAndPrevention';
import ProbabilisticDiagnosis from '../pages/ProbabilisticDiagnosis';
import PreviousDiseases from '../pages/PreviousDiseases';
import Result from '../pages/Result';
import Statistic from '../pages/Statistic';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: '#166494'
                    }
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Historic" component={Historic} />
                <Stack.Screen name="SymptomsAndPrevention" component={SymptomsAndPrevention} />
                <Stack.Screen name="ProbabilisticDiagnosis" component={ProbabilisticDiagnosis} />
                <Stack.Screen name="PreviousDiseases" component={PreviousDiseases} />
                <Stack.Screen name="Result" component={Result} />
                <Stack.Screen name="Statistic" component={Statistic} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;