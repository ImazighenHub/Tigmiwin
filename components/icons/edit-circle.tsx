import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const EditCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path d="m13.75,11.664l-3.457,3.457c-.559.559-1.332.879-2.121.879h-.172v-.172c0-.789.32-1.562.879-2.121l3.457-3.457,1.414,1.414Zm1.043-3.871l-1.043,1.043,1.414,1.414,1.043-1.043c.39-.39.39-1.024,0-1.414s-1.023-.391-1.414,0Zm9.207,4.207c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6.379-5.621c-1.17-1.17-3.072-1.17-4.242,0l-5.914,5.914c-.944.944-1.465,2.2-1.465,3.535v1.172c0,.553.447,1,1,1h1.172c1.335,0,2.591-.521,3.535-1.465l5.914-5.914c1.17-1.17,1.17-3.072,0-4.242Z" />
  </Svg>
);

export default EditCircleIcon;
