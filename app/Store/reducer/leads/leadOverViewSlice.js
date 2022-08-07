import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appService from "../../action/appService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  leadOverview: [],
  leadStatus: [],
  assignLead: [],
  postLeads: [],
  allChannelDetails: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// LeadOverview

export const leadOverViewData = createAsyncThunk(
  "getLeadById",
  async (leadOverview, thunkApi) => {
    try {
      return appService.getLeadsId(leadOverview);
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
export const leadUpdateData = createAsyncThunk(
  "leadUpdateStatus",
  async (data, thunkApi) => {
    try {
      return appService.UpdateLeadStatus(data);
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

export const assignlead = createAsyncThunk(
  "assignleads",
  async (data, thunkApi) => {
    // console.log("assigned entered");
    try {
      return appService.AssignLead(data);
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
// getAllChannelDetails
export const channelDetails = createAsyncThunk(
  "getChannelDetails",
  async (data, thunkApi) => {
    try {
      return appService.getAllChannelDetails(data);
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
export const postlead = createAsyncThunk(
  "postleads",
  async (data, thunkApi) => {
    try {
      return appService.PostLead(data);
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
export const leadOverViewSlice = createSlice({
  name: "leadOverView",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(leadOverViewData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadOverViewData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadOverview = action.payload;
      })
      .addCase(leadOverViewData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(leadUpdateData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(leadUpdateData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.leadStatus = action.payload;
      })
      .addCase(leadUpdateData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(assignlead.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(assignlead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.assignLead = action.payload;
      })
      .addCase(assignlead.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "";
      })

      .addCase(postlead.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(postlead.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.postLeads = action.payload;
      })
      .addCase(postlead.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(channelDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(channelDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allChannelDetails = action.payload;
      })
      .addCase(channelDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "";
      });
  },
});

export const { reset } = leadOverViewSlice.actions;
export default leadOverViewSlice.reducer;
