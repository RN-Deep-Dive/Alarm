import React, {useState} from 'react'
import Checkbox from 'expo-checkbox';
import {colors} from '../../constants/colors';

export const CheckBtn:React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  return (
    <Checkbox
    disabled={false}
    color={toggleCheckBox? colors.palette.blue : colors.palette.gray}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  )
}