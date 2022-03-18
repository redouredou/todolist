import { TodoEvent } from "./todo-event";

export type Notification = {
    isShowing: boolean,
    taskName: string
    todoEvent: TodoEvent;
}