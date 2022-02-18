import * as React from 'react';

interface TodoListProps {
    items: string[]
}

export const TodoList: React.FC<TodoListProps> = ({items} : TodoListProps) => 
{

    return items && <ul>
        {items.map((item,index) => {
            return <li key={index}>{item}</li>
        })}
    </ul>
}
