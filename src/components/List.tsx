import { useContext, useState } from "react";
import Context from "../context";

type ListProps = {
    initialItems: string[]
}

export function List({ initialItems }: ListProps) {
    const [newItem, setNewItem] = useState('')
    const [list, setList] = useState(initialItems);
    const [ stateContext, setStateContext ] = useContext(Context)

    function addToList() {
        setList([...list, newItem])
    }

    function removeToList(item: string) {
        setStateContext([ ...stateContext, item ])
        setList( state => state.filter( e => e != item ));
    }

    return (
        <div className="App">
            <input 
            type="text" 
            placeholder='NovoItem' 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            />
            <button onClick={addToList}>Adicionar</button>

            <ul>
            {list.map( item => (
                <li key={item}>
                {item}

                <button onClick={() => removeToList(item)}>Remove</button>

                </li>
                
            ))}
            
            </ul>
        </div>
    )
}       