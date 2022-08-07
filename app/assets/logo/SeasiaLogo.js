import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function SeasiaLogo(props) {
  return (
    <Svg
      width={props.width ? props.width : 35}
      // viewBox="10 110"
      height={props.height ? props.height : 40}
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color ? props.color : "white"}
      className="logo"
    >
      <G>
        <Path
          id="svg_1"
          fill={props.color ? props.color : "white"}
          d="m0.76868,1.97656c7.47646,7.86124 18.63612,29.35614 3.46335,52.44524c10.55497,-8.521 24.63937,-30.9394 -3.46335,-52.44524z"
        />
        <Path
          id="svg_2"
          fill={props.color ? props.color : "white"}
          d="m31.6481,8.7461c-5.6087,8.6134 -13.1805,29.1253 1.4022,42.2657c-9.7485,-5.1413 -23.67678,-20.7923 -1.4022,-42.2657z"
        />
      </G>
    </Svg>
  );
}

