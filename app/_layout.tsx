import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs initialRoutName= "home">
      <Tabs.Screen name="game" />
      <Tabs.Screen
        name="home"
        options={{
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}}/>
      <Tabs.Screen name="chat" />
    </Tabs>
  );
}

