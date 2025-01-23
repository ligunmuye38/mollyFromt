import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconTransactionHistory from '@/shared/assets/icons/icon-transaction-history-profile-logo.svg'

import TransactionHistoryTypeSwitcher from './TransactionHistoryTypeSwitcher'

const TransactionHistoryHeader = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='mb-[15px] flex items-center justify-between rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px]'>
			<div className='flex items-center gap-2'>
				<IconTransactionHistory className={clsx('h-7 w-7')} />
				<span>{t('transaction_history_profile.transaction_history')}</span>
			</div>
			<div className=''>
				<TransactionHistoryTypeSwitcher />
			</div>
		</div>
	)
}

export default TransactionHistoryHeader
