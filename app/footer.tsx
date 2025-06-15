import { useRouter } from "expo-router";
import { ChartNoAxesCombined, User, Users } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Footer = () => {
  const router = useRouter();

  return (
    <View className="flex flex-row justify-between absolute bottom-0 bg-white w-full py-2 px-5 border-t border-gray-300">
      <TouchableOpacity
        className="flex items-center"
        onPress={() => router.push("/")}
      >
        <Users />
        <Text>Groups</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex items-center">
        <User />
        <Text>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex items-center">
        <ChartNoAxesCombined />
        <Text>Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex items-center">
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
