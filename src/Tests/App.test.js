import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("Renders dashboard header", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/materiom contribution portal/i)).toBeInTheDocument();
});

test("Renders create new recipe link", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/create a new recipe/i)).toBeInTheDocument();
});

test("Renders find template link", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/find an existing recipe as a template/i)).toBeInTheDocument();
});

test("Renders contribution guide", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/read the contribution guide/i)).toBeInTheDocument();
});

test("Renders view your recipes link", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/view your recipes/i)).toBeInTheDocument();
});

test("Renders csv upload link", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/upload via csv/i)).toBeInTheDocument();
});

// test("Page 2 navigation link works.", () => {
//   render(<App />, { wrapper: MemoryRouter });
//   expect(screen.getByText(/page 1/i)).toBeInTheDocument();
//   userEvent.click(screen.getByText(/next page/i));
//   expect(screen.getByText(/previous page/i)).toBeInTheDocument();
// });

// test("Page 2 navigation sidebar link works.", () => {
//     render(<App />, { wrapper: MemoryRouter });
//     expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
//     userEvent.click(screen.getByText(/dashboard/i));
//     expect(screen.getByText(/previous page/i)).toBeInTheDocument();
//   });
