'use client'

import { upgradeHistory } from '../../model/items'
import { IUpgradeItem } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconHistoryGame from '@/shared/assets/icons/icon-game-history-profile-logo.svg'
import { useModal } from '@/shared/context/ModalContext'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './GameHistory.module.sass'
import GameHistoryDetailModal from './GameHistoryDetailModal'

interface UpgradeHistoryListItemProps {
	item: IUpgradeItem
}

export const UpgradeHistoryListItem = ({ item }: UpgradeHistoryListItemProps) => {
	const t = useTranslations()

	const { openModal } = useModal()

	const onClick = () => {
		if (window.screen.width < 768) {
			openModal(
				<GameHistoryDetailModal item={item} />,
				{},
				<IconHistoryGame className='fill-[#19D099]' />,
				t('history_games_upgrade'),
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
				{item.status ? (
					<div className={clsx(cls.game_history_upgrade_item, 'md:!hidden')}>
						<div className={cls.game_history_icon}>
							<Image
								src={item.items?.[0].icon ?? ''}
								width={33}
								height={33}
								alt='Upgrade History Item'
							/>
						</div>
						<div>
							<p className={cls.game_history_upgrade_item_name}>{item.items?.[0].name}</p>
							<p className={cls.game_history_upgrade_item_price}>
								<span className={cls.currency}>$</span> {item.items?.[0].price}
							</p>
						</div>
					</div>
				) : (
					<p className={clsx(cls.game_history_upgrade_price, 'md:!hidden')}>
						<span className={cls.currency}>$</span>
						{item.price}
					</p>
				)}
				<p className={clsx(cls.game_history_upgrade_price, 'md:!w-1/2')}>
					<span className={cls.currency}>$</span>
					{item.price}
				</p>
				<p className={clsx(cls.game_history_upgrade_date_of_opening, 'md:!hidden')}>{item.dateOfOpening}</p>
				<div className={clsx(cls.game_history_upgrade_result, 'md:!w-1/2')}>
					{item.status ? (
						<>
							<div className={cls.game_history_icon}>
								<Image
									src={item.result?.[0].icon ?? ''}
									width={33}
									height={33}
									alt='Upgrade History Item'
								/>
							</div>
							<div>
								<p className={cls.game_history_upgrade_result_name}>{item.result?.[0].name}</p>
								<p className={cls.game_history_upgrade_result_price}>
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

const UpgradeHistoryList = () => {
	// For translation
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='mb-2 flex w-full rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/4 items-center justify-start uppercase md:hidden'>
					{t('game_history_profile.items_amount')}
				</span>
				<span className='flex w-1/4 items-center justify-start uppercase md:hidden'>
					{t('game_history_profile.total_price')}
				</span>
				<span className='flex w-1/4 items-center justify-start uppercase md:hidden'>
					{t('game_history_profile.date_of_opening')}
				</span>
				<span className='flex w-1/4 items-center justify-end uppercase md:hidden'>
					{t('game_history_profile.result')}
				</span>
				<span className='hidden w-1/2 items-center justify-start uppercase md:flex'>
					{t('amount_of_the_bet').toUpperCase()}
				</span>
				<span className='hidden w-1/2 items-center justify-end uppercase md:flex'>{t('winning').toUpperCase()}</span>
			</div>
			<div className='flex flex-col gap-[15px]'>
				{upgradeHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<UpgradeHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(upgradeHistory.length / 8)}
				/>
			</div>
		</>
	)
}

export default UpgradeHistoryList
