import { Buttons } from "./buttons.component";
import { render, getByText } from "@testing-library/react";

const btnProps = {
   className: "test",
   dark: false,
   children: "this is a btn",
};

it("should render a button with a className 'test' ", () => {
   const { container } = render(<Buttons {...btnProps} />);
   expect(container.getElementsByClassName("test").length).toBe(1);
});

it("should render with with a text child", () => {
   const { container } = render(<Buttons {...btnProps} />);
   expect(getByText(container, "this is a btn")).toBeTruthy();
});
