import { SafeAreaView } from "react-native-safe-area-context";
import { leadWarmData } from "../../Store/reducer/leads/getLeadsWarmSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadsCard from "../component/LeadsCard";
import { StatusBar } from "react-native";
import { APPCOLOR } from "../../style/theme";
import LeadHeader from "../component/LeadComponent/LeadHeader";
export default function WarmLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadsWarm, isLoading } = useSelector((state) => state.leadswarm);
  const warmLeads = leadsWarm?.data;
  const filterdata = {
    status: "warm",
    channel_id: "",
    limit: "10",
    offset: "0",
  };

  useEffect(() => {
    if (dispatch) {
      dispatch(leadWarmData(filterdata));
    }
  }, [dispatch]);

  return (
    <LeadHeader
      activeLeads={warmLeads}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsWarm"}
      // dispatchApi={dispatchApi}
    />
  );
}
