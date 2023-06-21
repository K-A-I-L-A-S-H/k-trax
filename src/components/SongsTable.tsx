import { Box } from '@chakra-ui/layout';
import { IconButton, Table, Thead, Td, Th, Tr, Tbody } from '@chakra-ui/react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Song } from '@prisma/client';

export default function SongsTable({ songs }: { songs: Song[] }) {
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
				</Table>
			</Box>
		</Box>
	);
}
