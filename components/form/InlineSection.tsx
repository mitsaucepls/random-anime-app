import type {PropsWithChildren} from 'react';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function InlineSection({children, title}: SectionProps): JSX.Element {
  return (
    <ThemedView>
      <ThemedText type='title'>
        {title}
      </ThemedText>
      <ThemedView>
        {children}
      </ThemedView>
    </ThemedView>
  );
}
