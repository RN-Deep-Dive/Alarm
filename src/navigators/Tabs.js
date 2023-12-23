import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native";
import { colors } from "../constants/colors";
import ShopScreen from "../screens/ShopScreen";
import useHeight from "../utils/useHeight";
import AlarmStack from "./AlarmStack";
import ProblemStack from "./ProblemStack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  const { NOTCH_BOTTOM } = useHeight();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
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
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="AlarmStack"
        component={AlarmStack}
        options={{
          tabBarLabel: "알람",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="alarm" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProblemStack"
        component={ProblemStack}
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
