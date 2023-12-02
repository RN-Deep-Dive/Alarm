import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EditBtn } from "../components/atoms/EditBtn";
import { CheckBtn } from "../components/atoms/CheckBtn";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AlarmScreen: React.FC<NativeStackScreenProps<any, "AlarmScreen">> = ({
  navigation: { navigate },
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const onPress = () => {};
  return (
    <>
    <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
      <Text>AlarmScreen</Text>
    </Btn>
    <CheckBtn />
    <EditBtn name="clipboard" onPress={onPress}></EditBtn>
    </>
  );
};

export default AlarmScreen;
