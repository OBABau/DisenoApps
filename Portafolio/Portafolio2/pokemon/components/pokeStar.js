
import { useState, useEffect } from "react";
import {Text,View,StyleSheet,ActivityIndicator,FlatList,} from "react-native-web";

const url = "https://swapi.dev/api/people";

export default function pokeStar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result.results);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, []);

  console.log(data);
  console.log(error);

  const getContent = () => {
   if(isLoading) {
    return(
    <View>
        <Text>Loading data...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
    )
    }
    if (error) {
      return <Text style={styles.textProps}>Error: {error.message}</Text>;
    }

    return(
        <View>
     <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                    <Text>Name: {item.name}</Text>
                    <Text>Height: {item.height}</Text>
                    <Text>Mass: {item.mass}</Text>
                    <Text>Created: {item.created}</Text>
                    <Text>FIlms: {item.films}</Text>
                    </View>
            )}
            />
        </View>
    )
            }
  return (
    <View>
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  textProps: {
    fontSize: 20,
    color: "red",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    marginTop: 20,
  },
  Image: {
   
  },
  errorStyle: {
    
  },

});

