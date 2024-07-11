import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MemoryMatchGame from '../components/MemoryMatchGame';

interface Props {
    navigation: any; 
    route: { params: { game: { id: string; title: string; description: string; image: string } } };
}

const GameDashboardScreen: React.FC<Props> = ({ navigation, route }) => {
    const { game } = route.params;

    const handleExitGame = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <MemoryMatchGame />
            <Button title="Exit Game" onPress={handleExitGame} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default GameDashboardScreen;


