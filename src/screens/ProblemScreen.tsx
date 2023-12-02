import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MainBtn from "../components/atoms/MainBtn";
import { colors } from "../constants/colors";
import { FloatingBtn } from "../components/atoms/FloatingBtn";

const ProblemScreen: React.FC<
  NativeStackScreenProps<any, "ProblemScreen">
> = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", position: "relative" }}>
      <MainBtn
        text={"비상 탈출 버튼"}
        onPress={() => { }}
        subText={"1/299회 누름"}
        color="red"
      />
      <Text>ProblemScreen</Text>
      <FloatingBtn onPress={() => console.log('hello')} iconName="plus" iconSize={15} />
    </View>
  );
};

export default ProblemScreen;
