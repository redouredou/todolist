import { TodoItem } from './../../features/todos/TodoItem';
import { NotificationAction } from '../action/index';
import { NotificationTypes } from '../action-types';
import { Notification } from '../../features/notification/model/notification';


const initialState: Notification = {
    isShowing: false,
    notificationMessage: '',
    todoItem: null
}

const notificationReducer = (state: Notification = initialState, action: NotificationAction) => {
    switch(action.type){
        case NotificationTypes.NOTIFICATION_TODO_ADDED:
            return {
                isShowing: true,
                notificationMessage: `You are added the task "${action.payload.value}", Well done!`,
                cssClass: 'container-notification-add'
            }
        case NotificationTypes.NOTIFICATION_TODO_DELETED:
            return {
                isShowing: true,
                notificationMessage: `You are deleted the task "${action.payload.value}" !`,
                cssClass: 'container-notification-delete'
            }
        case NotificationTypes.NOTIFICATION_TODO_MODIFIED:
                return {
                    isShowing: true,
                    notificationMessage: `You are modified the task "${action.payload.value}" to "${action.payload.modifiedValue}"!`,
                    cssClass: 'container-notification-modify'
                }
        case NotificationTypes.NOTIFICATION_HIDE:
                return {isShowing: false}
        default:
            return state;
    }
}

export default notificationReducer