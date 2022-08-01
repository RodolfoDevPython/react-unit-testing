import { useState } from 'react';
import { Counter } from './components/Counter';
import { List } from './components/List'
import Context from './context'

export default function App() {

  const [stateContext, setStateContext] = useState([]);

  return (
    <Context.Provider value={[stateContext, setStateContext]} > 
      <List initialItems={['Rodolfo', 'Romulo','Rian']} />
      <Counter />
    </Context.Provider>
  )

}
