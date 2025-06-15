import { LucideIcon } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

type GroupTypeProps = {
  name: string;
  item: LucideIcon;
};

const GroupTypes: React.FC<GroupTypeProps> = ({ name, item: Icon }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsSelected((prev) => !prev)}
      className={`items-center border rounded-lg py-1.5 w-full ${
        isSelected ? "bg-green-300" : "bg-white"
      }`}
    >
      <Icon color={`${isSelected ? "green" : "gray"}`} />
      <Text className={`${isSelected ? "text-green-700" : "text-gray-500"} font-medium`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default GroupTypes;
