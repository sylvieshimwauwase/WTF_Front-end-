import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddTAskForm, setShowAddTaskForm] = useState(false);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowAddTaskForm(false);
    };

    return (
        <div className="app-container">
            <h1>Task Manager</h1>
            <div>
              <button onClick={() => setShowAddTaskForm(true)}>
                Add new task
              </button>
            </div>
            {showAddTAskForm && (
              <div className="form-container">
                <AddTaskForm onAddTask={addTask} />
              </div>
            )}

            <div>
              <button>All Tasks</button>
              <button>Completed Tasks</button>
              <button>Uncompleted Tasks</button>
              <button>Due Today</button>
              <button>Overdue Tasks</button>
              <button>Deleted Tasks</button>
            </div>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default App;