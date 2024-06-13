/**
 * @jest-environment jsdom
 */

import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("제공된 이름과 함께 Hello를 띄워줘야 함", () => {
    render(<Greet name="다인" />);

    // screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument;
    expect(heading).toHaveTextContent(/hello 다인/i);
  });

  it("제공된 이름이 없을 때 Login 버튼을 띄워주는가?", () => {
    render(<Greet name="" />);

    // screen.debug();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent(/login/i);
  });
});
