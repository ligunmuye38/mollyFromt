'use client'

import { withdrawHistory } from '../../model/items'
import { ITransactionItem, TransactionStatus } from '../../model/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconFail from '@/shared/assets/icons/icon-close-circle.svg'
import IconReturn from '@/shared/assets/icons/icon-return.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-4.svg'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

interface WithdrawHistoryListItemProps {
	item: ITransactionItem
}

interface ThemeConfig {
	background: string
	fill: string
}

const transactionStatusThemeConfig: Record<TransactionStatus, ThemeConfig> = {
	[TransactionStatus.SUCCESS]: {
		background: '#10AA7C59',
		fill: '#10AA7C'
	},
	[TransactionStatus.ON_PROGRESS]: {
		background: '#E1B51459',
		fill: '#E1B514'
	},
	[TransactionStatus.FAILED]: {
		background: '#FD717159',
		fill: '#FD7171'
	},
	[TransactionStatus.RETURN]: {
		background: '#338FFB59',
		fill: '#338FFB'
	}
}

export const WithdrawHistoryListItem = ({ item }: WithdrawHistoryListItemProps) => {
	const StatusIcon = () => {
		if (item.status === TransactionStatus.SUCCESS) {
			return <IconCheck className='w-[14px] fill-[#10AA7C]' />
		}
		if (item.status === TransactionStatus.ON_PROGRESS) {
			return <IconTimer />
		}
		if (item.status === TransactionStatus.FAILED) {
			return <IconFail className='fill-[#B74242]' />
		}
		if (item.status === TransactionStatus.RETURN) {
			return <IconReturn />
		}
	}

	return (
		<div className='flex h-12 items-center rounded-lg bg-[#111620] p-3'>
			<p className='w-1/5'>{item.id}</p>
			<p className={'flex w-1/5 items-center gap-2'}>
				{item.method.icon && (
					<div className='flex h-7 w-7 items-center justify-center rounded-md bg-[#171D2A]'>
						<Image
							src={item.method.icon}
							width={16}
							height={16}
							alt='Payment method'
						/>
					</div>
				)}
				<span>{item.method.title}</span>
			</p>
			<p className={'w-1/5 text-[#24FDBC]'}>{item.amount}</p>
			<p className='w-1/5'>{item.date}</p>
			<div className='w-1/5'>
				<div
					className='ml-auto mr-1 flex h-6 w-6 items-center justify-center rounded-md'
					style={{ background: transactionStatusThemeConfig[item.status].background }}
				>
					<StatusIcon />
				</div>
			</div>
		</div>
	)
}

const WithdrawHistoryList = () => {
	// For translation
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='mb-2 flex w-full rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/5 items-center justify-start uppercase'>{t('transaction_history_profile.id')}</span>
				<span className='flex w-1/5 items-center justify-start uppercase'>
					{t('transaction_history_profile.method')}
				</span>
				<span className='flex w-1/5 items-center justify-start uppercase'>
					{t('transaction_history_profile.amount')}
				</span>
				<span className='flex w-1/5 items-center justify-start uppercase'>{t('transaction_history_profile.date')}</span>
				<span className='flex w-1/5 items-center justify-end uppercase'>{t('transaction_history_profile.status')}</span>
			</div>
			<div className='flex flex-col gap-[15px]'>
				{withdrawHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<WithdrawHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(withdrawHistory.length / 8)}
				/>
			</div>
		</>
	)
}

export default WithdrawHistoryList
