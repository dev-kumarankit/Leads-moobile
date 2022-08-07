import * as React from "react";
import { View } from "react-native";
import Svg, { Path, Rect, Defs, Stop, LinearGradient } from "react-native-svg";
export default function Background() {
    return (
//       <View style={{
//      position: 'absolute',
//      top: 0,
//      left: 0,
//      right: 16,
//      bottom: 0,
//    }}>
        <Svg width="428" height="930" viewBox="0 0 428 930" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="428" height="930" fill="#7CCEFC" />
            <Rect width="428" height="930" fill="url(#paint0_linear_10_11)" />
            <Defs>
                <LinearGradient id="paint0_linear_10_11" x1="0" y1="0" x2="428" y2="930" gradientUnits="userSpaceOnUse">
                    <Stop stop-color="#46FFBC" />
                    <Stop offset="1" stop-color="#711AFF" />
                </LinearGradient>
            </Defs>
        </Svg>

    )
}