import { useDispatch } from "react-redux";
import { useState } from "react";
import { addActivityToFirebase } from './reducers/activitiesSlice'


const AddActivityForm = () => {
  const [value, setValue] = useState({ title: "", notes: "" });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.title.trim() !== "") {
      dispatch(addActivityToFirebase(value))
      setValue({ title: "", notes: "" });
    }
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Activity Name</label>
      <input className="activityInput"
        type="text"
        name="title"
        placeholder="Add an activity.."
        value={value.title}
        onChange={onChange}
      ></input>
      <div className="padding">
      <label>Activity Notes</label>
      <input className="notesInput"
        type="text"
        name="notes"
        placeholder="Add a note.."
        value={value.notes}
        onChange={onChange}
      ></input>
       </div>
       <div className="padding">
      <button type="submit" className="coralBtn">Submit</button>
      </div>
    </form>
  );
};

export default AddActivityForm;
