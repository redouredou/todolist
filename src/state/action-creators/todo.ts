import { TodoAction } from './../action/index';
import { Dispatch } from 'redux';
import {TodoTypes } from '../action-types';
import { Item } from '../../features/todos/model/item';

export const addTodoToTodoList = (newItem: Item) => {
    return (dispatch: Dispatch<TodoAction> ) => {
        dispatch({
            type: TodoTypes.TODO_ADD,
            payload: newItem,
        });
    } 
} 

export const deleteTodofromTodoList = (todoId: number) => {
    return (dispatch: Dispatch<TodoAction> ) => {
        dispatch({
            type: TodoTypes.TODO_DELETE,
            payload: {id: todoId},
        });
    } 
}

export const modifyTodofromTodoList = (newItem: Item) => {
    return (dispatch: Dispatch<TodoAction> ) => {
        dispatch({
            type: TodoTypes.TODO_MODIFY,
            payload: newItem,
        });
    } 
} 