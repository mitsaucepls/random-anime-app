import { Chat, MessageType } from '@flyerhq/react-native-chat-ui';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

export default function ChatTab() {
  const [messages, setMessages] = useState<MessageType.Any[]>([]);
  const user = { id: '4ef191a5-f44f-4092-9441-ad27ed6be102' };
  const llm = { id: '6424fce9-e442-4c60-9ba7-5c8610729334' };

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages]);
  };

  const handleSendPress = async(message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    // addMessage(textMessage);

    const replyMessage: MessageType.Text = {
      author: llm,
      createdAt: Date.now(),
      id: uuidv4(),
      text: '...',
      type: 'text',
    };
    setMessages([replyMessage, textMessage, ...messages]);

    const updateReplyMessage = (done: boolean, delta: string) => {
      if (!done) {
        replyMessage.text = delta
        setMessages((previousMessages) => { previousMessages[0] = replyMessage; return [...previousMessages]; })
      }
    };

    // replyMessage.text = response;
    setMessages((previousMessages) => { previousMessages[0] = replyMessage; return [...previousMessages]; })
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Chat messages={messages} onSendPress={handleSendPress} user={user} />
    </SafeAreaView>
  );
}
