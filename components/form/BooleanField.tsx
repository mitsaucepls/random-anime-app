import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

interface Props {
  title?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
}

export default function BooleanField(props: Props): JSX.Element {
  const { title, onChange, value } = props;

  const handlePress = useCallback(() => {
    onChange?.(!value);
  }, [onChange, value]);

  return (
    <ThemedView style={styles.container}>
      {title && <ThemedText type='title'>{title}</ThemedText>}
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.button,
        ]}
      >
        <ThemedText>
          {value ? 'ON' : 'OFF'}
        </ThemedText>
      </Pressable>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  button: {
    borderRadius: 8,
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
