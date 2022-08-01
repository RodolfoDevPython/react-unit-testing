import { findByText, getByText, queryByText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';
import Context from './context';

describe('App component', () => {

    const setStateContext = jest.fn()
    const stateContext = ''


    it('should render list items', () => {
        const { getByText } = render(
            <Context.Provider value={[stateContext, setStateContext]}>
                <App />
            </Context.Provider>
        )

        expect(getByText('Rodolfo')).toBeInTheDocument()

    });

    // it('should be able to add new item to the list', async () => {
        

    //     const { getByText, getByPlaceholderText, debug, findByText } = render(
    //         <Context.Provider value={[stateContext, setStateContext]}>
    //             <App />
    //         </Context.Provider>
  
    //     ) 

    //     const inputElement = getByPlaceholderText('NovoItem')        

    //     await UserEvent.type(inputElement, 'Novo')

    //     const addButton = getByText('Adicionar')
       
    //     await UserEvent.click(addButton);        

    //     expect(await findByText('Novo')).toBeInTheDocument()        
        
    // });

    // it('should be able to remove item to the list', async () => {
    //     const { getAllByText, queryByText } = render(
    //         <Context.Provider value={[stateContext, setStateContext]}>
    //             <App />
    //         </Context.Provider>
    //     ) 

    //     const removeButtons = getAllByText('Remove')
       
    //     await UserEvent.click(removeButtons[0]);        

    //     expect(queryByText('Rodolfo')).not.toBeInTheDocument()        
        
    // });

})