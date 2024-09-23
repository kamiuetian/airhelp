// app/screens/LoginScreen.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/authslice";
import { Link } from "expo-router";
import SocialLogin from "../components/Sociallogin";

export default function LoginScreen() {
  const dispatch = useDispatch();

  const handleLoginSuccess = (user) => {
    dispatch(login(user));
  };

  const handleLogin = () => {
    const user = { email: "user@example.com" };
    dispatch(login(user));
  };

  return (
    <View className="flex-1 justify-center px-8 bg-white">
      <Text className="text-2xl font-bold text-center mb-8">Sign In</Text>

      <SocialLogin onLoginSuccess={handleLoginSuccess} />

      <Text className="text-center text-gray-500 mb-4">or</Text>

      <View className="mb-4">
        <Text className="mb-1 text-gray-700">Email</Text>
        <TextInput
          className="border p-3 rounded-lg w-full"
          placeholder="Enter your email"
        />
      </View>

      <View className="mb-4">
        <Text className="mb-1 text-gray-700">Password</Text>
        <TextInput
          className="border p-3 rounded-lg w-full"
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <Link href="/forgot-password">
        <Text className="text-green-600 text-right mb-4">Forgot password?</Text>
      </Link>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-gray-300 p-3 rounded-lg items-center"
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
      <Text>
        New User <Link href={"/dashboard/Myclaims"}>Register</Link>
      </Text>
    </View>
  );
}
