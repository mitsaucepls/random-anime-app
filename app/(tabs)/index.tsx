import AnimeModel from '@/components/AnimeModel';
import { Platform } from 'react-native';
import '@/global.css';
import { ThemedText } from '@/components/ThemedText';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';

export default function Index() {
  return (
    <ThemedSafeAreaView
      style={{
        flex: 1,
      }}
    >
      {Platform.OS !== 'web' ? (
        <AnimeModel />
      ) : (
        <ThemedText darkColor="red" lightColor="red" className="text-9xl">
          Model not supported
        </ThemedText>
      )}
    </ThemedSafeAreaView>
  );
}
