import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface GameCardProps {
    game: {
        id: string;
        title: string;
        description: string;
        image: string;
    };
    onPress: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{game.title}</Text>
                <Text style={styles.description}>{game.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: { flexDirection: 'row', marginBottom: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, overflow: 'hidden' },
    image: { width: 100, height: 100 },
    content: { padding: 12, flex: 1 },
    title: { fontSize: 16, fontWeight: 'bold' },
    description: { fontSize: 14, color: '#666' }
});

export default GameCard;
