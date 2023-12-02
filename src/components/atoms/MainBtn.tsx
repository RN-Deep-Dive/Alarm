import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { colors } from "../../constants/colors";

const Btn = styled.TouchableOpacity`
  background-color: ${(props) => {
    if (props.color === "red") {
      return colors.errorBackground;
    } else if (props.color === "blue") {
      return colors.blue;
    } else if (props.color === "gray") {
      return colors.btnGray;
    } else if (props.color === "inactiveBlue") {
      return colors.inactiveBlue;
    }
  }};
  border-radius: 10px;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

type Color = "red" | "blue" | "gray" | "inactiveBlue";

interface MainBtnProps {
  text?: string;
  fontSize?: number;
  color?: Color;
  onPress: () => void;
  subText?: string;
}

const MainBtn: React.FC<MainBtnProps> = ({
  text = "버튼",
  fontSize = 20,
  color = "blue",
  onPress,
  subText = "",
}) => {
  return (
    <Btn onPress={onPress} color={color}>
      <Text style={{ fontSize: fontSize, color: "white", fontWeight: "900" }}>
        {text}
      </Text>
      {subText.length > 0 && (
        <Text style={{ fontSize: 12, color: "white", fontWeight: "900" }}>
          {subText}
        </Text>
      )}
    </Btn>
  );
};

export default MainBtn;
