import * as React from 'react';
import { TodoItem } from './TodoItem';


type Item = {
    id: number
    value : string
}
interface TodoListProps {
    items: Item[]
    deleteTodo: (arg: Item[]) => void
    updateTodoList: (arg: Item[]) => void
}


export const TodoList: React.FC<TodoListProps> = ({items, updateTodoList} : TodoListProps) => 
{

    const removeTodoById = (id: number) => {
        const newItems = [...items].filter(item => item.id != id)
        updateTodoList(newItems)
    }


    return items && <ul>
        {items.map((item) => {
            return <li key={item.id}>
                    <TodoItem item={item.value} id={item.id} isEdit={false} removeTodoById={removeTodoById} />
                </li>
        })}
    </ul>
}
