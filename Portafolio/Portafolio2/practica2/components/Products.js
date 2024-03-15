import { useState, useEffect } from "react";
import { ActivityIndicator, Text, View, Image, StyleSheet, FlatList } from "react-native";

const url = "https://fakestoreapi.com/products";

export default function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setData(result);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <Text style={styles.textSize}>Loading data... </Text>
          <ActivityIndicator color="red" size="large" />
        </View>
      );
    }
    if (error) {
      return <Text style={styles.textSize}>Error: {error}</Text>;
    }

    return (
      <View style={styles.FlatListContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style= {styles.iamge}> Name: {item.title}</Text>
              <Image source={{ uri: item.image }} style={styles.Image} />
            </View>
          )}
        />
      </View>
    );
  };

  return <View>{getContent()}</View>;
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 20,
  },
  Image: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  FlatListContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});