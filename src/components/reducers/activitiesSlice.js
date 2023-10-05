import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Mop Kitchen", completed: false, notes: "struggle with most"  },
  { id: 2, title: "Clear Out Boxes from Garage", completed: true, notes: "need new recycling bin" },
];

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async (id, ) => {
    const response = await fetch(
      "/api/activities");
    const data = await response.json();
    return data;
  }
);

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
        notes: action.payload.notes
      };
      state.push(newActivity);
    },
    toggleComplete: (state, action) => {
      //pass the id to find the index so that you can pass along the action to the
      //specific activity
      const index = state.findIndex(
        (activity) => activity.id === action.payload.id
      );
      state[index].completed = action.payload.completed; //we are going to update the completed property of the activity
    },
    deleteActivity: (state, action) => {
      return state.filter((activity) => activity.id !== action.payload.id); //return all activities that are NOT this id
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activities = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchActivities.rejected, (state) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    },
});

export const { addActivity, toggleComplete, deleteActivity } =
  activitiesSlice.actions;
export default activitiesSlice.reducer;
