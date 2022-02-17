import * as React from 'react'

export const TodoInput: React.FC = () => {
    return <>
        <h2> Which task do you want add?</h2>
        <input type="text" id="input_todo"></input>
        <button type="button" id="button_submit">Add</button>
    </>
}