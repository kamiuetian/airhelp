// components/CustomCheckbox.js
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CustomCheckbox({ isChecked, onToggle }) {
  return (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center">
      <View
        className={`w-6 h-6 mr-3 rounded-sm ${
          isChecked ? "bg-green-600" : "bg-gray-300"
        } justify-center items-center`}
      >
        {isChecked && <FontAwesome name="check" size={16} color="white" />}
      </View>
      <Text className="text-gray-700">I agree to the Terms and Conditions</Text>
    </TouchableOpacity>
  );
}
