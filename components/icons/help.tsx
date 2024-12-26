import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const HelpIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M13.5,6.5a1.5,1.5,0,0,1-3,0A1.5,1.5,0,0,1,13.5,6.5ZM24,19V12.34A12.209,12.209,0,0,0,12.836.028,12,12,0,0,0,.029,12.854C.471,19.208,6.082,24,13.083,24H19A5.006,5.006,0,0,0,24,19ZM12.7,2.024A10.2,10.2,0,0,1,22,12.34V19a3,3,0,0,1-3,3H13.083C7.049,22,2.4,18.1,2.025,12.716A10,10,0,0,1,12.016,2C12.243,2,12.472,2.009,12.7,2.024ZM14,18V12a2,2,0,0,0-2-2H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0Z" />
  </Svg>
);

export default HelpIcon;
