import { Box, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function PlayerAlbumTile() {
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
				<Text fontSize="large">Song Name</Text>
				<Text fontSize="sm">Artist Name</Text>
			</Box>
		</Flex>
	);
}
