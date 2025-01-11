import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    margin: 20,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    elevation: 3,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default Counter;
