import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
export default function CustomButton({
  onPress,
  icon,
  text,
  disabled,
  paddingBottom1,
  fontColor,
  btnNormal,
  backgroundColor,
  fontSze,
  marginRight,
  marginTop,
  marginBottom,
}) {
  return (
    <View
      style={{
        marginTop: marginTop ? marginTop : 0,
        marginBottom: marginBottom ? marginBottom : 0,
        marginRight: marginRight ? marginRight : 0,
        paddingBottom: paddingBottom1 ? paddingBottom1 : 0,
        padding: 0,
      }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          !btnNormal
            ? {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 30,
              }
            : {
                justifyContent: "center",
                alignItems: "center",
              },
          backgroundColor
            ? { backgroundColor: backgroundColor }
            : { backgroundColor: "white" },
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text
          style={{
            color: fontColor ? fontColor : "black",
            fontSize: fontSze ? fontSze : 18,
            fontWeight: "bold",
          }}
        >
          {text}
        </Text>
        {icon}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 50,
    shadowColor: "#000",

    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});
