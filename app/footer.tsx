import { usePathname, useRouter } from "expo-router";
import { ChartNoAxesCombined, User, Users } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type AppRoutes = "/" | "/friends" | "/new-group" | "/account";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRouting = (targetRoute: AppRoutes) => {
    if (pathname != targetRoute) {
      router.push(targetRoute);
    }
  };

  return (
    <View className="flex flex-row justify-between absolute bottom-0 bg-white w-full py-2 px-5 border-t border-gray-300">
      <TouchableOpacity
        className="flex items-center"
        onPress={() => handleRouting("/")}
      >
        <Users />
        <Text>Groups</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center"
        onPress={() => handleRouting("/friends")}
      >
        <User />
        <Text>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex items-center">
        <ChartNoAxesCombined />
        <Text>Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex items-center"
        onPress={() => handleRouting("/account")}
      >
        <Image
          source={require("../assets/images/favicon.png")}
          className="h-7 w-7 overflow-hidden rounded-full"
        />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
