import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  ToastAndroid,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { forgetData, reset } from "../../Store/reducer/loginSlice";
import CompanyLogo from "../component/CompanyLogo";
import LoaderScreen from "../component/LoaderScreen";
import CustomInput from "../component/CustomInput";
import CustomButton from "../component/CustomButton";
import {
  CENTER,
  FONTSIZE18,
  PADDINGB2,
  PADDINGT2,
  WHITECOLOR,
} from "../../style/theme";

import LinearGrad from "../component/LinearGrad";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import androidNotification from "../component/androidNotification";
export default function ForgetPasswordTab({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const { isSuccess, isLoading, isError, forgetPassword } = useSelector(
    (state) => state.auth
  );
  let userdata = {
    email: email,
  };
  // console.log("forgetPassword?.data?.data?.msg", forgetPassword?.data);
  // console.log("isError", isError);
  const submit = () => {
    if (!email || email.length < 8) {
      androidNotification("Please Enter the  Email");
      return false;
    } else {
      dispatch(forgetData(userdata));
      setCheck(true);
    }
  };
  // console.log("check", check);
  if (isSuccess && check) {
    androidNotification("Please Check your Email for further instructions");
    setCheck(false);
  }

  if (isError && check) {
    androidNotification("Email Not Found");
    setCheck(false);
  }
  if (isLoading) return <LoaderScreen />;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent />

      <LinearGrad color={["#46FFBC", "#711AFF"]} end={{ x: 0.1, y: 0 }}>
        <View style={[loginStyle.image, loginStyle.center]}>
          <CompanyLogo />
        </View>

        <View
          style={{
            padding: 20,
            paddingTop: 30,
            paddingBottom: 90,
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            margin: 18,
          }}
        >
          <View style={[CENTER, { marginBottom: 40 }]}>
            <Text style={[FONTSIZE18, PADDINGB2]}>Forgot Password</Text>
            <Text style={[PADDINGT2, PADDINGB2]}>
              Enter Your Email and Select Send Email
            </Text>
          </View>
          <CustomInput
            placeholder="Enter E-mail Address"
            value={email}
            setValue={setEmail}
            borderRadius={5}
            icon={<MaterialIcons name="email" size={18} color="#bcbcbc" />}
          />

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
              text="Send Email"
              btnNormal={true}
              fontColor="white"
              backgroundColor="#000000"
            />
          </View>
        </View>
      </LinearGrad>
    </View>
  );
}

const loginStyle = StyleSheet.create({
  image1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
    color: "#A7A7A7",
  },
});
