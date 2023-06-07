import {
	MdFavorite,
	MdHome,
	MdLibraryMusic,
	MdPlaylistAdd,
	MdSearch,
} from 'react-icons/md';
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

export const MUSIC_MENU: NavItem[] = [
	{
		name: 'Create Playlist',
		icon: MdPlaylistAdd,
		route: '/',
	},
	{
		name: 'Favourites',
		icon: MdFavorite,
		route: '/favourites',
	},
];

export const PLAYLIST = new Array(30)
	.fill(1)
	.map((_, i) => `Playlist - ${i + 1}`);
