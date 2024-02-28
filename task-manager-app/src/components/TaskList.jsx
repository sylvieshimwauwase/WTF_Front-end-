import React from "react";
import TaskItem from "./TaskItem";
import "../css/TaskList.css";

const TaskList = ({ tasks}) => {
    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;