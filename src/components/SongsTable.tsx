import { Box } from '@chakra-ui/layout';
import { IconButton, Table, Thead, Td, Th, Tr, Tbody } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Song } from '@prisma/client';
import { formatDate, formatTime } from '@/lib/formatter';
import { useStoreActions } from 'easy-peasy';

export default function SongsTable({ songs }: { songs: Song[] }) {
	const playSongs = useStoreActions((store: any) => store.changeActiveSongs);
	const setActiveSong = useStoreActions((store: any) => store.changeActiveSong);

	const handlePlay = (activeSong?: Song) => {
		setActiveSong(activeSong ?? songs[0]);
		playSongs(songs);
	};

	return (
		<Box bg="transparent" color="white">
			<Box padding="5px">
				<Box marginBottom="10px">
					<IconButton
						icon={<BsFillPlayFill fontSize="30px" />}
						aria-label="play"
						colorScheme="green"
						size="lg"
						isRound
						onClick={() => handlePlay()}
					/>
				</Box>
				<Table variant="unstyled">
					<Thead borderBottom="1px solid" borderColor="rgb(255,255,255,0.2)">
						<Tr>
							<Th>#</Th>
							<Th>Title</Th>
							<Th>Date Added</Th>
							<Th>
								<AiOutlineClockCircle />
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{songs.map((song, idx) => (
							<Tr
								sx={{
									'transition': 'all 0.3s',
									'&:hover': {
										bg: 'rgb(255,255,255,0.1)',
									},
								}}
								key={song.id}
								cursor="pointer"
								onClick={() => handlePlay(song)}
							>
								<Td>{idx + 1}</Td>
								<Td>{song.name}</Td>
								<Td>{formatDate(song.createdAt)}</Td>
								<Td>{formatTime(song.duration)}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
}
