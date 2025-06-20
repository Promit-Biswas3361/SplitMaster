import { useRouter } from "expo-router";
import { Heart, House, ImagePlus, List, Plane } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import GroupTypes from "./groupTypes";

const NewGroupScreen = () => {
  const [groupName, setGroupName] = useState("");
  const [inFocus, setInFocus] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");

  const router = useRouter();

  const groups = [
    { id: 1, name: "Trip", item: Plane },
    { id: 2, name: "Home", item: House },
    { id: 3, name: "Couple", item: Heart },
    { id: 4, name: "Other", item: List },
  ];

  return (
    <View className="bg-white flex flex-grow">
      <Text className="text-3xl font-light mb-12">Create a group</Text>

      <View className="flex flex-row w-full items-center">
        <TouchableOpacity className="border border-gray-400 rounded-lg h-14 w-14 items-center justify-center bg-gray-100">
          <ImagePlus size={32} />
        </TouchableOpacity>

        <View className="ml-5 w-[82%] h-14">
          <Text className="text-lg font-medium">Group name</Text>
          <TextInput
            value={groupName}
            onChangeText={(text) => setGroupName(text)}
            onFocus={() => setInFocus(true)}
            onBlur={() => setInFocus(false)}
            className={`outline-none border-b-2 p-1 ${
              inFocus ? "border-green-600" : "border-gray-500"
            }`}
          />
        </View>
      </View>

      <View className="flex-grow mt-12">
        <Text className="text-lg mb-4 font-medium">Type</Text>
        <View className="flex flex-row flex-wrap justify-between">
          {groups.map((group) => (
            <View key={group.id} className="w-[47%] mx-1.5 my-1">
              <GroupTypes
                name={group.name}
                item={group.item}
                isSelected={selectedGroup === group.name}
                onSelect={() => setSelectedGroup(group.name)}
              />
            </View>
          ))}
        </View>
      </View>

      <View className="flex flex-row justify-between">
        <TouchableOpacity className="w-1/2 items-center">
          <View>
            <Text
              className="text-red-500 text-lg font-medium"
              onPress={() => router.push("/")}
            >
              Cancel
            </Text>
          </View>
        </TouchableOpacity>

        <Text className="text-lg font-medium">|</Text>

        <TouchableOpacity className="w-1/2 items-center">
          <View>
            <Text className="text-green-600 text-lg font-medium">Done</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewGroupScreen;
