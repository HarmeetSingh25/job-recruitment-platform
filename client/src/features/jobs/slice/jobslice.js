import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../services/jobs.service";
import { getJobById } from "../services/jobs.service";

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (params, thunkAPI) => {
    try {
      return await getJobs(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id, thunkAPI) => {
    try {
      return await getJobById(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Something went wrong",
      );
    }
  },
);

const initialState = {
  jobs: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalJobs: 0,
    limit: 10,
  },
  loading: false,
  error: null,
  selectedJob: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.jobs;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedJob = action.payload.job;
      })

      .addCase(fetchJobById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobsSlice.reducer;
