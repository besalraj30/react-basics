import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResMenu.json";
import {Provider} from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => 
Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
}))

it("Should load restaurant menu component", async() => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))
    
    const accordionHeader = screen.getByText("Biriyani (5)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart - 0")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    fireEvent().click(addBtns[0]);

    expect(screen.getByText("Cart - 1")).toBeInTheDocument();

    //  5 are from restaurant menu and 2 are from cart
    expect(screen.getAllByTestId("foodItems").length).toBe(7);
    // fireEvent.click(accordionHeader);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Cart is empty. Add items to the cart!")).toBeInTheDocument();
})