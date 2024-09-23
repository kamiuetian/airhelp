import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { sendEmailWithClaimDetails } from "../../../utils/emailsender"; // Utility function to send email

const ClaimConfirmation = () => {
  const dispatch = useDispatch();

  // Fetching email and other claim details from Redux
  const {
    email,
    departureAirport,
    destinationAirport,
    flightDate,
    airline,
    flightNumber,
    bookingReference,
    firstName,
    lastName,
  } = useSelector((state) => state.claim);

  // Simulate sending an email with claim details on component load
  useEffect(() => {
    if (email) {
      const claimDetails = {
        email,
        departureAirport,
        destinationAirport,
        flightDate,
        airline,
        flightNumber,
        bookingReference,
        firstName,
        lastName,
      };
      sendEmailWithClaimDetails(email, claimDetails);
    }
  }, [email]);

  return (
    <View className="p-4 bg-white h-full">
      <Text className="text-lg font-semibold">
        Here are a few things that can speed up your claim process:
      </Text>

      <View className="mt-4">
        <Text className="text-sm">
          • All of our emails and claim progress updates will be delivered to
          the inbox you have listed below. Please check your email regularly.
        </Text>
        <View className="mt-2 p-2 bg-gray-200 rounded-md">
          <Text className="text-base">{email || "No email provided"}</Text>
        </View>
      </View>

      <View className="mt-4">
        <Text className="text-sm">
          • You should have received automatic claim confirmation. If you
          haven’t—or if you noticed that the email address above is
          incorrect—contact our{" "}
          <Text className="text-green-500">customer support</Text>.
        </Text>
      </View>

      <View className="mt-4">
        <Text className="text-sm">
          • Check your <Text className="text-green-500">Spam</Text> folder as
          well since some emails could be redirected there.
        </Text>
      </View>

      <TouchableOpacity
        className="mt-8 bg-green-500 rounded-md p-4"
        onPress={() => alert("Redirect to customer support")}
      >
        <Text className="text-white text-center font-bold">
          Contact Customer Support
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClaimConfirmation;
