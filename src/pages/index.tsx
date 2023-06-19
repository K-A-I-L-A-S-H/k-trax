import { Box, Flex, Text } from '@chakra-ui/layout';
import GradientLayout from '../components/GradientLayout';
import prisma from '@/lib/prisma';
import { InferGetServerSidePropsType } from 'next';
import { Artist } from '@prisma/client';
import { Image } from '@chakra-ui/react';

export default function Home(
	props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
	const artists: Artist[] = props.artists;

	return (
		<GradientLayout
			color="teal"
			subtitle="profile"
			title="Kailash Bisht"
			description="10 public playlists"
			image="https://img.freepik.com/free-vector/man-face-close-up_98292-4059.jpg?w=1060&t=st=1687112927~exp=1687113527~hmac=7aa67d37b7546b44adf8f3ccd08e53dd660399f4b5aea49c5f4acb7930b16ba0"
			roundImage
		>
			<Box color="white" paddingX="20px">
				<Box marginBottom="30px">
					<Text fontSize="2xl" fontWeight="bold">
						Top artist this month
					</Text>
					<Text fontSize="sm">only visible to you</Text>
				</Box>
				<Flex>
					{artists.map((artist) => (
						<Box key={artist.id} paddingX="15px" width="20%">
							<Box bg="gray.800" borderRadius="4px" padding="15px" width="100%">
								<Image
									src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
									alt={artist.name}
									borderRadius="100%"
								/>
								<Box marginTop="20px">
									<Text fontSize="large">{artist.name}</Text>
									<Text fontSize="x-small">Artist</Text>
								</Box>
							</Box>
						</Box>
					))}
				</Flex>
			</Box>
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
