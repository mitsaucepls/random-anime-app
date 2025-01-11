import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import '../global.css'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='game'
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='gamepad' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='chat'
        options={{
          headerShown: false,
          tabBarLabel: () => null,

          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='comment' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
