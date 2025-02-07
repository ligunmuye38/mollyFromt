'use client'

import { casesIcons } from '../../model/items'
import { CaseBattleMode, CaseBattleTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import IconArrowTop from '@/shared/assets/icons/icon-arrow-top.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCrazyMode from '@/shared/assets/icons/icon-crazy-mode.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconSort from '@/shared/assets/icons/icon-sort.svg'
import IconVerification from '@/shared/assets/icons/icon-verification-profile.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import FairnessModal from './FairnessModal'
import cls from './Main.module.sass'

interface MainListItemProps {
	item: {
		round: number
		value: string
		joined: boolean
		joinedPlayers: number
		isLive: boolean
		mode?: CaseBattleMode
	}
}

interface AvatarProps {
	icon: string
}

const JoinPlayer = () => {
	return (
		<Button className='relative'>
			<svg
				width='34'
				height='38'
				viewBox='0 0 34 38'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.35 1.76092C16.371 1.17143 17.629 1.17143 18.65 1.76092L31.1045 8.95152C32.1255 9.54101 32.7545 10.6304 32.7545 11.8094V26.1906C32.7545 27.3696 32.1255 28.459 31.1045 29.0485L18.65 36.2391C17.629 36.8286 16.371 36.8286 15.35 36.2391L2.89552 29.0485C1.87449 28.459 1.24552 27.3696 1.24552 26.1906L1.24552 11.8094C1.24552 10.6304 1.87449 9.54101 2.89552 8.95152L15.35 1.76092Z'
					fill='#10AA7C'
				/>
				<path
					d='M15.35 1.76092C16.371 1.17143 17.629 1.17143 18.65 1.76092L31.1045 8.95152C32.1255 9.54101 32.7545 10.6304 32.7545 11.8094V26.1906C32.7545 27.3696 32.1255 28.459 31.1045 29.0485L18.65 36.2391C17.629 36.8286 16.371 36.8286 15.35 36.2391L2.89552 29.0485C1.87449 28.459 1.24552 27.3696 1.24552 26.1906L1.24552 11.8094C1.24552 10.6304 1.87449 9.54101 2.89552 8.95152L15.35 1.76092Z'
					fill='url(#paint0_linear_4013_611)'
				/>
				<path
					d='M15.35 1.76092C16.371 1.17143 17.629 1.17143 18.65 1.76092L31.1045 8.95152C32.1255 9.54101 32.7545 10.6304 32.7545 11.8094V26.1906C32.7545 27.3696 32.1255 28.459 31.1045 29.0485L18.65 36.2391C17.629 36.8286 16.371 36.8286 15.35 36.2391L2.89552 29.0485C1.87449 28.459 1.24552 27.3696 1.24552 26.1906L1.24552 11.8094C1.24552 10.6304 1.87449 9.54101 2.89552 8.95152L15.35 1.76092Z'
					stroke='url(#paint1_linear_4013_611)'
					stroke-width='1.4'
				/>
				<path
					d='M15.35 1.76092C16.371 1.17143 17.629 1.17143 18.65 1.76092L31.1045 8.95152C32.1255 9.54101 32.7545 10.6304 32.7545 11.8094V26.1906C32.7545 27.3696 32.1255 28.459 31.1045 29.0485L18.65 36.2391C17.629 36.8286 16.371 36.8286 15.35 36.2391L2.89552 29.0485C1.87449 28.459 1.24552 27.3696 1.24552 26.1906L1.24552 11.8094C1.24552 10.6304 1.87449 9.54101 2.89552 8.95152L15.35 1.76092Z'
					stroke='url(#paint2_linear_4013_611)'
					stroke-width='1.4'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4013_611'
						x1='23.9881'
						y1='0'
						x2='23.9881'
						y2='38'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
							stop-opacity='0.65'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4013_611'
						x1='24.9813'
						y1='19'
						x2='32.0163'
						y2='19'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.347781'
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
						/>
					</linearGradient>
					<linearGradient
						id='paint2_linear_4013_611'
						x1='20.512'
						y1='19'
						x2='13.9736'
						y2='19'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#24FDBC'
							stop-opacity='0.5'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
						/>
					</linearGradient>
				</defs>
			</svg>
			<div className='absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2'>
				<IconPlus className='fill-[#121722]' />
			</div>
		</Button>
	)
}

const Avatar = ({ icon }: AvatarProps) => {
	return (
		<div className={cls.avatar}>
			<Image
				width={25}
				height={25}
				alt='avatar'
				className={cls.avatar_pic}
				src={icon}
			/>
			<svg
				className={cls.avatar_border}
				viewBox='0 0 34 38'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15.5 2.02073C16.4282 1.48483 17.5718 1.48483 18.5 2.02073L30.9545 9.21132C31.8827 9.74722 32.4545 10.7376 32.4545 11.8094V26.1906C32.4545 27.2624 31.8827 28.2528 30.9545 28.7887L18.5 35.9793C17.5718 36.5152 16.4282 36.5152 15.5 35.9793L3.04552 28.7887C2.11731 28.2528 1.54552 27.2624 1.54552 26.1906V11.8094C1.54552 10.7376 2.11731 9.74722 3.04552 9.21132L15.5 2.02073Z'
					stroke={`url(#avatar_gradient_default)`}
					strokeWidth='2'
				/>
				<defs>
					<linearGradient
						id={`avatar_gradient_default`}
						x1='17'
						y1='0'
						x2='17'
						y2='38'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.31841'
							stopColor='#430B92'
							stopOpacity='0.2'
						/>
						<stop
							offset='1'
							stopColor='#35375E'
						/>
					</linearGradient>
				</defs>
			</svg>
			<svg
				className={cls.avatar_border_inner}
				viewBox='0 0 26 30'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11.25 1.58771C12.3329 0.962498 13.6671 0.962498 14.75 1.58771L23.7404 6.77831C24.8233 7.40353 25.4904 8.55897 25.4904 9.8094V20.1906C25.4904 21.441 24.8233 22.5965 23.7404 23.2217L14.75 28.4123C13.6671 29.0375 12.3329 29.0375 11.25 28.4123L2.25962 23.2217C1.17671 22.5965 0.509619 21.441 0.509619 20.1906V9.8094C0.509619 8.55897 1.17671 7.40353 2.25962 6.77831L11.25 1.58771Z'
					stroke='#D1D9EB'
					strokeOpacity='0.15'
				/>
			</svg>
		</div>
	)
}

export const MainListItem = ({ item }: MainListItemProps) => {
	const t = useTranslations()

	const { openModal } = useModal()

	const onClickWatch = () => {
		openModal(
			<FairnessModal />,
			{},
			<IconVerification className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('case_battles.fairness'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className={cls.main_list}>
			<div className={clsx(cls.main_list_inner)}>
				<div className='relative flex flex-[0_0_54px] flex-col items-center'>
					{item.isLive ? (
						<div className='absolute right-0 top-0 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-md bg-[#10AA7C26] p-[3px]'>
							<div className='h-[6px] w-[6px] rounded-md bg-[#10AA7C]'></div>
						</div>
					) : null}
					{item.mode?.crazy ? (
						<div className='absolute -right-[4px] top-[30px] z-10'>
							<svg
								width='22'
								height='24'
								viewBox='0 0 22 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.25 1.58771C10.3329 0.962498 11.6671 0.962498 12.75 1.58771L19.1423 5.27831C20.2252 5.90353 20.8923 7.05897 20.8923 8.3094V15.6906C20.8923 16.941 20.2252 18.0965 19.1423 18.7217L12.75 22.4123C11.6671 23.0375 10.3329 23.0375 9.25 22.4123L2.8577 18.7217C1.77479 18.0965 1.1077 16.941 1.1077 15.6906L1.1077 8.3094C1.1077 7.05897 1.77479 5.90353 2.8577 5.27831L9.25 1.58771Z'
									fill='#273146'
								/>
								<path
									d='M9.25 1.58771C10.3329 0.962498 11.6671 0.962498 12.75 1.58771L19.1423 5.27831C20.2252 5.90353 20.8923 7.05897 20.8923 8.3094V15.6906C20.8923 16.941 20.2252 18.0965 19.1423 18.7217L12.75 22.4123C11.6671 23.0375 10.3329 23.0375 9.25 22.4123L2.8577 18.7217C1.77479 18.0965 1.1077 16.941 1.1077 15.6906L1.1077 8.3094C1.1077 7.05897 1.77479 5.90353 2.8577 5.27831L9.25 1.58771Z'
									fill='url(#paint0_linear_4129_2937)'
								/>
								<path
									d='M9.25 1.58771C10.3329 0.962498 11.6671 0.962498 12.75 1.58771L19.1423 5.27831C20.2252 5.90353 20.8923 7.05897 20.8923 8.3094V15.6906C20.8923 16.941 20.2252 18.0965 19.1423 18.7217L12.75 22.4123C11.6671 23.0375 10.3329 23.0375 9.25 22.4123L2.8577 18.7217C1.77479 18.0965 1.1077 16.941 1.1077 15.6906L1.1077 8.3094C1.1077 7.05897 1.77479 5.90353 2.8577 5.27831L9.25 1.58771Z'
									stroke='url(#paint1_linear_4129_2937)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_4129_2937'
										x1='15.4135'
										y1='0'
										x2='15.4135'
										y2='24'
										gradientUnits='userSpaceOnUse'
									>
										<stop stop-color='#3E4C6B' />
										<stop
											offset='1'
											stop-color='#273146'
											stop-opacity='0'
										/>
									</linearGradient>
									<linearGradient
										id='paint1_linear_4129_2937'
										x1='11'
										y1='0'
										x2='11'
										y2='24'
										gradientUnits='userSpaceOnUse'
									>
										<stop stop-color='#425171' />
										<stop
											offset='1'
											stop-color='#2E3952'
										/>
									</linearGradient>
								</defs>
							</svg>
							<IconCrazyMode className='absolute left-1/2 top-1/2 h-[14px] -translate-x-1/2 -translate-y-1/2' />
						</div>
					) : null}
					<div className={clsx(cls.hexagon, { [cls.green]: item.isLive }, 'mb-1')}>
						<div className={clsx(cls.hexagon_inner, { [cls.green]: item.isLive })}>
							<span className={item.isLive ? 'text-[#121722]' : 'text-[#7689B6]'}>{item.round}</span>
						</div>
					</div>
					<p className={cls.main_list_case_battle_round}>{t('case_battles.rounds')}</p>
				</div>
				<div className='relative ml-5 flex flex-[0_0_224px] items-center gap-2'>
					{item.joinedPlayers > 0 ? (
						<div className='mr-1 flex flex-col gap-4'>
							<Avatar icon='/images/avatars/2.jpg' />
						</div>
					) : (
						<JoinPlayer />
					)}
					{item.joinedPlayers > 1 ? (
						<div className='mr-4 flex flex-col gap-4'>
							<Avatar icon='/images/avatars/3.jpg' />
						</div>
					) : (
						<JoinPlayer />
					)}
					<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
					{item.joinedPlayers > 2 ? (
						<div className='mr-1 flex flex-col gap-4'>
							<Avatar icon='/images/avatars/4.jpg' />
						</div>
					) : (
						<JoinPlayer />
					)}
					{item.joinedPlayers > 3 ? (
						<div className='flex flex-col gap-4'>
							<Avatar icon='/images/avatars/5.jpg' />
						</div>
					) : (
						<JoinPlayer />
					)}
				</div>
				<div
					className={clsx(
						cls.hexagon_btn,
						cls.default,
						cls.sm,
						'mx-[10px] h-[38px] w-full max-w-[120px] flex-[0_0_120px] px-[13px]'
					)}
				>
					<div className={clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')}>
						<span className='text-[14px] font-bold leading-4 text-white'>
							<span className='text-[#24FDBC]'>$</span>
							{item.value}
						</span>
					</div>
				</div>
				<div className='relative flex-grow'>
					<div className={cls.main_list_case_battle_cases_icons}>
						{casesIcons.map((icon, index) => (
							<Fragment key={`case-icon-${index}:${Date.now()}`}>
								<Image
									className={index === 2 ? `opacity-100` : `opacity-30`}
									src={icon}
									width={60}
									height={60}
									alt='Case Icon'
								/>
							</Fragment>
						))}
					</div>
					<div className={clsx(cls.main_list_case_battle_case_icon_cursor, 'absolute -top-[6px] left-[167px]')}>
						<IconArrowTop />
					</div>
					<div
						className={clsx(
							cls.main_list_case_battle_case_icon_cursor,
							'absolute -bottom-[6px] left-[167px] rotate-180'
						)}
					>
						<IconArrowTop />
					</div>
				</div>
				<Button
					onPress={onClickWatch}
					classNames={{
						base: clsx(
							cls.hexagon_btn,
							{ [cls.default]: item.joined },
							cls.sm,
							'h-[38px] w-[140px] ml-6 flex-[0_0_140px]'
						),
						content: clsx(cls.hexagon_btn_inner, { [cls.default]: item.joined }, cls.sm, '!gap-[6px]')
					}}
				>
					{!item.joined ? (
						<>
							<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
							<span className='text-[12px] font-[900] leading-4 text-[#121722]'>
								{t('case_battles.join').toUpperCase()}
							</span>
						</>
					) : (
						<>
							<IconEye className={clsx(cls.hexagon_btn_inner_icon, cls.sm, '!fill-[#60719A]')} />
							<span className='text-[12px] font-[900] leading-4 text-[#60719A]'>
								{t('case_battles.watch').toUpperCase()}
							</span>
						</>
					)}
				</Button>
			</div>
		</div>
	)
}

interface ITopBattleItemProps {
	item: {
		rank: number
		value: {
			usd: string
			times: string
		}
		price: string
	}
}

export const TopBattleItem = ({ item }: ITopBattleItemProps) => {
	const t = useTranslations()

	const { openModal } = useModal()

	const onClickWatch = () => {
		openModal(
			<FairnessModal />,
			{},
			<IconVerification className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('case_battles.fairness'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div
			className={clsx(
				cls.top_list,
				{ [cls.rank_first]: item.rank === 1 },
				{ [cls.rank_second]: item.rank === 2 },
				{ [cls.rank_third]: item.rank === 3 }
			)}
		>
			<div className='relative mr-5 flex flex-[0_0_110px] flex-col items-start'>
				<div
					className={clsx(
						cls.hexagon_vertical,
						{ [cls.rank_first]: item.rank === 1 },
						{ [cls.rank_second]: item.rank === 2 },
						{ [cls.rank_third]: item.rank === 3 }
					)}
				>
					<div
						className={clsx(
							cls.hexagon_vertical_inner,
							{ [cls.rank_first]: item.rank === 1 },
							{ [cls.rank_second]: item.rank === 2 },
							{ [cls.rank_third]: item.rank === 3 }
						)}
					>
						<span className={item.rank > 3 ? 'text-white' : 'text-[#141925]'}>{item.rank}</span>
					</div>
				</div>
			</div>
			<div className='flex-[0_0_240px]'>
				<div
					className={clsx(cls.hexagon_btn, cls.default, cls.sm, 'h-[38px] w-full max-w-[174px] flex-grow px-[13px]')}
				>
					<div
						className={clsx(
							cls.hexagon_btn_inner,
							cls.default,
							cls.sm,
							'!justify-end !gap-[6px] !bg-[#121722] !bg-none'
						)}
					>
						<span className='text-[14px] font-bold leading-4 text-white'>
							<span className='text-[#24FDBC]'>$</span>
							{item.value.usd}
						</span>
						<div
							className='ml-1 mr-[6px] flex h-[24px] w-[46px] items-center justify-center bg-[#EDBF1C] text-[10px] font-bold leading-4 text-[#121722]'
							style={{
								clipPath: 'polygon(5px 0px, calc(100% - 5px) 0px, 100% 50%, calc(100% - 5px) 100%, 5px 100%, 0px 50%)'
							}}
						>
							{item.value.times}
						</div>
					</div>
				</div>
			</div>
			<div className='flex-grow'>
				<div
					className={clsx(cls.hexagon_btn, cls.default, cls.sm, 'mx-[10px] h-[38px] w-full max-w-[120px] px-[13px]')}
				>
					<div className={clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')}>
						<span className='text-[14px] font-bold leading-4 text-white'>
							<span className='text-[#24FDBC]'>$</span>
							{item.price}
						</span>
					</div>
				</div>
			</div>
			<div className='relative flex flex-[0_0_224px] items-center gap-2'>
				<div className='mr-1 flex flex-col gap-4'>
					<Avatar icon='/images/avatars/2.jpg' />
				</div>
				<div className='mr-4 flex flex-col gap-4'>
					<Avatar icon='/images/avatars/3.jpg' />
				</div>
				<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
				<div className='mr-1 flex flex-col gap-4'>
					<Avatar icon='/images/avatars/4.jpg' />
				</div>
				<div className='flex flex-col gap-4'>
					<Avatar icon='/images/avatars/5.jpg' />
				</div>
			</div>
			<Button
				onPress={onClickWatch}
				classNames={{
					base: clsx(cls.hexagon_btn, cls.default, cls.sm, 'h-[38px] w-[140px] flex-[0_0_140px] ml-6'),
					content: clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')
				}}
			>
				<IconEye className={clsx(cls.hexagon_btn_inner_icon, cls.sm, '!fill-[#60719A]')} />
				<span className='text-[12px] font-[900] leading-4 text-[#60719A]'>{t('case_battles.watch').toUpperCase()}</span>
			</Button>
		</div>
	)
}

interface IMainListProps {
	type: CaseBattleTypes
}

const MainList = ({ type }: IMainListProps) => {
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			{type === CaseBattleTypes.ACTIVE_BATTLES ? (
				<div className={clsx(cls.hexagon_container, 'mb-4')}>
					<div
						className={clsx(
							cls.hexagon_container_inner,
							'flex !h-[34px] w-full items-center px-6 text-[12px] font-[500] leading-[16px] text-[#60719A]'
						)}
					>
						<div className='mr-5 flex flex-[0_0_54px] items-center gap-[6px]'>
							{t('case_battles.rounds')} <IconSort />
						</div>
						<div className='mr-[10px] flex flex-[0_0_224px] items-center gap-[6px]'>
							{t('case_battles.players')}
							<IconSort />
						</div>
						<div className='mr-[10px] flex flex-[0_0_120px] items-center gap-[6px]'>
							{t('case_battles.value')}
							<IconSort />
						</div>
						<span className='flex-grow'>{t('case_battles.cases')}</span>
						<span className='ml-6 flex-[0_0_140px]'>{t('case_battles.actions')}</span>
					</div>
				</div>
			) : (
				<div className={clsx(cls.hexagon_container, 'mb-4')}>
					<div
						className={clsx(
							cls.hexagon_container_inner,
							'flex !h-[34px] w-full items-center px-6 text-[12px] font-[500] leading-[16px] text-[#60719A]'
						)}
					>
						<div className='mr-5 flex flex-[0_0_110px] items-center gap-[6px]'>
							{t('case_battles.rating')} <IconSort />
						</div>
						<div className='mr-[10px] flex flex-[0_0_240px] items-center gap-[6px]'>
							{t('case_battles.profit')}
							<IconSort />
						</div>
						<div className='mr-[10px] flex flex-grow items-center gap-[6px]'>
							{t('case_battles.game_price')}
							<IconSort />
						</div>
						<span className='flex-[0_0_224px]'>{t('case_battles.players')}</span>
						<span className='ml-6 flex-[0_0_140px] text-end'>{t('case_battles.actions')}</span>
					</div>
				</div>
			)}
			{type === CaseBattleTypes.ACTIVE_BATTLES ? (
				<div className='flex flex-col gap-2'>
					<MainListItem
						item={{
							round: 3,
							value: '100 000.99',
							joined: true,
							joinedPlayers: 4,
							isLive: true,
							mode: {
								crazy: true
							}
						}}
					/>
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 4, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
					<MainListItem item={{ round: 1, value: '100.99', joined: false, joinedPlayers: 2, isLive: false }} />
				</div>
			) : (
				<div className='flex flex-col gap-2'>
					<TopBattleItem item={{ price: '100 000.99', rank: 1, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 2, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 3, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 4, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 5, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 6, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 7, value: { times: '6.11x', usd: '100 000.99' } }} />
					<TopBattleItem item={{ price: '100 000.99', rank: 8, value: { times: '6.11x', usd: '100 000.99' } }} />
				</div>
			)}
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={5}
				/>
			</div>
		</>
	)
}

export default MainList
