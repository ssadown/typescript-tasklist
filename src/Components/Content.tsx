import { FC, useState } from "react"
import ContentInputBlock from "./ContentInputBlock"
import { TaskInterface } from "../Interfaces/TaskInterface"
import ContentTaskList from "./ContentTaskList"

const Content: FC = () => {

    const [tasks, setTasks] = useState<TaskInterface[]>([])
    
    const addTask = (taskText: string) => {
        const newTask: TaskInterface = {
            taskText: taskText,
            taskId: Math.floor(Math.random() * 10000),
            taskCompleted: false
        }
        tasks.map(task => {
            if (task.taskId === newTask.taskId) {
                return {...task, taskId: Math.floor(Math.random() * 10000)}
            }
            return task
        })
        setTasks(prevTasks => [newTask, ...prevTasks])
    }

    const completeTask = (taskId: number) => {
        setTasks (prevTasks => 
            prevTasks.map(task => {
                if (task.taskId === taskId) {
                    return { ...task, taskCompleted: !task.taskCompleted };
                }
                return task
            }))
    }

    const removeTask = (taskId: number) => {
        setTasks (prev => prev.filter(task => task.taskId !== taskId))
    }
    return (
        <main>
            <ContentInputBlock
            addTask={addTask}
            />
            <ContentTaskList
            tasks={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
            />
        </main>
    )
}

export default Content