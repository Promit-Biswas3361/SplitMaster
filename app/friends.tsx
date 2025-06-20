import { IndianRupee, SlidersHorizontal, UserPlus } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FriendDetails from "./friendDetails";

const friends = () => {
  const friendList = [
    {
      img: require("../assets/images/favicon.png"),
      name: "Aayush",
      balance: 334.23,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Ansh",
      balance: -251,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "PKG",
      balance: 0.0,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Krishna",
      balance: 152.2,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Siddharth",
      balance: -815,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Ishan",
      balance: 0,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Rushank",
      balance: -50,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Arnav",
      balance: 613.33,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Vansh",
      balance: -235,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Ronnie",
      balance: 127.5,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Yash",
      balance: 369,
    },
    {
      img: require("../assets/images/favicon.png"),
      name: "Pranav Mittal",
      balance: -210.5,
    },
  ];

  const totalBalance = friendList.reduce(
    (sum, friend) => sum + friend.balance,
    0
  );

  return (
    <ScrollView
      className="bg-white flex flex-grow"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="flex flex-row justify-between items-center mb-12">
        <View>
          {Math.abs(totalBalance) <= 0.0001 ? (
            <Text className="text-xl font-light">You are settled up</Text>
          ) : totalBalance > 0 ? (
            <View className="flex flex-row items-center">
              <Text className="text-xl font-light mr-1.5">
                Overall, you are owed
              </Text>
              <IndianRupee color="#16A34A" size={18} />
              <Text className="text-green-600 text-xl font-semibold">
                {totalBalance.toFixed(2)}
              </Text>
            </View>
          ) : (
            <View className=" flex flex-row items-center">
              <Text className="text-xl font-light mr-1.5">
                Overall, you owe
              </Text>
              <IndianRupee color="#F97316" size={18} />
              <Text className="text-orange-500 text-xl font-semibold">
                {Math.abs(totalBalance).toFixed(2)}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity>
          <SlidersHorizontal />
        </TouchableOpacity>
      </View>

      <View className="mb-8">
        {friendList.map((friend, index) => (
          <TouchableOpacity key={index} className="py-2">
            <FriendDetails
              img={friend.img}
              name={friend.name}
              balance={friend.balance}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View className="flex flex-row justify-center">
        <TouchableOpacity className="px-3 py-1.5 border border-blue-400 rounded-md flex flex-row items-center">
          <UserPlus size={20} color="#42A5F5" />
          <Text className="text-blue-400 text-lg font-semibold ml-2.5">
            Add more friends
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default friends;
