import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {
  setDepartureAirport,
  setDestinationAirport,
  setDirectFlight,
} from "../../../redux/features/claimslice"; // Adjusted the import path to match the folder structure

const ClaimFormStep1 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { departureAirport, destinationAirport, directFlight } = useSelector(
    (state) => state.claim
  );

  return (
    <View className="flex-1 p-4">
      <Text className="text-lg font-semibold mb-2">Departed from *</Text>
      <View className="flex-row items-center border rounded-lg p-2 mb-4">
        {/* Replace this with the airplane icon */}
        <MaterialIcons name="flight-takeoff" size={24} color="black" />
        <TextInput
          value={departureAirport}
          onChangeText={(text) => dispatch(setDepartureAirport(text))}
          placeholder="Enter the city or airport name"
          className="ml-2 flex-1"
        />
      </View>
      <Text className="text-lg font-semibold mb-2">
        Final destination airport *
      </Text>
      <View className="flex-row items-center border rounded-lg p-2 mb-4">
        {/* Replace this with the airplane icon */}
        <MaterialIcons name="flight-land" size={24} color="black" />
        <TextInput
          value={destinationAirport}
          onChangeText={(text) => dispatch(setDestinationAirport(text))}
          placeholder="Enter the city or airport name"
          className="ml-2 flex-1"
        />
      </View>
      <Text className="text-lg font-semibold mb-2">
        Was it a direct flight? *
      </Text>
      <View className="flex-row justify-around mb-4">
        <TouchableOpacity onPress={() => dispatch(setDirectFlight(true))}>
          <Text
            className={`border p-2 rounded-full ${
              directFlight ? "bg-green-500 text-white" : "bg-white text-black"
            }`}
          >
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(setDirectFlight(false))}>
          <Text
            className={`border p-2 rounded-full ${
              !directFlight ? "bg-red-500 text-white" : "bg-white text-black"
            }`}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
      {/* Navigate to Step 2 */}
      <TouchableOpacity
        disabled={!departureAirport || !destinationAirport || !directFlight}
        className={`p-4 rounded-lg ${
          departureAirport && destinationAirport && directFlight
            ? "bg-blue-500"
            : "bg-gray-200"
        }`}
        onPress={() => {
          router.push("/claim/step2");
        }}
      >
        <Text className="text-center text-white font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClaimFormStep1;
