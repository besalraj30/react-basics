import { render , screen} from "@testing-library/react"
import RestrauntCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props data", () => {
    render(
        <RestrauntCard resData={MOCK_DATA}/>
    )

    const name = screen.getByText("Leon's - Burgers & Wings(Leon Grill)");

    expect(name).toBeInTheDocument();
})

it("should render Restraunt Card component with Promoted label", () => {
    
})