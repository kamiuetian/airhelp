import { Tabs } from "expo-router";
import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { MaterialIcons } from "@expo/vector-icons";
NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="claim"
        options={{
          title: "Claim",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="flight-takeoff" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
