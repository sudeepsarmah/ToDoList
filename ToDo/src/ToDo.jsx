import React, { useState, } from "react"

export default function ToDo() {

    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDetail, setTaskDetail] = useState("")
    const [taskDate, setTaskDate] = useState(new Date().toISOString().split("T")[0].split("-").reverse().join("-"))
    const [updatedTasks, setUpdatedTasks] = useState()

    const handleAddTask = () => {
        const newTask = { title: taskTitle, detail: taskDetail, date: taskDate }

        if (taskTitle.trim() !== "") {
            setTasks(t => [...t, newTask])

            setTaskTitle("")
            setTaskDetail("")
            setTaskDate(new Date().toISOString().split("T")[0].split("-").reverse().join("-"))
        }
    }

    const handleRemoveTask = (index) => {

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
        if (taskTitle.trim() !== "") {
            const updatedTasks = tasks.map((task, i) => {
                return i === index
                    ? { title: taskTitle, detail: taskDetail, date: taskDate }
                    : task;
            });

            setUpdatedTasks(updatedTasks); // Replace the tasks correctly

            // Reset input fields
            setTaskTitle("");
            setTaskDetail("");
            setTaskDate(new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'));
        }
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
                <input type="text" value={taskTitle} onChange={handleAddTaskTitle} placeholder="Task Title..." />
                <input type="text" value={taskDetail} onChange={handleAddTaskDetail} placeholder="Task Details.." />
                <input type="date" value={taskDate} onChange={handleAddTaskDate} />
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