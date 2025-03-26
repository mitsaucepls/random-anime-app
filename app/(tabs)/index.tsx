import AnimeModel from '@/components/AnimeModel';
import { Platform, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import '@/global.css';

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      {Platform.OS !== 'web' ? (
        <AnimeModel />
      ) : (
        <Text className="text-9xl">Model not supported</Text>
      )}
    </SafeAreaView>
  );
}
