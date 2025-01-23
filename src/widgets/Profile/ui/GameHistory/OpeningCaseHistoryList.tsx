'use client'

import { openingCaseHistory } from '../../model/items'
import { IOpeningCaseItem } from '../../model/types'
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
				<div className={cls.game_history_opening_case_name}>
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
				<p className={cls.game_history_opening_case_price}>
					<span className={cls.currency}>$</span>
					{item.price}
				</p>
				<p className={cls.game_history_opening_case_date_of_opening}>{item.dateOfOpening}</p>
				<div className={cls.game_history_opening_case_prize}>
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
				<span className='flex w-1/4 items-center justify-start uppercase'>{t('game_history_profile.case_name')}</span>
				<span className='flex w-1/4 items-center justify-start uppercase'>{t('game_history_profile.price')}</span>
				<span className='flex w-1/4 items-center justify-start uppercase'>
					{t('game_history_profile.date_of_opening')}
				</span>
				<span className='flex w-1/4 items-center justify-end uppercase'>{t('game_history_profile.prizes')}</span>
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
