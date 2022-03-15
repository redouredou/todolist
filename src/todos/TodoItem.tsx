import * as React from 'react'
import { EditingTodoInput } from './EditingTodoInput'


interface TodoItemState {
    isEdit: boolean
    todoValue: string
    todoValueInput: string
}
interface TodoItemProps {
    isEdit: boolean
    value: string
    id: number
    removeTodoById: (index: number) => void
    index: number
    moveUp: (index: number) => void
    moveDown: (index: number) => void

}

const editTodo = (updateTodoItemState: React.Dispatch<React.SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({ ...prevState, isEdit: true }))
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {

    const [state, useState] = React.useState<TodoItemState>(
        {
            isEdit: props.isEdit,
            todoValue: props.value,
            todoValueInput: ''
        }
    )

    return <>
        {state.isEdit ? <EditingTodoInput currentValue={props.value} useStateTodoItem={useState} /> : state.todoValue} 
        {!state.isEdit && <button type="button" name="modify_button" onClick={() => editTodo(useState)}>Edit</button>}
        <button type="button" name="delete_button" onClick={() => props.removeTodoById(props.id)} >Delete</button>
        <button type="button" name="moveUp_button" onClick={() => props.moveUp(props.index)} >UP</button>
        <button type="button" name="moveDown_button" onClick={() => props.moveDown(props.index)} >DOWN</button>
    </>
}