import React from "react";
import useHeight from "../../utils/useHeight";
import FlexBox from "../atoms/FlexBox";
import Icons from "../atoms/Icons";
import StyledText from "../atoms/StyledText";

const MainPageHeader = ({
  title,
  editMode = false,
}: {
  title: string;
  editMode?: boolean;
}) => {
  const { NOTCH_TOP } = useHeight();
  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      styles={{ paddingTop: NOTCH_TOP }}
    >
      <StyledText text={title} fontSize="header" />
      {!editMode ? <Icons type="feather" name="edit" size={30} /> : null}
    </FlexBox>
  );
};

export default MainPageHeader;
