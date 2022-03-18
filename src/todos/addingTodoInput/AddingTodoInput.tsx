import { FC, useState, Dispatch, SetStateAction, ChangeEvent, KeyboardEvent, useContext } from 'react'
import { motion } from "framer-motion"
import { Item } from '../model/item';
import style from './addingTodo.module.css'
import { NotificationContext } from '../../TodoApp'
import { Notification } from '../model/notification';
import { TodoEvent } from '../model/todo-event';

type Props = {
    items: Item[]
    updateTodoList: (arg : Item[]) => void;
}


export const AddingTodoInput: FC<Props> = ({items, updateTodoList} : Props) => {

    const [item, setItem] = useState<Item>({
        value: "",
        id: 0
    })

    let {value, id} = item;


    const updateItemValue = (addItem: Dispatch<SetStateAction<Item>>) => (e: ChangeEvent<HTMLInputElement>) => {
       addItem(prevState => ({...prevState, value: e.target.value}))
    }

    const onAddButton = (updateTodoListFunc : any) => () =>  {
        const newItem = {
            id: id++,
            value
        }

        value && updateTodoListFunc([...items, newItem]);
        setItem({value: "", id: id++});
    }

    const onEnterPress = (updateTodoListFunc: (arg : Item[]) => void, setNotification: (arg : Notification) => any) => (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            const newItem = {
                id: id++,
                value
            }
    
            value && updateTodoListFunc([...items, newItem]);
            setItem({value: "", id: id++});
            setNotification({isShowing:true, taskName: value, todoEvent: TodoEvent.ADDED});
        }
    }

    const NotificationCtx : any = useContext(NotificationContext);
  
    return <div className={style.container}>
        <h2> Which task do you want to add?</h2>
        <input 
            type="text" 
            id="input_todo" 
            value={value} 
            onChange={updateItemValue(setItem)}
            onKeyPress={onEnterPress(updateTodoList, NotificationCtx)}
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
            onClick={onAddButton(updateTodoList)}>Add</motion.button>
    </div>
}
