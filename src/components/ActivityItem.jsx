import { useDispatch } from "react-redux";
import {
  editCompleteFirebase,
} from "./reducers/activitiesSlice";
import { useState } from "react";
import { deleteActivityFromFirebase } from "./reducers/activitiesSlice";
import "./ActivityItem.css";

const ActivityItem = ({ id, title, completed, notes }) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);

  const handleCompleteClick = () => {
    dispatch(editCompleteFirebase({ id, title, completed: !completed, notes }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteActivityFromFirebase(id));
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails); 
  };

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ") //if you don't put a space in here, it will split on each character instead of each word!
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); //if you don't put a space in here, it will not put spaces between the rejoined words
  }

  const hasNotes = notes && notes.trim() !== "";

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

          <span onClick={toggleDetails}>{capitalizeWords(title)}</span>
          {showDetails && hasNotes && (
            <div>
              <span>{capitalizeWords(notes)}</span>
            </div>
          )}

          <button onClick={handleDeleteClick} className="coralBtn">
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default ActivityItem;
