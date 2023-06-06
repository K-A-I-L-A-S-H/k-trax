import { MdHome, MdLibraryMusic, MdSearch } from 'react-icons/md';
import { NavItem } from './types';

export const NAV_MENU: NavItem[] = [
	{
		name: 'Home',
		icon: MdHome,
		route: '/',
	},
	{
		name: 'Search',
		icon: MdSearch,
		route: '/search',
	},
	{
		name: 'Your Library',
		icon: MdLibraryMusic,
		route: '/library',
	},
];
