import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"
import FlexBox from "../atoms/FlexBox"
import StyledText from "../atoms/StyledText"
import { Shadow } from "react-native-shadow-2";

interface ProblemSetProps {
  title?: string;
  desc?: string;
  owner?: string;
  onPress?: () => void;
}

const ProblemSet: React.FC<ProblemSetProps> = ({
  title, desc, owner, onPress
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.problemSetBox}
    >
      <FlexBox
        direction="row"
        justifyContent="space-between"
      >
        <View
          style={{flex: 1}}
        >
          <StyledText
            text={title}
            fontSize="lg"
            color="black"
          />
          <StyledText
            text={desc}
            fontSize="md"
            color="grey"
          />
        </View>
        {/* 문제 제작자 정보 */}
        <View
          style={styles.ownerBox}
        >
          <StyledText
            text={`제작자: ${owner === undefined ? '나' : owner}`}
            fontSize="xs"
            color="black"
          />
        </View>
      </FlexBox>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  problemSetBox: {
    width: "100%",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 0.5,
  },
  ownerBox: {
    width: 50,
    marginLeft: 10,
  }
})

export default ProblemSet;