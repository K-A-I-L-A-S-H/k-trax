import { ApiHeaders } from './constants';

export default async function fetcher(url: string, data: any = undefined) {
	const response = await fetch(`/api${url}`, {
		method: data ? 'POST' : 'GET',
		credentials: 'include',
		headers: {
			[ApiHeaders.CONTENT_TYPE]: 'application/json',
		},
		body: JSON.stringify(data),
	});

	if (response.status > 399 || response.status < 200) {
		throw new Error();
	}

	return response.json();
}
