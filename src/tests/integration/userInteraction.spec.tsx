import { screen, render, waitFor } from "@testing-library/react";
import UserEvent from '@testing-library/user-event';
import { Counter } from "../../components/Counter";
import { List } from "../../components/List";
import Context from "../../context";

function rerenderComponent(stateContext, setStateContext) {

    return render(
        <Context.Provider value={[stateContext, setStateContext]}>
            <List initialItems={['Rodolfo', 'Romulo','Rian']} />
            <Counter />
        </Context.Provider>
    )

}
describe('User interaction', () => {

    it('should render Page Main', () => {
        const setStateContext = jest.fn()
        const stateContext = []

        const { getByText } = rerenderComponent(stateContext, setStateContext)

        expect(getByText('Rodolfo')).toBeInTheDocument()
    })

    it('should check if the user can edit and remove the item', async () => {
        
        const setStateContext = jest.fn()
        const stateContext = [];

        const { getByRole, getByPlaceholderText, findByText, findByTestId } = rerenderComponent(stateContext, setStateContext)

        const inputElement = getByPlaceholderText('NovoItem');

        await UserEvent.type(inputElement, 'Novo');

        const addButton = getByRole('button', {
            name: /adicionar/i
        })

        await UserEvent.click(addButton);        

        expect(await findByText('Novo')).toBeInTheDocument()        

        const buttonRemove = await findByTestId('Remove-Novo');

        await UserEvent.click(buttonRemove);        

        expect(setStateContext).toHaveBeenCalledWith(["Novo"]);

        // screen.logTestingPlaygroundURL()
        
    })

});