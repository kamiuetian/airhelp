import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  setFlightDate,
  setBookingReference,
  setAirline,
  setFlightNumber,
} from "../../../redux/features/claimslice";
import { Link, useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker"; // Date picker component

export default function StepFive() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bookingReference, setLocalBookingReference] = useState("");
  const [showMoreFields, setShowMoreFields] = useState(false);
  const [airline, setLocalAirline] = useState("");
  const [flightNumber, setLocalFlightNumber] = useState("");
  const [showHelp, setShowHelp] = useState(false); // Show/Hide for "How to find it?"

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    if (currentDate) {
      setShowMoreFields(true); // Show airline and flight number fields when a date is selected
    }
    dispatch(setFlightDate(currentDate.toISOString()));
  };

  const handleContinue = () => {
    dispatch(setBookingReference(bookingReference));
    dispatch(setAirline(airline));
    dispatch(setFlightNumber(flightNumber));
    router.push("/claim/step6");
  };

  const isContinueEnabled = date && airline && flightNumber;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Flight Date */}
      <Text className="text-base font-bold text-gray-700 mb-1">
        Flight date <Text className="text-red-500">*</Text>
      </Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        className="border border-gray-300 rounded-lg p-3 mb-4"
      >
        <Text className="text-gray-700">
          {date ? date.toDateString() : "Date"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={handleDateChange}
        />
      )}
      {/* Additional Fields (Airline and Flight Number) */}
      {showMoreFields && (
        <>
          {/* Airline */}
          <Text className="text-base font-bold text-gray-700 mb-1">
            Airline
          </Text>
          <TextInput
            value={airline}
            onChangeText={setLocalAirline}
            placeholder="Enter Airline"
            className="border border-gray-300 rounded-lg p-3 mb-4"
          />

          {/* Flight Number */}
          <Text className="text-base font-bold text-gray-700 mb-1">
            Flight number
          </Text>
          <TextInput
            value={flightNumber}
            onChangeText={setLocalFlightNumber}
            placeholder="e.g., 12345"
            className="border border-gray-300 rounded-lg p-3 mb-4"
          />
        </>
      )}

      {/* Booking Reference */}
      <Text className="text-xl font-bold text-gray-700 mb-2">
        Add booking reference
      </Text>
      <TouchableOpacity
        onPress={() => setShowHelp(!showHelp)}
        className="flex-row items-center mb-4"
      >
        <Text className="text-blue-500">How to find it?</Text>
      </TouchableOpacity>
      {showHelp && (
        <View className="bg-gray-100 p-4 mb-4 rounded-lg">
          <Text className="text-gray-700">
            You can find your booking reference (also known as PNR or
            reservation code) on your e-ticket or other travel reservation
            document.
            {"\n\n"}A booking reference is usually a six-digit alphanumeric
            number (e.g., NQH5UX). You'll find it in your booking confirmation
            email, e-ticket, or boarding pass.
          </Text>
        </View>
      )}
      <TextInput
        value={bookingReference}
        onChangeText={setLocalBookingReference}
        placeholder="e.g. NQH5UX"
        className="border border-gray-300 rounded-lg p-3 mb-4"
      />

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
