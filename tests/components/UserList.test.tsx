/**
 * @vitest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("유저 리스트가 아무것도 없을 때, 화면에 유저 리스트를 렌더링하지 않는다.", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("유저 리스트가 있을 때, 화면에 유저 리스트를 렌더링한다.", () => {
    const users: User[] = [
      { id: 1, name: "다인1" },
      { id: 2, name: "다인2" },
    ];

    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
