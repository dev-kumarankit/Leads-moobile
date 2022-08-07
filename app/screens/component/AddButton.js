import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, Pressable } from "react-native";
import { ADDBTNSTYLE } from "../../style/theme";
import CustomButton from "./CustomButton";
export default function AddButton({ ...props }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(props.routetext)}
      style={ADDBTNSTYLE}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
