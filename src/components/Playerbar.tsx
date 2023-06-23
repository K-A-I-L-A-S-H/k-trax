import { Box, Flex } from '@chakra-ui/layout';
import PlayerAlbumTile from './PlayerAlbumTile';
import Player from './Player';
import { useStoreState } from 'easy-peasy';

export default function PlayerBar() {
	const songs = useStoreState((state: any) => state.activeSongs);
	const activeSong = useStoreState((state: any) => state.activeSong);

	return (
		<Box height="100px" width="100vw" bg="gray.900" padding="10px">
			<Flex align="center">
				{activeSong ? <PlayerAlbumTile activeSong={activeSong} /> : null}
				{activeSong ? <Player songs={songs} activeSong={activeSong} /> : null}
			</Flex>
		</Box>
	);
}
