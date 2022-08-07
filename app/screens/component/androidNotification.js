import { Platform, ToastAndroid } from "react-native";

export default function androidNotification(props) {
  if (Platform.OS === "android") {
    ToastAndroid.show(props, ToastAndroid.SHORT);
  }
}
