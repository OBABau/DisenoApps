import react from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function StackScreen() {
    return (
        <View style={styles.container}>
            <Text>Stack Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 28,
        justifyContent: 'center',
        alignItems: 'center',
    }
});