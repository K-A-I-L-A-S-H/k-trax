import {
	Box,
	Divider,
	LinkBox,
	LinkOverlay,
	List,
	ListItem,
} from '@chakra-ui/layout';
import NavMenu from './NavMenu';
import { MUSIC_MENU, NAV_MENU, PLAYLIST } from './constants';
import NavLogo from './NavLogo';
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
			<Box paddingY="20px" height="100%">
				<NavLogo />
				<NavMenu menu={NAV_MENU} />
				<Divider marginY="10px" color="gray.800" />
				<NavMenu menu={MUSIC_MENU} />
				<Divider marginY="10px" color="gray.800" />
				<Box height="56%" overflowY="auto" paddingY="5px">
					<List spacing={2}>
						{PLAYLIST.map((item) => (
							<ListItem paddingX="20px" key={item}>
								<LinkBox>
									<Link href="/">
										<LinkOverlay>{item}</LinkOverlay>
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
