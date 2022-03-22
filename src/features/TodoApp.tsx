import { FC} from "react";
import { AddingTodoInput } from "./todos/addingTodoInput/AddingTodoInput";
import { TodoList } from "./todos/TodoList";
import styles from "./app.module.css";
import { NotificationPopup } from "./notification/notificationPopup";
import { useSelector } from "react-redux";
import { State } from "../state/";
 

export const TodoApp: FC = () => {

    const  notification = useSelector((state : State) => state.notification);

    return <div className={styles['app-root']}>
        <div className={styles['app-container']}>
        {notification.isShowing && <NotificationPopup />}
                <AddingTodoInput />
                <TodoList/>
        </div>
    </div>
}
