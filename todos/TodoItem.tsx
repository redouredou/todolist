import * as React from 'react'

interface TodoItemProps{
    item: string
    index: number
    deleteTodo: (arg: number) => void
}



export const TodoItem : React.FC<TodoItemProps>  = (props) => {
    return <div>
        {props.item}
        <button type="button" name="delete_button" onClick={() => props.deleteTodo(props.index)} >Delete</button>
        </div>
}