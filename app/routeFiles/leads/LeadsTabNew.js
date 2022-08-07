import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";
import NewLeadsScreen from "../../screens/TopTabs/NewLeadsScreen";
const Stack = createNativeStackNavigator();
export default function LeadsTabNew() {
  return (
    <Stack.Navigator initialRouteName="LeadTabNew">
      <Stack.Screen
        name="LeadTabNew"
        component={NewLeadsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsNew"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
