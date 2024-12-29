import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const AngleRightIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={512} height={512} {...props}>
    <Path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z" />
  </Svg>
);

export default AngleRightIcon;
