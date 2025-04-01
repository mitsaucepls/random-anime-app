import { SafeAreaView } from 'react-native';
import ChatLLM from '@/components/ChatLLM';
import '@/global.css';

export default function Chat() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <ChatLLM />
    </SafeAreaView>
  );
}
