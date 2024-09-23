import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import MaterialIcons

export default function SocialLogin({ onLoginSuccess }) {
  const handleGoogleLogin = async () => {
    // Add actual Google login logic here
    const user = { name: "Google User" };
    onLoginSuccess(user);
  };

  const handleFacebookLogin = async () => {
    // Add actual Facebook login logic here
    const user = { name: "Facebook User" };
    onLoginSuccess(user);
  };

  return (
    <View>
      {/* Google Login Button */}
      <TouchableOpacity
        onPress={handleGoogleLogin}
        className="bg-gray-100 flex-row items-center justify-center p-4 rounded-lg mb-4 shadow-md"
      >
        <MaterialIcons name="google" size={24} color="gray" />
        <Text className="text-gray-700 ml-3 text-lg font-semibold">
          Login with Google
        </Text>
      </TouchableOpacity>

      {/* Facebook Login Button */}
      <TouchableOpacity
        onPress={handleFacebookLogin}
        className="bg-blue-600 flex-row items-center justify-center p-4 rounded-lg mb-4 shadow-md"
      >
        <MaterialIcons name="facebook" size={24} color="white" />
        <Text className="text-white ml-3 text-lg font-semibold">
          Login with Facebook
        </Text>
      </TouchableOpacity>
    </View>
  );
}
