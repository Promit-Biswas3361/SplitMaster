import { IndianRupee } from "lucide-react-native";
import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

type friendDetailsProps = {
  img: ImageSourcePropType;
  name: string;
  balance: Double;
};

const FriendDetails: React.FC<friendDetailsProps> = ({
  img,
  name,
  balance,
}) => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="flex flex-row items-center">
        <Image
          className="rounded-full overflow-hidden h-11 w-11"
          source={img}
        />
        <Text className="text-2xl font-light ml-6">{name}</Text>
      </View>

      <View>
        {balance === 0 && <Text className="text-gray-500">no expenses</Text>}

        {balance !== 0 &&
          (balance > 0 ? (
            <View className="items-end">
              <Text className="text-green-600">owes you</Text>
              <View className="flex flex-row items-center">
                <IndianRupee color="#16A34A" size={18} />
                <Text className="text-green-600 text-xl">{balance}</Text>
              </View>
            </View>
          ) : (
            <View className="items-end">
              <Text className="text-orange-500">you owe</Text>
              <View className="flex flex-row items-center">
                <IndianRupee color="#F97316" size={18} />
                <Text className="text-orange-500 text-xl">
                  {Math.abs(balance)}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};

export default FriendDetails;
