import { leadAwardedData } from "../../Store/reducer/leads/getLeadsAwardedSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LeadsCard from "../component/LeadsCard";

import LeadHeader from "../component/LeadComponent/LeadHeader";
export default function AwardedLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const { leadsAwarded, isLoading } = useSelector((state) => state.leadawarded);
  const filterdata = {
    status: "awarded",
    channel_id: "",
    limit: "10",
    offset: "0",
    channel_id: "",
  };
  const awardedLeads = leadsAwarded?.data;
  useEffect(() => {
    if (dispatch) {
      dispatch(leadAwardedData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={awardedLeads}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsAwarded"}
      // dispatchApi={dispatchApi}
    />
  );
}
