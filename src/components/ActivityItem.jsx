import { useDispatch } from "react-redux";
import { toggleComplete } from "./features/activitiesSlice";
import { deleteActivity } from "./features/activitiesSlice";
import './ActivityItem.css'

const ActivityItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed })
	//now when completed is toggled, it flips state
	);
  };

  const handleDeleteClick = () => {
	dispatch(deleteActivity({id: id})) //we pass in the id as payload so it knows which one to target
  }
  //call the dispatch function and pass in the action we want to dispatch
  //reducer needs to know the id of the item and the new completed value as payload object
  return (
    <li className={`groupItem ${completed && "itemSuccess"}`}>
      <div>
        <span>
          <input 
		  type="checkbox" 
		  checked={completed}
		  onChange={handleCompleteClick}>
		  </input>
          {title}
        </span>
        <button onClick={handleDeleteClick}
		>Delete</button>
      </div>
    </li>
  );
};

export default ActivityItem;
