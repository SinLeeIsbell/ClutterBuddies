import { useDispatch } from "react-redux";
import { addActivity } from "./features/activitiesSlice";
import { useState } from 'react'

const AddActivityForm = () => {
  const [value, setValue] = useState();


const dispatch = useDispatch();

const onSubmit = (event) => {
  event.preventDefault();
  dispatch(
    addActivity({
      title: value,
    })
  );
  setValue('')
};

  return (
    <form onSubmit={onSubmit}>
      <label>Activity Name</label>
      <input
        type="text"
        placeholder="Add an activity.."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};


export default AddActivityForm