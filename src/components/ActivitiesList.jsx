import ActivityItem from "./ActivityItem";
import { useSelector } from "react-redux";

const ActivitiesList = () => {
  const activities = useSelector((state) => state.activities.activities);

  return (
    <ul className="activityMap">
      {activities.map((activity) => (
        <ActivityItem
        key={activity.id}
          id={activity.id}
          title={activity.title}
          completed={activity.completed}
          notes={activity.notes}
        />
      ))}
    </ul>
  );
};

export default ActivitiesList;
