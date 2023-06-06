import Image from 'next/image';
import {
	Box,
} from '@chakra-ui/layout';
import NavMenu from './NavMenu';

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
				<NavMenu />
			</Box>
		</Box>
	);
}
