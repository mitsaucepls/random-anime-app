import { useSettingsStore } from '@/stores/SettingsStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import '@/global.css';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Settings() {
  const { resource, setResource, api, setApi, llm_url, setLLMURL, model, setModel } = useSettingsStore(
    (state) => state,
  );

  return (
    <SafeAreaView className="grow mb-14 mt-5 mx-10">
      <View className="flex-1 flex-col">
        <TextInput
          placeholder="user/repo[@version]"
          label="live2d Api"
          value={api}
          onChangeText={(api) => setApi(api)}
        />
        <TextInput
          placeholder="user/repo[@version]"
          label="Resource"
          value={resource}
          onChangeText={(resource) => setResource(resource)}
        />
        <TextInput
          placeholder="http://10.0.2.2:11434"
          label="LLM Backend URL"
          value={llm_url}
          onChangeText={(llm_url) => setLLMURL(llm_url)}
        />
        <TextInput
          placeholder="wizard-vicuna-uncensored:30b"
          label="Model of your Backend"
          value={model}
          onChangeText={(model) => setModel(model)}
        />
      </View>
    </SafeAreaView>
  );
}
