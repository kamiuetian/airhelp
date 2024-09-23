// app/screens/MyClaimsScreen.js
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import ClaimCard from "../../components/claim/Claimcard";

export default function MyClaimsScreen() {
  const claims = [
    {
      id: "05b80316",
      departure: "London Heathrow Airport",
      destination: "Washington Dulles International",
      airline: "Aer Lingus",
      flightNumber: "EI8917",
      date: "2024-09-03",
    },
    // You can add more claims here
  ];

  return (
    <View className="flex-1 bg-gray-100 px-4 py-6">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold">My claims</Text>
        <TouchableOpacity className="border border-gray-300 rounded-full py-2 px-4">
          <Text className="text-gray-500">Create new claim</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {claims.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        ))}
      </ScrollView>
    </View>
  );
}
