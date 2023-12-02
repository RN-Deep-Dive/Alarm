// CustomText.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type FontSize = 10 | 20 | 30;

interface StyledTextProps {
  text: string;
  fontSize: FontSize;
  color: string;
  isBold: boolean;
  onPress: () => void;
}

const StyledText: React.FC<StyledTextProps> = ({ text, fontSize, color, isBold, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ 
        fontSize: fontSize, 
        color: color,
        fontWeight: isBold ? 'bold' : 'normal',
        }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});

export default StyledText;
