// CustomText.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { spacing } from "../../constants/spacing";
import styled from "styled-components/native";

const SText = styled.Text`
  font-size: ${(props) => {
    if (props.fontSize === "md") {
      return `${spacing.md}px`;
    } else if (props.fontSize === "lg") {
      return `${spacing.lg}px`;
    } else {
      return `${props.fontSize}px`;
    }
  }};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;

type FontSize = "md" | "lg";

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
  color,
  isBold,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <SText fontSize={fontSize} color={color} isBold={isBold}>
        {text}
      </SText>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});

export default StyledText;
