import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Container from "../components/atoms/Container";
import MainPageHeader from "../components/molecules/MainPageHeader";
import { FloatingBtn } from "../components/atoms/FloatingBtn";

const AlarmScreen: React.FC<NativeStackScreenProps<any, "AlarmScreen">> = ({
  navigation,
}) => {
  return (
    <Container>
      <MainPageHeader title="Alarm List" />
      {/* 여기에 body 추가 */}
      <FloatingBtn
        onPress={() => navigation.navigate("CreateAlarm")}
        iconName="plus"
        iconSize={15}
      />
    </Container>
  );
};

export default AlarmScreen;
