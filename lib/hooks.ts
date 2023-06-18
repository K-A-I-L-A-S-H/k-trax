import useSWR from 'swr';
import fetcher from './fetcher';

export function useMe() {
	const { data, error } = useSWR('/auth/me', fetcher);

	return {
		user: data,
		isLoading: !data && !error,
		isError: error,
	};
}

export function usePlaylist() {
	const { data, error } = useSWR('/platlist', fetcher);

	return {
		playlists: data || [],
		isLoading: !data && !error,
		isError: error,
	};
}
