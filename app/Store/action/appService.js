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
const login = async (userData) => {
  try {
    const response = await axios.post(base_URL + "login", userData);
    storeData(response);
    return { status: 200, dataToken: response?.data };
  } catch (err) {
    return { status: 400, data: err?.response?.data };
  }
};
//forget
const forget = async (userData) => {
  const response = await axios.post(base_URL + "forget_password", userData);
  // console.log("response", response);
  if (response?.data?.msg) {
    return response?.data;
  }
  return rejectWithValue(err.response.data);
};
//forget
const passwordReset = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + "PasswordReset", data, config);
  // console.log("response", response);
  if (response?.data?.msg) {
    return response?.data;
  }
  return rejectWithValue(err.response.data);
};
//logout

const logout = async () => {
  await AsyncStorage.removeItem("user");
  await AsyncStorage.removeItem("userRole");
};
//login User Details loginUserDetails
const loginUserDetails = async () => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  try {
    const response = await axios.get(base_URL + "loginUserDetail", config);
    return { status: 200, dataToken: response?.data };
  } catch (err) {
    return { status: 400, data: err?.response?.data };
  }
};

//loginEditUser
const loginEditUser = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  try {
    const response = await axios.post(base_URL + "editUser", data, config);
    // console.log(response, "response");
    return { status: 200, dataToken: response?.data };
  } catch (err) {
    return { status: 400, data: err?.response?.data };
  }
};

//Leads Data
const leads = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };

  const response = await axios
    .post(base_URL + "getLeadByPost", data, config)
    .then((res) => {
      return { status: 200, ...res?.data };
    })
    .catch((err) => {
      return { status: 400, data: err?.response?.data?.message[0] };
    });
  // console.log(response);
  return response;
};

//user Data
const getAllUserData = async (filterData) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };

  const response = await axios.post(
    base_URL + "getUserdetail",
    filterData,
    config
  );
  // console.log("get all user Data");
  // console.log(response, "response");
  return response?.data;
};

const getSingleUser = async (userId) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.get(
    base_URL + `UserDetailById/${userId}`,
    config
  );
  // console.log(response, "response");
  return response?.data;
};

const getLeadsId = async (id) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.get(base_URL + `getLeadById/${id}`, config);
  return response?.data;
};
//Comments Api
//Get Comment Api
const getCommentsData = async (id) => {
  // console.log("get Comment Data", id);
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.get(base_URL + `getComments/${id}`, config);
  return response?.data;
};

//Post Comment Api
const PostComment = async (PostData) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + "addComment", PostData, config);
  return response?.data;
};

//update leads
const UpdateLeadStatus = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + `updateLead`, data, config);
  return response?.data;
};

//Assign Lead
const AssignLead = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + `assignLead`, data, config);

  return response?.data;
};
//post leads

const PostLead = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + `postlead`, data, config);

  return response?.data;
};

//addUser
const AddUser = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(base_URL + `register`, data, config);

  return response?.data;
};
//addUser
const getAllChannelDetails = async (data) => {
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  const response = await axios.post(
    base_URL + `getleadAllChannel`,
    data,
    config
  );
  return response?.data;
};
//addUser
const getUserDelete = async (data) => {
  // console.log("user delete");
  let user_token = await AsyncStorage.getItem("user");
  const config = {
    headers: {
      Authorization: `Bearer ${user_token}`,
    },
  };
  // console.log(data, "data");
  const response = await axios.post(base_URL + `UserDelete`, data, config);

  // console.log(response, "response");
  if (response?.data == "user deleted successfully") {
    return response?.data;
  } else {
    return response?.data;
    // return rejectWithValue { status: 400, data: err.response?.data };
  }
  // return rejectWithValue(response?.data?.data);
  // return rejectWithValue(err.response?.data);
  // return response?.data;
};
//leads Data

// const leads = async (data) => {
//   console.log(localStorage.getItem("user"));
//   const config = {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("user")}`,
//     },
//   };
//   const response = axios.post(base_URL + "getLeadByPost",data, config);
//   console.log(response,"----------------------");
//   return response?.data;
// };

// const leads = async (data) => {
//   let user_token = await AsyncStorage.getItem("user");
//   console.log("Get here Token", user_token);
//   const config = {
//     headers: {
//       Authorization: `Bearer ${user_token}`,
//     },
//   };

//   const response = await axios
//     .post(base_URL + "getLeadByPost", data, config)
//     .then((res) => {
//       return { status: 200, data: res?.data };
//     })
//     .catch((err) => {
//       return { status: 400, data: err?.response?.data?.message[0] };
//     });
//   // console.log(response,"DEMOOOOOOOOOOOOOOOOOOOOOO")
//   return { status: 200, data: response?.data };
// };

// const category = async () => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${JSON.parse(AsyncStorage.getItem("user"))}`,
//     },
//   };

//   const response = axios.get(base_URL + "getleadAllChannel", config);
//   return response;
// };

//   const response = await axios.get(base_URL + `getLeadById/${id}`, config);
//   console.log(response?.data, "api ");
//   return response?.data;
// };

// const PostLead = async (LeadData) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${JSON.parse(localStorage.getItem("userAuth"))}`,
//     },
//   };
//   const response = await axios.post(base_URL + "postlead", LeadData, config);
//   if (response?.data?.code !== "200") {
//     alert("Something Went Wrong!");
//   }
//   if (response?.data?.code === "200") {
//     alert("Created Lead Successfully!");
//   }
//   return response?.data;
// };

const apiService = {
  login,
  forget,
  logout,
  passwordReset,
  loginUserDetails,
  loginEditUser,
  leads,
  getAllUserData,
  getSingleUser,
  UpdateLeadStatus,
  getLeadsId,
  PostComment,
  getCommentsData,
  AssignLead,
  PostLead,
  AddUser,
  getAllChannelDetails,
  getUserDelete,
  // PostLead,
};
export default apiService;
