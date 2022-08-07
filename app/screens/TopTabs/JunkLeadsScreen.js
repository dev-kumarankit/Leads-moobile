import { leadJunkData } from "../../Store/reducer/leads/getLeadJunkSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadHeader from "../component/LeadComponent/LeadHeader";

export default function JunkLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadsJunk, isLoading } = useSelector((state) => state.leadsjunk);
  const filterdata = {
    status: "junk",
    channel_id: "",
    limit: "10",
    offset: "0",
  };
  const junkleads1 = leadsJunk?.data;
  // console.log(newLeadData, "leadDeadData");
  useEffect(() => {
    if (dispatch) {
      dispatch(leadJunkData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={junkleads1}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsJunk"}
      // dispatchApi={dispatchApi}
    />
  );
}
