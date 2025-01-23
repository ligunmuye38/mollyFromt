'use client'

import { lottoHistory } from '../../model/items'
import { ILottoItem } from '../../model/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './GameHistory.module.sass'

interface LottoHistoryListItemProps {
	item: ILottoItem
}

export const LottoHistoryListItem = ({ item }: LottoHistoryListItemProps) => {
	return (
		<div className={cls.game_history}>
			<div className={cls.game_history_inner}>
				<p className={cls.game_history_lotto_price}>
					<span className={cls.currency}>$</span>
					{item.bet}
				</p>
				<p className={cls.game_history_lotto_date}>{item.date}</p>
				<div className={cls.game_history_lotto_result}>
					{item.status ? (
						<>
							<div className={cls.game_history_icon}>
								<Image
									src={item.result?.[0].icon ?? ''}
									width={33}
									height={33}
									alt='Lotto History Item'
								/>
							</div>
							<div>
								<p className={cls.game_history_lotto_result_name}>{item.result?.[0].name}</p>
								<p className={cls.game_history_lotto_result_price}>
									<span className={cls.currency}>$</span> {item.result?.[0].price}
								</p>
							</div>
						</>
					) : (
						<p className='text-[#FB4949]'>Fail</p>
					)}
				</div>
			</div>
		</div>
	)
}

const LottoHistoryList = () => {
	// For translation
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='mb-2 flex w-full rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/3 items-center justify-start uppercase'>{t('game_history_profile.bet')}</span>
				<span className='flex w-1/3 items-center justify-start uppercase'>{t('game_history_profile.date')}</span>
				<span className='flex w-1/3 items-center justify-end uppercase'>{t('game_history_profile.result')}</span>
			</div>
			<div className='flex flex-col gap-[15px]'>
				{lottoHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<LottoHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(lottoHistory.length / 8)}
				/>
			</div>
		</>
	)
}

export default LottoHistoryList
