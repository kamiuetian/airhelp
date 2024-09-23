import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setFlightIssue,
  setDelayDuration,
  setCancellationInfo,
  setVolunteeredSeat,
} from "../../../redux/features/claimslice";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const ClaimFormStep2 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { flightIssue, delayDuration, cancellationInfo, volunteeredSeat } =
    useSelector((state) => state.claim);

  const delayOptions = {
    "Flight delayed": [
      "Less than 3 hours",
      "More than 3 hours",
      "Missed connecting flight",
    ],
    "Flight cancelled": ["0 - 2 hours", "More than 2 hours", "Never arrived"],
    "Denied boarding": ["0 - 3 hours", "More than 3 hours", "Never arrived"],
  };

  return (
    <ScrollView className="flex-1 p-4">
      {/* First Block: Flight Problem */}
      <Text className="text-lg font-semibold mb-2">
        What was the problem of the flight you encountered? *
      </Text>
      <View className="mb-4">
        {["Flight delayed", "Flight cancelled", "Denied boarding"].map(
          (issue) => (
            <TouchableOpacity
              key={issue}
              onPress={() => {
                dispatch(setFlightIssue(issue));
                // Reset other state when flight issue changes
                dispatch(setDelayDuration(null));
                dispatch(setCancellationInfo(null));
                dispatch(setVolunteeredSeat(null));
              }}
              className={`p-2 border rounded-lg mb-2 ${
                flightIssue === issue
                  ? "bg-green-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              <Text>{issue}</Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {/* Second Block: Delay Duration */}
      {flightIssue && (
        <>
          <Text className="text-lg font-semibold mb-2">
            How long were you delayed to reach the final airport? *
          </Text>
          <View className="mb-4">
            {delayOptions[flightIssue].map((duration) => (
              <TouchableOpacity
                key={duration}
                onPress={() => dispatch(setDelayDuration(duration))}
                className={`p-2 border rounded-lg mb-2 ${
                  delayDuration === duration
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <Text>{duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {/* Third Block: Additional Questions based on Selection */}
      {flightIssue === "Flight cancelled" && delayDuration && (
        <>
          <Text className="text-lg font-semibold mb-2">
            When were you informed about flight cancellation? *
          </Text>
          <View className="mb-4">
            {["Less than 14 days", "More than 14 days"].map((info) => (
              <TouchableOpacity
                key={info}
                onPress={() => dispatch(setCancellationInfo(info))}
                className={`p-2 border rounded-lg mb-2 ${
                  cancellationInfo === info
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <Text>{info}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {flightIssue === "Denied boarding" && delayDuration && (
        <>
          <Text className="text-lg font-semibold mb-2">
            Did you volunteer a seat to the other passenger? *
          </Text>
          <View className="mb-4">
            {["Yes", "No"].map((volunteer) => (
              <TouchableOpacity
                key={volunteer}
                onPress={() => dispatch(setVolunteeredSeat(volunteer))}
                className={`p-2 border rounded-lg mb-2 ${
                  volunteeredSeat === volunteer
                    ? "bg-purple-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <Text>{volunteer}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {/* Link for navigation to the next step */}
      <TouchableOpacity
        onPress={() => {
          router.push("/claim/step3");
        }}
        disabled={
          !flightIssue ||
          !delayDuration ||
          (flightIssue === "Flight cancelled" && !cancellationInfo) ||
          (flightIssue === "Denied boarding" && !volunteeredSeat)
        } // Disable button if required fields are not filled
        className={`p-4 rounded-lg ${
          flightIssue &&
          delayDuration &&
          ((flightIssue === "Flight cancelled" && cancellationInfo) ||
            (flightIssue === "Denied boarding" && volunteeredSeat) ||
            flightIssue === "Flight delayed")
            ? "bg-blue-500"
            : "bg-gray-200"
        }`}
      >
        <Text className="text-center text-white font-semibold">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ClaimFormStep2;
