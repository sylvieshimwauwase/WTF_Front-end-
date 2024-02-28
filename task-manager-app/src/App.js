import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
    const [tasks, setTasks] = useState([
      { id: 1, name: "Task 1", description: "Description 1", duedate: "2021-08-01" },
      { id: 2, name: "Task 2", description: "Description 2", duedate: "2021-08-02" },
      { id: 3, name: "Task 3", description: "Description 3", duedate: "2021-08-03" },
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