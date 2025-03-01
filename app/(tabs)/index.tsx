import AnimeModel from '@/components/AnimeModel';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform, SafeAreaView, Text } from 'react-native';
import '@/global.css'

export default function Index() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView className="flex-1">
      <Text className="bg-blue-700">{colorScheme}</Text>
      {Platform.OS !== 'web' ? (
        <AnimeModel />
      ) : (
        <Text className="text-red-500 text-9xl">Model not supported</Text>
      )}
    </SafeAreaView>
  );
};
