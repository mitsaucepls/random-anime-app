import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useSettingsStore } from '@/stores/SettingsStore';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const ChatLLM: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { llm_url, model } = useSettingsStore((state) => state);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await fetch(llm_url + '/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          messages: [{ role: "user", content: input }],
          stream: false
        }),
      });

      const data = await response.json();

      // Correct parsing of Ollama native API response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.choices[0].message.content || 'No response received.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with LLM:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: 'Error communicating with the LLM.',
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  messageList: { paddingBottom: 16 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8eaf6',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
  },
});

export default ChatLLM;
