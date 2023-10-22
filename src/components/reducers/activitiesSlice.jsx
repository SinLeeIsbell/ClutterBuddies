import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { databaseFire, firebaseApp } from "../auth/firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

const initialState = {
  activities: [],
  status: "idle",
  error: null,
};

export const fetchActivities = createAsyncThunk(
  "activities/fetch",
  async () => {
    const q = query(collection(databaseFire, "activities"), orderBy("completed", "asc"))
    const querySnapshot = await getDocs(q);
    const activitiesArr = [];

    

    querySnapshot.forEach((doc) => {
      const { title, completed, notes } = doc.data();
      activitiesArr.push({
        id: doc.id,
        title,
        completed,
        notes,
      });
    });
    return activitiesArr;
  }
);

export const addActivityToFirebase = createAsyncThunk(
  "activities/addToFirebase",
  async (newActivity, thunkAPI) => {
    newActivity.completed = false;
    const docRef = await addDoc(
      collection(databaseFire, "activities"),
      newActivity
    );
    newActivity.id = docRef.id;
    return newActivity;
  }
);

export const deleteActivityFromFirebase = createAsyncThunk(
  "activities/deleteFromFirebase",
  async (activityID, thunkAPI) => {
    await deleteDoc(doc(databaseFire, "activities", activityID));
    return activityID;
  }
);

export const editCompleteFirebase = createAsyncThunk(
  "activities/editComplete",
  async (newState, thunkAPI) => {
    const toEdit = doc(databaseFire, "activities", newState.id);
    await updateDoc(toEdit, {
      title: newState.title,
      completed: newState.completed,
      notes: newState.notes,
    });
    return newState;
  }
);

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    addActivity: (state, action) => {
      const newActivity = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        notes: action.payload.notes,
      };
      state.activities.push(newActivity);
    },
    deleteActivity: (state, action) => {
      return state.filter((activity) => activity.id !== action.payload.id); //return all activities that are NOT this id
    },
    toggleComplete: (state, action) => {
      const activity = state.activities.find(
        (activity) => activity.id === action.payload.id
      );
      if (activity) {
        activity.completed = action.payload.completed;
      }
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
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addActivityToFirebase.fulfilled, (state, action) => {
        state.activities.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(deleteActivityFromFirebase.fulfilled, (state, action) => {
        state.activities = state.activities.filter(
          (activity) => activity.id !== action.payload
        );
        state.status = "succeeded";
      })
      .addCase(editCompleteFirebase.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editCompleteFirebase.fulfilled, (state, action) => {
        const index = state.activities.findIndex(
          (activity) => activity.id === action.payload.id
        );
        state.activities[index] = action.payload;
      });
  },
});

export const { toggleComplete, addActivity, deleteActivity } =
  activitiesSlice.actions;
export default activitiesSlice.reducer;
