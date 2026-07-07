import ReactDOM from "react-dom/client";
import { Provider,  } from "react-redux";
import { RouterProvider } from "react-router-dom";

import './index.css'

import store from "./app/store.js";
import { router } from "./app/router.jsx";
import { fetchDuplicates } from "./features/duplicates/slice/duplicateSlice.js";
// console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)