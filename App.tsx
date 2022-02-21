import * as React from "react";
import { sources } from "webpack";
import { TodoInput } from "./todos/TodoInput";
import { TodoList } from "./todos/TodoList";

type Item = {
    id: number
    value : string
}

interface State {
    items?: Item[]
}

export const App: React.FC = () => {

    const [state, useState] = React.useState<State>({
        items: []
    })

    const updateTodoList = (newTodoList: Item[]) => {
        useState({items : newTodoList})
    }

    const deleteTodo = (newTodoList: Item[]) => {
        //const indexsOfItems = state.items.map((item, index) => index);
        //const newArray = state.items.filter(element => indexsOfItems.indexOf(index) !== index);
        useState({items : newTodoList})
    }


    return <>
        <TodoInput items={state.items} updateTodoList={updateTodoList} /> 
        <TodoList items={state.items} updateTodoList={updateTodoList} deleteTodo={deleteTodo} />
    </>
}
