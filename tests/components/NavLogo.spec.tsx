import NavLogo from "@/src/components/NavLogo";
import { render, screen } from "@testing-library/react";

describe('NavLogo', () => {
  it('renders logo in sidebar', () => {
    render(<NavLogo />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'logo');
  });
});
