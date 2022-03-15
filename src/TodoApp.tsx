import * as React from "react";
import {FC, useState} from "react";
import { AddingTodoInput } from "./todos/addingTodoInput/AddingTodoInput";
import { TodoList } from "./todos/TodoList";
import styles from "./app.module.css";


type Item = {
    id: number
    value : string
}


export const TodoApp: FC = () => {

    const [items, setItems] = useState<Item[]>([])
    
    const updateTodoList = (newTodoList: Item[]) => setItems(newTodoList)

    return <div className={styles['app-root']}>
        <div className={styles['app-container']}>
            <AddingTodoInput items={items} updateTodoList={updateTodoList} /> 
            <TodoList items={items} updateTodoList={updateTodoList} />
        </div>
    </div>
}
