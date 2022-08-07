import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import appService from "../../action/appService";

const initialState = {
  leadsall: [],
  singleUserleadData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadData = createAsyncThunk("getall", async (user, thunkApi) => {
  try {
    return await appService.leads(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.string();
    return thunkApi.rejectWithValue(message);
  }
});
export const singleUserlead = createAsyncThunk(
  "singleuserDetailsLead",
  async (user, thunkApi) => {
    try {
      return await appService.leads(user);
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
export const getLeadAllDataSlice = createSlice({
  name: "seasialeadsall",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsall = action.payload;
      })
      .addCase(leadData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(singleUserlead.pending, (state) => {
        state.isLoading1 = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(singleUserlead.fulfilled, (state, action) => {
        state.isLoading1 = false;
        state.isSuccess = true;
        state.isError = false;
        state.singleUserleadData = action.payload;
      })
      .addCase(singleUserlead.rejected, (state, action) => {
        state.isLoading1 = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadAllDataSlice.actions;
export default getLeadAllDataSlice.reducer;
