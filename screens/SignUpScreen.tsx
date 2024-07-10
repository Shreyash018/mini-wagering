// SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { firebase } from '../firebaseConfig';
import { RootStackParamList } from '../types';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

interface Props {
    navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home');
        } catch (error:any) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} style={styles.input} />
            <Text>Password:</Text>
            <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 }
});

export default SignUpScreen;
