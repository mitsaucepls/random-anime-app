import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
} from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function Section({children, title}: SectionProps): JSX.Element {
  return (
    <ThemedView>
      <ThemedText type='title'>
        {title}
      </ThemedText>
      <ThemedView style={styles.sectionContent}>
        {children}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 8,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionContent: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
