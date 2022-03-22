import { FC,useState, Dispatch, SetStateAction} from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NotificationAC, TodoAC } from '../../state'
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
    index: number
    moveUp: (index: number) => void
    moveDown: (index: number) => void
}

/*const editTodo = (updateTodoItemState: Dispatch<SetStateAction<TodoItemState>>) => {
    updateTodoItemState(prevState => ({ ...prevState, isEdit: true }))
}*/


export const TodoItem: FC<TodoItemProps> = ({value, id, isEdit, index, moveUp, moveDown}) => {
    const dispatch = useDispatch();
    const { showNotificationTodoDeleted } = bindActionCreators(NotificationAC, dispatch)
    const { deleteTodofromTodoList } = bindActionCreators(TodoAC, dispatch)
    
    const [state, setState] = useState<TodoItemState>(
        {
            isEdit,
            todoValue: value,
            todoValueInput: ''
        }
    )

    const removeTodo = (id: number, value: string) => {
        deleteTodofromTodoList(id);
        showNotificationTodoDeleted({id: id, value: value})
    }

    
    return <>
        <div className={style['grid-todo-value']} >{state.isEdit ? <EditingTodoInput currentValue={state.todoValue} setStateTodoItem={setState} /> : <span className={style["todo-value"]} >{state.todoValue}</span>}</div>
        <div className={style['grid-todo-buttons']}>
        {!state.isEdit && <button type="button" name="modify_button" onClick={() => editTodo(setState)}>Edit</button>}
        <button type="button" name="delete_button"  className= {style['scale-up']} onClick={() => removeTodo(id, value)} >Delete</button>
        <button type="button" name="moveUp_button" className= {style['scale-up']} onClick={() => moveUp(index)} >UP</button>
        <button type="button" name="moveDown_button" className= {style['scale-up']} onClick={() => moveDown(index)} >DOWN</button>
        </div>
    </>
}