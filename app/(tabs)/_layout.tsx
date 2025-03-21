import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "grey",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
