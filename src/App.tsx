
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './context/DataContext';

import Navigation from './navigation/Navigation'
import linking from "./utils/linking"

function App() {
    return (
        <DataProvider>
            <NavigationContainer linking={linking}>
                <Navigation/>
            </NavigationContainer>
        </DataProvider>
    );
}

export default App;