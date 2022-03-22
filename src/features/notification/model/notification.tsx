import { Item } from "../../todos/model/item";

export type Notification = {
    isShowing: boolean,
    todoItem: Item,
    notificationMessage?: string
    cssClass?: string 
}