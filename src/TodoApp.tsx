import {createContext, FC, useState, useEffect} from "react";
import { AddingTodoInput } from "./todos/addingTodoInput/AddingTodoInput";
import { TodoList } from "./todos/TodoList";
import { Item } from "./todos/model/item";
import { Notification } from "./todos/model/notification";
import styles from "./app.module.css";
import { NotificationPopup } from "./todos/notification/notificationPopup";


export const NotificationContext = createContext<any>(undefined);

export const TodoApp: FC = () => {

    const [items, setItems] = useState<Item[]>([])

    const updateTodoList = (newTodoList: Item[]) => setItems(newTodoList)

    const [notification, setNotification] = useState<Notification>({
        isShowing: false,
        taskName: '',
        todoEvent: null
    });

    return <div className={styles['app-root']}>
        <div className={styles['app-container']}>
        {notification.isShowing && <NotificationPopup notification={notification} setNotification={setNotification}/>}
            <NotificationContext.Provider value={setNotification}>
                <AddingTodoInput items={items} updateTodoList={updateTodoList} />
                <TodoList items={items} updateTodoList={updateTodoList} />
            </NotificationContext.Provider>
        </div>
    </div>
}
