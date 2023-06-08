export type AuthMode = 'signup' | 'signin';

export interface AuthPayload {
	email: string;
	password: string;
}
