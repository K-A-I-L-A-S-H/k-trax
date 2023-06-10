import { ApiHeaders } from './constants';

export default function fetcher(url: string, data: any = undefined) {
	return fetch(`/api${url}`, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: {
			[ApiHeaders.CONTENT_TYPE]: 'application/json',
		},
		body: JSON.stringify(data),
	});
}
