import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { signToken, setAccessTokenCookie } from '../utils';
import { HttpStatus } from '../constants';

const router = createRouter<NextApiRequest, NextApiResponse>();

async function signIn(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken(user);
    setAccessTokenCookie(res, token);
    res.json(user);
  } else {
    res.status(HttpStatus.UNAUTHENTICATED).json({ error: 'Invalid email or password' });
  }
}

router.post((req: NextApiRequest, res: NextApiResponse) => {
  signIn(req, res);
})

export default router.handler({
  onError: (err, req, _) => {
    console.error(`Something broke: ${JSON.stringify(err)} :: ${req}`);
  }
});