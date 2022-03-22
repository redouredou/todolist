import { Item } from './../../features/todos/model/item';
import { Dispatch } from 'redux';
import { NotificationAction } from '../action';
import { NotificationTypes} from '../action-types';

export const showNotificationTodoAdded = (todoItem: Item) => {
    return (dispatch: Dispatch<NotificationAction> ) => {
        dispatch({
            type: NotificationTypes.NOTIFICATION_TODO_ADDED,
            payload: todoItem,
        });
    } 
} 

export const showNotificationTodoDeleted = (todoItem: Item) => {
    return (dispatch: Dispatch<NotificationAction> ) => {
        dispatch({
            type: NotificationTypes.NOTIFICATION_TODO_DELETED,
            payload: todoItem
        });
    } 
}

export const showNotificationTodoModified = (todoItem: Item) => {
    return (dispatch: Dispatch<NotificationAction> ) => {
        dispatch({
            type: NotificationTypes.NOTIFICATION_TODO_MODIFIED,
            payload: todoItem,
        });
    } 
} 



export const hideNotificationPopup = () => {
    return (dispatch: Dispatch<NotificationAction> ) => {
        dispatch({
            type: NotificationTypes.NOTIFICATION_HIDE
        });
    } 
} 