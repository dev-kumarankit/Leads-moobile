import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import appService from "../../../action/appService";

const initialState = {
  getComment: [],
  comment: [],
  isError: false,
  isSucess: false,
  isLoading: false,
  message: "",
};

export const getCommentsData = createAsyncThunk(
  "getComments",
  async (getComment, thunkApi) => {
    // console.log(" getCommentsData thunk Clicked");
    try {
      return appService.getCommentsData(getComment);
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
export const PostCommentData = createAsyncThunk(
  "comment",
  async (PostData, thunkApi) => {
    try {
      // console.log("Comment added successfully");
      return appService.PostComment(PostData);
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

export const commentLeadsSlice = createSlice({
  name: "getComments",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsData.pending, (state) => {
        state.isDispatching = true;
        state.isError = false;
        state.isSucess = false;
        state.message = "";
      })
      .addCase(getCommentsData.fulfilled, (state, action) => {
        state.isDispatching = false;
        state.isSuccess = true;
        state.isError = false;
        state.getComment = action.payload;
      })
      .addCase(getCommentsData.rejected, (state, action) => {
        state.isDispatching = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(PostCommentData.pending, (state) => {
        state.isDispatching = true;
      })
      .addCase(PostCommentData.fulfilled, (state, action) => {
        state.isDispatching = false;
        state.isSucess = true;
        state.comment = action.payload;
      })
      .addCase(PostCommentData.rejected, (state, action) => {
        state.isDispatching = false;
        state.isError = true;
        state.message = action.payload;
        // state.question = null;
      });
  },
});

export const { reset } = commentLeadsSlice.actions;
export default commentLeadsSlice.reducer;
