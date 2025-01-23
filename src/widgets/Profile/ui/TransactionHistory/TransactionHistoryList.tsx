'use client'

import { useCommonStore } from '@/entities/Common/model/store'

const TransactionHistoryList = () => {
	const _gameHistoryType = useCommonStore(state => state.gameHistoryType)

	return <div className='flex flex-col gap-2'></div>
}

export default TransactionHistoryList
