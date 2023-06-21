import GradientLayout from '@/src/components/GradientLayout';
import { InferGetServerSidePropsType, NextApiRequest } from 'next';
import prisma from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import SongsTable from '@/src/components/SongsTable';

const getBgColor = () => {
	const color = ['red', 'blue', 'purple', 'gray', 'teal', 'green'];
	return color[Math.floor(Math.random() * color.length)];
};

export default function Playlist(
	props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
	const playlist = props.playlist!;
	const color = getBgColor();

	return (
		<GradientLayout
			color={color}
			subtitle="Playlist"
			title={playlist.name}
			description={`${playlist.songs.length} songs`}
			image={`https://picsum.photos/400?random${playlist.id}`}
			roundImage={false}
		>
			<SongsTable songs={playlist.songs} />
		</GradientLayout>
	);
}

export async function getServerSideProps({
	query: { id },
	req,
}: {
	query: { id: string };
	req: NextApiRequest;
}) {
	const user = verifyToken(req.cookies.TRAX_ACCESS_TOKEN!);

	const playlist = await prisma.playlist.findFirst({
		where: { id: +id, userId: user.id },
		include: {
			songs: {
				select: {
					name: true,
					artist: {
						select: {
							name: true,
							id: true,
						},
					},
				},
			},
		},
	});

	return {
		props: {
			playlist,
		},
	};
}
