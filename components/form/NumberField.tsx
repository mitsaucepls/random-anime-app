import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface Props {
  title?: string;
  placeholder?: string;
  value?: number;
  isInteger?: boolean;
  onChange?: (value: number) => void;
  editable?: boolean;
}

export default function NumberField(props: Props): JSX.Element {
  const { title, onChange, placeholder, value, isInteger, editable } = props;

  const textColor = { color: Colors[useColorScheme() ?? 'light'].text };

  const handleChange = useCallback((val) => {
    const num = Number(val)
    if (!Number.isNaN(num) && (!isInteger || Number.isInteger(num))) {
      onChange?.(num);
    } else {
      onChange?.(0);
    }
  }, [onChange])

  return (
    <ThemedView>
      {title && <ThemedText type='title'>{title}</ThemedText>}
      <TextInput
        style={[styles.input, textColor]}
        onChangeText={handleChange}
        value={value ? String(value) : '0'}
        placeholder={placeholder}
        keyboardType="numeric"
        editable={editable}
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
