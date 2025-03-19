import React, { useState } from "react"

export default function ToDo() {

    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDetail, setTaskDetail] = useState("")
    const [taskDate, setTaskDate] = useState(new Date().toISOString().split("T")[0])
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    const handleAddTask = () => {
        const newTask = { title: taskTitle, detail: taskDetail, date: taskDate }

        if (taskTitle.trim() !== "") {
            setTasks(t => [...t, newTask])

            setTaskTitle("")
            setTaskDetail("")
            setTaskDate(new Date().toISOString().split("T")[0])
        } else {
            alert("Please enter a valid task title")
        }
    }

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    const handleEditTask = (index) => {

        const taskToEdit = tasks[index]
        setCurrentTaskIndex(index)
        setIsEditing(true)

        setTaskTitle(taskToEdit.title)
        setTaskDetail(taskToEdit.detail)
        setTaskDate(taskToEdit.date)

    };

    const handleUpdateTask = () => {

        const updatedTask = { title: taskTitle, detail: taskDetail, date: taskDate }

        const updatedTasksArray = tasks.map((task, index) => (index === currentTaskIndex ? updatedTask : task));

        if (taskTitle.trim() !== "") {
            setTasks(updatedTasksArray)
            setIsEditing(false)
            setTaskTitle("");
            setTaskDetail("");
            setTaskDate(new Date().toISOString().split("T")[0]);
        } else {
            alert("Please enter a valid task title!")
        }

    }

    const handleAddTaskTitle = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleAddTaskDetail = (e) => {
        setTaskDetail(e.target.value)
    }

    const handleAddTaskDate = (e) => {
        setTaskDate(e.target.value)
    }

    return (
        <div className="todo">
            <h2>List of Task</h2>
            <div className="user-input">
                {/* value is set according to if it's in editing mode or adding new task mode */}
                {/* optional chaining to prevent causing errors and to show an empty string in case there's no value to show */}
                <input type="text" value={taskTitle} onChange={handleAddTaskTitle} placeholder="Task Title..." />
                <input type="text" value={taskDetail} onChange={handleAddTaskDetail} placeholder="Task Details.." />
                <input type="date" value={taskDate} onChange={handleAddTaskDate} />
                <button className="add-task-btn" onClick={isEditing ? handleUpdateTask : handleAddTask}>{isEditing ? "Edit Task" : "Add Task"}</button>
            </div>
            <section>
                <div className="ongoing-tasks">
                    <ol>
                        {tasks.map((task, index) =>
                            <li key={index}>
                                <span><strong>{task.title}</strong> - {task.date}</span>
                                <p>{task.detail}</p>
                                <div className="btn-div">
                                    <button onClick={() => handleRemoveTask(index)} className="done-btn btn">✅</button>
                                    <button onClick={() => handleEditTask(index)} className="edit-btn btn">Edit</button>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
            </section>
        </div>
    )
}