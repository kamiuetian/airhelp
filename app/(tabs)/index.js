import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

import { useDispatch, useSelector } from "react-redux";
import {
  setDepartureAirport,
  setDestinationAirport,
} from "../../redux/features/claimslice";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const departureAirport = useSelector((state) => state.claim.departureAirport);
  const destinationAirport = useSelector(
    (state) => state.claim.destinationAirport
  );
  const handleCheckCompensation = () => {
    // Navigate to the claim/index screen
    router.push("/claim");
  };
  return (
    <ScrollView className="flex-1 bg-slate-200 p-4 ">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Image
          source={require("../../assets/images/react-logo.png")}
          className="h-10 w-24"
        />
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_Kingdom.svg",
            }}
            className="h-5 w-5"
          />
          <Link href={"/login"}>
            <Text className="text-blue-600">Login</Text>
          </Link>
        </View>
      </View>

      {/* Trustpilot Rating */}
      <View className="mt-6">
        <Text className="text-sm text-green-600 font-bold">Excellent</Text>
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Star_rating_4_of_5.png/640px-Star_rating_4_of_5.png",
            }}
            className="h-4 w-20"
          />
          <Text className="text-xs text-gray-600 ml-2">191,696 reviews on</Text>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Trustpilot_logo.png/640px-Trustpilot_logo.png",
            }}
            className="h-4 w-16 ml-1"
          />
        </View>
      </View>

      {/* Title */}
      <Text className="mt-6 text-2xl font-bold text-blue-900">
        Did you have a delayed or cancelled flight?
      </Text>

      {/* Subtitle */}
      <Text className="mt-4 text-base text-gray-700">
        Get up to <Text className="font-bold">£520 compensation</Text> per
        passenger, no matter the ticket price. No win, no fee!
      </Text>

      {/* Form Inputs */}
      <View className="mt-6 space-y-4">
        <TextInput
          placeholder="Departure airport"
          value={departureAirport}
          onChangeText={(text) => dispatch(setDepartureAirport(text))}
          className="border rounded-lg p-4 text-gray-600"
        />
        <TextInput
          placeholder="Final destination airport"
          value={destinationAirport}
          onChangeText={(text) => dispatch(setDestinationAirport(text))}
          className="border rounded-lg p-4 text-gray-600"
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        disabled={!departureAirport || !destinationAirport}
        onPress={handleCheckCompensation}
        className="mt-6 bg-red-500 rounded-full py-4"
      >
        <Text className="text-center text-white font-bold text-lg">
          Check Compensation
        </Text>
      </TouchableOpacity>

      {/* Statistics Section */}
      <View className="mt-10">
        <Text className="text-sm text-blue-600 font-bold mb-4">
          EXPERTS IN AIR PASSENGER RIGHTS
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-blue-900">
              2.3+ million
            </Text>
            <Text className="text-gray-600 text-sm">people compensated</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-blue-900">
              180+ million
            </Text>
            <Text className="text-gray-600 text-sm">flights checked</Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-4">
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-blue-900">11+ years</Text>
            <Text className="text-gray-600 text-sm">in business</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-blue-900">138,000+</Text>
            <Text className="text-gray-600 text-sm">5-star reviews</Text>
          </View>
        </View>
      </View>

      {/* Regulations Section */}
      <View className="mt-10 bg-gray-100 p-6 rounded-lg">
        <Text className="text-sm text-blue-600 font-bold mb-4">
          AIRHELP PROTECTS AIR PASSENGER RIGHTS
        </Text>
        <View className="space-y-4">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png",
              }}
              className="h-5 w-8"
            />
            <Text className="ml-2 text-gray-700">UK REGULATIONS</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png",
              }}
              className="h-5 w-8"
            />
            <Text className="ml-2 text-gray-700">EU REGULATION EC 261</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Montreal_Convention.png/640px-Montreal_Convention.png",
              }}
              className="h-5 w-8"
            />
            <Text className="ml-2 text-gray-700">MONTREAL CONVENTION</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/640px-Flag_of_Turkey.svg.png",
              }}
              className="h-5 w-8"
            />
            <Text className="ml-2 text-gray-700">TURKISH REGULATIONS</Text>
          </View>
        </View>
      </View>
      <View className="bg-white p-4 rounded-lg mt-4 shadow-md">
        <Text className="text-blue-700 font-semibold text-lg mb-4">
          WHY CHOOSE AIRHELP?
        </Text>
        <Text className="text-gray-900 font-bold text-2xl mb-6">
          What makes us Nº 1
        </Text>

        <View className="space-y-4">
          <View className="flex-row items-center bg-blue-50 p-4 rounded-full">
            <View className="bg-white p-2 rounded-full mr-4">
              {/* Replace with appropriate icon */}
              <Text>🏆</Text>
            </View>
            <Text className="text-gray-900 font-medium">World experts</Text>
          </View>

          <View className="flex-row items-center bg-blue-50 p-4 rounded-full">
            <View className="bg-white p-2 rounded-full mr-4">
              {/* Replace with appropriate icon */}
              <Text>💡</Text>
            </View>
            <Text className="text-gray-900 font-medium">Cutting-edge tech</Text>
          </View>

          <View className="flex-row items-center bg-blue-50 p-4 rounded-full">
            <View className="bg-white p-2 rounded-full mr-4">
              {/* Replace with appropriate icon */}
              <Text>👥</Text>
            </View>
            <Text className="text-gray-900 font-medium">
              11+ years in business
            </Text>
          </View>

          <View className="flex-row items-center bg-blue-50 p-4 rounded-full">
            <View className="bg-white p-2 rounded-full mr-4">
              {/* Replace with appropriate icon */}
              <Text>✔️</Text>
            </View>
            <Text className="text-gray-900 font-medium">
              Free compensation check
            </Text>
          </View>
        </View>

        <Text className="text-gray-500 text-center mt-6">
          Even more solutions{" "}
          <Text className="text-blue-700 font-bold">AirHelp+</Text>
        </Text>
      </View>
      <View className="mb-4">
        <Text className="text-xs text-blue-500 mb-2">WHY CHOOSE AIRHELP?</Text>
        <Text className="text-2xl font-bold text-blue-900 mb-4">
          We solve more flight problems
        </Text>
        <Text className="text-base text-gray-700">
          As the world’s largest flight compensation company, we work across
          more countries, and can help in more situations than anyone else.
        </Text>
      </View>
      {/* Horizontal Scrollable Cards */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        <View className="bg-white rounded-lg p-4 shadow-md border-s-fuchsia-400 w-64">
          <MaterialIcons
            name="cancel"
            className="h-6 w-6 mb-4"
            size={24}
            color="red"
          />

          <Text className="text-lg font-bold text-blue-900 mb-2">
            Cancelled flights
          </Text>
          <Text className="text-sm text-gray-700">
            Flight cancelled with little notice? You could be entitled to up to
            £520 compensation on top of your refund.
          </Text>
        </View>

        <View className="bg-white rounded-lg p-4 shadow-black w-64">
          <MaterialIcons
            name="hourglass-empty"
            size={24}
            color="orange"
            className="h-6 w-6 mb-4"
          />
          <Text className="text-lg font-bold text-blue-900 mb-2">
            Delayed flights
          </Text>
          <Text className="text-sm text-gray-700">
            If your flight is delayed by more than 3 hours, you could claim up
            to £520 in compensation.
          </Text>
        </View>
        <View className="bg-white rounded-lg p-4 shadow-md w-64">
          <MaterialIcons
            name="flight"
            size={24}
            color="blue"
            className="h-6 w-6 mb-4"
          />
          <Text className="text-lg font-bold text-blue-900 mb-2">
            Missed Connections
          </Text>
          <Text className="text-sm text-gray-700">
            Claim compensation if you landed at your final destination over 3
            hours late through no fault of your own.
          </Text>
        </View>
        <View className="bg-white rounded-lg p-4 shadow-md w-64">
          <MaterialIcons
            name="report-problem"
            size={24}
            color="purple"
            className="h-6 w-6 mb-4"
          />
          <Text className="text-lg font-bold text-blue-900 mb-2">
            Uncooperative airlines
          </Text>
          <Text className="text-sm text-gray-700">
            Airline ignoring or rejecting your claim? We independently check
            claim validity and hold airlines to account.
          </Text>
        </View>
      </ScrollView>
      <View className="pb-8" />
    </ScrollView>
  );
}
