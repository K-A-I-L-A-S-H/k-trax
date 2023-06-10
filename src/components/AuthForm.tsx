import { Box, Button, Flex, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { auth } from '@/lib/mutation';
import { AuthMode } from '@/lib/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';

export default function AuthForm({ mode }: { mode: AuthMode }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		await auth(mode, {
			email,
			password,
		});

		setIsLoading(false);
		router.push('/');
	};

	return (
		<Box height="100vh" width="100vw" bg="black">
			<Flex
				justify="center"
				align="center"
				height="100px"
				color="white"
				borderBottom="white 1px solid"
			>
				<Image src="/assets/k-trax.svg" alt="logo" height={80} width={80} />
			</Flex>
			<Flex
				justify="center"
				align="center"
				height="calc(100vh - 100px)"
				color="white"
			>
				<Box padding="50px" bg="gray.900" borderRadius="6px">
					<form onSubmit={handleSubmit}>
						<Input
							placeholder="email"
							type="email"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
						/>
						<Input
							placeholder="password"
							type="password"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
						/>
						<Button
							type="submit"
							bg="green.400"
							isLoading={isLoading}
							sx={{
								'&:hover': {
									bg: 'green.200',
								},
							}}
						>
							{mode}
						</Button>
					</form>
				</Box>
			</Flex>
		</Box>
	);
}
