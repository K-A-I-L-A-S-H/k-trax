import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { auth } from '@/lib/mutation';
import { AuthMode } from '@/lib/types';
import { useState } from 'react';

export default function AuthForm({ mode }: { mode: AuthMode }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	return (
		<Box height="100vh" width="100vw" bg="black">
			<Flex justify="center" align="center" height="100px" color="white">
				Hello
			</Flex>
			<Flex justify="center" align="center" height="calc(100vh - 100px)">
				Form
			</Flex>
		</Box>
	);
}
