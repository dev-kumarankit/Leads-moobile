import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const base_URL = "https://stgphys.appsndevs.com/hrs/public/api/";
//login

const storeData = async (res) => {
  try {
    const token = res?.data?.Token;
    const role = res?.data?.role_id;
    await AsyncStorage.setItem("user", token);
    await AsyncStorage.setItem("userRole", role.toString());
  } catch (e) {
    // console.log(e, "error token");
  }
};
//login
const notificationLogin = async (userData) => {
  try {
    const response = await axios.post(base_URL + "login", userData);
    storeData(response);
    return { status: 200, dataToken: response?.data };
  } catch (err) {
    return { status: 400, data: err?.response?.data };
  }
};
const notificationService = {
  notficationAPI,
};
export default notificationService;
