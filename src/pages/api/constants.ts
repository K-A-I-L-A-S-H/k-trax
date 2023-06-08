export enum ApiHeaders {
	COOKIE = 'Set-Cookie',
}

export enum CookieNames {
	TRAX_ACCESS_TOKEN = 'TRAX_ACCESS_TOKEN',
}

export enum HttpStatus {
	OK = 200,
	BAD_REQUEST = 400,
	UNAUTHENTICATED = 401,
}

export const COOKIE_LIFE = 60 * 60 * 24;
