import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { spacing } from "../../constants/spacing";

const getFontSize = (fontSize) => {
  switch (fontSize) {
    case "xs":
      return `${spacing.xs}px`;
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

type FontSize = "xs" | "md" | "lg" | "header";

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
