import React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "LyonJS",
          tabBarIcon: (props) => <Text>🦁</Text>,
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Membres",
          tabBarIcon: (props) => <Text>🍻</Text>,
        }}
      />
    </Tabs>
  );
}
