
import { TodoTypes } from './../action-types/index';
import {NotificationTypes} from '../action-types';
import { Item } from '../../features/todos/model/item';

export type NotificationAction = {
    type: NotificationTypes
    payload?: Item
}


export interface TodoAction {
    type: TodoTypes
    payload?: Item
}
