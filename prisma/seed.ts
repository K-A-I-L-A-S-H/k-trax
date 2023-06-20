import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { ARTIST_DATA } from './songsData';

const prisma = new PrismaClient();
const IMAGE_URL =
	'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png';

const start = async () => {
	ARTIST_DATA.map(async (artist) => {
		await prisma.artist.upsert({
			where: { name: artist.name },
			update: {},
			create: {
				name: artist.name,
				image: IMAGE_URL,
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
	const user = await prisma.user.upsert({
		where: { email: 'user@test.com' },
		update: {},
		create: {
			email: 'user@test.com',
			password: bcrypt.hashSync('password', salt),
			firstName: 'Kailash',
			lastName: 'B',
		},
	});

	const songs = await prisma.song.findMany({});
	new Array(10).fill(1).map(async (_, i) => {
		await prisma.playlist.upsert({
			where: { name: `Plalist #${i + 1}` },
			update: {},
			create: {
				name: `Plalist #${i + 1}`,
				user: {
					connect: { id: user.id },
				},
				songs: {
					connect: songs.map((song) => ({
						id: song.id,
					})),
				},
			},
		});
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
