import { Box, Flex } from '@chakra-ui/layout';
import PlayerAlbumTile from './PlayerAlbumTile';
import PlayerControl from './PlayerControl';

export default function PlayerBar() {
	return (
		<Box height="100px" width="100vw" bg="gray.900" padding="10px">
			<Flex align="center">
				<PlayerAlbumTile />
				<PlayerControl />
			</Flex>
		</Box>
	);
}
