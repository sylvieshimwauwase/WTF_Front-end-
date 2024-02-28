import React, { useState } from "react";
import "../css/AddTaskForm.css";

const AddTaskForm = (onAddTask) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duedate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name.trim() || !duedate.trim()) {
            alert("Please enter a name and due date for the task");
            return;
        }

        onAddTask({ name, description, duedate });
        setName("");
        setDescription("");
        setDueDate("");
    };

    return (
        <div className="add-task-form">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    type="date"
                    value={duedate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskForm;