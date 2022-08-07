import { leadDeadData } from "../../Store/reducer/leads/getLeadDeadSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadsCard from "../component/LeadsCard";
import { StatusBar } from "react-native";
import { APPCOLOR } from "../../style/theme";
import LeadHeader from "../component/LeadComponent/LeadHeader";
export default function DeadLeadScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadsDead, isLoading } = useSelector((state) => state.leaddead);
  const filterdata = {
    status: "dead",
    channel_id: "",
    limit: "10",
    offset: "0",
  };
  const newLeadData = leadsDead?.data;
  // console.log(newLeadData, "leadDeadData");
  useEffect(() => {
    if (dispatch) {
      dispatch(leadDeadData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={newLeadData}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsDead"}
      // dispatchApi={dispatchApi}
    />
  );
}
