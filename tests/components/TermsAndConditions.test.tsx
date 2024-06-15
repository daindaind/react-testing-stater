/**
 * @vitest-environment jsdom
 */
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

describe("TermsAndConditions", () => {
  it("올바른 text와 초기 상태를 렌더링한다.", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Submit/i);
    expect(button).toBeDisabled();
  });

  it("체크박스가 체크되었을 때 버튼이 활성화된다.", async () => {
    // Arrange
    render(<TermsAndConditions />);

    // Act
    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    // Assert
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
