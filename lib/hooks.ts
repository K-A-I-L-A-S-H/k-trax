import useSWR from 'swr';
import fetcher from './fetcher';
import { Playlist } from '@prisma/client';

export function useMe() {
	const { data, error } = useSWR('/auth/me', fetcher);

	return {
		user: data,
		isLoading: !data && !error,
		isError: error,
	};
}

export function usePlaylist() {
	const { data, error } = useSWR('/playlist', fetcher);

	return {
		playlists: (data as unknown as Playlist[]) || [],
		isLoading: !data && !error,
		isError: error,
	};
}
