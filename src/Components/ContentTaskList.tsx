import { FC } from "react"
import { TaskInterface } from "../Interfaces/TaskInterface"
import TaskBlock from "./TaskBlock"

type TaskListProps = {
    tasks: TaskInterface[]
    completeTask(id: number): void,
    removeTask(id: number): void
}

const ContentTaskList: FC<TaskListProps> = ({
    tasks,
    removeTask,
    completeTask
}) => {
    if (tasks.length === 0) {
        return <p className="text-center">Задач нет!</p>
    } else {
        return (
            <div className="task-list">
                {tasks.map(task => {
                    return (
                            <TaskBlock
                                key={task.taskId}
                                task={task}
                                removeTask={removeTask}
                                completeTask={completeTask}
                            />
                    )
                })}
            </div>
        )
    }
}

export default ContentTaskList