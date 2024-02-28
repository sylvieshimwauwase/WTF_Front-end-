import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
    const [tasks, setTasks] = useState([
      { id: 1, name: "Database", description: "working on the database of the project", duedate: "2024-03-01" },
      { id: 2, name: "Front-End", description: "working on front-end of the project", duedate: "2024-04-02" },
      { id: 3, name: "Back-End", description: "working on backend of the project", duedate: "2021-04-24" },
    ]);

    const addTask = (newTask) => {
        setTasks([...tasks, { id: Date.now(), ...newTask }]);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;