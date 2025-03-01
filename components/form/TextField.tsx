import {
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { ThemedView } from '../ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface Props {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  editable?: boolean;
  multiline?: boolean;
}

export default function TextField(props: Props): JSX.Element {
  const {
    title,
    onChange,
    placeholder,
    value,
    editable,
    multiline,
  } = props;

  const textColor = { color: Colors[useColorScheme() ?? 'light'].text };

  return (
    <ThemedView style={styles.container}>
      {title && <Text style={[styles.title, textColor]}>{title}</Text>}
      <TextInput
        style={[
          styles.input,
          textColor,
          multiline && styles.multiline,
        ]}
        onChangeText={onChange}
        value={value ?? ''}
        placeholder={placeholder}
        editable={editable}
        multiline={multiline}
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
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
});
