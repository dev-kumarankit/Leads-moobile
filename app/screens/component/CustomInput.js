import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { INPUTSTYLE } from "../../style/theme";

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  ktype,
  lines,
  widthCheck,
  editable,
  icon,
  marginBottom,
  borderRadius,
}) {
  // // console.log(ktype, "type");
  // const NumOfLines = () => {
  //   if (lines) {
  //     return true;
  //   }
  //   return false;
  // };
  return (
    <View
      style={[
        styles.searchSection,
        marginBottom ? { marginBottom: marginBottom } : { marginBottom: 0 },
        borderRadius ? { borderRadius: borderRadius } : { borderRadius: 0 },
        INPUTSTYLE
      ]}
    >
      <View style={{ paddingRight: 10 }}>{icon}</View>
      <TextInput
        keyboardType={ktype ? "numeric" : "default"}
        style={[
          styles.input,
          widthCheck ? { width: widthCheck } : { width: "auto" }
        ]}
        placeholder={placeholder}
        multiline={lines ? true : false}
        value={value}
        // editable={editable ? true : false}
        numberOfLines={lines ? lines : 1}
        onChangeText={
          ktype
            ? (e) => {
                setValue(e.replace(/[^0-9]/g, ""));
              }
            : setValue
        }
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    //alignContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderColor: "#9f9f9f",
    padding: 5,
  },

  input: {
    paddingLeft: 2,
    paddingRight: 2,
    flex: 1,
    fontSize: 17
   },
});
