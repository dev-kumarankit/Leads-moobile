import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function CalenderLogo(props) {

  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4ZM19.002 20H5V8H19L19.002 20Z"
        fill="#A5CD3A"
      />
      <Path
        d="M11 17.414L16.707 11.707L15.293 10.293L11 14.586L8.707 12.293L7.293 13.707L11 17.414Z"
        fill="#A5CD3A"
      />
    </Svg>
  );
}