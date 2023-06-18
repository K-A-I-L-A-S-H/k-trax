import GradientLayout from '../components/GradientLayout';
import prisma from '@/lib/prisma';

export default function Home({ artists }) {
	return (
		<GradientLayout
			color="gray"
			subtitle="profile"
			title="Kailash Bisht"
			description="10 public playlists"
			image="https://img.freepik.com/free-vector/man-face-close-up_98292-4059.jpg?w=1060&t=st=1687112927~exp=1687113527~hmac=7aa67d37b7546b44adf8f3ccd08e53dd660399f4b5aea49c5f4acb7930b16ba0"
			roundImage
		>
			<div>Home Page</div>
		</GradientLayout>
	);
}

export async function getServerSideProps() {
	const artists = await prisma.artist.findMany({});

	return {
		props: {
			artists,
		},
	};
}
