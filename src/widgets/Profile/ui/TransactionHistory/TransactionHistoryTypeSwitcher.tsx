'use client'

import { useCommonStore } from '@/entities/Common/model/store'

const TransactionHistoryTypeSwitcher = () => {
	const _transactionHistoryType = useCommonStore(state => state.transactionHistoryType)
	const _setTransactionHistoryType = useCommonStore(state => state.setTransactionHistoryType)

	return <div className=''></div>
}

export default TransactionHistoryTypeSwitcher
