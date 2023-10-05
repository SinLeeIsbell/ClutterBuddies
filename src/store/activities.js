import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../components/reducers/activitiesSlice";
import authReducer from "../components/reducers/authSlice";

const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    auth: authReducer,
  },
});

export default store;
