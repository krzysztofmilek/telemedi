import React from "react";
import { TodoType } from "./Todo.types";

interface Props {
  task: TodoType;
  handleDelete: (_id: number) => void;
  handleDone: (_id: number) => void;
}

const Todo: React.FC<Props> = ({
  task,
  handleDone,
  handleDelete,
}) => {
 
  return (
    <tr>
      <td
        style={{
          width: "300px",
          fontWeight: task.done ? "" : "bold",
          textDecoration: task.done ? "line-through" : "",
        }}
      >
        {task?.content}
      </td>
      <td style={{ width: "150px" }}>
        <input
          type="checkbox"
          onClick={() => handleDone(task._id)}
          defaultChecked={task?.done}
        />
      </td>
      <td >
        <button className="btn" onClick={() => handleDelete(task._id)}>USUŃ OK</button>
      </td>
    </tr>
  );
};

export default Todo;
