import * as React from 'react'


interface TodoItemState {
    isEdit: boolean
    todoValue: string
    todoValueInput: string
}
interface TodoItemProps{
    isEdit: boolean
    item: string
    id: number
    removeTodoById: (index: number) => void
    
}

const editTodo  = (updateTodoItemState : React.Dispatch<React.SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: true}))
}

const modifyTodo = (updateTodoItemState : React.Dispatch<React.SetStateAction<TodoItemState>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoItemState(prevState => ({...prevState, todoValueInput: e.target.value}) )
}

const validateEdition = (updateTodoItemState : React.Dispatch<React.SetStateAction<TodoItemState>>, state : TodoItemState) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false, todoValue: state.todoValueInput}))
}

const cancelEdition = (updateTodoItemState : React.Dispatch<React.SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false }))
}





export const TodoItem : React.FC<TodoItemProps>  = (props) => {

    const [state, useState] = React.useState<TodoItemState>({isEdit : props.isEdit , todoValue: props.item, todoValueInput: ''})
    
    return <>
        
        {state.isEdit &&
            <>
            <input type="text" id="input_todo" defaultValue={state.todoValue} onChange = {modifyTodo(useState)}></input>
            <button type="button" name="validate_edition" onClick = {() => validateEdition(useState, state)}>Validate</button>
            <button type="button" name="cancel_edition" onClick = {() => cancelEdition(useState)}>Cancel</button>
            </>    
        }
        {!state.isEdit && state.todoValue}

        <button type="button" name="delete_button" onClick={() => props.removeTodoById(props.id)} >Delete</button>
        {!state.isEdit && <button type="button" name="modify_button" onClick={() => editTodo(useState)}>Edit</button>}
        </>
}