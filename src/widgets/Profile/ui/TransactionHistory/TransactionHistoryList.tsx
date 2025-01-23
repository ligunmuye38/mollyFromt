'use client'

import { TransactionHistoryType } from '../../model/types'

import { useCommonStore } from '@/entities/Common/model/store'

import DepositHistoryList from './DepositHistoryList'
import WithdrawHistoryList from './WithdrawHistoryList'

const TransactionHistoryList = () => {
	const transactionHistoryType = useCommonStore(state => state.transactionHistoryType)

	return (
		<div className='flex flex-col gap-2'>
			{transactionHistoryType === TransactionHistoryType.DEPOSIT ? <DepositHistoryList /> : <WithdrawHistoryList />}
		</div>
	)
}

export default TransactionHistoryList
