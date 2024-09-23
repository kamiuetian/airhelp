import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setAcceptTerms,
  setAcceptNews,
  setSituationDescription,
} from "../../../redux/features/claimslice"; // Adjust the path accordingly
import { Link, useRouter } from "expo-router";

export default function StepFour() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setLocalEmail] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [acceptTerms, setLocalAcceptTerms] = useState(false);
  const [acceptNews, setLocalAcceptNews] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleToggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setLocalAcceptTerms(newValue);
    setLocalAcceptNews(newValue);
  };

  // Email validation function using a regular expression for correct email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (emailValue) => {
    setLocalEmail(emailValue);
    if (validateEmail(emailValue)) {
      setEmailError(false); // Reset the error if email is valid
    } else {
      setEmailError(true); // Set error if email is invalid
    }
  };

  const handleContinue = () => {
    // Dispatch the form values to Redux
    dispatch(setEmail(email));
    dispatch(setAcceptTerms(acceptTerms));
    dispatch(setAcceptNews(acceptNews));
    dispatch(setSituationDescription("Sample situation description")); // You can replace this with the actual situation description
    router.push("/claim/step5");
  };

  // Check if the "Continue" button should be enabled
  const isContinueEnabled = email && !emailError && acceptTerms && acceptNews;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Email Input */}
      <Text className="text-base font-bold text-gray-700 mb-1">
        Email <Text className="text-red-500">*</Text>
      </Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        className={`border rounded-lg p-3 mb-1 ${
          emailError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {emailError && (
        <Text className="text-red-500 text-sm mb-4">
          Please enter a valid email address.
        </Text>
      )}

      {/* Select All */}
      <TouchableOpacity
        onPress={handleToggleSelectAll}
        className="flex-row items-center mb-4"
      >
        <View
          className={`h-5 w-5 rounded border ${
            selectAll ? "bg-green-500" : "border-gray-300"
          }`}
        />
        <Text className="ml-2 text-gray-700">Select all</Text>
      </TouchableOpacity>

      {/* Agree to Terms */}
      <TouchableOpacity
        onPress={() => setLocalAcceptTerms(!acceptTerms)}
        className="flex-row items-center mb-4"
      >
        <View
          className={`h-5 w-5 rounded border ${
            acceptTerms ? "bg-green-500" : "border-gray-300"
          }`}
        />
        <Text className="ml-2 text-gray-700">
          I agree to the{" "}
          <Text className="text-green-500">Terms and Conditions</Text>,{" "}
          <Text className="text-green-500">Price List</Text> and{" "}
          <Text className="text-green-500">Privacy Policy</Text>.
        </Text>
      </TouchableOpacity>

      {/* Receive News */}
      <TouchableOpacity
        onPress={() => setLocalAcceptNews(!acceptNews)}
        className="flex-row items-center mb-4"
      >
        <View
          className={`h-5 w-5 rounded border ${
            acceptNews ? "bg-green-500" : "border-gray-300"
          }`}
        />
        <Text className="ml-2 text-gray-700">
          I agree to receive news about air passenger rights, new compensation
          possibilities...
        </Text>
      </TouchableOpacity>

      {/* Share & Earn */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: "https://image-url-placeholder.com/icon.png" }}
          className="h-6 w-6"
        />
        <Text className="ml-2 text-black font-bold">
          Share & Earn! <Text className="text-green-500">Refer a friend</Text>
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        className={`p-4 rounded-full mb-4 ${
          isContinueEnabled ? "bg-green-500" : "bg-gray-300"
        }`}
        disabled={!isContinueEnabled}
      >
        <Text className="text-center text-white font-bold">Continue</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <Link href="/previous-step">
        <Text className="text-center text-black">Back</Text>
      </Link>
    </ScrollView>
  );
}
