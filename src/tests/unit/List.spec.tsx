import { render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { List } from '../../components/List';
import Context from '../../context';


describe('List component', () => {

    it('should render list items', () => {

        const setStateContext = jest.fn()
        const stateContext = ''

        const { getByText } = render(
            <Context.Provider value={[stateContext, setStateContext]}>
                <List initialItems={['Rodolfo', 'Romulo','Rian']} />
            </Context.Provider>
        )

        expect(getByText('Rodolfo')).toBeInTheDocument()

    });

    it('should be able to add new item to the list', async () => {

        const setStateContext = jest.fn()
        const stateContext = ''

        const { getByText, getByPlaceholderText, findByText } = render(
            <Context.Provider value={[stateContext, setStateContext]}>
                <List initialItems={[]} />
            </Context.Provider>
        ) 

        const inputElement = getByPlaceholderText('NovoItem')        

        await UserEvent.type(inputElement, 'Novo')

        const addButton = getByText('Adicionar')
       
        await UserEvent.click(addButton);        

        expect(await findByText('Novo')).toBeInTheDocument()        
        
    });

    it('should be able to remove item to the list', async () => {
        const setStateContext = jest.fn()
        const stateContext = ''

        const { getAllByText, queryByText } = render(
            <Context.Provider value={[stateContext, setStateContext]}>
                <List initialItems={['Rodolfo', 'Romulo','Rian']} />) 
            </Context.Provider>
        )
        
        const removeButtons = getAllByText('Remove')
       
        await UserEvent.click(removeButtons[0]);        

        expect(queryByText('Rodolfo')).not.toBeInTheDocument()        
        
    });

})