import {
	Box,
	ButtonGroup,
	Center,
	Flex,
	IconButton,
	RangeSlider,
	RangeSliderFilledTrack,
	RangeSliderTrack,
	RangeSliderThumb,
	Text,
} from '@chakra-ui/react';
import ReactHowler from 'react-howler';
import { useEffect, useState, useRef } from 'react';
import {
	MdOutlinePlayCircleFilled,
	MdOutlinePauseCircleFilled,
	MdOutlineRepeat,
	MdSkipPrevious,
	MdSkipNext,
	MdShuffle,
} from 'react-icons/md';
import { useStoreActions } from 'easy-peasy';
import { Song } from '@prisma/client';
import { formatTime } from '@/lib/formatter';

export default function Player({
	songs,
	activeSong,
}: {
	songs: Song[];
	activeSong: Song;
}) {
	const [playing, setPlaying] = useState(true);
	const [index, setIndex] = useState(
		songs.findIndex((s) => s.id === activeSong.id),
	);
	const [seek, setSeek] = useState(0.0);
	const [isSeeking, setIsSeeking] = useState(false);
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);
	const [duration, setDuration] = useState(0.0);
	const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);

	const soundRef = useRef(null);
	const repeatRef = useRef(repeat);

	useEffect(() => {
		let timerId: number;

		if (playing && !isSeeking) {
			const f = () => {
				setSeek(soundRef?.current?.seek());
				timerId = requestAnimationFrame(f);
			};

			timerId = requestAnimationFrame(f);
			return () => cancelAnimationFrame(timerId);
		}

		return cancelAnimationFrame(timerId!);
	}, [playing, isSeeking]);

	useEffect(() => {
		setActiveSong(songs[index]);
	}, [index, setActiveSong, songs]);

	useEffect(() => {
		repeatRef.current = repeat;
	}, [repeat]);

	const setPlayState = (value: boolean) => {
		setPlaying(value);
	};

	const onShuffle = () => {
		setShuffle((state) => !state);
	};

	const onRepeat = () => {
		setRepeat((state) => !state);
	};

	const previousSong = () => {
		setIndex((state) => {
			return state ? state - 1 : songs.length - 1;
		});
	};

	const nextSong = () => {
		setIndex((state) => {
			if (shuffle) {
				const nextIdx = Math.floor(Math.random() * songs.length);
				if (nextIdx === state) {
					return nextSong();
				}
				return nextIdx;
			}
			return state === songs.length - 1 ? 0 : state + 1;
		});
	};

	const onEnd = () => {
		if (repeatRef.current) {
			console.log('came');
			setSeek(0);
			soundRef?.current?.seek(0);
		} else {
			return nextSong();
		}
	};

	const onLoad = () => {
		const songDuration = soundRef?.current?.duration();
		setDuration(songDuration);
	};

	const onSeek = (e: string[]) => {
		setSeek(parseFloat(e[0]));
		soundRef?.current?.seek(e[0]);
	};

	return (
		<Box width="40%">
			<Box>
				<Box>
					<ReactHowler
						playing={playing}
						src={activeSong?.url}
						ref={soundRef}
						onLoad={onLoad}
						onEnd={onEnd}
					/>
				</Box>
				<Center color="gray.600">
					<ButtonGroup>
						<IconButton
							outline="none"
							variant="link"
							aria-label="shuffle"
							fontSize="24px"
							color={shuffle ? 'white' : 'gray.600'}
							icon={<MdShuffle />}
							onClick={onShuffle}
						/>
						<IconButton
							outline="none"
							variant="link"
							aria-label="skip"
							fontSize="24px"
							icon={<MdSkipPrevious />}
							onClick={previousSong}
						/>
						{playing ? (
							<IconButton
								outline="none"
								variant="link"
								aria-label="pause"
								fontSize="40px"
								color="white"
								icon={<MdOutlinePauseCircleFilled />}
								onClick={() => setPlayState(false)}
							/>
						) : (
							<IconButton
								outline="none"
								variant="link"
								aria-label="play"
								fontSize="40px"
								color="white"
								icon={<MdOutlinePlayCircleFilled />}
								onClick={() => setPlayState(true)}
							/>
						)}

						<IconButton
							outline="none"
							variant="link"
							aria-label="next"
							fontSize="24px"
							icon={<MdSkipNext />}
							onClick={nextSong}
						/>
						<IconButton
							outline="none"
							variant="link"
							aria-label="repeat"
							fontSize="24px"
							color={repeat ? 'white' : 'gray.600'}
							icon={<MdOutlineRepeat />}
							onClick={onRepeat}
						/>
					</ButtonGroup>
				</Center>
				<Box color="gray.600">
					<Flex justify="center" align="center">
						<Box width="10%">
							<Text fontSize="xs">{formatTime(seek)}</Text>
						</Box>
						<Box width="80%">
							<RangeSlider
								aria-label={['min', 'max']}
								step={0.1}
								min={0}
								max={duration ? duration.toFixed(2) : 0}
								id="player-range"
								onChange={onSeek}
								value={[seek]}
								onChangeStart={() => setIsSeeking(true)}
								onChangeEnd={() => setIsSeeking(false)}
							>
								<RangeSliderTrack bg="gray.800">
									<RangeSliderFilledTrack bg="gray.600" />
								</RangeSliderTrack>
								<RangeSliderThumb index={0} />
							</RangeSlider>
						</Box>
						<Box width="10%" textAlign="right">
							<Text fontSize="xs">{formatTime(duration)}</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}
