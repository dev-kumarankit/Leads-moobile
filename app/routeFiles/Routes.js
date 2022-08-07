import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import RoutesBottomTabs from "./RoutesBottomTabs";

import LoginScreen from "../screens/loginTab/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

import ForgetPasswordTab from "../screens/loginTab/ForgetPasswordTab";
const Stack = createNativeStackNavigator();

export default function Routes({ navigation }) {
  const [auth, setAuth] = useState(null);
  const { user } = useSelector((state) => state.auth);
  let tokenCheck = user?.dataToken?.Token;
  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const value = await AsyncStorage.getItem("user");
    setAuth(value);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {tokenCheck || auth ? (
          <>
            <Stack.Screen name="Home" component={RoutesBottomTabs} />
          </>
        ) : (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="forgetPassword" component={ForgetPasswordTab} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
