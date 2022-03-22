import { TodoTypes } from './../action-types/index';
import { TodoAction } from './../action/index';
import { Item } from '../../features/todos/model/item';



const todoReducer = (state: Item[] = [], action: TodoAction) => {
    switch(action.type){
        case TodoTypes.TODO_ADD:
            return [...state, action.payload];
        case TodoTypes.TODO_DELETE:
            return [...state].filter(itemElt => itemElt.id != action.payload.id);
        case TodoTypes.TODO_MODIFY:
            return  [...state].map(itemElt => {
                if (itemElt.id === action.payload.id){
                    return action.payload;
                }
                return itemElt;
            })
        default:
            return state;
    }
}

export default todoReducer