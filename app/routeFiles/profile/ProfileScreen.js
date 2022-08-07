import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import LinearGrad from "../../screens/component/LinearGrad";

import EditProfile from "../../screens/profile/EditProfile";
import UserProfile from "../../screens/profile/UserProfile";

const Stack = createNativeStackNavigator();
export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="UserHome">
        <Stack.Screen
          name="UserHome"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
