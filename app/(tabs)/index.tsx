import React, { useState } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import AnimeModel from '@/components/AnimeModel';
import ChatLLM from '@/components/ChatLLM';
import '@/global.css';

export default function Index() {
  const [showChatLLM, setShowChatLLM] = useState<boolean>(false);

  const toggleChatLLM = (): void => {
    setShowChatLLM((prevState) => !prevState);
  };

  return (
    <SafeAreaView className="flex-1">
      {Platform.OS !== 'web' ? (
        <AnimeModel onToggleChat={toggleChatLLM} />
      ) : (
        <Text className="text-9xl text-red-500">Model not supported</Text>
      )}
      {}
      {showChatLLM && <ChatLLM />}
    </SafeAreaView>
  );
}
