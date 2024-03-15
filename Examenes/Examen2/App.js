import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/Ionicons';

const url = "https://jsonplaceholder.typicode.com/todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchData = (option) => {
    axios.get(url)
      .then(({ data }) => {
        switch (option) {
          case 1:
            setTodos(data.map(todo => "ID: " + todo.id));
            break;
          case 2:
            setTodos(data.map(todo => "ID: " + todo.id + " Title: " + todo.title));
            break;
          case 3:
            setTodos(data.filter(todo => !todo.completed).map(todo => "ID: " + todo.id + " Title: " + todo.title));
            break;
          case 4:
            setTodos(data.filter(todo => todo.completed).map(todo => "ID: " + todo.id + " Title: " + todo.title));
            break;
          case 5:
            setTodos(data.map(todo => "ID: " + todo.id + " UserID: " + todo.userId));
            break;
          case 6:
            setTodos(data.filter(todo => todo.completed).map(todo => "ID: " + todo.id + " UserID: " + todo.userId));
            break;
          case 7:
            setTodos(data.filter(todo => !todo.completed).map(todo => "ID: " + todo.id + " UserID: " + todo.userId));
            break;
          default:
            console.log("Invalid option");
        }
        setShowResults(true);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  const resetView = () => {
    setShowResults(false);
    setTodos([]);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1f1f1f'}}>
        {showResults ? (
          <>
            <TouchableOpacity onPress={resetView} style={styles.backButton}>
              <Icon name="arrow-back" size={24} color="#EEEDEB" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.resultContainer}>
              <Text style={styles.resultTitle}>Result:</Text>
              {todos.map((todo, index) => (
                <Text key={index} style={styles.resultText}>{todo}</Text>
              ))}
            </ScrollView>
          </>
        ) : (
          <View style={styles.menuContainer}>
            <Text style={styles.title}>Welcome, choose an option:</Text>
          <ScrollView contentContainerStyle={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(1)}>
              <Text style={styles.buttonText}>Pendings(ID's)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(2)}>
              <Text style={styles.buttonText}>Pendings(ID's & titles)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(3)}>
              <Text style={styles.buttonText}>Unsolved pendings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(4)}>
              <Text style={styles.buttonText}>Solved pendings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(5)}>
              <Text style={styles.buttonText}>Pendings(ID's & user ID's)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(6)}>
              <Text style={styles.buttonText}>Solved pendings(ID's & user ID's)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => fetchData(7)}>
              <Text style={styles.buttonText}>Unsolved pendings(ID's & user ID's)</Text>
            </TouchableOpacity>
          </ScrollView>
          </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EEEDEB',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#747264',
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EEEDEB',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#EEEDEB',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#EEEDEB',
  },
});
