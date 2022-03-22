import { FC,useState, Dispatch, SetStateAction, ChangeEvent } from 'react'

type TodoItemState = {
    isEdit: boolean
    todoValue: string
    todoValueInput: string
}

type EditionTodoInputProps = {
    currentValue: string
    setStateTodoItem: (arg: TodoItemState) => void;
}

const modifyTodo = (updateEditingTodoInputState: Dispatch<SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    updateEditingTodoInputState(e.target.value);
}

const validateEdition = (updateTodoItemState : Dispatch<SetStateAction<TodoItemState>>, todoValueInput: string) => {

    updateTodoItemState(prevState => ({...prevState, isEdit: false, todoValue: todoValueInput}))
}

const cancelEdition = (updateTodoItemState : Dispatch<SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({...prevState, isEdit: false }))
}


export const EditingTodoInput : FC<EditionTodoInputProps> = ({currentValue, setStateTodoItem}) => {


    const [todoValueInput, setTodoValueInput] = useState<string>(currentValue)

    return <>
            <input type="text" id="input_todo" defaultValue={currentValue} onChange = {modifyTodo(setTodoValueInput)}></input>
            <button type="button" name="validate_edition" onClick = {() => validateEdition(setStateTodoItem, todoValueInput)}>Validate</button>
            <button type="button" name="cancel_edition" onClick = {() => cancelEdition(setStateTodoItem)}>Cancel</button>
        </>
}