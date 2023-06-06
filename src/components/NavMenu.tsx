import {
	Box,
	LinkBox,
	LinkOverlay,
	List,
	ListIcon,
	ListItem,
} from '@chakra-ui/layout';
import Link from 'next/link';
import { NavItem } from './types';

export default function NavMenu({ menu }: { menu: NavItem[] }) {
	return (
		<Box>
			<List spacing={2}>
				{menu.map((item) => (
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
