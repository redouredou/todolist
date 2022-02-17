import * as React from "react";
import { TodoInput } from "./todos/TodoInput";
import { TodoList } from "./todos/TodoList";



export const App: React.FC = () => {
    return <>
        <TodoInput/> 
        <TodoList/>
    </>
}
