import { render } from "@testing-library/react"
import Context from "../context"
import { Counter } from "./Counter"

describe('Couter Component', () => {

    it('should render correctly with item removed', () => {
        const stateContext = ['Rodolfo'];

        const { queryByText, debug } = render(
            <Context.Provider value={[stateContext]}>
                <Counter />
            </Context.Provider>
        )

        debug()

        expect(queryByText('Items Excluidos')).toBeInTheDocument()
        expect(queryByText('Rodolfo')).toBeInTheDocument()
    })

})