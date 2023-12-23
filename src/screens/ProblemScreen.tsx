import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Container from "../components/atoms/Container";
import { FloatingBtn } from "../components/atoms/FloatingBtn";
import ProblemSet from "../components/molecules/ProblemSet";
import MainPageHeader from "../components/molecules/MainPageHeader";

const ProblemScreen: React.FC<NativeStackScreenProps<any, "ProblemScreen">> = ({
  navigation,
}) => {
  return (
    <Container>
      <MainPageHeader title="Problem Set" />
      <FloatingBtn
        onPress={() => navigation.navigate("CreateProblem")}
        iconName="plus"
        iconSize={15}
      />
      <ProblemSet
        title='hello'
        desc='hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha'
        onPress={() => console.log('hello')}
      />
    </Container>
  );
};

export default ProblemScreen;
