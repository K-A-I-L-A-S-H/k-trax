import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/src/pages';

describe('home', () => {
	it('tests home page', () => {
		render(<Home />);
		const text = screen.getByText('k-trax');
    expect(text).toBeInTheDocument();
	});
});
