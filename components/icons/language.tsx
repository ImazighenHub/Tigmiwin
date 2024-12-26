import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "react-native-svg/src/elements/Svg";

const LanguageIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path d="M19,4h-.101c-.465-2.279-2.484-4-4.899-4H5C2.243,0,0,2.243,0,5v12.855c-.054,1.663,1.984,2.755,3.339,1.787l2.967-1.978c.69,1.937,2.523,3.336,4.694,3.336h5.697l3.963,2.642c1.356,.967,3.393-.124,3.34-1.787V9c0-2.757-2.243-5-5-5ZM2.229,17.978c-.05,.079-.268-.039-.229-.123V5c0-1.654,1.346-3,3-3H14c1.654,0,3,1.346,3,3v7c0,1.654-1.346,3-3,3H7c-.198-.001-.383,.078-.555,.168l-4.216,2.81Zm19.771,3.877c.039,.086-.183,.203-.23,.123l-4.215-2.81c-.164-.109-.357-.168-.555-.168h-6c-1.302,0-2.402-.839-2.816-2h5.816c2.757,0,5-2.243,5-5V6c1.654,0,3,1.346,3,3v12.855ZM7.7,12h-1.7c-.552,0-1-.448-1-1V6c0-.552,.448-1,1-1h1.7c.442,0,.8,.358,.8,.8s-.358,.8-.8,.8h-1.101v1.101h1.101c.442,0,.8,.358,.8,.8s-.358,.8-.8,.8h-1.101v1.101h1.101c.442,0,.8,.358,.8,.8s-.358,.8-.8,.8Zm1.8-.747V5.914c0-.505,.409-.914,.914-.914,.354,0,.675,.204,.827,.524l1.433,3.031v-2.808c0-.412,.334-.747,.747-.747s.747,.334,.747,.747v5.339c0,.505-.409,.914-.914,.914h0c-.353,0-.675-.204-.826-.523l-1.432-3.025v2.801c0,.412-.334,.747-.747,.747s-.747-.334-.747-.747Z" />
  </Svg>
);

export default LanguageIcon;