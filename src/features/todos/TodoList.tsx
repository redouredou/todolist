import { useRef, useEffect} from 'react';
import { Item } from './model/item';
import { TodoItem } from './TodoItem';
import { FC } from 'react'
import style from './todos.module.css';
import { motion, AnimatePresence, useMotionValue} from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationAC, State } from '../../state';
import { hideNotificationPopup } from '../../state/action-creators/notification';


export const TodoList: FC = () => {
    const todos = useSelector((state: State) => state.todos);


    const prevItems = useRef<Item[]>();

    useEffect(() => {
        prevItems.current = todos;
    });

    const dispatch = useDispatch();
    const { showNotificationTodoDeleted } = bindActionCreators(NotificationAC, dispatch)



    const removeTodoById = (id: number) => {
        const newItems = [...todos].filter(item => item.id != id)
        const deletedItemName = todos.filter(item => item.id === id)[0].value;
        
        hideNotificationPopup();
     //   updateTodoList(newItems)
    }

    const moveUp = (index: number) => {
        const newItems = [...todos];

        let itemTmp: Item = { id: null, value: null };

        if (index != 0) {
            itemTmp = newItems[index - 1]
            newItems[index - 1] = newItems[index]
            newItems[index] = itemTmp
     //       updateTodoList(newItems)
        }

    }

    const moveDown = (index: number) => {
        const newItems = [...todos];

        let itemTmp: Item = { id: null, value: null };

        if (index != todos.length - 1) {
            itemTmp = newItems[index + 1]
            newItems[index + 1] = newItems[index]
            newItems[index] = itemTmp
       //     updateTodoList(newItems)
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

    return todos && <motion.ul>
        <AnimatePresence>
            {todos.map((item, index) => {
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
                        index={index}
                        moveUp={moveUp}
                        moveDown={moveDown} />
                </motion.li>
            })}
        </AnimatePresence>
    </motion.ul>
}
