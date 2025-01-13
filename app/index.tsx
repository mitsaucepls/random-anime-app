import AnimeModel from "@/components/AnimeModel";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text className="bg-blue-700">AnimeModel</Text>
                {Platform.OS !== 'web' ? (
                    <AnimeModel />
                ) : (
                    <Text
                    className="text-red-500 text-9xl">Model not supported</Text>
                )
                }
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
