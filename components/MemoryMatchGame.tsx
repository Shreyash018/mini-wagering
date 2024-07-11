import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const MemoryMatchGame = () => {
    const [cards, setCards] = useState([
        { id: '1', value: 'A', flipped: false },
        { id: '2', value: 'A', flipped: false },
        { id: '3', value: 'B', flipped: false },
        { id: '4', value: 'B', flipped: false },
        
    ]);
    const [selectedCards, setSelectedCards] = useState<string[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

    useEffect(() => {
        
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        
        const shuffledCards = [...cards];

        
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }

        
        setCards(shuffledCards);
    };

    const handleCardPress = (id: string) => {
        
        if (selectedCards.length === 2 || matchedPairs.includes(id)) {
            return;
        }

        
        const updatedCards = cards.map(card =>
            card.id === id ? { ...card, flipped: !card.flipped } : card
        );
        setCards(updatedCards);

       
        setSelectedCards(prevState => [...prevState, id]);

        
        if (selectedCards.length === 1) {
            
            const [firstCardId] = selectedCards;
            const [secondCardId] = [id];

           
            if (cards.find(card => card.id === firstCardId)?.value === cards.find(card => card.id === secondCardId)?.value) {
                
                setMatchedPairs(prevState => [...prevState, firstCardId, secondCardId]);
            } else {
               
                setTimeout(() => {
                    const resetCards = cards.map(card => ({
                        ...card,
                        flipped: matchedPairs.includes(card.id) ? true : false
                    }));
                    setCards(resetCards);
                }, 1000);
            }

            
            setSelectedCards([]);
        }
    };

    const renderCard = ({ item }: { item: { id: string; value: string; flipped: boolean } }) => (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: item.flipped || matchedPairs.includes(item.id) ? 'green' : 'blue' }]}
            onPress={() => handleCardPress(item.id)}
            disabled={matchedPairs.includes(item.id)}
        >
            <Text style={styles.cardText}>{item.flipped || matchedPairs.includes(item.id) ? item.value : ' '}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                renderItem={renderCard}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    row: { flex: 1, justifyContent: 'space-around' },
    card: { width: 100, height: 100, margin: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' },
    cardText: { fontSize: 24, color: 'white' }
});

export default MemoryMatchGame;

