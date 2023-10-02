import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "activity1", completed: false },
  { id: 2, title: "activity2", completed: true },
];

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    //reducer responds to the action and takes the current state
    //and changes state based on the action payload
    addActivity: (state, action) => {
      const newActivity = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newActivity);
    },
    toggleComplete: (state, action) => {
      //pass the id to find the index so that you can pass along the action to the
      //specific activity
      const index = state.findIndex(
        (activity) => activity.id === action.payload.id
      );
      state[index].completed = action.payload.completed //we are going to update the completed property of the activity
  },
  deleteActivity: (state, action) => {
    return state.filter((activity)=> activity.id !== action.payload.id) //return all activities that are NOT this id
  },
},
});

export const { addActivity, toggleComplete, deleteActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;
