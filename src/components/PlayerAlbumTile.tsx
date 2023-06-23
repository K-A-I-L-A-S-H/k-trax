import { Box, Flex, Text } from '@chakra-ui/layout';
import { Song } from '@prisma/client';
import Image from 'next/image';

export default function PlayerAlbumTile({ activeSong }: { activeSong: Song }) {
	return (
		<Flex align="center" width="30%">
			<Box>
				<Image
					src={`https://picsum.photos/400?random${Math.random()}`}
					alt="logo"
					height={60}
					width={60}
				/>
			</Box>
			<Box padding="20px" color="white">
				<Text fontSize="large">{activeSong.name}</Text>
				<Text fontSize="sm">{activeSong.artist.name}</Text>
			</Box>
		</Flex>
	);
}
