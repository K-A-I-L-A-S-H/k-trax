import jwt from 'jsonwebtoken';
import prisma from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { CookieNames, HttpStatus } from './constants';
import { User } from '@prisma/client';

export default function validateRoute(routeHandler: any) {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		const accessToken = req.cookies[CookieNames.TRAX_ACCESS_TOKEN];

		if (!accessToken) {
			res.status(HttpStatus.UNAUTHENTICATED);
			res.json({ error: 'Not Authenticated' });
			return;
		}

		try {
			const { id }: { id: number } = jwt.verify(
				accessToken,
				process.env.JWT_SECRET!,
			);
			const user: User | null = await prisma.user.findUnique({
				where: { id },
			});

			if (!user) {
				throw new Error('Unregistered user');
			}

			return routeHandler(req, res, user);
		} catch {
			res.status(HttpStatus.UNAUTHENTICATED);
			res.json({ error: 'Not Authenticated' });
			return;
		}
	};
}

export function verifyToken(token: string) {
	return jwt.verify(token, process.env.JWT_SECRET!);
}
