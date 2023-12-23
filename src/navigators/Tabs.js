import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlarmScreen from "../screens/AlarmScreen";
import ProblemScreen from "../screens/ProblemScreen";
import ShopScreen from "../screens/ShopScreen";
import { colors } from "../constants/colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useHeight from "../utils/useHeight";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  const { NOTCH_BOTTOM } = useHeight();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.textDim,
        tabBarStyle: {
          backgroundColor: isDark ? "black" : "white",
          height: 60 + NOTCH_BOTTOM,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginTop: -5,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Alarm"
        component={AlarmScreen}
        options={{
          tabBarLabel: "알람",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="alarm" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Problem"
        component={ProblemScreen}
        options={{
          tabBarLabel: "문제",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: "문제샵",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
