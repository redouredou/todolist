import * as React from 'react'
import { FC,useState, Dispatch, SetStateAction} from 'react'
import { EditingTodoInput } from './EditingTodoInput'
import style from './todos.module.css'


type TodoItemState = {
    isEdit: boolean
    todoValue: string
    todoValueInput: string
}

type TodoItemProps = {
    isEdit: boolean
    value: string
    id: number
    removeTodoById: (index: number) => void
    index: number
    moveUp: (index: number) => void
    moveDown: (index: number) => void
}

const editTodo = (updateTodoItemState: Dispatch<SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({ ...prevState, isEdit: true }))
}

export const TodoItem: FC<TodoItemProps> = ({value, id, isEdit, removeTodoById, index, moveUp, moveDown}) => {

    const [state, setState] = useState<TodoItemState>(
        {
            isEdit,
            todoValue: value,
            todoValueInput: ''
        }
    )

    return <>
        <div className={style['grid-todo-value']} >{state.isEdit ? <EditingTodoInput currentValue={value} setStateTodoItem={setState} /> : <span className={style["todo-value"]} >{state.todoValue}</span>}</div>
        <div className={style['grid-todo-buttons']}>
        {!state.isEdit && <button type="button" name="modify_button" onClick={() => editTodo(setState)}>Edit</button>}
        <button type="button" name="delete_button"  className= {style['scale-up']} onClick={() => removeTodoById(id)} >Delete</button>
        <button type="button" name="moveUp_button" className= {style['scale-up']} onClick={() => moveUp(index)} >UP</button>
        <button type="button" name="moveDown_button" className= {style['scale-up']} onClick={() => moveDown(index)} >DOWN</button>
        </div>
    </>
}