/*
    if element is not present in DOM we can use queryBy
    if element is added to the DOM after a timeout we can us findBy
*/

import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Application', () => {
    const skills = ["HTML", "CSS", "Javascript"]
    
    test("renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    })

    test("renders login button", () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", {
            name: 'Login'
        });
        expect(loginButton).toBeInTheDocument();
    })

    test("not renders start learning button", () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole("button", {
            name: 'Start learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test("start learning button is eventually displayed", async () => {
        render(<Skills skills={skills} />);
        const startLearningButton = await screen.findByRole("button", {
            name: 'Start learning'
        }, {
            timeout: 2000,
        });
        expect(startLearningButton).toBeInTheDocument();
    })
})