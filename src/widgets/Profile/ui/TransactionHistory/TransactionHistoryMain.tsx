import clsx from 'clsx'

import cls from './TransactionHistory.module.sass'
import TransactionHistoryHeader from './TransactionHistoryHeader'
import TransactionHistoryList from './TransactionHistoryList'

const TransactionHistoryMain = () => {
	return (
		<div className={cls.user_main}>
			<div className={clsx(cls.user_main_inner, 'gap-[15px] p-5')}>
				<TransactionHistoryHeader />
				<TransactionHistoryList />
			</div>
		</div>
	)
}

export default TransactionHistoryMain
