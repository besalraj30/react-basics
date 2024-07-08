import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //  Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    //  Assertion
    expect(button).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit")

    //  Assertion
    expect(button).toBeInTheDocument();
});

test("Should load input field contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByPlaceholderText("name");

    //  Assertion
    expect(button).toBeInTheDocument();
});

test("Should load 2 input boxes inside contact us component", () => {
    render(<ContactUs />);

    const input = screen.getAllByRole("textbox")

    //  Assertion
    expect(input.length).toBe(2);
})

//  Grouping test cases
describe("Contact us page test cases" , () => {
    test("Should load input field contact us component", () => {
        render(<ContactUs />);
    
        const button = screen.getByPlaceholderText("name");
    
        //  Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside contact us component", () => {
        render(<ContactUs />);
    
        const input = screen.getAllByRole("textbox")
    
        //  Assertion
        expect(input.length).toBe(2);
    })

    //   Can also use it in place of test, it is an alias of test
    it("Should load 2 input boxes inside contact us component", () => {
        render(<ContactUs />);
    
        const input = screen.getAllByRole("textbox")
    
        //  Assertion
        expect(input.length).toBe(2);
    })
})