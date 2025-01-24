import TransactionHistoryMain from '@/widgets/Profile/ui/TransactionHistory/TransactionHistoryMain'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/History-transaction'
		},
		description: ''
	}
}

const TransactionHistory = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<TransactionHistoryMain />
			</div>
		</div>
	)
}

export default TransactionHistory
