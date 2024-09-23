// components/ClaimCard.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ClaimCard({ claim }) {
  return (
    <View className="bg-yellow-200 rounded-lg shadow-lg p-4 mb-6">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-yellow-500 font-bold text-lg">#{claim.id}</Text>
        <MaterialIcons name="hourglass-empty" size={24} color="#fbbf24" />
      </View>

      <View className="mb-2">
        <Text className="text-gray-700 font-bold">
          {claim.departure} {"\u2794"} {claim.destination}
        </Text>
      </View>

      <View className="flex-row justify-between mb-4">
        <Text className="text-gray-500">
          {claim.airline} ({claim.flightNumber})
        </Text>
        <Text className="text-gray-500">{claim.date}</Text>
      </View>

      <View className="border border-yellow-300 bg-yellow-50 p-3 rounded-lg mb-4">
        <Text className="text-yellow-700 font-semibold mb-1">
          Waiting for Review
        </Text>
        <Text className="text-gray-600">
          Flight details under investigation. We will inform you of the next
          steps once we have checked the information.
        </Text>
      </View>

      <TouchableOpacity className="border border-gray-300 rounded-full py-2 px-4 items-center">
        <Text className="text-gray-600">Details</Text>
      </TouchableOpacity>
    </View>
  );
}
