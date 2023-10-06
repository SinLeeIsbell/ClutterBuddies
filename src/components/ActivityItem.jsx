import { useDispatch } from "react-redux";
import {
  editCompleteFirebase,
  // toggleComplete,
} from "./reducers/activitiesSlice";
// import { deleteActivity } from "./reducers/activitiesSlice";
import { useState } from "react";
import { deleteActivityFromFirebase } from "./reducers/activitiesSlice";
import "./ActivityItem.css";

const ActivityItem = ({ id, title, completed, notes }) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  const handleCompleteClick = () => {
    // dispatch(
    // toggleComplete({ id: id, completed: !completed })
    dispatch(editCompleteFirebase({ id, title, completed: !completed, notes }));
    //now when completed is toggled, it flips state
  };

  const handleDeleteClick = () => {
    // dispatch(deleteActivity({ id: id }));
    dispatch(deleteActivityFromFirebase(id)); //we pass in the id as payload so it knows which one to target
  };
  //call the dispatch function and pass in the action we want to dispatch
  //reducer needs to know the id of the item and the new completed value as payload object

  const toggleDetails = () => {
    setShowDetails(!showDetails); //to its opposite because we are toggling back and forth
  };

  console.log("Notes:", notes, title);

  return (
    <div className="everyActivity">
      <li className={`groupItem ${completed && "itemSuccess"}`}>
        <div className="eachActivityLine">
          <span>
            <input
              className=""
              type="checkbox"
              checked={completed}
              onChange={handleCompleteClick}
            ></input>{" "}
          </span>

          <span onClick={toggleDetails}>{title}</span>
          {showDetails && (
            <div>
              <span>{notes}</span>
            </div>
          )}

          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </li>
    </div>
  );
};

export default ActivityItem;
