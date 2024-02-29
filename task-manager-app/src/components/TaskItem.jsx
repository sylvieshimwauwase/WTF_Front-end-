import React from "react";
import "../css/TaskItem.css";

const TaskItem = ({ task }) => {
    return (
        <li  className="task-item">
            <div>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.duedate}</p>
            </div>
            <div>
                {task.status === "inProgress" ? (
                    <button>Mark as Completed</button>
                ) : (
                    <button>Mark as Uncompleted</button>
                )}
                <button>Delete Task</button>
                <button>Edit Task</button>
            </div>
        </li>
    );
};

export default TaskItem;