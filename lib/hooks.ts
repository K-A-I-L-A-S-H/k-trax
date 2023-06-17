import useSWR from 'swr';
import fetcher from './fetcher';

export function useMe() {
	const {} = useSWR('/me', fetcher);
}
