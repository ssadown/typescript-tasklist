import { FC, useRef, KeyboardEvent, useState } from "react"

interface ContentInputBlockProps {
    addTask(taskText: string): void
}

const ContentInputBlock: FC<ContentInputBlockProps> = (props) => {

    const value = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<Boolean>(false)

    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (value.current!.value !== '') {
                props.addTask(value.current!.value)
                value.current!.value = ''
                setError(false)
            } else {
                setError(true)
            }
        }
    }
    
    const addTask = () => {
        if (value.current!.value !== '') {
            props.addTask(value.current!.value)
            value.current!.value = ''
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <div className="input-block">
            <input 
            type="text" 
            placeholder="Введите задачу"
            ref={value}
            onKeyUp={keyPressHandler}
            />
            <p className={error ? 'error-text' : 'error-text__hidden'}>Поле пустое!</p>
            <button onClick={addTask}>Добавить задачу</button>
        </div>
    )
}

export default ContentInputBlock