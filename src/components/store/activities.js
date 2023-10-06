import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer, { fetchActivities } from "../reducers/activitiesSlice";
import authReducer from "../reducers/authSlice";



const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: fetchActivities
    }
  })
});

export default store;
