import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { APPCOLOR, BOX, PROFILEBOX, ROW } from "../../style/theme";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";
import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  loginDataDetails,
  loginEditUser,
} from "../../Store/reducer/loginUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { passwordReset } from "../../Store/reducer/loginSlice";
import LinearGrad from "../component/LinearGrad";
import BackBtn from "../component/BackBtn";
export default function EditProfile({ navigation }) {
  const { isError, isSuccess, isLoading, loginuser } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(loginDataDetails());
  }, [navigation]);
  const imageUri = loginuser?.dataToken?.data?.image
    ?.split(`\/`)[1]
    .slice(`\"}"`, -2);
  const data = loginuser?.dataToken?.data;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(data?.email);
  const [name, setName] = useState(data?.name);
  const [image, setImage] = useState(imageUri);
  const [editBtn, setEditBtn] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(data?.phone_number);
  const dispatch = useDispatch();

  const updateBtn = async () => {
    // console.log(image, "image");
    // let formData = new FormData();
    // formData.append("image", image);
    // formData.append("name", name.trim());
    // formData.append("email", email.trim());
    // formData.append("phone_number", phoneNumber.trim());
    // await dispatch(loginEditUser(formData));
    // if (password) {
    //   dispatch(passwordReset(password));
    // }
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result, "result");
    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor={"#711AFF"}
      />

      {/* <CustomButton
        text={<Ionicons name="arrow-back" size={24} color="white" />}
        onPress={pickImage}
      /> */}

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGrad
          start={{ x: 0, y: 1 }}
          color={["#711AFF", "#46FFBC"]}
          flex={"false"}
        >
          <BackBtn
            text="Edit Profile"
            navigation={navigation}
            paddingLeft={20}
            paddingRight={20}
            paddingTop={20}
          />
          <View style={[PROFILEBOX, { marginTop: 30 }]}>
            {imageUri && (
              <Image
                source={{
                  uri: `https://stgphys.appsndevs.com/hrs/storage/app/public/image/${imageUri}`,
                }}
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              />
            )}
            <CustomInput
              placeholder="Enter Your Name"
              value={name}
              setValue={setName}
              marginBottom={20}
              borderRadius={0}
              icon={<Entypo name="user" size={18} color="#bcbcbc" />}
            />
            <CustomInput
              placeholder="Enter Your Email"
              value={email}
              setValue={setEmail}
              marginBottom={20}
              borderRadius={0}
              icon={<MaterialIcons name="email" size={18} color="#bcbcbc" />}
            />
            <CustomInput
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              setValue={setPhoneNumber}
              marginBottom={20}
              borderRadius={0}
              icon={<MaterialIcons name="phone" size={18} color="#bcbcbc" />}
            />

            <CustomInput
              placeholder="Enter New Password"
              value={password}
              setValue={setPassword}
              marginBottom={20}
              borderRadius={0}
              secureTextEntry={true}
              icon={<FontAwesome5 name="key" size={18} color="#bcbcbc" />}
            />
          </View>
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <CustomButton
              text="Update Profile"
              onPress={updateBtn}
              paddingTop={10}
              backgroundColor="#000000"
              btnNormal={true}
              marginTop={15}
              fontColor="white"
            />
          </View>
        </LinearGrad>
      </ScrollView>
    </>
  );
}
