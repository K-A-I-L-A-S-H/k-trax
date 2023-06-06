import {
	Box,
	LinkBox,
	LinkOverlay,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/layout';
import { NAV_MENU } from './constants';
import Link from 'next/link';

export default function NavMenu() {
	return (
		<Box marginBottom="20px">
			<List spacing={2}>
				{NAV_MENU.map((item) => (
					<ListItem paddingX="20px" fontSize="16px" key={item.name}>
						<LinkBox>
							<Link href={item.route} passHref>
								<LinkOverlay>
									<ListIcon as={item.icon} color="white" marginRight="20px" />
									{item.name}
								</LinkOverlay>
							</Link>
						</LinkBox>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
