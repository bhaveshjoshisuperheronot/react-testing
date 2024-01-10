//Greet should render the text hello and if a name is passed into the component then it should render hello followed by the name

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })
    
    test('renders a name', () => {
        render(<Greet name='Bhavesh' />)
        const textElement = screen.getByText('Hello Bhavesh')
        expect(textElement).toBeInTheDocument()
    })
})

/*

For filtering
p - filter by filename
t - filter by test name
test.only - to only run this test
test.skip - to skip this test

it instead test
fit - test only
xit - test skip

Tests are ran for :
__tests__
greet.spec.tsx
greet.test.tsx
*/