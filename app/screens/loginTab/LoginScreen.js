import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from "react-native";
import mainBg from "../../assets/background/mainBg.svg";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginData } from "../../Store/reducer/loginSlice";
import CompanyLogo from "../component/CompanyLogo";
import LoaderScreen from "../component/LoaderScreen";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Background from "../../assets/background/Background";
import { LinearGradient } from "expo-linear-gradient";
import LinearGrad from "../component/LinearGrad";
import { Animated, Easing } from "react-native";
import AnimateEffect from "../component/AnimateEffect";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const { isSuccess, isLoading, isError, user } = useSelector(
    (state) => state.auth
  );

  let userdata = {
    email: email,
    password: password,
  };
  if (user?.status == 400 && check) {
    if (Platform.OS === "android") {
      // dispatch(reset());
      ToastAndroid.show(
        "Please Enter Your Correct Email or Password",
        ToastAndroid.SHORT
      );
    }
    setCheck(false);
  }
  if (user?.status == 200 && check) {
    if (Platform.OS === "android") {
      // dispatch(reset());
      ToastAndroid.show("Welcome", ToastAndroid.SHORT);
    }
    setCheck(false);
  }
  const submit = () => {
    if (!password || password.length < 8 || !email || email.length < 8) {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Please Enter the Corrent Username or Password",
          ToastAndroid.LONG
        );
      }
      return false;
    } else {
      dispatch(loginData(userdata));
      setCheck(true);
    }
  };

  if (isLoading) return <LoaderScreen />;

  return (
    <LinearGrad color={["#46FFBC", "#711AFF"]} end={{ x: 0.1, y: 0 }}>
      <StatusBar backgroundColor="transparent" translucent />
      <AnimateEffect outputRange={[-150, 0]} inputRange={[0, 1]}>
        <View style={[loginStyle.image, loginStyle.center]}>
          <CompanyLogo />
        </View>
      </AnimateEffect>
      <AnimateEffect outputRange={[200, 0]} inputRange={[0, 1]}>
        <View
          style={{
            padding: 30,
            paddingTop: 50,
            paddingBottom: 90,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            margin: 18,
          }}
        >
          {/* <AnimateEffect toValue={-100}> */}
          <CustomInput
            placeholder="Enter Your Email"
            value={email}
            setValue={setEmail}
            borderRadius={5}
            icon={<MaterialIcons name="email" size={18} color="#bcbcbc" />}
          />
          {/* </AnimateEffect> */}
          <View style={{ paddingTop: 50 }}>
            <CustomInput
              placeholder="Enter Your Password"
              value={password}
              borderRadius={5}
              setValue={setpassword}
              secureTextEntry={true}
              icon={<FontAwesome5 name="key" size={18} color="#bcbcbc" />}
            />
          </View>

          <View
            style={{
              alignContent: "center",
              padding: 0,
              position: "absolute",
              bottom: -25,
              width: "100%",
            }}
          >
            <CustomButton
              onPress={submit}
              text="LOGIN"
              btnNormal={true}
              fontColor="white"
              backgroundColor="#000000"
            />
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity>
            <Text
              style={[loginStyle.forgot_button, { fontSize: 17 }]}
              onPress={() => navigation.navigate("forgetPassword")}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </AnimateEffect>
      {/* </Background> */}
    </LinearGrad>
  );
}

const loginStyle = StyleSheet.create({
  image1: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  blackButton: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4e4e4e",
  },
  loginText: {
    color: "white",
  },
  image: {
    marginBottom: 10,
  },
  center: {
    display: "flex",
    alignItems: "center",
  },
  forgot_button: {
    marginBottom: 10,
    color: "#b9b9b9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
});
