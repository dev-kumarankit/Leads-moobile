import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appService from "../../action/appService";

const initialState = {
  leadsJunk: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const leadJunkData = createAsyncThunk(
  "getjunk",
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

export const getLeadsJunkSlice = createSlice({
  name: "seasialeadsjunk",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadJunkData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadJunkData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadsJunk = action.payload;
      })
      .addCase(leadJunkData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = getLeadsJunkSlice.actions;
export default getLeadsJunkSlice.reducer;
