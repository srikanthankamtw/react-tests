import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts component",  () => {

    test("renders posts if request succeds", async () => {
        render(<Posts />);
        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    });

});