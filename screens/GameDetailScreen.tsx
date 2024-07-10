import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type GameDetailScreenRouteProp = RouteProp<RootStackParamList, 'GameDetail'>;
type GameDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GameDetail'>;

interface Props {
    route: GameDetailScreenRouteProp;
    navigation: GameDetailScreenNavigationProp;
}

const GameDetailScreen: React.FC<Props> = ({ route, navigation }) => {
    const { game } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Button title="Join" onPress={() => navigation.navigate('GameDashboard', { game })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    description: { fontSize: 16, marginBottom: 12 }
});

export default GameDetailScreen;
