import { useState, useEffect } from "react";
import {View, Text,StyleSheet, ActivityIndicator} from "react-native";

const url= "https://api.coindesk.com/v1/bpi/currentprice.json"

export default function Btc2Usd(){

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setIsLoading(false);
            setResponse(result);
        },error => {
            setIsLoading(false);
            setError(error);

        })

    }, []);
    

    const getContent = () => {
        if(isLoading)
        {
            return(
                <View>
                    <Text>Loading...</Text>
                    <ActivityIndicator color= "green" size = "Large"  />;
                </View>
            );

        }   
        if(error)
        {
            return (
            <Text>{error}</Text>
            );
        }
        return (
          <View>
            <Text style={styles.textProps}>BTC to USD: {response['bpi']['USD'].rate}</Text>
            <Text style={styles.textProps}>BTC to EUR: {response['bpi']['EUR'].rate}</Text>
          </View>
        );

    }

    return (
        <View>
            {getContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 36,
    
    }
})


