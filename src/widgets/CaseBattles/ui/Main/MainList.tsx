'use client'

import { casesIcons } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment, useState } from 'react'

import IconArrowTop from '@/shared/assets/icons/icon-arrow-top.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconPlus from '@/shared/assets/icons/icon-plus.svg'
import IconSort from '@/shared/assets/icons/icon-sort.svg'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './Main.module.sass'

interface MainListItemProps {
	item: {
		round: number
		value: string
		joined: boolean
	}
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

export const MainListItem = ({ item }: MainListItemProps) => {
	const t = useTranslations()

	return (
		<div className={cls.main_list}>
			<div className={clsx(cls.main_list_inner)}>
				<div className='flex flex-[0_0_54px] flex-col items-center'>
					<div className={cls.hexagon}>
						<div className={cls.hexagon_inner}>
							<span>{item.round}</span>
						</div>
					</div>
					<p className={cls.main_list_case_battle_round}>{t('case_battles.rounds')}</p>
				</div>
				<div className='relative ml-5 flex flex-[0_0_224px] items-center gap-2'>
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

const MainList = () => {
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
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
			<div className='flex flex-col gap-2'>
				<MainListItem item={{ round: 3, value: '100 000.99', joined: true }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
				<MainListItem item={{ round: 1, value: '100.99', joined: false }} />
			</div>
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
