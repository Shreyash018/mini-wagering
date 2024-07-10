import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import GameCard from '../components/GameCard';
import { games } from '../mockData';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [currentGames, setCurrentGames] = useState(games.slice(0, 5));
    const [page, setPage] = useState(1);

    const loadMoreGames = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        const newGames = games.slice(0, nextPage * 5);
        setCurrentGames(newGames);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={currentGames}
                renderItem={({ item }) => (
                    <View>
                        <GameCard game={item} onPress={() => navigation.navigate('GameDetail', { game: item })} />
                        <Button title="Join" onPress={() => navigation.navigate('GameDashboard', { game: item })} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                onEndReached={loadMoreGames}
                onEndReachedThreshold={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 }
});

export default HomeScreen;


