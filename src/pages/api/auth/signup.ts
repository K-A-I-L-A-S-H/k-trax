import bcrypt from 'bcrypt';
import cookie from 'cookie';
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import { signToken } from '../utils';
import { ApiHeaders, CookieNames, COOKIE_LIFE } from '../constants';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

async function signUp(req: NextApiRequest, res: NextApiResponse) {
	const salt = bcrypt.genSaltSync();
	const { email, password } = req.body;

	const user = await createUser(email, password, salt);

	if (!user) {
		return res.status(400).json({ error: 'Email already exists' });
	}

	setAccessTokenCookie(res, signToken(user));
	res.json(user);
}

async function createUser(
	email: string,
	password: string,
	salt: string,
): Promise<User | null> {
	try {
		const hashedPassword = bcrypt.hashSync(password, salt);
		return await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
			},
		});
	} catch (e) {
		return null;
	}
}

function setAccessTokenCookie(res: NextApiResponse, token: string) {
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

router.post((req: NextApiRequest, res: NextApiResponse) => {
	signUp(req, res);
});

export default router.handler({
	onError: (err, req, event) => {
		console.error(`Something broke: ${JSON.stringify(err)} :: ${req}`);
	},
});
