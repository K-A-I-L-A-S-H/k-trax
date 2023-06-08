import { ApiHeaders } from "./constants";

export default function fetcher(url: string, data: any = undefined) {
  return fetch(`${process.env.API_URL}/api${url}`, {
    method: data ? 'POST' : 'GET',
    credentials: 'include',
    headers: {
      [ApiHeaders.CONTENT_TYPE]: 'application/json',
    },
    body: data,
  });
}
