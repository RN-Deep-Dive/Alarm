import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../constants/colors'
import DropShadow from "react-native-drop-shadow";

const FloatingView = styled.View`
  position: absolute;
  bottom: 20px;
  right: 30px;
`
const CircleBtn = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${colors.blue};
  align-items: center;
  justify-content: center;
`

type IconName = "plus" | "upload";

interface FloatingBtnProps {
  onPress?: () => void;
  iconName?: IconName // string으로 하면 안 됨
  iconSize?: number;
}

export const FloatingBtn: React.FC<FloatingBtnProps> = ({ onPress, iconName, iconSize }) => {
  return (
    <FloatingView>
    <DropShadow
      style={{
        shadowColor: colors.shadow,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
      }}
    >
      <CircleBtn
        onPress={onPress}
      >
        <AntDesign name={iconName} size={iconSize} color="white" />
      </CircleBtn>
    </DropShadow>
    </FloatingView>
  )
}