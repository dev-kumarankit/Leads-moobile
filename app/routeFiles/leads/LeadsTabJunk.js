import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import ActiveLeadsScreen from "../../screens/TopTabs/WarmLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
import JunkLeadsScreen from "../../screens/TopTabs/JunkLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabJunk() {
  return (
    <Stack.Navigator initialRouteName="LeadTabJunk">
      <Stack.Screen
        name="LeadTabJunk"
        component={JunkLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsJunk"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
