import { LinearGradient } from "expo-linear-gradient";
import { CENTER } from "../../style/theme";
const LinearGrad = (props) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={props.color ? props.color : ["#46FFBC", "#711AFF"]}
      end={props.endPoint ? props.endPoint : ""}
      start={props.startPoint ? props.startPoint : ""}
      style={
        props.flex === "false"
          ? { flex: 1 }
          : { flex: 1, justifyContent: "center" }
      }
    >
      {props.children}
    </LinearGradient>
  );
};
export default LinearGrad;
