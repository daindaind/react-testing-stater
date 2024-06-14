/**
 * @vitest-environment jsdom
 */
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// 각 테스트 후에 DOM을 정리
afterEach(() => {
  cleanup();
});

describe("UserAccount", () => {
  it("username이 렌더링 되어야 한다.", () => {
    const user: User = { id: 1, name: "다인" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("user가 admin이면 edit 버튼을 렌더링한다.", () => {
    const user: User = { id: 1, name: "다인", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("user가 admin이 아니면 edit 버튼을 렌더링하지 않는다.", () => {
    const user: User = { id: 1, name: "다인", isAdmin: false };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
