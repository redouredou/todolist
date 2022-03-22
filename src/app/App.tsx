import { FC } from "react";
import { Provider} from "react-redux";
import { store } from '../state/store';
import { TodoApp } from "../features/TodoApp";


export const App: FC = () => {


    return <Provider store={store}>
            <TodoApp />
    </Provider>
}
