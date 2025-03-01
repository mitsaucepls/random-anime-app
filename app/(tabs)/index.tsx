import AnimeModel from '@/components/AnimeModel';
import { Platform, SafeAreaView } from 'react-native';
import '@/global.css';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Platform.OS !== 'web' ? (
        <AnimeModel />
      ) : (
        <ThemedText darkColor="red" lightColor="red" className="text-9xl">
          Model not supported
        </ThemedText>
      )}
    </SafeAreaView>
  );
}
