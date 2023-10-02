import ActivityItem from "./ActivityItem";
import { useSelector } from "react-redux";

const AcvitiesList = () => {
  const activities = useSelector((state) => state.activities);
  //this accepts the state which is passed in by redux
  //this will go to the store, check all the activities in state
  //and assign it to the activites variable
  //if you have multiple slices of state, this returns the whole thing which is why you
  //specify the reducer you are using for this one

  return (
    <ul className="activityMap">
      {activities.map((activity) => (
        <ActivityItem
          id={activity.id}
          title={activity.title}
          completed={activity.completed}
        />
      ))}
    </ul>
  );
};

export default AcvitiesList;
