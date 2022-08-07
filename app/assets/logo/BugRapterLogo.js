import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function BugRapterLogo(props) {

  return (
    <Svg
      key="bug"
      width={props.width}
      height={props.height}
      viewBox="0 0 140 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.10477 0C1.10477 0 32.8532 42.1974 111.548 71.8151C111.548 71.8151 101.407 81.0403 101.083 108.319C101.083 108.319 126.746 117.698 132.155 117.698V122.642C132.155 122.642 140.944 130.079 139.916 134.493C139.916 134.493 131.127 127.872 125.394 127.321L134.508 134.493C134.508 134.493 124.718 132.838 117.633 130.079L105.815 128.159C105.815 128.159 113.928 144.976 118.661 148C118.661 148 94.6735 139.172 86.2361 81.5699C86.209 81.5699 -11.3891 64.7748 1.10477 0Z"
        fill="#EAEAEA"
      />
      <Path
        d="M4.91229 50C4.91229 50 31.228 71.3396 84.5351 87.4867C84.5351 87.4867 82.5087 105.825 97.0176 134C97.0176 134 80.3203 123.045 72.0527 99.252C72.0527 99.252 25.8244 97.061 4.91229 50Z"
        fill="#EEF234"
      />
      <Path
        d="M27.0175 90C27.0175 90 31.3822 111.652 64.3596 112.736L79.8245 126L66.03 102.722C66.057 102.722 54.2832 102.983 27.0175 90Z"
        fill="#EAEAEA"
      />
    </Svg>
  );
}