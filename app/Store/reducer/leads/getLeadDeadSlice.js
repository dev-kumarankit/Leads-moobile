import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../../action/appService";

const initialState = {
  leadsDead: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadDeadData = createAsyncThunk(
  "getdead",
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

export const getLeadsDeadSlice = createSlice({
  name: "seasialeadsdead",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadDeadData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadDeadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsDead = action.payload;
      })
      .addCase(leadDeadData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadsDeadSlice.actions;
export default getLeadsDeadSlice.reducer;
