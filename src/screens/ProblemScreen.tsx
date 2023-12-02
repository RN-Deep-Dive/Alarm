import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MainBtn from "../components/atoms/MainBtn";
import { colors } from "../constants/colors";
import StyledText from "../components/atoms/StyledText";

const ProblemScreen: React.FC<
  NativeStackScreenProps<any, "ProblemScreen">
> = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MainBtn
        text={"비상 탈출 버튼"}
        onPress={() => {}}
        subText={"1/299회 누름"}
        color="red"
      />
      <StyledText
        text={"hello"}
        fontSize="md"
        color={colors.textDim}
        onPress={() => {}}
      />
    </View>
  );
};

export default ProblemScreen;
