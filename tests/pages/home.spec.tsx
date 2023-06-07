import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';
import Home from '@/src/pages';

describe('home', () => {
  it('tests home page', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: /welcome to next\.js!/i }),
    ).toBeDefined();

    const footer = screen.getByRole('contentinfo');
    const link = footer.getByRole('link');
    expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined();
  })
});
