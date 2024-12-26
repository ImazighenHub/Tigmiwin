import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const ShieldIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M19,24H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5Z" />
  </Svg>
);

export default ShieldIcon;
