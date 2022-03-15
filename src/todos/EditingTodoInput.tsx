import * as React from "react";

interface EditingTodoInputState {
    todoValueInput: string
}

interface EditionTodoInputProps {
    currentValue: string
    useStateTodoItem: (arg: any) => void;
}

const modifyTodo = (updateEditingTodoInputState: React.Dispatch<React.SetStateAction<EditingTodoInputState>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEditingTodoInputState(prevState => ({...prevState, todoValueInput: e.target.value}))
}

const validateEdition = (updateTodoItemState : React.Dispatch<React.SetStateAction<EditingTodoInputState>>, state : EditingTodoInputState) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false, todoValue: state.todoValueInput}))
}

const cancelEdition = (updateTodoItemState : React.Dispatch<React.SetStateAction<EditingTodoInputState>>) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false }))
}


export const EditingTodoInput : React.FC<EditionTodoInputProps> = ({currentValue, useStateTodoItem}) => {

    const [state, useState] = React.useState<EditingTodoInputState>({todoValueInput: ""})

    return <>
            <input type="text" id="input_todo" defaultValue={currentValue} onChange = {modifyTodo(useState)}></input>
            <button type="button" name="validate_edition" onClick = {() => validateEdition(useStateTodoItem, state)}>Validate</button>
            <button type="button" name="cancel_edition" onClick = {() => cancelEdition(useStateTodoItem)}>Cancel</button>
        </>
}