import { usePathname, useRouter } from "expo-router";
import { Plus, Search, UserPlus, Users } from "lucide-react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isFriend = pathname === "/friends";

  return (
    <View
      className="flex flex-row justify-end w-full bg-white py-2 px-5 border-b border-gray-300"
      style={{
        shadowOffset: { width: 0, height: 3 },
      }}
    >
      <View
        className={`flex flex-row px-2 mx-4 items-center ${
          inputVisibility ? "border border-gray-500 rounded-lg" : "py-2.5"
        }`}
      >
        <TouchableOpacity
          onPress={() => setInputVisibility((prev) => !prev)}
          onFocus={() => setInputVisibility(true)}
          onBlur={() => setInputVisibility(false)}
          className=""
        >
          <Search />
        </TouchableOpacity>

        {inputVisibility && (
          <TextInput
            placeholder="Search expenses"
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            onSubmitEditing={() => {
              setSearchInput("");
              setInputVisibility(false);
            }}
            className="border-none outline-none text-sm ml-2.5"
          />
        )}
      </View>

      {isHome && (
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => router.push("/new-group")}
        >
          <Users />
          <Plus size={16} />
        </TouchableOpacity>
      )}

      {isFriend && (
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => router.push("/new-group")}
        >
          <UserPlus />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
