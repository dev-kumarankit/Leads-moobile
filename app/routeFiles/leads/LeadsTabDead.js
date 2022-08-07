import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DeadLeadScreen from "../../screens/TopTabs/DeadLeadsScreen";
import LeadsDetail from "../../screens/TopTabs/Details/LeadsDetails";

const Stack = createNativeStackNavigator();
export default function LeadsTabDead() {
  return (
    <Stack.Navigator initialRouteName="LeadTabDead">
      <Stack.Screen
        name="LeadTabDead"
        component={DeadLeadScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingleLeadDetailsDead"
        component={LeadsDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
