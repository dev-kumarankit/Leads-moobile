import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../action/appService";

const initialState = {
  loginuser: [],
  editloginuser: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const loginDataDetails = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkApi) => {
    try {
      return await appService.loginUserDetails(user);
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
export const loginEditUser = createAsyncThunk(
  "auth/loginEditUser",
  async (user, thunkApi) => {
    try {
      return await appService.loginEditUser(user);
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
export const loginUserSlice = createSlice({
  name: "loginuser",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginDataDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(loginDataDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.loginuser = action.payload;
      })
      .addCase(loginDataDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.loginuser = null;
        state.message = action.payload;
      })
      .addCase(loginEditUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(loginEditUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.editloginuser = action.payload;
      })
      .addCase(loginEditUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.loginuser = null;
        state.message = action.payload;
      });
  },
});

export const { reset } = loginUserSlice.actions;
export default loginUserSlice.reducer;
