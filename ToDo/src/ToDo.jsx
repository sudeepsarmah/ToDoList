import React, { useState, } from "react"

export default function ToDo() {

    const [tasks, setTasks] = useState([])


    return (
        <div className="todo">
            <h2>List of Task</h2>
            <div className="user-input">
                <input type="text" value={taskTitle} onChange={handleTaskTitle} placeholder="Task Title..." />
                <input type="text" value={taskDetails} onChange={handleTaskDetails} placeholder="Task Details.." />
                <input type="date" value={taskDate} onChange={handleTaskDate} />
                <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
            </div>
            <section>
                <div className="ongoing-tasks">
                    <ol>

                    </ol>
                </div>
                <div className="completed-tasks">
                    <ol>

                    </ol>
                </div>
                <div className="deleted-tasks">
                    <ol>

                    </ol>
                </div>
            </section>
        </div>
    )
}