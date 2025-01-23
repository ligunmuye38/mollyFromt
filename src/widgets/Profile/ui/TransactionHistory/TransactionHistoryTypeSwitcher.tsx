'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { useCommonStore } from '@/entities/Common/model/store'

import IconMinus from '@/shared/assets/icons/icon-minus.svg'
import IconPlus from '@/shared/assets/icons/icon-plus.svg'

import cls from './TransactionHistory.module.sass'

const TransactionHistoryTypeSwitcher = () => {
	// For transalte
	const t = useTranslations()

	const transactionHistoryType = useCommonStore(state => state.transactionHistoryType)
	const setTransactionHistoryType = useCommonStore(state => state.setTransactionHistoryType)

	return (
		<div className={cls.switch}>
			<div className={clsx(cls.switch_trigger, transactionHistoryType === 'deposit' ? 'left-0' : 'left-[127px]')}>
				<div className={cls.switch_trigger_inner}>
					{transactionHistoryType === 'deposit' ? (
						<IconPlus className='fill-[#121722]' />
					) : (
						<IconMinus className='fill-[#121722]' />
					)}
					<span className='text-[14px] font-bold leading-5 text-[#121722]'>
						{transactionHistoryType === 'deposit'
							? t('transaction_history_profile.deposit')
							: t('transaction_history_profile.withdraw')}
					</span>
				</div>
			</div>
			<div className={cls.switch_back}>
				<div
					className='flex items-center justify-center gap-1'
					onClick={() => setTransactionHistoryType('deposit')}
				>
					<IconPlus className='fill-[#5A6786]' />
					<span className='text-[14px] font-bold leading-5 text-[#5A6786]'>
						{t('transaction_history_profile.deposit')}
					</span>
				</div>
				<div
					className='flex items-center justify-center gap-1'
					onClick={() => setTransactionHistoryType('withdraw')}
				>
					<IconMinus className='fill-[#5A6786]' />
					<span className='text-[14px] font-bold leading-5 text-[#5A6786]'>
						{t('transaction_history_profile.withdraw')}
					</span>
				</div>
			</div>
		</div>
	)
}

export default TransactionHistoryTypeSwitcher
