import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders children and handles click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Save</Button>);

    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Save" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports variants via data attributes", () => {
    render(
      <Button variant="outline" size="sm">
        Outline
      </Button>
    );

    const button = screen.getByRole("button", { name: "Outline" });
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-size", "sm");
  });
});
