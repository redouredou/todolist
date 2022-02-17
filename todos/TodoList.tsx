import * as React from 'react';

interface State {
    items: string[]
}

export const TodoList: React.FC = () => 
{
    const [state, useState] = React.useState<State>({
        items: ['hello', 'bonjour', 'salut']
    })

    return <ul>
        {state.items && state.items.map(item => {
            return <li>{item}</li>
        })}
    </ul>
}
