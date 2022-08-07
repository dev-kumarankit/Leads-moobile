import { Text, StyleSheet } from "react-native";
import {
  ACTIVE,
  NEWCOLOR,
  COMPLETED,
  DEAD,
  STATUS,
  COLD,
  jUNK,
} from "../../style/theme";
export default function BtnStatus(props) {
  return (
    <Text
      style={[
        STATUS,
        props.status === "warm"
          ? ACTIVE
          : props.status === "new"
          ? NEWCOLOR
          : props.status === "awarded"
          ? COMPLETED
          : props.status === "cold"
          ? COLD
          : props.status === "junk"
          ? jUNK
          : DEAD,
      ]}
    >
      {props.status}
    </Text>
  );
}
