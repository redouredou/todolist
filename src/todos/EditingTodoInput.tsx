import * as React from "react";
import { FC,useState, Dispatch, SetStateAction, ChangeEvent} from 'react'

type EditingTodoInputState = {
    todoValueInput: string
}

type EditionTodoInputProps = {
    currentValue: string
    setStateTodoItem: (arg: any) => void;
}

const modifyTodo = (updateEditingTodoInputState: Dispatch<SetStateAction<EditingTodoInputState>>) => (e: ChangeEvent<HTMLInputElement>) => {
    updateEditingTodoInputState(prevState => ({...prevState, todoValueInput: e.target.value}))
}

const validateEdition = (updateTodoItemState : Dispatch<SetStateAction<EditingTodoInputState>>, state : EditingTodoInputState) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false, todoValue: state.todoValueInput}))
}

const cancelEdition = (updateTodoItemState : Dispatch<SetStateAction<EditingTodoInputState>>) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false }))
}


export const EditingTodoInput : FC<EditionTodoInputProps> = ({currentValue, setStateTodoItem}) => {

    const [state, setState] = useState<EditingTodoInputState>({todoValueInput: ""})

    return <>
            <input type="text" id="input_todo" defaultValue={currentValue} onChange = {modifyTodo(setState)}></input>
            <button type="button" name="validate_edition" onClick = {() => validateEdition(setStateTodoItem, state)}>Validate</button>
            <button type="button" name="cancel_edition" onClick = {() => cancelEdition(setStateTodoItem)}>Cancel</button>
        </>
}