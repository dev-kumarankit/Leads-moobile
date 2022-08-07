import { SafeAreaView } from "react-native-safe-area-context";
import { leadNewData } from "../../Store/reducer/leads/getLeadsNewSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadsCard from "../component/LeadsCard";
import { StatusBar } from "react-native";
import { APPCOLOR } from "../../style/theme";
import LeadHeader from "../component/LeadComponent/LeadHeader";
export default function NewLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadsNew, isLoading } = useSelector((state) => state.leadsnew);
  const filterdata = {
    status: "new",
    channel_id: "",
    limit: "10",
    offset: "0",
  };
  const newLeadData = leadsNew?.data;
  useEffect(() => {
    if (dispatch) {
      dispatch(leadNewData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={newLeadData}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsNew"}
      // dispatchApi={dispatchApi}
    />
  );
}
