import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const LogoutBoldIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={512} height={512} {...props}>
    <Path d="M11.5,16A1.5,1.5,0,0,0,10,17.5v.8A2.7,2.7,0,0,1,7.3,21H5.7A2.7,2.7,0,0,1,3,18.3V5.7A2.7,2.7,0,0,1,5.7,3H7.3A2.7,2.7,0,0,1,10,5.7v.8a1.5,1.5,0,0,0,3,0V5.7A5.706,5.706,0,0,0,7.3,0H5.7A5.706,5.706,0,0,0,0,5.7V18.3A5.706,5.706,0,0,0,5.7,24H7.3A5.706,5.706,0,0,0,13,18.3v-.8A1.5,1.5,0,0,0,11.5,16Z" />
    <Path d="M22.561,9.525,17.975,4.939a1.5,1.5,0,0,0-2.121,2.122l3.411,3.411L7,10.5a1.5,1.5,0,0,0,0,3H7l12.318-.028-3.467,3.467a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,22.561,9.525Z" />
  </Svg>
);

export default LogoutBoldIcon;