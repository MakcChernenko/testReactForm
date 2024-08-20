import Task from "./Task";

const TaskList = ({ tasks, onDelete }) => {
  console.log({ tasks });

  return (
    <ul>
      {tasks.map((task) => {
        console.log({ task });

        return (
          <li key={task.id}>
            <Task data={task} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
export default TaskList;
