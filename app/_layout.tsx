import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView className="flex-1">
        <View className="flex-1 bg-white">
          <Header />
          <View className="flex-1 pt-8 pb-20 px-3 bg-white">
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
          </View>
          <Footer />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
