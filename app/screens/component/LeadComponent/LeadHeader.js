import { Foundation } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import AddButton from "../AddButton";
import LeadsCard from "../LeadsCard";
import LinearGrad from "../LinearGrad";
export default function LeadHeader({
  activeLeads,
  isLoading,
  navigation,
  navigationDetails,
}) {
  return (
    <>
      <LinearGrad
        start={{ x: 0, y: 1 }}
        color={["#711AFF", "#46FFBC"]}
        flex={activeLeads && activeLeads?.data?.data?.length > 0 ? "false" : ""}
      >
        <StatusBar backgroundColor="transparent" translucent />
        <LeadsCard
          data={activeLeads}
          isLoading={isLoading}
          navigation={navigation}
          navigationDetails={navigationDetails}
          // dispatchApi={dispatchApi}
        />
        <AddButton
          text={<Foundation name="page-add" size={24} color="white" />}
          routetext="CreateLeads"
        />
      </LinearGrad>
    </>
  );
}
