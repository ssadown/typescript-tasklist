import { FC } from "react"
import { TaskInterface } from "../Interfaces/TaskInterface"

type TaskBlockProps = {
    task: TaskInterface
    completeTask(id: number): void,
    removeTask(id: number): void
}

const TaskBlock: FC<TaskBlockProps> = ({
    task,
    completeTask,
    removeTask,
}) => {
    return (
        <div className={task.taskCompleted ? "task-block complete-block" : 'task-block'}>
            <h1 className={task.taskCompleted ? 'task-complete__text' : ''}>{task.taskId}</h1>
            <p className={task.taskCompleted ? 'task-complete__text' : ''}>{task.taskText}</p>
            <div className="check-block">
                <input type="checkbox" name="" id={`checkbox${task.taskId}`} checked={task.taskCompleted} onChange={() => completeTask(task.taskId)}/>
                <label htmlFor={`checkbox${task.taskId}`} className={task.taskCompleted ? 'task-complete__text' : ''}>Выполнено</label>
            </div>
            <button className={task.taskCompleted ? 'complete-button' : ''} onClick={() => {removeTask(task.taskId)}}>Удалить задачу</button>
        </div>
    )
}

export default TaskBlock
