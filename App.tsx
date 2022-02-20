import * as React from "react";
import { sources } from "webpack";
import { TodoInput } from "./todos/TodoInput";
import { TodoList } from "./todos/TodoList";

interface State {
    items?: string[]
}

export const App: React.FC = () => {

    const [state, useState] = React.useState<State>({
        items: []
    })

    const update = (newTodoList: string[]) => {
        useState({items : newTodoList})
    }

    const deleteTodo = (index : number) => {
        state.items.splice(index, 1)
        useState({items : [...state.items]})
    }


    return <>
        <TodoInput items={state.items} updateTodoList={update} /> 
        <TodoList items={state.items} deleteTodo={deleteTodo} />
    </>
}
