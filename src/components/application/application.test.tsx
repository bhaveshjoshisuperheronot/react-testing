/* testing-library.com/docs

getByRole
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByTestId
getAllByRole

*/

import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText(/all fields are manadatory/i);
        expect(paragraphElement).toBeInTheDocument();

        const closeElement = screen.getByTitle(/close/i);
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId(/custom-element/i);
        expect(customElement).toBeInTheDocument();
        
        const imageElement = screen.getByAltText(/a person with a laptop/i);
        expect(imageElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText('Full Name');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue(/bhavesh/i);
        expect(nameElement4).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsLocationElement = screen.getByRole('checkbox');
        expect(termsLocationElement).toBeInTheDocument();

        const termsLocationElement2 = screen.getByLabelText(/i agree to the terms and conditions/i);
        expect(termsLocationElement2).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    })
})