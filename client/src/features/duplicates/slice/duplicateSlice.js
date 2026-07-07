import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getDuplicates,
  updateDuplicate,
} from "../services/duplicate.service";

export const fetchDuplicates = createAsyncThunk(
  "duplicates/fetch",
  async () => {
    return await getDuplicates();
  }
);

export const changeDuplicateStatus = createAsyncThunk(
  "duplicates/update",
  async ({ id, status }) => {
    return await updateDuplicate(id, status);
  }
);

const duplicateSlice = createSlice({
  name: "duplicates",

  initialState: {
    duplicates: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchDuplicates.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDuplicates.fulfilled, (state, action) => {
        state.loading = false;
        state.duplicates = action.payload.duplicates;
      })

      .addCase(changeDuplicateStatus.fulfilled, (state, action) => {
        const updated = action.payload.duplicate;

        state.duplicates = state.duplicates.map((item) =>
          item._id === updated._id ? updated : item
        );
      });
  },
});

export default duplicateSlice.reducer;