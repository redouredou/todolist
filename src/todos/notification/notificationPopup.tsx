import style from './notification.module.css'
import { motion  } from "framer-motion";
import { SetStateAction, useEffect, Dispatch, FC } from 'react';
import { Notification } from '../model/notification';
import { TodoEvent } from '../model/todo-event';


type NotificationProps = {
    notification: Notification;
    setNotification : (arg: Notification) => void;
}

export const NotificationPopup : FC<NotificationProps> =  ({ notification, setNotification }) =>{ 

    const {todoEvent, taskName} = notification

    const displayMessage = (todoEvent: TodoEvent, value: string) : string => {
        switch(todoEvent){
            case TodoEvent.ADDED:
                return `You are added the task "${value}", Well done!`;
            case TodoEvent.DELETED:
                return `You are deleted the task "${value}" !`;
        }
    }

    const className = notification.todoEvent === TodoEvent.ADDED ? style['container-notification-add'] : style['container-notification-delete'];

return <motion.div 
className={className}
animate={{translateY: [0,60,60,60,60,60,60,0]}}
transition={{ duration: 3, ease: "easeInOut" }}
onAnimationComplete={() => setNotification({isShowing: false, taskName: '', todoEvent:null})}
>
    <p>{displayMessage(todoEvent, taskName)}</p>
</motion.div>}