import * as React from 'react'
import { FC, useState} from 'react'
import { Item } from '../model/item';
import style from './addingTodo.module.css'

interface State {
    value: string
    id?: number
}

interface Props {
    items: Item[]
    updateTodoList: (arg : Item[]) => void;
}


export const AddingTodoInput: FC<Props> = ({items, updateTodoList} : Props) => {

    const [item, setItem] = useState<Item>({
        value: "",
        id: 0
    })

    let {value, id} = item;


    const updateItemValue = (addItem: React.Dispatch<React.SetStateAction<State>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
       const newItemValue = e.target.value;
       addItem(prevState => ({...prevState, value: newItemValue}))
    }

    const onAddButton : any = (updateTodoListFunc : any) => (e: React.MouseEventHandler<HTMLButtonElement>) =>  {
        const newItem = {
            id: id++,
            value
        }

        value && updateTodoListFunc([...items, newItem]);
        setItem({value: "", id: id++});
    }
  
    return <div className={style.container}>
        <h2> Which task do you want to add?</h2>
        <input 
            type="text" 
            id="input_todo" 
            value={value} 
            onChange={updateItemValue(setItem)}>
        </input>
        <button 
            name="button_submit" 
            onClick={onAddButton(updateTodoList)}>Add</button>
    </div>
}
