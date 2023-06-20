import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import validateRoute from '@/lib/auth';
import prisma from '@/lib/prisma';

export default validateRoute(
	async (req: NextApiRequest, res: NextApiResponse, user: User) => {
		const playlistsCnt = await prisma.playlist.count({
			where: {
				userId: user.id,
			},
		});

		res.json({ ...user, playlistsCnt });
	},
);
