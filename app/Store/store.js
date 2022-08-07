import { configureStore } from "@reduxjs/toolkit";
// import loginReducer from "../pages/Login/loginSlice";
// import leadsReducer from "../pages/leadPage/leadSlice";
// import categoryReducer from "../pages/leadPage/categorySlice"
import loginReducer from "./reducer/loginSlice";
import getLeadAllDataReducer from "./reducer/leads/getLeadAllDataSlice";
import getLeadWarmReducer from "./reducer/leads/getLeadsWarmSlice";
import getLeadsNewReducer from "./reducer/leads/getLeadsNewSlice";
import getAllUserReducer from "./reducer/users/getAllUserSlice";
import leadOverViewReducer from "./reducer/leads/leadOverViewSlice";
import CommentLeadsReducer from "./reducer/leads/comment/commentLeadsSlice";
import loginUserReducer from "./reducer/loginUserSlice";
import getLeadsAwardedReducer from "./reducer/leads/getLeadsAwardedSlice";
import getLeadsJunkReducer from "./reducer/leads/getLeadJunkSlice";
import getLeadsColdReducer from "./reducer/leads/getLeadColdSlice";
import getLeadDeadReducer from "./reducer/leads/getLeadDeadSlice";
const store = configureStore({
  reducer: {
    auth: loginReducer,
    user: loginUserReducer,
    leadall: getLeadAllDataReducer,
    leadawarded: getLeadsAwardedReducer,
    leadswarm: getLeadWarmReducer,
    leadsnew: getLeadsNewReducer,
    leaddead: getLeadDeadReducer,
    leadscold: getLeadsColdReducer,
    leadsjunk: getLeadsJunkReducer,
    alluser: getAllUserReducer,
    leadOverview: leadOverViewReducer,
    commentLeads: CommentLeadsReducer,
  },
});
export default store;
