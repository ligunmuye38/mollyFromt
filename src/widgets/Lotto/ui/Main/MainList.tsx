'use client'

import { LottoTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconGift from '@/shared/assets/icons/icon-gift.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import IconSort from '@/shared/assets/icons/icon-sort.svg'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './Main.module.sass'

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute left-[4px] top-[5px]'
				style={{
					clipPath:
						"path('M13.751 1.11408C14.8339 0.488865 16.1681 0.488866 17.251 1.11408L27.9507 7.29152C29.0336 7.91674 29.7007 9.07218 29.7007 10.3226V22.6775C29.7007 23.9279 29.0336 25.0834 27.9507 25.7086L17.251 31.886C16.1681 32.5112 14.8339 32.5112 13.751 31.886L3.05138 25.7086C1.96848 25.0834 1.30139 23.9279 1.30139 22.6775V10.3226C1.30139 9.07218 1.96848 7.91674 3.05139 7.29152L13.751 1.11408Z')"
				}}
				src={'/images/avatars/6.jpg'}
				width={30}
				height={30}
				alt='icon'
			/>
			<svg
				width='39'
				height='43'
				viewBox='0 0 39 43'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18 2.02073C18.9282 1.48483 20.0718 1.48483 21 2.02073L35.6195 10.4613C36.5477 10.9972 37.1195 11.9876 37.1195 13.0594V29.9406C37.1195 31.0124 36.5477 32.0028 35.6195 32.5387L21 40.9793C20.0718 41.5152 18.9282 41.5152 18 40.9793L3.38045 32.5387C2.45225 32.0028 1.88045 31.0124 1.88045 29.9406V13.0594C1.88045 11.9876 2.45225 10.9972 3.38045 10.4613L18 2.02073Z'
					stroke='url(#paint0_linear_120_14703)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_120_14703'
						x1='19.5'
						y1='5.20161'
						x2='19.5'
						y2='43'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#FDCD24'
							stop-opacity='0.19'
						/>
						<stop
							offset='1'
							stop-color='#FDCD24'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const HexagonWrapper = () => {
	return (
		<svg
			width='42'
			height='48'
			viewBox='0 0 42 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0.715391 12.2887L21 0.57735L41.2846 12.2887V35.7113L21 47.4226L0.715391 35.7113V12.2887Z'
				fill='url(#paint0_linear_4358_9665)'
				stroke='url(#paint1_linear_4358_9665)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4358_9665'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#232B3E' />
					<stop
						offset='0.5'
						stop-color='#232B3E'
						stop-opacity='0.25'
					/>
					<stop
						offset='1'
						stop-color='#232B3E'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4358_9665'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#2D374F' />
					<stop
						offset='0.5'
						stop-color='#2D374F'
						stop-opacity='0.45'
					/>
					<stop
						offset='1'
						stop-color='#2D374F'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

export const MainListItem = () => {
	const t = useTranslations()

	return (
		<div className={cls.main_list}>
			<div className={clsx(cls.main_list_inner)}>
				<div className='flex items-center'>
					<div className='relative flex h-[76px] w-[120px] items-center justify-center rounded-[12px] bg-[#10151E]'>
						<div className='absolute left-1/2 top-0 h-[2px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-b-[14px] bg-[#C84646]'></div>
						<div className='h-[50px] w-[80px] bg-[radial-gradient(50%_50%_at_50%_50%,_#C8464680_0%,_rgba(200,_70,_70,_0)_100%)] backdrop-blur-md'>
							<Image
								src='/images/skinsWiki/skins-wiki-example.png'
								width={80}
								height={60}
								alt='gun'
							/>
						</div>
					</div>
					<div className='ml-4'>
						<p className='text-[12px] leading-[14px] text-[#3B455C]'>Souvenir AWP</p>
						<p className='text-[14px] leading-[14px] text-white'>Dragon Lore</p>
						<p className='mb-1 text-[12px] uppercase leading-[14px] text-[#C94646]'>COVERT</p>
						<p className='text-[12px] font-bold text-[#17E2A5]'>$ 456,05</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<div className='relative'>
						<HexagonWrapper />
						<IconPeople className='absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 fill-[#60719A]' />
					</div>
					<div>
						<p className='text-[12px] font-bold text-[#3B455C]'>{t('lotto.players').toUpperCase()}</p>
						<p className='text-[14px] font-bold text-white'>14/50</p>
					</div>
				</div>
				<div className='flex items-center gap-3'>
					<div className='relative'>
						<HexagonWrapper />
						<IconGift className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 fill-[#60719A]' />
					</div>
					<div>
						<p className='text-[12px] font-bold text-[#3B455C]'>{t('lotto.for_a_raffle').toUpperCase()}</p>
						<p className='text-[14px] font-bold text-white'>
							<span className='text-[#17E2A5]'>$</span> 500.34
						</p>
					</div>
				</div>
				<Button
					classNames={{
						base: clsx(cls.hexagon_btn, cls.sm, 'h-[38px] w-[177px] ml-6 flex-[0_0_140px]'),
						content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
					}}
				>
					<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
					<span className='text-[12px] font-[900] leading-4 text-[#121722]'>
						{t('case_battles.join').toUpperCase()}
					</span>
				</Button>
			</div>
		</div>
	)
}

export const TopBattleItem = () => {
	return (
		<div className={cls.top_list}>
			<div className='relative mr-5 flex flex-grow items-center gap-[10px]'>
				<Avatar />
				<p className='text-[14px] font-bold text-white'>Aleksandr</p>
			</div>
			<div className='flex flex-[0_0_20%] justify-center'>
				<div
					className={clsx(cls.hexagon_btn, cls.default, cls.sm, 'mx-[10px] h-[38px] w-full max-w-[100px] px-[13px]')}
				>
					<div className={clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')}>
						<span className='text-[14px] font-bold leading-4 text-white'>
							<span className='text-[#24FDBC]'>$</span>
							100.99
						</span>
					</div>
				</div>
			</div>
			<p className='flex-[0_0_20%] text-center text-[14px] font-bold text-[#95AADB]'>20/06/2024 2:42</p>
			<div className='flex h-[48px] w-[249px] flex-[0_0_250px] items-center gap-[10px] rounded-lg border-1 border-[#212838]'>
				<div className='relative flex h-[48px] w-[80px] translate-x-[-1px] items-center justify-center rounded-[8px] bg-[#10151E]'>
					<div className='absolute left-0 top-1/2 h-[30px] w-[2px] -translate-y-1/2 rounded-r-[14px] bg-[#C12BC9]'></div>
					<div className='h-[38px] w-[60px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md'>
						<Image
							src='/images/case/skin-2.png'
							width={60}
							height={38}
							alt='gun'
						/>
					</div>
				</div>
				<div>
					<p className='text-[14px] leading-3 text-[#60719A]'>AK-47 | Fire Serpent</p>
					<p className='text-[14px] font-bold leading-3 text-[#24FDBC]'>$789.33</p>
				</div>
			</div>
		</div>
	)
}

interface IMainListProps {
	type: LottoTypes
}

const MainList = ({ type }: IMainListProps) => {
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			{type === LottoTypes.HISTORY_LOTTO && (
				<div className={clsx(cls.hexagon_container, 'mb-4')}>
					<div
						className={clsx(
							cls.hexagon_container_inner,
							'flex !h-[34px] w-full items-center px-6 text-[12px] font-[500] leading-[16px] text-[#60719A]'
						)}
					>
						<div className='flex flex-grow items-center gap-[6px]'>
							{t('lotto.player')} <IconSort />
						</div>
						<div className='flex flex-[0_0_20%] items-center justify-center gap-[6px]'>
							{t('lotto.winning_amount')}
							<IconSort />
						</div>
						<div className='flex flex-[0_0_20%] items-center justify-center gap-[6px]'>
							{t('lotto.date')}
							<IconSort />
						</div>
						<span className='flex-[0_0_250px] text-right'>{t('lotto.winning')}</span>
					</div>
				</div>
			)}
			{type === LottoTypes.ACTIVE_LOTTO ? (
				<div className='flex flex-col gap-2'>
					<MainListItem />
					<MainListItem />
					<MainListItem />
					<MainListItem />
					<MainListItem />
					<MainListItem />
					<MainListItem />
					<MainListItem />
				</div>
			) : (
				<div className='flex flex-col gap-2'>
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
					<TopBattleItem />
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
