import { useRef, useEffect, useContext, Dispatch, SetStateAction} from 'react';
import { Item } from './model/item';
import { TodoItem } from './TodoItem';
import { FC } from 'react'
import style from './todos.module.css';
import { motion, AnimatePresence, useMotionValue} from 'framer-motion';
import { Notification } from './model/notification';
import { TodoEvent } from '../todos/model/todo-event'
import { NotificationContext } from '../../src/TodoApp';

type TodoListProps = {
    items: Item[]
    updateTodoList: (arg: Item[]) => void
}

export const TodoList: FC<TodoListProps> = ({ items, updateTodoList }: TodoListProps) => {
    const prevItems = useRef<Item[]>();

    useEffect(() => {
        prevItems.current = items;
    });

    const removeTodoById = (id: number, setNotification: (arg: Notification ) => void ) => {
        const newItems = items.filter(item => item.id != id)
        const deletedItemName = items.filter(item => item.id === id)[0].value;
        
        setNotification({isShowing: true, taskName: deletedItemName, todoEvent: TodoEvent.DELETED});
        updateTodoList(newItems)
    }

    const moveUp = (index: number) => {
        const newItems = [...items];

        let itemTmp: Item = { id: null, value: null };

        if (index !== 0) {
            /*itemTmp = newItems[index - 1]
            newItems[index - 1] = newItems[index]
            newItems[index] = itemTmp*/
            [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]] 
            updateTodoList(newItems)
        }

    }

    const moveDown = (index: number) => {
        const newItems = [...items];

        let itemTmp: Item = { id: null, value: null };

        if (index !== items.length - 1) {
            itemTmp = newItems[index + 1]
            newItems[index + 1] = newItems[index]
            newItems[index] = itemTmp
            updateTodoList(newItems)
        }
    }

    const target = {
        y: "30px",
        opacity: 0,
        transition: { duration: 1 },
        transitionEnd: { display: "none" }
    }

    function onStart() {
        console.log("Animation started")
      }

      const y = useMotionValue(50)

      const NotificationCtx: Dispatch<SetStateAction<Notification>> = useContext(NotificationContext);

    return items && <motion.ul>
        <AnimatePresence>
            {items.map((item, index) => {
                return <motion.li
                    key={item.id}
                    animate={{ y: 30 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    onAnimationStart={onStart}
                    exit={target}
                    className={style["grid-todo-item"]} 
                    >
                    <TodoItem
                        value={item.value}
                        id={item.id}
                        isEdit={false}
                        removeTodoById={() => removeTodoById(item.id, NotificationCtx)}
                        index={index}
                        moveUp={moveUp}
                        moveDown={moveDown} />
                </motion.li>
            })}
        </AnimatePresence>
    </motion.ul>
}
