import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Btc2Usd from './components/Btc2Usd';
import Products from './components/Products';


export default function App() {

    return (
      <View style={styles.container}>
        {/* <Btc2Usd /> */}
        <Products/>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
