import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
    test("renders hello world as text", () => {

        // Arrange
        render(<Greeting />);
    
        // Act
        // Nothing to act here
    
        // Assert
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    
    });

    test("renders click the button below to set if button was not clicked", () => {
        render(<Greeting />);
        const elementBeforeButtonClick = screen.getByText("click the button below to set");
        expect(elementBeforeButtonClick).toBeInTheDocument();
    });

    test("renders i'm all set if button was clicked", () => {
        render(<Greeting />);
        // const buttonElement = screen.getByText("Change Text")
        // buttonElement.click();
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const elementAfterButtonClick = screen.getByText("i'm all set");
        expect(elementAfterButtonClick).toBeInTheDocument();
    });

    test("doesn't render click the button below to set if button was clicked", () => {
        render(<Greeting />);
        // const buttonElement = screen.getByText("Change Text")
        // buttonElement.click();
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const elementAfterButtonClick = screen.queryByText("click the button below to set");
        expect(elementAfterButtonClick).toBeNull();
    });


})
