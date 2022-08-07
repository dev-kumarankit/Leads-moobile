import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../../action/appService";

const initialState = {
  leadsWarm: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadWarmData = createAsyncThunk(
  "getwarm",
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

export const getLeadsWarmSlice = createSlice({
  name: "seasialeadswarm",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadWarmData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadWarmData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsWarm = action.payload;
      })
      .addCase(leadWarmData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadsWarmSlice.actions;
export default getLeadsWarmSlice.reducer;
