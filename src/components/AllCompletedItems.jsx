import { useSelector } from "react-redux";

const AllCompletedItems = () => {
  const totalActivities = useSelector((state) => state.activities.activities);

  const completedItems = totalActivities.filter(
    (activity) => activity.completed
  ).length;
  const incompleteItems = totalActivities.filter(
    (activity) => !activity.completed
  ).length;

  return (
    <>
      <h4>Total Complete Items: {completedItems}</h4>
      <h4>Total Items Left to Complete: {incompleteItems}</h4>
    </>
  );
};

export default AllCompletedItems;
