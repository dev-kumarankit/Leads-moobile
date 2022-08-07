import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native";

export default function AnimateEffect(props) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isTop, setIsTop] = useState(true);

  const startAnimation = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      // setIsTop(!isTop);
    });
  };

  useEffect(() => {
    startAnimation(isTop ? 1 : 0);
  }, [isTop]);

  const translateY = animatedValue.interpolate({
    inputRange: props.inputRange,
    outputRange: props.outputRange,
    extrapolate: "identity",
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        width: "100%",
        alignItems: props.userBox ? "stretch" : "center",
      }}
    >
      {props.children}
    </Animated.View>
  );
}
