import { View, Pressable, StyleSheet } from "react-native";
import  MaterialIcons  from "@expo/vector-icons/MaterialIcons";

export default function CircleButton({onPress}){
    return(
        <View style={style.CircleButtonContainer}>
            <Pressable onPress={onPress} style={style.CircleButton}>
                <MaterialIcons name="add" size={38} color="#25292e"/>
            </Pressable>
        </View>
    );
}
const style = StyleSheet.create({
    CircleButtonContainer: {
        width : 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderRadius: 42,
        padding: 3,

    },
    CircleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD33D',
        borderRadius: 42,
    },
})
