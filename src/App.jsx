import { useState } from "react";
import "./App.css";
import { appInit } from "./firebaseConfig";
import AddActivityForm from "./components/AddActivityForm";
import ActivitiesList from "./components/ActivitiesList";
import CompletedList from "./components/AllCompletedItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="fullContainer">
    <div className="appContainer">
      <h1 className="activityContainer">Activities List</h1>
      <div><AddActivityForm /></div>
      <div><ActivitiesList /></div>
      <div><CompletedList /></div>
    </div>
    </div>
  );
}

export default App;
