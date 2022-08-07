import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import AddUser from "../../screens/BottomTabs/AddUser";
import AllUsersScreen from "../../screens/BottomTabs/AllUsersScreen";
import SingleUser from "../../screens/BottomTabs/SingleUser";
import LeadsDetails from "../../screens/TopTabs/Details/LeadsDetails";
const Stack = createNativeStackNavigator();
export default function UserTab() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="userHome1">
        <Stack.Screen
          name="userHome1"
          component={AllUsersScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingleUserDetails"
          component={SingleUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddUserTab"
          component={AddUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LeadsDetailsUserTab"
          component={LeadsDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
