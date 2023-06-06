import { Box, Divider } from '@chakra-ui/layout';
import NavMenu from './NavMenu';
import { MUSIC_MENU, NAV_MENU } from './constants';
import NavLogo from './NavLogo';

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
				<NavLogo />
				<NavMenu menu={NAV_MENU} />
				<Divider marginY="20px" color="gray.800" />
				<NavMenu menu={MUSIC_MENU} />
			</Box>
		</Box>
	);
}
