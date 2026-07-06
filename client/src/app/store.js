import { configureStore } from "@reduxjs/toolkit";
import  DashboardReducer from "../features/dashboard/slice/dashboardSlice.js";
import JobsReducer from "../features/jobs/slice/jobslice.js";

const store = configureStore({
  reducer: {
    dashboard : DashboardReducer,
    jobs: JobsReducer,

  },


});

export default store;