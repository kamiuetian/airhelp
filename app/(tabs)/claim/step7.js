import React, { useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { setDocumentFile } from "../../../redux/features/claimslice";
import { useRouter } from "expo-router";

const UploadDocumentScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      dispatch(setDocumentFile(result.uri)); // Save the file in Redux
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      dispatch(setDocumentFile(result.uri)); // Save the file in Redux
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-lg font-semibold mb-4 text-gray-700">
        To submit a claim against Aer Lingus we need just a few documents:
      </Text>

      {/* Placeholder for uploaded image or a document icon */}
      <View className="flex items-center justify-center mb-6">
        {image ? (
          <Image source={{ uri: image }} className="w-48 h-48 rounded-lg" />
        ) : (
          <View className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center">
            <Text className="text-gray-400">No document selected</Text>
          </View>
        )}
      </View>

      <Text className="text-sm text-gray-600 text-center mb-8">
        Booking confirmation email or boarding pass or any other document
        confirming your ticket reservation
      </Text>

      <View className="flex flex-row justify-around items-center">
        <TouchableOpacity
          onPress={takePhoto}
          className="flex-1 items-center justify-center border border-gray-300 p-4 rounded-lg mx-2 bg-white shadow-sm"
        >
          <Text className="text-gray-600">Take photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pickImage}
          className="flex-1 items-center justify-center border border-gray-300 p-4 rounded-lg mx-2 bg-white shadow-sm"
        >
          <Text className="text-gray-600">Select files</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/claim/step8")}
        className={`p-4 rounded-full mb-8 mt-4 bg-green-500`}
      >
        <Text className="text-center text-black">Submit your Claim</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UploadDocumentScreen;
