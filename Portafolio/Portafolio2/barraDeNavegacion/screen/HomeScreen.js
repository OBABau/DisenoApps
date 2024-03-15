import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity
              style={styles.buttonOp}
              onPress={() => navigation.navigate('StackScreen')}
              >
                <Text style={styles.textTouch} >Go to Stack Screen </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        alignItems: 'center',
    },
    textTouch: {
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
    },
    buttonOp: {
        backgroundColor: 'purple',
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: 'center',
        borderRadius: 10,
    },
});