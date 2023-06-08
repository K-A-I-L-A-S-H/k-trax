import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import { signToken, setAccessTokenCookie } from '../utils';
import { createRouter } from 'next-connect';
import { HttpStatus } from '@/lib/constants';

const router = createRouter<NextApiRequest, NextApiResponse>();

async function signUp(req: NextApiRequest, res: NextApiResponse) {
	const salt = bcrypt.genSaltSync();
	const { email, password } = req.body;

	const user = await createUser(email, password, salt);

	if (!user) {
		return res
			.status(HttpStatus.BAD_REQUEST)
			.json({ error: 'Email already exists' });
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

router.post((req: NextApiRequest, res: NextApiResponse) => {
	signUp(req, res);
});

export default router.handler({
	onError: (err, req, _) => {
		console.error(`Something broke: ${JSON.stringify(err)} :: ${req}`);
	},
});
