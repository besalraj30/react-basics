import Header from "../Header"
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore"
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
;
it("should load Header component with a login button", () => {
    render(
    <BrowserRouter>    
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
})

it("should load Header component with Cart items 0", () => {
    render(
    <BrowserRouter>    
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart 2")
    // const loginButton = screen.getByText("Login");
    expect(cartItems).toBeInTheDocument();
})

it("should load Header component with Cart item", () => {
    render(
    <BrowserRouter>    
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)
    // const loginButton = screen.getByText("Login");
    expect(cartItems).toBeInTheDocument();
})

it("Should change Login button to Logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})