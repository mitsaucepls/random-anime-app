import React from 'react';
import {
  StyleSheet,
  Pressable,
} from 'react-native';
import { ThemedText } from '../ThemedText';

interface Props {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function Button({ onPress, title, disabled }: Props): JSX.Element {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? 'rgb(210, 230, 255)'
            : 'white'
        },
        styles.button,
        disabled && styles.disabled,
      ]}
    >
      <ThemedText>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  disabled: {
    opacity: 0.5,
  },
});
