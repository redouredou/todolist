import * as React from 'react';
import { TodoItem } from './TodoItem';
interface TodoListProps {
    items: string[]
    deleteTodo: (arg: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({items, deleteTodo} : TodoListProps) => 
{

    return items && <div>
        {items.map((item,index) => {
            //return <li key={index}>{item}</li>
            return <TodoItem item={item} index={index} deleteTodo = {deleteTodo} />
        })}
    </div>
}
