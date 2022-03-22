import style from './notification.module.css'
import { motion  } from "framer-motion";
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationAC, State } from '../../state';
import { useDispatch } from 'react-redux';



export const NotificationPopup : FC =  () => {

    const notification = useSelector((state: State) => state.notification)

    const { notificationMessage, cssClass } = notification

    const dispatch = useDispatch();
    const { hideNotificationPopup } = bindActionCreators(NotificationAC, dispatch)

return <motion.div 
className={style[cssClass]}
animate={{translateY: [0,60,60,60,60,60,60,0]}}
transition={{ duration: 3, ease: "easeInOut" }}
onAnimationComplete={() => hideNotificationPopup()}
>
    <p>{notificationMessage}</p>
</motion.div>}