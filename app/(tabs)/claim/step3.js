import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import {
  setInformedByAirline,
  setDisruptionReason,
  setSituationDescription,
} from "../../../redux/features/claimslice";

const Step3FormScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const informedByAirline = useSelector(
    (state) => state.claim.informedByAirline
  );
  const disruptionReason = useSelector((state) => state.claim.disruptionReason);
  const situationDescription = useSelector(
    (state) => state.claim.situationDescription
  );

  const handleInformedByAirline = (value) => {
    dispatch(setInformedByAirline(value));
  };

  const handleDisruptionReason = (value) => {
    dispatch(setDisruptionReason(value));
  };

  const handleSituationDescription = (value) => {
    dispatch(setSituationDescription(value));
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View className="mb-6">
        <Text className="text-lg font-bold mb-4">
          Did the airlines tell you why the flight was disrupted? *
        </Text>

        <TouchableOpacity
          className="flex-row items-center mb-2"
          onPress={() => handleInformedByAirline("Yes")}
        >
          <View
            className={`h-6 w-6 rounded-full border-2 ${
              informedByAirline === "Yes"
                ? "border-blue-500"
                : "border-gray-300"
            } justify-center items-center mr-2`}
          >
            {informedByAirline === "Yes" && (
              <View className="h-3 w-3 bg-blue-500 rounded-full" />
            )}
          </View>
          <Text className="text-lg">Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center mb-2"
          onPress={() => handleInformedByAirline("No")}
        >
          <View
            className={`h-6 w-6 rounded-full border-2 ${
              informedByAirline === "No" ? "border-blue-500" : "border-gray-300"
            } justify-center items-center mr-2`}
          >
            {informedByAirline === "No" && (
              <View className="h-3 w-3 bg-blue-500 rounded-full" />
            )}
          </View>
          <Text className="text-lg">No</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => handleInformedByAirline("Don't remember")}
        >
          <View
            className={`h-6 w-6 rounded-full border-2 ${
              informedByAirline === "Don't remember"
                ? "border-blue-500"
                : "border-gray-300"
            } justify-center items-center mr-2`}
          >
            {informedByAirline === "Don't remember" && (
              <View className="h-3 w-3 bg-blue-500 rounded-full" />
            )}
          </View>
          <Text className="text-lg">Don't remember</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-4">
          What was the reason provided by the airlines? *
        </Text>

        <TouchableOpacity
          className="flex-row items-center mb-4"
          onPress={() => handleDisruptionReason("Aircraft technical problem")}
        >
          <Icon name="build" size={24} className="mr-2" />
          <Text className="text-lg">Aircraft technical problem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center mb-4"
          onPress={() => handleDisruptionReason("Bad weather conditions")}
        >
          <Icon name="cloud" size={24} className="mr-2" />
          <Text className="text-lg">Bad weather conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center mb-4"
          onPress={() => handleDisruptionReason("Strike")}
        >
          <Icon name="campaign" size={24} className="mr-2" />
          <Text className="text-lg">Strike</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => handleDisruptionReason("Airport issues")}
        >
          <Icon name="flag" size={24} className="mr-2" />
          <Text className="text-lg">Airport issues</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-6">
        <Text className="text-lg font-bold mb-4">
          Tell us more about your situation
        </Text>
        <Text className="mb-2 text-gray-600">
          Briefly describe what happened
        </Text>
        <TextInput
          multiline
          value={situationDescription}
          onChangeText={handleSituationDescription}
          className="h-32 border rounded-lg p-4 text-lg"
          placeholder="Enter details here..."
        />
      </View>

      <TouchableOpacity
        className="bg-green-500 p-4 mb-6 rounded-lg"
        onPress={() => {
          router.push("/claim/step4");
        }}
      >
        <Text className="text-white text-center text-lg">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Step3FormScreen;
