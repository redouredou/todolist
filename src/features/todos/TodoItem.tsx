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



export const TodoItem: FC<TodoItemProps> = ({value, id, index, moveUp, moveDown}) => {
    const dispatch = useDispatch();
    const { showNotificationTodoDeleted } = bindActionCreators(NotificationAC, dispatch)
    const { deleteTodofromTodoList } = bindActionCreators(TodoAC, dispatch)

    const [isEdit, setIsEdit] = useState<boolean>(false)

    const removeTodo = (id: number, value: string) => {
        deleteTodofromTodoList(id);
        showNotificationTodoDeleted({id: id, value: value})
    }

    
    return <>
        <div className={style['grid-todo-value']} >{isEdit ? <EditingTodoInput currentId={id} currentValue={value} setIsEdit={setIsEdit} /> : <span className={style["todo-value"]} >{value}</span>}</div>
        <div className={style['grid-todo-buttons']}>
        {!isEdit && <button type="button" name="modify_button" onClick={() => setIsEdit(true)}>Edit</button>}
        <button type="button" name="delete_button"  className= {style['scale-up']} onClick={() => removeTodo(id, value)} >Delete</button>
        <button type="button" name="moveUp_button" className= {style['scale-up']} onClick={() => moveUp(index)} >UP</button>
        <button type="button" name="moveDown_button" className= {style['scale-up']} onClick={() => moveDown(index)} >DOWN</button>
        </div>
    </>
}