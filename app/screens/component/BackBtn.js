import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Text } from "react-native";
export default function BackBtn({
  navigation,
  text,
  paddingLeft,
  paddingright,
  paddingTop,
  paddingBottom,
  specificnavigation,
}) {
  // console.log(specificnavigation, "specificnavigation");
  // console.log(`LeadTab${specificnavigation}`);
  const btnGoBAck = () => {
    // console.log("noooo");
    // console.log(specificnavigation, "specificnavigation");
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: paddingLeft ? paddingLeft : 0,
        paddingright: paddingright ? paddingright : 0,
        paddingTop: paddingTop ? paddingTop : 0,
        paddingBottom: paddingBottom ? paddingBottom : 0,
        justifyContent: "center",
      }}
    >
      <Pressable
        onPress={btnGoBAck}
        style={{ position: "absolute", left: 20, bottom: 0 }}
      >
        <Ionicons
          name="ios-chevron-back-circle-outline"
          size={30}
          color="white"
        />
      </Pressable>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          position: "relative",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {text}
      </Text>
    </View>
  );
}
