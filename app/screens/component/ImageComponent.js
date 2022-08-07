import { Image, View } from "react-native";
import { USERIMAGE, CENTER, ROUND } from "../../style/theme";
export default function ImageComponent({ url }) {
  return (
    <View style={CENTER}>
      <Image style={[USERIMAGE, ROUND]} source={url} />
    </View>
  );
}
