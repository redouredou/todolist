import * as React from 'react';
import { Item } from './model/item';
import { TodoItem } from './TodoItem';
import { FC } from 'react'
import style from './todos.module.css';




type TodoListProps = {
    items: Item[]
    updateTodoList: (arg: Item[]) => void
}

export const TodoList: FC<TodoListProps> = ({items, updateTodoList} : TodoListProps) => 
{


    const removeTodoById = (id: number) => {
        const newItems = [...items].filter(item => item.id != id)
        updateTodoList(newItems)
    }

    const moveUp = (index: number) => {
        const newItems = [...items];

        let itemTmp : Item = {id: null, value: null};

        if(index != 0){
            itemTmp = newItems[index - 1]
            newItems[index - 1] = newItems[index]
            newItems[index] = itemTmp
            updateTodoList(newItems)
        }
        
    }

    const moveDown = (index: number) => {
        const newItems = [...items];

        let itemTmp : Item = {id: null, value: null};

        if(index != items.length - 1){
            itemTmp = newItems[index + 1]
            newItems[index + 1] = newItems[index]
            newItems[index] = itemTmp
            updateTodoList(newItems)
        }
    }

    
    return items && <ul>
        {items.map((item, index) => {
            return <li key={item.id} className={style["grid-todo-item"]} >
                    <TodoItem 
                        value={item.value} 
                        id={item.id} 
                        isEdit={false} 
                        removeTodoById={removeTodoById}
                        index={index}
                        moveUp={moveUp}
                        moveDown={moveDown} />
                </li>
        })}
    </ul>
}
