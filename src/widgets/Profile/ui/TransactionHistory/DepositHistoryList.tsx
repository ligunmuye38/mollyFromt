'use client'

import { depositHistory } from '../../model/items'
import { ITransactionItem, TransactionStatus } from '../../model/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconFail from '@/shared/assets/icons/icon-close-circle.svg'
import IconReturn from '@/shared/assets/icons/icon-return.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-4.svg'
import IconTransactionHistory from '@/shared/assets/icons/icon-transaction-history-profile-logo.svg'
import { useModal } from '@/shared/context/ModalContext'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import TransactionDetailModal from './TransactionDetailModal'

interface DepositHistoryListItemProps {
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

export const DepositHistoryListItem = ({ item }: DepositHistoryListItemProps) => {
	const t = useTranslations()

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

	const { openModal } = useModal()

	const onClick = () => {
		if (window.screen.width < 768) {
			openModal(
				<TransactionDetailModal item={item} />,
				{},
				<IconTransactionHistory className='h-[19px] w-[19px] fill-[#19D099]' />,
				t('transaction_history_profile.transaction_history'),
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
			className='flex h-[48px] cursor-pointer items-center gap-1 rounded-lg bg-[#111620] px-3 py-[10px]'
		>
			<p className='w-1/6 md:w-[30%] md:text-[12px]'>{item.id}</p>
			<p className={'flex w-1/6 items-center gap-2 md:w-[40%] md:text-[12px]'}>
				{item.method.icon && (
					<div className='flex h-7 w-7 items-center justify-center rounded-md bg-[#171D2A] md:h-5 md:w-5'>
						<Image
							className='md:!h-3 md:!w-3'
							src={item.method.icon}
							width={16}
							height={16}
							alt='Payment method'
						/>
					</div>
				)}
				<span>{item.method.title}</span>
			</p>
			<p className={'w-1/6 text-[#24FDBC] md:w-[30%] md:text-[12px]'}>{item.amount}</p>
			<p className={'w-1/6 text-[#E2B517] md:hidden'}>{item.bonus}</p>
			<p className='w-1/6 md:hidden'>{item.date}</p>
			<div className='w-1/6 md:hidden'>
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

const DepositHistoryList = () => {
	// For translation
	const t = useTranslations()

	const [page, setPage] = useState<number>(1)

	return (
		<>
			<div className='mb-2 flex w-full gap-1 rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/6 items-center justify-start uppercase md:w-[30%]'>
					{t('transaction_history_profile.id')}
				</span>
				<span className='flex w-1/6 items-center justify-start uppercase md:w-[40%]'>
					{t('transaction_history_profile.method')}
				</span>
				<span className='flex w-1/6 items-center justify-start uppercase md:w-[30%]'>
					{t('transaction_history_profile.amount')}
				</span>
				<span className='flex w-1/6 items-center justify-start uppercase md:hidden'>
					{t('transaction_history_profile.bonus')}
				</span>
				<span className='flex w-1/6 items-center justify-start uppercase md:hidden'>
					{t('transaction_history_profile.date')}
				</span>
				<span className='flex w-1/6 items-center justify-end uppercase md:hidden'>
					{t('transaction_history_profile.status')}
				</span>
			</div>
			<div className='flex flex-col gap-[15px]'>
				{depositHistory.slice(8 * (page - 1), 8 * page).map((item, index) => (
					<DepositHistoryListItem
						item={item}
						key={`case-battle-history-list-item-${index}:${Date.now()}`}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={Math.ceil(depositHistory.length / 8)}
				/>
			</div>
		</>
	)
}

export default DepositHistoryList
