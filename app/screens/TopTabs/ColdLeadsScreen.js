import { SafeAreaView } from "react-native-safe-area-context";
import { leadColdData } from "../../Store/reducer/leads/getLeadColdSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadsCard from "../component/LeadsCard";
import { StatusBar } from "react-native";
import { APPCOLOR } from "../../style/theme";
import LeadHeader from "../component/LeadComponent/LeadHeader";
export default function ColdLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadscold, isLoading } = useSelector((state) => state.leadscold);
  const filterdata = {
    status: "cold",
    channel_id: "",
    limit: "10",
    offset: "0",
  };
  const coldlead = leadscold?.data;
  useEffect(() => {
    if (dispatch) {
      dispatch(leadColdData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={coldlead}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsCold"}
      // dispatchApi={dispatchApi}
    />
  );
}
