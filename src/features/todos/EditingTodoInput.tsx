import { FC,useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NotificationAC, TodoAC } from '../../state'

type TodoItemState = {
    isEdit: boolean
    todoValue: string
    todoValueInput: string
}

type EditionTodoInputProps = {
    currentId: number
    currentValue: string
    setIsEdit: (arg: any) => void;
}

export const EditingTodoInput : FC<EditionTodoInputProps> = ({currentId, currentValue, setIsEdit}) => {

    const dispatch = useDispatch();
    const { showNotificationTodoModified } = bindActionCreators(NotificationAC, dispatch)
    const { modifyTodofromTodoList } = bindActionCreators(TodoAC, dispatch)

    const validateEdition = ( todoValueInput: string) => {
        modifyTodofromTodoList({id: currentId, value: todoValueInput})
        showNotificationTodoModified({id: currentId, value: currentValue, modifiedValue: todoValueInput})
        setIsEdit(false);
    }
    

    const [todoValueInput, setTodoValueInput] = useState<string>(currentValue)

    return <>
            <input type="text" id="input_todo" defaultValue={currentValue} onChange = {(e) => setTodoValueInput(e.target.value)}></input>
            <button type="button" name="validate_edition" onClick = {() => validateEdition(todoValueInput)}>Validate</button>
            <button type="button" name="cancel_edition" onClick = {() => setIsEdit(false)}>Cancel</button>
        </>
}