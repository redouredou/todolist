import { FC, KeyboardEvent, useState } from 'react'
import { motion } from "framer-motion"
import style from './addingTodo.module.css'
import { bindActionCreators } from 'redux';
import { NotificationAC, TodoAC } from '../../../state';
import { useDispatch } from 'react-redux';


export const AddingTodoInput: FC = () => {

    const [todoInputValue, setTodoInputValue] = useState('');

    const dispatch = useDispatch();
    const { showNotificationTodoAdded } = bindActionCreators(NotificationAC, dispatch)
    const { addTodoToTodoList } = bindActionCreators(TodoAC, dispatch)


    const addTodo = () =>  {
        if(todoInputValue){
            addTodoToTodoList({id: new Date().getTime(), value: todoInputValue})
            showNotificationTodoAdded({id: new Date().getTime(), value: todoInputValue})
            setTodoInputValue('')
        }
    }

    const onEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if(todoInputValue && event.key === 'Enter'){
            addTodoToTodoList({id: new Date().getTime(), value: todoInputValue})
            showNotificationTodoAdded({id: new Date().getTime(), value: todoInputValue})
            setTodoInputValue('')
        }
    }
  
    return <div className={style.container}>
        <h2> Which task do you want to add?</h2>
        <input 
            type="text" 
            id="input_todo" 
            value={todoInputValue} 
            onChange={e => setTodoInputValue(e.target.value)}
            onKeyPress={onEnterPress}
            >
        </input>
        <motion.button
            whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.1 }, 
            }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            name="button_submit"
            onClick={addTodo}>Add</motion.button>
    </div>
}
