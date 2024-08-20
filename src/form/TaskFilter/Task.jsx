const Task = ({ data: { text, id }, onDelete }) => {
  return (
    <div>
      <p>{text}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
