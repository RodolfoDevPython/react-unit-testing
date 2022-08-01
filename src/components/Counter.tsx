import { useContext } from "react"
import Context from "../context"

export function Counter() {

    const [ stateContext ]: string[] = useContext(Context)

    return (
        <div>
            {stateContext.length > 0 && <h1>Items Excluidos</h1>}
            <ul>
                {stateContext.map( item => <li key={item} >{item}</li>)}
            </ul>
        </div>
 
    )
}