import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@prisma/client';
import validateRoute from '@/lib/auth';

export default validateRoute(
	(req: NextApiRequest, res: NextApiResponse, user: User) => {
		res.json(user);
	},
);
