import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../../action/appService";

const initialState = {
  leadsCold: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadColdData = createAsyncThunk(
  "getcold",
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

export const getLeadsColdSlice = createSlice({
  name: "seasialeadscold",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadColdData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadColdData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsCold = action.payload;
      })
      .addCase(leadColdData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadsColdSlice.actions;
export default getLeadsColdSlice.reducer;
