/**
 * @vitest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("ProjectImageGalley", () => {
  it("비어있는 리스트일 경우 아무것도 렌더링하지 않는다.", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeInTheDocument();
  });

  it("이미지 리스트를 렌더링한다.", () => {
    const imageUrls = ["url1", "url2"];

    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
