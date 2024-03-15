import { Pressable, StyleSheet, Text } from "react-native";
import  MaterialIcons  from "@expo/vector-icons/MaterialIcons";

export default function IconButton({icon, lable, onPress}){
    return(
        <Pressable onPress={onPress} style={styles.IconButton}>
            <MaterialIcons name={icon} size={24} color="#FFF"/>
            <Text style={styles.IconButtonLabel}>{lable}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    IconButton: {
      justifyContent: 'center',
      alignItems: 'center', 
    },
    IconButtonLabel: {
       color: '#FFF',
       marginTop: 12,
    },
})