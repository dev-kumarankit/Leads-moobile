import React from "react";
import { View, Text } from "react-native";
const SingleUserChannel = (props) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", marginBottom: 2 }}>
      <Text style={{ color: "#A7A7A7" }}>{props.number}</Text>
      <Text style={{ marginLeft: 5 }}>{props.name}</Text>
    </View>
  );
};
export default SingleUserChannel;
