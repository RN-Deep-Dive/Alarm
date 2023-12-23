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
    if (props.fontSize === "xs") {
      return `${spacing.xs}px`;
    } else if (props.fontSize === "md") {
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

type FontSize = "xs" | "md" | "lg";

interface StyledTextProps {
  text?: string;
  fontSize?: FontSize;
  color?: string;
  isBold?: boolean;
  onPress?: () => void;
}

/**
 * @param {string} text - 표시할 텍스트.
 * @param {FontSize} fontSize - 텍스트의 폰트 크기 ('md', 'lg' 중 하나).
 * @param {string} color - 텍스트의 색상.
 * @param {boolean} isBold - 텍스트를 굵게 할지 여부.
 * @param {Function} onPress - 텍스트를 눌렀을 때 실행할 함수.
 */

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
