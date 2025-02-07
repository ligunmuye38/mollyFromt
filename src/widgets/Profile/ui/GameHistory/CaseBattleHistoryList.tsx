'use client'

import { caseBattleHistory, casesIcons } from '../../model/items'
import { ICaseBattleItem } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import IconArrowTop from '@/shared/assets/icons/icon-arrow-top.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './GameHistory.module.sass'

interface CaseBattleHistoryListItemProps {
	item: ICaseBattleItem
}

interface AvatarProps {
	icon: string
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

export const CaseBattleHistoryListItem = ({ item }: CaseBattleHistoryListItemProps) => {
	const t = useTranslations()

	return (
		<div className={cls.game_history}>
			<div className={clsx(cls.game_history_inner, 'justify-between gap-5 md:gap-2')}>
				<div className='flex flex-col items-center'>
					<div className={cls.hexagon}>
						<div className={cls.hexagon_inner}>
							<span>{item.round}</span>
						</div>
					</div>
					<p className={cls.game_history_case_battle_round}>{t('game_history_profile.rounds')}</p>
				</div>
				{/* md:hidden */}
				<div className='md:hidden'>
					<p className='text-center text-[9px] font-medium text-[#444F69]'>{t('cost').toUpperCase()}</p>
					<p className='text-center text-[12px] font-bold text-white'>$100.99</p>
				</div>
				<div className='h-[58px] w-[1px] flex-[0_0_1px] bg-[linear-gradient(180deg,_#2C364A_0%,_#1A202E_100%)] md:hidden'></div>
				<div className='relative flex flex-[0_0_180px] flex-col md:flex-[0_0_160px]'>
					<div className={clsx(cls.price, 'mb-2 hidden h-6 md:block')}>
						<div className={cls.price_inner}>
							<p className='text-[12px] text-[#7689B6]'>
								$10 {'>'} <span className='text-[#24FDBC]'>$</span>
								<span className='text-white'>100.99</span>
							</p>
						</div>
					</div>
					<div className='flex w-full items-center justify-center gap-2 md:justify-start'>
						<div className='flex gap-2'>
							<Avatar icon={item.allies[0].icon} />
						</div>
						<div className={cls.game_history_case_battle_icon}>
							<IconCaseBattle />
						</div>
						<div className='flex gap-2'>
							<Avatar icon={item.enemies[0].icon} />
						</div>
					</div>
				</div>
				<div className='h-[58px] w-[1px] flex-[0_0_1px] bg-[linear-gradient(180deg,_#2C364A_0%,_#1A202E_100%)] md:hidden'></div>
				<div className='md:hidden'>
					<p className='text-center text-[9px] font-medium text-[#444F69]'>{t('win').toUpperCase()}</p>
					<p className='text-center text-[12px] font-bold text-[#24FDBC]'>$500.97</p>
				</div>
				<div className='relative'>
					<div className={clsx(cls.game_history_case_battle_cases_icons, 'md:h-[81px] md:flex-col')}>
						{casesIcons.map((icon, index) => (
							<Fragment key={`case-icon-${index}:${Date.now()}`}>
								<Image
									className={index === 2 ? `opacity-100` : `opacity-30`}
									src={icon}
									width={65}
									height={60}
									alt='Case Icon'
								/>
							</Fragment>
						))}
					</div>
					<div className={clsx(cls.game_history_case_battle_case_icon_cursor, 'absolute -top-[6px] left-[182px]')}>
						<IconArrowTop />
					</div>
					<div
						className={clsx(
							cls.game_history_case_battle_case_icon_cursor,
							'absolute -bottom-[6px] left-[182px] rotate-180'
						)}
					>
						<IconArrowTop />
					</div>
				</div>
			</div>
		</div>
	)
}

const CaseBattleHistoryList = () => {
	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='flex flex-col gap-[15px]'>
				{caseBattleHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<CaseBattleHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(caseBattleHistory.length / 6)}
				/>
			</div>
		</>
	)
}

export default CaseBattleHistoryList
