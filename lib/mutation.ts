import fetcher from './fetcher';
import { AuthMode, AuthPayload } from './types';

export function auth(mode: AuthMode, body: AuthPayload) {
	return fetcher(`/auth/${mode}`, body);
}
