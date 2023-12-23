import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MainBtn from "../components/atoms/MainBtn";
import { colors } from "../constants/colors";
import StyledText from "../components/atoms/StyledText";
import { FloatingBtn } from "../components/atoms/FloatingBtn";
import ProblemSet from "../components/molecules/ProblemSet";

const ProblemScreen: React.FC<
  NativeStackScreenProps<any, "ProblemScreen">
> = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "relative" }}>
      <ProblemSet
        title='hello'
        desc='hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha'
        onPress={() => console.log('hello')}
      />
    </View>
  );
};

export default ProblemScreen;
