//Greet should render the text hello and if a name is passed into the component then it should render hello followed by the name

import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
    render(<Greet name='Bhavesh' />)
    const textElement = screen.getByText('Hello Bhavesh')
    expect(textElement).toBeInTheDocument()
})