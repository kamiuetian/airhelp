// app/screens/RegisterScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../redux/features/authslice";
import { Link } from "expo-router";
import SocialLogin from "../components/Sociallogin";
import { CustomCheckbox } from "../components/CustomCheckbox";
export default function RegisterScreen() {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterSuccess = (user) => {
    dispatch(register(user));
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(register({ email, password, confirmPassword }));
  };

  return (
    <View className="flex-1 justify-center px-8 bg-white">
      <Text className="text-2xl font-bold text-center mb-8">Register</Text>
      <Text className="text-center text-gray-600 mb-4">
        This will help you keep track of your claims
      </Text>

      <SocialLogin onLoginSuccess={handleRegisterSuccess} />

      <Text className="text-center text-gray-500 mb-4">or</Text>

      <View className="mb-4">
        <Text className="mb-1 text-gray-700">Email</Text>
        <TextInput
          className="border p-3 rounded-lg w-full"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="mb-4">
        <Text className="mb-1 text-gray-700">Password</Text>
        <TextInput
          className="border p-3 rounded-lg w-full"
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View className="mb-4">
        <Text className="mb-1 text-gray-700">Repeat password</Text>
        <TextInput
          className="border p-3 rounded-lg w-full"
          placeholder="Repeat password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <View className="flex-row items-center mb-4">
        <Text className="ml-2 text-gray-700">
          I agree to the{" "}
          <Link href="/terms" className="text-green-600">
            Terms and Conditions
          </Link>
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        className={`p-3 rounded-lg items-center ${
          isChecked ? "bg-green-600" : "bg-gray-300"
        }`}
        disabled={!isChecked}
      >
        <Text className="text-white">Register</Text>
      </TouchableOpacity>
    </View>
  );
}
