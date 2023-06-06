import Image from 'next/image';
import {
	Box,
	Center,
	Divider,
	LinkBox,
	LinkOverlay,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/layout';
import { MdFavorite, MdPlaylistAdd } from 'react-icons/md';
import { NAV_MENU } from './constants';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<Box
			width="100%"
			height="calc(100vh - 100px)"
			bg="black"
			paddingX="5px"
			color="gray"
		>
			<Box paddingY="20px">
				<Box width="120px" marginBottom="20px" paddingX="20px">
					<Image src="/assets/k-trax.svg" alt="logo" height="30" width="60" />
				</Box>
				<Box marginBottom="20px">
					<List spacing={2}>
						{NAV_MENU.map((item) => (
							<ListItem paddingX="20px" fontSize="16px" key={item.name}>
								<LinkBox>
									<Link href={item.route} passHref>
										<LinkOverlay>
											<ListIcon
												as={item.icon}
												color="white"
												marginRight="20px"
											/>
											{item.name}
										</LinkOverlay>
									</Link>
								</LinkBox>
							</ListItem>
						))}
					</List>
				</Box>
			</Box>
		</Box>
	);
}
