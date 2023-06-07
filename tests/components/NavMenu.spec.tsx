import NavMenu from '@/src/components/NavMenu';
import { NAV_MENU } from '@/src/components/constants';
import { render, screen } from '@testing-library/react';

describe('NavMenu', () => {
	const [home, search, library] = NAV_MENU;
	it('renders home tab in nav menu', () => {
		render(<NavMenu menu={NAV_MENU} />);
		const homeText = screen.getByText(home.name);
		expect(homeText).toBeInTheDocument();
	});

	it('renders search tab in nav menu', () => {
		render(<NavMenu menu={NAV_MENU} />);
		const searchText = screen.getByText(search.name);
		expect(searchText).toBeInTheDocument();
	});

	it('renders library tab in nav menu', () => {
		render(<NavMenu menu={NAV_MENU} />);
		const libraryText = screen.getByText(library.name);
		expect(libraryText).toBeInTheDocument();
	});
});
