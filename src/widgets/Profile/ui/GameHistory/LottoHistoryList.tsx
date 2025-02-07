'use client'

import { lottoHistory } from '../../model/items'
import { ILottoItem } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconHistoryGame from '@/shared/assets/icons/icon-game-history-profile-logo.svg'
import { useModal } from '@/shared/context/ModalContext'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './GameHistory.module.sass'
import LottoDetailModal from './LottoDetailModal'

interface LottoHistoryListItemProps {
	item: ILottoItem
}

export const LottoHistoryListItem = ({ item }: LottoHistoryListItemProps) => {
	const t = useTranslations()

	const { openModal } = useModal()

	const onClick = () => {
		if (window.screen.width < 768) {
			openModal(
				<LottoDetailModal item={item} />,
				{},
				<IconHistoryGame className='fill-[#19D099]' />,
				t('history_games_lotto'),
				{
					body: '',
					modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
				},
				true
			)
		}
	}

	return (
		<div
			onClick={onClick}
			className={clsx(cls.game_history, 'flex h-[66px] items-center')}
		>
			<div className={cls.game_history_inner}>
				<p className={clsx(cls.game_history_lotto_price, 'md:!w-1/2')}>
					<span className={cls.currency}>$</span>
					{item.bet}
				</p>
				<p className={clsx(cls.game_history_lotto_date, 'md:!hidden')}>{item.date}</p>
				<div className={clsx(cls.game_history_lotto_result, 'md:!w-1/2')}>
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
				<span className='flex w-1/3 items-center justify-start uppercase md:w-1/2'>
					{t('game_history_profile.bet')}
				</span>
				<span className='flex w-1/3 items-center justify-start uppercase md:hidden'>
					{t('game_history_profile.date')}
				</span>
				<span className='flex w-1/3 items-center justify-end uppercase md:hidden'>
					{t('game_history_profile.result')}
				</span>
				<span className='hidden w-1/2 items-center justify-end uppercase md:flex'>{t('winning').toUpperCase()}</span>
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
