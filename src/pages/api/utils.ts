import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { ApiHeaders, COOKIE_LIFE, CookieNames } from '@/lib/constants';
import cookie from 'cookie';

export function signToken(user: User): string {
	return jwt.sign(
		{
			email: user.email,
			id: user.id,
			time: Date.now(),
		},
		process.env.JWT_SECRET!,
		{ expiresIn: process.env.JWT_EXPIRES_IN! },
	);
}

export function setAccessTokenCookie(res: NextApiResponse, token: string) {
	res.setHeader(
		ApiHeaders.COOKIE,
		cookie.serialize(CookieNames.TRAX_ACCESS_TOKEN, token, {
			httpOnly: true,
			maxAge: COOKIE_LIFE,
			path: '/',
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production',
		}),
	);
}
