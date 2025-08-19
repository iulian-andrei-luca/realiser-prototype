import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("next-intl", () => ({
  useTranslations: () => (key) => {
    if (key === "title") return "Welcome to Realiser!";
    if (key === "button") return "Go to push notifications page";
    return key;
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props) => <img alt={props.alt ?? ""} {...props} />,
}));

import Login from "../page";

describe("Login page", () => {
  it("renders translated title", () => {
    render(<Login />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Realiser!" })
    ).toBeInTheDocument();
  });

  it("renders link to push notifications page with translated label", () => {
    render(<Login />);
    const links = screen.getAllByRole("link", {
      name: "Go to push notifications page",
    });
    const target =
      links.find((el) => el.getAttribute("href") === "/push-notifications") ||
      links[0];
    expect(target).toBeInTheDocument();
    expect(target).toHaveAttribute("href", "/push-notifications");
  });
});
