import * as React from "react";
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

    return <>
        <TodoInput items={state.items} updateTodoList={update}/> 
        <TodoList items={state.items}/>
    </>
}
