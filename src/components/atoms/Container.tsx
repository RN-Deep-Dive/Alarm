import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { spacing } from "../../constants/spacing";

const SContainer = styled.View`
  padding: ${spacing.offset}px ${spacing.gutter}px;
  flex: 1;
`;

const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
