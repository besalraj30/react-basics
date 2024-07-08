import { BrowserRouter } from "react-router-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should search Res List for burger text input", async() => {
    await act(async() => render(<BrowserRouter><Body /></BrowserRouter>))

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);

    //   screen should load 4 cards

    const cards = screen.findAllByTestId("resCard");

    expect(cards.length).toBe(4);

    // expect(searchBtn).toBeInTheDocument();
})

it("Should filter top rated restaurants", async() => {
    await act(async() => render(<BrowserRouter><Body /></BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter).toBe(13);
})