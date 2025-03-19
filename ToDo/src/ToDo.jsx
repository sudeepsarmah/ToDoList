import React, { useState, } from "react"

export default function ToDo() {

    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDetail, setTaskDetail] = useState("")
    const [taskDate, setTaskDate] = useState(new Date().toISOString().split("T")[0])
    const [currentTask, setCurrentTask] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    const handleAddTask = () => {
        const newTask = { title: taskTitle, detail: taskDetail, date: taskDate }

        if (taskTitle.trim() !== "") {
            setTasks(t => [...t, newTask])

            setTaskTitle("")
            setTaskDetail("")
            setTaskDate(new Date().toISOString().split("T")[0])
        }
    }

    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    // My try at writing the code: 
    // const handleEditTask = (e, index) => {
    // // when the user clicks on the edit button, the task should open in the initial style where the user can edit and then save it again
    // setTaskTitle(e.target.value)
    // setTaskDetail(e.target.value)
    // setTaskDate(e.target.value)


    // if (taskTitle.trim() !== "") {
    //     const updatedTasks = tasks.map((task, index) => {
    //         return index === index ? { title: taskTitle, detail: taskDetail, date: taskDate } : task
    //     }
    //     )
    //     setUpdatedTasks(t => [...t, updatedTasks])

    //     setTaskTitle("")
    //     setTaskDetail("")
    //     setTaskDate(new Date().toISOString().split("T")[0].split("-").reverse().join("-"))
    // }
    // }

    const handleEditTask = (index) => {

        const taskToEdit = tasks[index]
        setCurrentTask(taskToEdit)
        setIsEditing(true)

        setTaskTitle(taskToEdit.taskTitle)
        setTaskDetail(taskToEdit.taskDetail)
        setTaskDate(taskToEdit.taskDate)

    };

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
                <input type="text" value={isEditing ? currentTask?.taskTitle || "" : taskTitle} onChange={handleAddTaskTitle} placeholder="Task Title..." />
                <input type="text" value={isEditing ? currentTask?.taskDetail || "" : taskDetail} onChange={handleAddTaskDetail} placeholder="Task Details.." />
                <input type="date" value={isEditing ? currentTask?.taskDate || "" : taskDate} onChange={handleAddTaskDate} />
                <button className="add-task-btn" onClick={isEditing ? handleEditTask : handleAddTask}>{isEditing ? "Edit Task" : "Add Task"}</button>
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