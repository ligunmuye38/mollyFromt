import { casesIcons } from '../../model/items'
import { BattleVariants } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconArrowTop from '@/shared/assets/icons/icon-arrow-top.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './CaseBattle.module.sass'

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

const MainHeader = () => {
	const t = useTranslations()

	const [isLive, _toggleIsLive] = useState<boolean>(true)
	const [joinedPlayers, _setJoinedPlayers] = useState<number>(4)
	const [round, _setRound] = useState<number>(3)
	const [value, _setValue] = useState<number>(100.99)
	const [isCrazyMode, _toggleIsCrazyMode] = useState<boolean>(true)
	const { currentBattleVariant } = useCommonStore()

	const battleVariants = () => {
		switch (currentBattleVariant) {
			case BattleVariants.ONE_VS_ONE:
				return (
					<div className='relative mr-4 flex flex-[0_0_216px] items-center justify-center 2md:mr-0'>
						{joinedPlayers > 0 ? (
							<div className='mr-4 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 1 ? (
							<div className='flex flex-col gap-4'>
								<Avatar icon='/images/avatars/4.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
					</div>
				)
			case BattleVariants.ONE_VS_ONE_VS_ONE:
				return (
					<div className='relative mr-4 flex flex-[0_0_216px] items-center justify-center 2md:mr-0'>
						{joinedPlayers > 0 ? (
							<div className='mr-4 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 1 ? (
							<div className='mr-4 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 2 ? (
							<div className='flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
					</div>
				)
			case BattleVariants.ONE_VS_ONE_VS_ONE_VS_ONE:
				return (
					<div className='relative mr-4 flex flex-[0_0_216px] items-center justify-center 2md:mr-0'>
						{joinedPlayers > 0 ? (
							<div className='mr-2 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-2 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 1 ? (
							<div className='mr-2 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-2 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 2 ? (
							<div className='mr-2 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-2 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 3 ? (
							<div className='flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
					</div>
				)
			case BattleVariants.TWO_VS_TWO:
				return (
					<div className='relative mr-4 flex flex-[0_0_216px] items-center justify-center 2md:mr-0'>
						{joinedPlayers > 0 ? (
							<div className='mr-1 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/2.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						{joinedPlayers > 1 ? (
							<div className='mr-4 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/3.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						<IconCaseBattle className='mr-4 h-6 w-6 fill-[#2F374A]' />
						{joinedPlayers > 2 ? (
							<div className='mr-1 flex flex-col gap-4'>
								<Avatar icon='/images/avatars/4.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
						{joinedPlayers > 3 ? (
							<div className='flex flex-col gap-4'>
								<Avatar icon='/images/avatars/5.jpg' />
							</div>
						) : (
							<JoinPlayer />
						)}
					</div>
				)
		}
	}

	return (
		<div className={clsx(cls.main_list, 'mb-[20px]')}>
			<div className={clsx(cls.main_list_inner, '2md:!grid 2md:!grid-cols-4 2md:!gap-2 2md:!px-1 2md:!pb-1')}>
				<div className='relative flex flex-[0_0_54px] flex-col items-center 2md:!row-span-2 2md:ml-3'>
					{isLive ? (
						<div className='absolute right-0 top-0 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-md bg-[#10AA7C26] p-[3px]'>
							<div className='h-[6px] w-[6px] rounded-md bg-[#10AA7C]'></div>
						</div>
					) : null}
					<div className={clsx(cls.hexagon, { [cls.green]: isLive }, 'mb-1')}>
						<div className={clsx(cls.hexagon_inner, { [cls.green]: isLive })}>
							<span className={isLive ? 'text-[#121722]' : 'text-[#7689B6]'}>{round}</span>
						</div>
					</div>
					<p className={cls.main_list_case_battle_round}>{t('case_battles.rounds')}</p>
				</div>
				<div
					className={clsx(
						cls.hexagon_btn,
						cls.default,
						cls.sm,
						'mx-[30px] h-[38px] w-full max-w-[120px] flex-[0_0_120px] px-[13px] 2md:col-span-3 2md:mx-0 2md:mr-3 2md:justify-self-end'
					)}
				>
					<div className={clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')}>
						<span className='text-[14px] font-bold leading-4 text-white'>
							<span className='text-[#24FDBC]'>$</span>
							{value}
						</span>
					</div>
				</div>
				<div className='relative flex-grow 2md:order-1 2md:col-span-4'>
					<div className={clsx(cls.main_list_case_battle_cases_icons, 'max-w-[500px] 2md:max-w-full')}>
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
				{isCrazyMode ? (
					<div className='mx-2 2md:hidden'>
						<svg
							width='35'
							height='39'
							viewBox='0 0 35 39'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M20.2414 1.4986L30.7896 7.73788C32.5827 8.79848 33.6873 10.7586 33.6873 12.8799V25.3585C33.6873 27.4798 32.5827 29.4398 30.7896 30.5005L20.2414 36.7398C18.4483 37.8004 16.2391 37.8004 14.446 36.7398L3.89772 30.5005C2.10461 29.4398 1 27.4798 1 25.3585V12.8799C1 10.7586 2.10461 8.79848 3.89773 7.73788L14.446 1.4986C16.2391 0.437968 18.4483 0.437968 20.2414 1.4986Z'
								fill='url(#paint0_linear_4398_8862)'
								stroke='url(#paint1_linear_4398_8862)'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M17.0002 9.625C20.6225 9.625 23.5862 12.5887 23.5862 16.211C23.5862 19.8266 23.5863 23.4422 23.5863 27.0578C23.5863 27.7823 22.9935 28.375 22.269 28.375C21.5446 28.375 20.9518 27.7823 20.9518 27.0578V25.2893C20.9518 24.5648 20.3591 23.9721 19.6346 23.9721C18.9102 23.9721 18.3173 24.5648 18.3173 25.2893V25.6027C18.3173 26.3271 17.7246 26.9199 17.0002 26.9199C16.2757 26.9199 15.683 26.3271 15.683 25.6027V25.4441C15.683 24.7196 15.0902 24.1269 14.3657 24.1269C13.6413 24.1269 13.0485 24.7196 13.0485 25.4441V27.0578C13.0485 27.7823 12.4558 28.375 11.7313 28.375C11.0068 28.375 10.4141 27.7823 10.4141 27.0578C10.4141 23.4422 10.4141 19.8266 10.4141 16.211C10.4141 12.5887 13.3779 9.625 17.0002 9.625ZM14.4048 21.9462L15.5667 20.8206L16.7286 21.9462C16.8807 22.0941 17.1205 22.0927 17.2725 21.9455L18.4337 20.8206L19.5956 21.9461C19.7498 22.0961 19.9965 22.0927 20.1464 21.9385C20.2965 21.7843 20.293 21.5377 20.1389 21.3877L18.7054 19.9989C18.5548 19.8523 18.3138 19.8515 18.1621 19.9989L17.0003 21.1245L15.8384 19.9989C15.6878 19.8523 15.4468 19.8515 15.2952 19.9989L13.8617 21.3877C13.7075 21.5377 13.7041 21.7843 13.8541 21.9385C14.004 22.0927 14.2506 22.0962 14.4048 21.9462ZM18.9077 16.9519L19.5503 16.3092L20.193 16.9519C20.3455 17.1044 20.5928 17.1044 20.7454 16.9519C20.8979 16.7993 20.8979 16.552 20.7454 16.3995L20.1027 15.7568L20.7454 15.1142C20.8979 14.9617 20.8979 14.7144 20.7454 14.5618C20.5928 14.4093 20.3455 14.4093 20.193 14.5618L19.5503 15.2045L18.9077 14.5618C18.7552 14.4093 18.5079 14.4093 18.3553 14.5618C18.2028 14.7143 18.2028 14.9616 18.3553 15.1142L18.9979 15.7568L18.3553 16.3995C18.2028 16.552 18.2028 16.7993 18.3553 16.9519C18.5079 17.1044 18.7552 17.1044 18.9077 16.9519ZM13.8074 16.9519L14.4501 16.3092L15.0927 16.9519C15.2452 17.1044 15.4925 17.1044 15.6451 16.9519C15.7976 16.7993 15.7976 16.552 15.6451 16.3995L15.0025 15.7568L15.6451 15.1142C15.7976 14.9617 15.7976 14.7144 15.6451 14.5618C15.4926 14.4093 15.2453 14.4093 15.0927 14.5618L14.4501 15.2045L13.8074 14.5618C13.6549 14.4093 13.4076 14.4093 13.255 14.5618C13.1025 14.7143 13.1025 14.9616 13.255 15.1142L13.8977 15.7568L13.255 16.3995C13.1025 16.552 13.1025 16.7993 13.255 16.9519C13.4076 17.1044 13.6549 17.1044 13.8074 16.9519Z'
								fill='#60719A'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_4398_8862'
									x1='17.3437'
									y1='0.703125'
									x2='17.3437'
									y2='37.5352'
									gradientUnits='userSpaceOnUse'
								>
									<stop stop-color='#191F2D' />
									<stop
										offset='1'
										stop-color='#435170'
										stop-opacity='0.25'
									/>
								</linearGradient>
								<linearGradient
									id='paint1_linear_4398_8862'
									x1='17.3437'
									y1='0.703125'
									x2='17.3437'
									y2='37.5352'
									gradientUnits='userSpaceOnUse'
								>
									<stop stop-color='#1F2534' />
									<stop
										offset='1'
										stop-color='#1F2534'
										stop-opacity='0.25'
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
				) : null}
				<div className='2md:col-span-3 2md:mr-3 2md:justify-self-end'>{battleVariants()}</div>
				<Button>
					<svg
						width='34'
						height='38'
						viewBox='0 0 34 38'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='2md:hidden'
					>
						<g clip-path='url(#clip0_4135_3694)'>
							<path
								d='M20.0148 1.4986L30.563 7.73788C32.3561 8.79848 33.4608 10.7586 33.4608 12.8799V25.3585C33.4608 27.4798 32.3561 29.4398 30.563 30.5005L20.0148 36.7398C18.2217 37.8004 16.0125 37.8004 14.2194 36.7398L3.67116 30.5005C1.87805 29.4398 0.773438 27.4798 0.773438 25.3585V12.8799C0.773438 10.7586 1.87805 8.79848 3.67117 7.73788L14.2194 1.4986C16.0125 0.437968 18.2217 0.437968 20.0148 1.4986Z'
								fill='#10AA7C'
							/>
							<path
								d='M20.0148 1.4986L30.563 7.73788C32.3561 8.79848 33.4608 10.7586 33.4608 12.8799V25.3585C33.4608 27.4798 32.3561 29.4398 30.563 30.5005L20.0148 36.7398C18.2217 37.8004 16.0125 37.8004 14.2194 36.7398L3.67116 30.5005C1.87805 29.4398 0.773438 27.4798 0.773438 25.3585V12.8799C0.773438 10.7586 1.87805 8.79848 3.67117 7.73788L14.2194 1.4986C16.0125 0.437968 18.2217 0.437968 20.0148 1.4986Z'
								fill='url(#paint0_linear_4135_3694)'
							/>
							<g clip-path='url(#clip1_4135_3694)'>
								<path
									d='M16.0721 23.4251C15.1458 24.3857 13.6371 24.4743 12.6047 23.6287C11.9899 23.0963 11.6758 22.2959 11.7646 21.4874C11.8414 20.8914 12.12 20.3396 12.554 19.9238L14.232 18.2447C14.5736 17.9029 14.5736 17.349 14.232 17.0072C13.8902 16.6656 13.3362 16.6656 12.9945 17.0072L11.3521 18.6502C10.6034 19.3721 10.1313 20.3335 10.0177 21.3672C9.80559 23.6957 11.5212 25.7552 13.8496 25.9674C15.1 26.0813 16.3365 25.6343 17.225 24.7471L18.98 22.9927C19.3216 22.651 19.3216 22.097 18.98 21.7552C18.6382 21.4136 18.0843 21.4136 17.7425 21.7552L16.0721 23.4251Z'
									fill='#10151E'
								/>
								<path
									d='M22.3449 12.8556C20.6025 11.5755 18.1831 11.7762 16.6755 13.3258L15.0238 14.9781C14.6822 15.3199 14.6822 15.8739 15.0238 16.2156C15.3656 16.5573 15.9195 16.5573 16.2613 16.2156L17.9393 14.5394C18.8454 13.6022 20.3115 13.4966 21.3425 14.2943C22.4037 15.1645 22.5586 16.7302 21.6884 17.7914C21.6375 17.8535 21.5836 17.9131 21.5269 17.97L19.7718 19.725C19.4302 20.0668 19.4302 20.6208 19.7718 20.9625C20.1136 21.3042 20.6676 21.3042 21.0093 20.9625L22.7643 19.2075C24.4166 17.55 24.4123 14.8669 22.7548 13.2147C22.626 13.0863 22.4891 12.9664 22.3449 12.8556Z'
									fill='#10151E'
								/>
								<path
									d='M15.0239 19.7265L17.7431 17.0073C18.0849 16.6655 18.639 16.6655 18.9807 17.0073C19.3225 17.3491 19.3225 17.9032 18.9807 18.245L16.2616 20.9641C15.9198 21.3059 15.3657 21.3059 15.0239 20.9641C14.6821 20.6224 14.6821 20.0683 15.0239 19.7265Z'
									fill='#10151E'
								/>
							</g>
							<path
								d='M20.0148 1.4986L30.563 7.73788C32.3561 8.79848 33.4608 10.7586 33.4608 12.8799V25.3585C33.4608 27.4798 32.3561 29.4398 30.563 30.5005L20.0148 36.7398C18.2217 37.8004 16.0125 37.8004 14.2194 36.7398L3.67116 30.5005C1.87805 29.4398 0.773438 27.4798 0.773438 25.3585V12.8799C0.773438 10.7586 1.87805 8.79848 3.67117 7.73788L14.2194 1.4986C16.0125 0.437968 18.2217 0.437968 20.0148 1.4986Z'
								stroke='url(#paint1_linear_4135_3694)'
							/>
							<path
								d='M20.0148 1.4986L30.563 7.73788C32.3561 8.79848 33.4608 10.7586 33.4608 12.8799V25.3585C33.4608 27.4798 32.3561 29.4398 30.563 30.5005L20.0148 36.7398C18.2217 37.8004 16.0125 37.8004 14.2194 36.7398L3.67116 30.5005C1.87805 29.4398 0.773438 27.4798 0.773438 25.3585V12.8799C0.773438 10.7586 1.87805 8.79848 3.67117 7.73788L14.2194 1.4986C16.0125 0.437968 18.2217 0.437968 20.0148 1.4986Z'
								stroke='url(#paint2_linear_4135_3694)'
							/>
						</g>
						<defs>
							<linearGradient
								id='paint0_linear_4135_3694'
								x1='24.2223'
								y1='-0.672477'
								x2='24.2223'
								y2='38.9109'
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
								id='paint1_linear_4135_3694'
								x1='25.2321'
								y1='19.1192'
								x2='32.3849'
								y2='19.1192'
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
								id='paint2_linear_4135_3694'
								x1='20.6879'
								y1='19.1192'
								x2='14.04'
								y2='19.1192'
								gradientUnits='userSpaceOnUse'
							>
								<stop
									stop-color='#24FDBC'
									stop-opacity='0'
								/>
								<stop
									offset='1'
									stop-color='#24FDBC'
								/>
							</linearGradient>
							<clipPath id='clip0_4135_3694'>
								<rect
									width='34'
									height='38'
									fill='white'
								/>
							</clipPath>
							<clipPath id='clip1_4135_3694'>
								<rect
									width='14'
									height='14'
									fill='white'
									transform='translate(10 12)'
								/>
							</clipPath>
						</defs>
					</svg>
				</Button>
			</div>
		</div>
	)
}

export default MainHeader
