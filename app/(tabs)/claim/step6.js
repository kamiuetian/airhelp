import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  updateClaim,
  addPassenger,
  updatePassenger,
} from "../../../redux/features/claimslice";
import CountryPicker from "react-native-country-picker-modal";
import { useRouter } from "expo-router";

const Step6Screen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Get current state from Redux
  const {
    firstName,
    lastName,
    birthdate,
    email,
    confirmEmail,
    address,
    city,
    country,
    phone,
    passengers,
  } = useSelector((state) => state.claim);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Handle input change
  const handleInputChange = (field, value) => {
    dispatch(updateClaim({ [field]: value }));
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    dispatch(updateClaim({ birthdate: currentDate.toISOString() }));
  };

  const addNewPassenger = () => {
    const newPassenger = { firstName: "", lastName: "", birthdate: "" };
    dispatch(addPassenger(newPassenger));
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassenger = { ...passengers[index], [field]: value };
    dispatch(updatePassenger({ index, passenger: updatedPassenger }));
  };
  const handlePersonalInfoFilled = () => {
    if (firstName && lastName && birthdate) {
      setShowContactInfo(true);
    }
  };
  const handleContinue = () => {
    router.push("/claim/step7");
  };

  const isContinueEnabled =
    firstName &&
    lastName &&
    birthdate &&
    email &&
    address &&
    city &&
    country &&
    phone;

  return (
    <ScrollView className="flex-1 p-4 py-6 ">
      <Text className="text-lg font-bold">First Name *</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4"
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={(text) => {
          handleInputChange("firstName", text);
          handlePersonalInfoFilled();
        }}
      />

      <Text className="text-lg font-bold">Last Name *</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-3 mb-4"
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={(text) => {
          handleInputChange("lastName", text);
          handlePersonalInfoFilled();
        }}
      />

      <Text className="text-lg font-bold">Birthdate *</Text>
      <View className="mb-4">
        <Button
          title={
            birthdate
              ? new Date(birthdate).toDateString()
              : "Select your birthdate"
          }
          onPress={() => {
            setShowDatePicker(true);
            handlePersonalInfoFilled();
          }}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      {/* Email Field */}
      {showContactInfo && (
        <View>
          <Text className="text-lg font-bold">Email *</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          {/* Confirm Email Field */}
          <Text className="text-lg font-bold">Confirm Email *</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={email} // Use the same email field for confirmation comparison
            onChangeText={(text) => {
              if (text === email) {
                // Only update if the emails match
                handleInputChange("email", text);
              } else {
                // Show an error message if necessary
                alert("Emails do not match");
              }
            }}
            placeholder="Re-enter your email"
            keyboardType="email-address"
          />
          {/* Address Field */}
          <Text className="text-lg font-bold">Address *</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={address}
            onChangeText={(text) => handleInputChange("address", text)}
            placeholder="Enter your address"
          />
          {/* City Field */}
          <Text className="text-lg font-bold">City *</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            value={city}
            onChangeText={(text) => handleInputChange("city", text)}
            placeholder="Enter your city"
          />
          {/* Country Field */}
          <Text className="text-lg font-bold">Country *</Text>
          <CountryPicker
            withCountryNameButton
            className="border border-gray-300 rounded-md p-3 mb-4"
            countryCode={country} // From Redux state
            withFlag
            withFilter
            onSelect={(country) => handleInputChange("country", country.cca2)} // Using country code from picker
          />
          {/* Phone Number Field */}
          <Text className="text-lg font-bold">Phone *</Text>
          <View style={{ flexDirection: "row" }}>
            {/* Country Code Picker */}
            <CountryPicker
              withCallingCodeButton
              countryCode={phone.substring(0, phone.indexOf(" ")) || "US"} // Extract country code from Redux store
              withFlag
              onSelect={(country) =>
                handleInputChange(
                  "phone",
                  `${country.callingCode[0]} ${phone.split(" ")[1]}`
                )
              }
            />

            {/* Phone Input */}
            <TextInput
              value={phone.split(" ")[1]} // Extract phone number without country code
              onChangeText={(text) =>
                handleInputChange("phone", `${phone.split(" ")[0]} ${text}`)
              }
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>
          {/* Send SMS Code Button */}
          <TouchableOpacity
            onPress={() => {
              if (phone.length > 0) {
                alert(`Sending SMS to ${phone}`);
              } else {
                alert("Please enter a valid phone number");
              }
            }}
          >
            <Text>Send SMS Code</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Passenger Info */}
      {passengers.map((passenger, index) => (
        <View
          key={index}
          className="border border-gray-300 rounded-md p-4 my-4"
        >
          <Text className="text-lg font-bold">Passenger {index + 2}</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            placeholder="Enter passenger first name"
            value={passenger.firstName}
            onChangeText={(text) =>
              handlePassengerChange(index, "firstName", text)
            }
          />

          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-4"
            placeholder="Enter passenger last name"
            value={passenger.lastName}
            onChangeText={(text) =>
              handlePassengerChange(index, "lastName", text)
            }
          />

          <View className="mb-4">
            <Button
              title={
                passenger.birthdate
                  ? new Date(passenger.birthdate).toDateString()
                  : "Select birthdate"
              }
              onPress={() => setShowDatePicker(true)}
            />
          </View>
        </View>
      ))}

      <TouchableOpacity
        className="bg-blue-500 p-3 rounded-md mb-8"
        onPress={addNewPassenger}
      >
        <Text className="text-white text-center">Add Passenger + €600</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleContinue}
        className={`p-4 rounded-full mb-4 ${
          isContinueEnabled ? "bg-green-500" : "bg-gray-300"
        }`}
        disabled={!isContinueEnabled}
      >
        <Text className="text-center text-white font-bold">Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Step6Screen;
