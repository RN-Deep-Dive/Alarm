import { View, Text, Alert } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import StyledText from "../components/atoms/StyledText";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const handleTextClick = () => {
  Alert.alert('Text Clicked!', 'You clicked the text!');
};

const AlarmScreen: React.FC<NativeStackScreenProps<any, "AlarmScreen">> = ({
  navigation: { navigate },
}) => {
  return (
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Text>AlarmScreen</Text>
      <StyledText text="Click me!" fontSize={10} color="blue" isBold={true} onPress={handleTextClick}></StyledText>
    </Btn>
  );
};

export default AlarmScreen;
