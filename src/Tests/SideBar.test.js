import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import SideBar from "../Components/SideBar";

test("renders sidebar", () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  //screen.debug()
});

test("Menu collapse works.", () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  expect(screen.getByTestId(/sidebarToggle/i)).toBeInTheDocument();
  userEvent.click(screen.getByTestId(/sidebarToggle/i));
  expect(screen.getByTestId(/sidebarMain/i)).toHaveClass("collapsed");
});

