import * as React from 'react'
import { ChangeEventHandler } from 'react'
import { createPortal } from 'react-dom'

interface State {
    itemValue: string
}

interface Props {
    items: string[]
    updateTodoList: (arg : string[]) => void;
}


export const TodoInput: React.FC<Props> = props => {

    const [state, useState] = React.useState<State>({
        itemValue: ""
    })


    const updateItemValue = (addItem: React.Dispatch<React.SetStateAction<State>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
       const newItemValue = e.target.value;
       addItem({itemValue: newItemValue})
    }

    const onAddButton : any = (updateTodoListFunc : any) => (e: React.MouseEventHandler<HTMLButtonElement>) =>  {
        state.itemValue && updateTodoListFunc([...props.items, state.itemValue]);
        useState({itemValue: ""});
    }
  
    return <>
        <h2> Which task do you want add?</h2>
        <input type="text" id="input_todo" value={state.itemValue} onChange={updateItemValue(useState)}></input>
        <button name="button_submit" onClick={onAddButton(props.updateTodoList)}>Add</button>
    </>
}
