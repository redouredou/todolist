import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { createPortal } from 'react-dom'


type Item = {
    id: number
    value : string
}
interface State {
    itemValue: string
    counterId?: number
}

interface Props {
    items: Item[]
    updateTodoList: (arg : Item[]) => void;
}


export const TodoInput: React.FC<Props> = props => {

    const [state, useState] = React.useState<State>({
        itemValue: "",
        counterId: 0
    })


    const updateItemValue = (addItem: React.Dispatch<React.SetStateAction<State>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
       const newItemValue = e.target.value;
       addItem(prevState => ({...prevState, itemValue: newItemValue}))
    }

    const onAddButton : any = (updateTodoListFunc : any) => (e: React.MouseEventHandler<HTMLButtonElement>) =>  {
        const newItem = {
            id: state.counterId++,
            value: state.itemValue
        }

        state.itemValue && updateTodoListFunc([...props.items, newItem]);
        useState({itemValue: "", counterId: state.counterId++});
    }
  
    return <>
        <h2> Which task do you want add?</h2>
        <input type="text" id="input_todo" value={state.itemValue} onChange={updateItemValue(useState)}></input>
        <button name="button_submit" onClick={onAddButton(props.updateTodoList)}>Add</button>
    </>
}
