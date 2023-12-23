import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import StyledText from "../components/atoms/StyledText";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AlarmScreen: React.FC<NativeStackScreenProps<any, "AlarmScreen">> = ({
  navigation: { navigate },
}) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Text>AlarmScreen</Text>
    </Btn>
  );
};

export default AlarmScreen;
