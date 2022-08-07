import { SafeAreaView } from "react-native-safe-area-context";
import { leadData } from "../../Store/reducer/leads/getLeadAllDataSlice";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import LeadHeader from "../component/LeadComponent/LeadHeader";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
export default function AllLeadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const [apiCallData, setApiCallData] = useState(10);
  const { leadsall, isLoading } = useSelector((state) => state.leadall);
  const filterdata = {
    status: "",
    channel_id: "",
    limit: "10",
    offset: "0",
  };

  const allLeads = leadsall?.data;
  // console.log(allLeads, "allLeads");
  let i = 10;
  const dispatchApi = () => {
    setApiCallData(apiCallData + 10);

    // console.log(i,"iiiiiiii")
    dispatch(
      leadData({
        status: "",
        channel_id: "",
        limit: apiCallData,
        offset: "0",
      })
    );
  };
  useEffect(() => {
    if (dispatch) {
      dispatch(leadData(filterdata));
    }
  }, [dispatch]);
  return (
    <LeadHeader
      activeLeads={allLeads}
      isLoading={isLoading}
      navigation={navigation}
      navigationDetails={"SingleLeadDetailsAll"}
      // dispatchApi={dispatchApi}
    />
  );
}
