import { FC, useState, Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from 'react'
import { Item } from '../model/item';
import style from './addingTodo.module.css'

type Props = {
    items: Item[]
    updateTodoList: (arg : Item[]) => void;
}


export const AddingTodoInput: FC<Props> = ({items, updateTodoList} : Props) => {

    const [item, setItem] = useState<Item>({
        value: "",
        id: 0
    })

    let {value, id} = item;


    const updateItemValue = (addItem: Dispatch<SetStateAction<Item>>) => (e: ChangeEvent<HTMLInputElement>) => {
       addItem(prevState => ({...prevState, value: e.target.value}))
    }

    const onAddButton = (updateTodoListFunc : any) => () =>  {
        const newItem = {
            id: id++,
            value
        }

        value && updateTodoListFunc([...items, newItem]);
        setItem({value: "", id: id++});
    }

    const onEnterPress = (updateTodoListFunc: (arg : Item[]) => void) => (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            const newItem = {
                id: id++,
                value
            }
    
            value && updateTodoListFunc([...items, newItem]);
            setItem({value: "", id: id++});
        }
    }
  
    return <div className={style.container}>
        <h2> Which task do you want to add?</h2>
        <input 
            type="text" 
            id="input_todo" 
            value={value} 
            onChange={updateItemValue(setItem)}
            onKeyPress={onEnterPress(updateTodoList)}
            >
        </input>
        <button 
            name="button_submit"
            className= {style['scale-up']}
            onClick={onAddButton(updateTodoList)}>Add</button>
    </div>
}
