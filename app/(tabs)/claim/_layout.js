import { Stack } from "expo-router";

export default function ClaimLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Flight itinerary" }} />
      <Stack.Screen name="step2" options={{ title: "Disruption details" }} />
    </Stack>
  );
}
