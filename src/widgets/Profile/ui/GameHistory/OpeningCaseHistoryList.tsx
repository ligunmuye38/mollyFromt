'use client'

import { openingCaseHistory } from '../../model/items'
import { IOpeningCaseItem } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './GameHistory.module.sass'

interface OpeningCaseHistoryListItemProps {
	item: IOpeningCaseItem
}

export const OpeningCaseHistoryListItem = ({ item }: OpeningCaseHistoryListItemProps) => {
	return (
		<div className={cls.game_history}>
			<div className={cls.game_history_inner}>
				<div className={clsx(cls.game_history_opening_case_name, '2sm:!w-1/2')}>
					<div className={cls.game_history_icon}>
						<Image
							src={'/images/case/case-preview-1.png'}
							width={33}
							height={33}
							alt='Opening Case History Item'
						/>
					</div>
					<p>{item.name}</p>
				</div>
				<p className={clsx(cls.game_history_opening_case_price, '2sm:hidden')}>
					<span className={cls.currency}>$</span>
					{item.price}
				</p>
				<p className={clsx(cls.game_history_opening_case_date_of_opening, '2sm:hidden')}>{item.dateOfOpening}</p>
				<div className={clsx(cls.game_history_opening_case_prize, '2sm:!hidden')}>
					<div className={cls.game_history_icon}>
						<Image
							src={item.prizes[0].icon}
							width={33}
							height={33}
							alt='Opening Case History Item'
						/>
					</div>
					<div>
						<p className={cls.game_history_opening_case_prize_name}>{item.prizes[0].name}</p>
						<p className={cls.game_history_opening_case_prize_price}>
							<span className={cls.currency}>$</span> {item.prizes[0].price}
						</p>
					</div>
				</div>
				<div className='hidden w-1/2 justify-end 2sm:flex'>
					<p className='text-[12px] text-white'>
						$5.39{' '}
						<span className='text-[#17E2A5]'>
							{'>'} <span className='text-[14px] font-bold'>2.30</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

const OpeningCaseHistoryList = () => {
	// For translation
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='mb-2 flex w-full rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/4 items-center justify-start uppercase 2sm:w-1/2'>
					{t('game_history_profile.case_name')}
				</span>
				<span className='flex w-1/4 items-center justify-start uppercase 2sm:hidden'>
					{t('game_history_profile.price')}
				</span>
				<span className='flex w-1/4 items-center justify-start uppercase 2sm:hidden'>
					{t('game_history_profile.date_of_opening')}
				</span>
				<span className='flex w-1/4 items-center justify-end uppercase 2sm:hidden'>
					{t('game_history_profile.prizes')}
				</span>
				<span className='hidden w-1/2 items-center justify-end uppercase 2sm:flex'>{`${t('price').toUpperCase()} > ${t('win').toUpperCase()}`}</span>
			</div>
			<div className='flex flex-col gap-[15px]'>
				{openingCaseHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<OpeningCaseHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(openingCaseHistory.length / 8)}
				/>
			</div>
		</>
	)
}

export default OpeningCaseHistoryList
