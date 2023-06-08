import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { artistsData } from './songsData';

const prisma = new PrismaClient();

const start = async () => {
	await artistsData.forEach(async (artist) => {
		prisma.artist.upsert({
			where: { name: artist.name },
			update: {},
			create: {
				name: artist.name,
				songs: {
					create: artist.songs.map((song) => ({
						name: song.name,
						duration: song.duration,
						url: song.url,
					})),
				},
			},
		});
	});

	const salt = bcrypt.genSaltSync();

	await prisma.user.upsert({
		where: { email: 'user@test.com' },
		update: {},
		create: {
			email: 'user@test.com',
			password: bcrypt.hashSync('password', salt),
		},
	});
};

start()
	.catch((e) => {
		console.error(`Error: ${JSON.stringify(e)}`);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
