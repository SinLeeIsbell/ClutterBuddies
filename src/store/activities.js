import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../components/features/activitiesSlice"

const store = configureStore({
    reducer: {
activities: activitiesReducer,
    }
})

export default store