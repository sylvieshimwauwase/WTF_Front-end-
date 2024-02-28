import React from "react";
import "../css/TaskItem.css";

const TaskItem = ({ task }) => {
    return (
        <li  className="task-item-list">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.duedate}</p>
            <button>Complete</button>
            <button>Delete</button>
            <button>Edit</button>
        </li>
    );
};

export default TaskItem;