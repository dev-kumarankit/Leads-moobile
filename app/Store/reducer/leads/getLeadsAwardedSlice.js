import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../../action/appService";

const initialState = {
  leadsAwarded: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadAwardedData = createAsyncThunk(
  "getawarded",
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

export const getLeadsAwardedSlice = createSlice({
  name: "seasialeadsawarded",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadAwardedData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadAwardedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsAwarded = action.payload;
      })
      .addCase(leadAwardedData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadsAwardedSlice.actions;
export default getLeadsAwardedSlice.reducer;
