import { useDispatch } from "react-redux";
// import { addActivity } from "./reducers/activitiesSlice";
import { useState } from "react";
import { addActivityToFirebase } from './reducers/activitiesSlice'


const AddActivityForm = () => {
  const [value, setValue] = useState({ title: "", notes: "" });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.title.trim() !== "" && value.notes.trim() !== "") {
      // dispatch(addActivity(value));
      dispatch(addActivityToFirebase(value))
      setValue({ title: "", notes: "" });
    }
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(setValue({ ...value, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Activity Name</label>
      <input
        type="text"
        name="title"
        placeholder="Add an activity.."
        value={value.title}
        onChange={onChange}
      ></input>
      <label>Activity Notes</label>
      <input
        type="text"
        name="notes"
        placeholder="Add an activity.."
        value={value.notes}
        onChange={onChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddActivityForm;
