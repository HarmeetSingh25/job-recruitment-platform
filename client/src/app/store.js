import { configureStore } from "@reduxjs/toolkit";
import  DashboardReducer from "../features/dashboard/slice/dashboardSlice.js";
import JobsReducer from "../features/jobs/slice/jobslice.js";
import DuplicateReducer from "../features/duplicates/slice/duplicateSlice.js";

const store = configureStore({
  reducer: {
    dashboard : DashboardReducer,
    jobs: JobsReducer,
    duplicates: DuplicateReducer,

  },


});

export default store;