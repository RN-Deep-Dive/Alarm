import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { spacing } from "../../constants/spacing";

const getFontSize = (fontSize) => {
  switch (fontSize) {
    case "md":
      return `${spacing.md}px`;
    case "lg":
      return `${spacing.lg}px`;
    case "header":
      return `${spacing.xxxl}px`;
    default:
      return `${fontSize}px`;
  }
};

const SText = styled.Text`
  font-size: ${(props) => getFontSize(props.fontSize)};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;

type FontSize = "md" | "lg" | "header";

interface StyledTextProps {
  text?: string;
  fontSize?: FontSize;
  color?: string;
  isBold?: boolean;
  onPress?: () => void;
}

const StyledText: React.FC<StyledTextProps> = ({
  text,
  fontSize,
  color = "black",
  isBold,
  onPress,
}) =>
  onPress ? (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <SText fontSize={fontSize} color={color} isBold={isBold}>
        {text}
      </SText>
    </TouchableWithoutFeedback>
  ) : (
    <SText fontSize={fontSize} color={color} isBold={isBold}>
      {text}
    </SText>
  );

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});

export default StyledText;
