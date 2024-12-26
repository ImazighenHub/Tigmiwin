import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const ProfileIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Circle cx="256" cy="128" r="128" />
    <Path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
  </Svg>
);

export default ProfileIcon;
