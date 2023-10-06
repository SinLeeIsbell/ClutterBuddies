import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import "./App.css";
import AddActivityForm from "./components/AddActivityForm";
import ActivitiesList from "./components/ActivitiesList";
import CompletedList from "./components/AllCompletedItems";
import { fetchActivities } from "./components/reducers/activitiesSlice";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  console.log("activities in app:", activities);

  return (
    <div className="fullContainer">
      <div className="appContainer">
        <h1 className="activityContainer">Activities List</h1>
        <div>
          <AddActivityForm />
        </div>
        <div>
          <ActivitiesList />
        </div>
        <div>
          <CompletedList />
        </div>
      </div>
    </div>
  );
}

export default App;
