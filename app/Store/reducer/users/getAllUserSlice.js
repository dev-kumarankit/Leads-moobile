import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appService from "../../action/appService";
//getUserDelete
const initialState = {
  getUserDetail: [],
  addUser: [],
  getSingleUserDetail: [],
  getUserDeleteCheck: [],
  isError: false,
  isSucess: false,
  isLoading: false,
  message: "",
};

export const getUserDetails = createAsyncThunk(
  "getAllUserdetail",
  async (filterData, thunkApi) => {
    try {
      return appService.getAllUserData(filterData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const getSingleUserById = createAsyncThunk(
  "UserDetailById",
  async (userId, thunkApi) => {
    // console.log("thunk clicked");
    try {
      return appService.getSingleUser(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const getUserDeleteByID = createAsyncThunk(
  "DeleteUser",
  async (userId, thunkApi) => {
    // console.log(userId, "userId");
    // console.log("thunk delete");
    try {
      return appService.getUserDelete(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const postAddUser = createAsyncThunk(
  "AddUser",
  async (data, thunkApi) => {
    // console.log("thunk clicked");
    try {
      return appService.AddUser(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.string();
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const getAllUserSlice = createSlice({
  name: "getUserDetail",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getUserDetail = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getSingleUserById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(getSingleUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getSingleUserDetail = action.payload;
      })
      .addCase(getSingleUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(postAddUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(postAddUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.addUser = action.payload;
      })
      .addCase(postAddUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getUserDeleteByID.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(getUserDeleteByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.getUserDeleteCheck = action.payload;
      })
      .addCase(getUserDeleteByID.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});
//getYserDeleteByID
export const { reset } = getAllUserSlice.actions;
export default getAllUserSlice.reducer;
