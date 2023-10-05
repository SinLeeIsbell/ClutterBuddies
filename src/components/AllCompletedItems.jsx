import { useSelector } from "react-redux";

const AllCompletedItems = () => {
  // useSelector(state) gives us the complete state tree to start
  const totalActivities = useSelector((state) => state.activities);

  const completedItems = totalActivities.filter(
    (activity) => activity.completed
  ).length;
  //rememer we specify state.activites because that's the one we are passing
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
