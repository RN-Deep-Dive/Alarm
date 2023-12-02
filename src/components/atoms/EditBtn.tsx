import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export type IconName = string;

export const EditBtn:React.FC<{
   name: IconName;
   onPress: () => void;
}> = props => {
  return (
    <Ionicons name={props.name} onPress={props.onPress} size={30} />
  )
};