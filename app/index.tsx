// App.tsx or index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../navigation/AppNavigator'; // Adjust the path as per your project structure

const index = () => {
    return (
        <NavigationContainer independent={true}>
            <AppNavigator />
        </NavigationContainer>
    );
};

export default index;

