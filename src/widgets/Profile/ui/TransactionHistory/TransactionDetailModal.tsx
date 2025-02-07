import { ITransactionItem, TransactionStatus } from '../../model/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconFail from '@/shared/assets/icons/icon-close-circle.svg'
import IconReturn from '@/shared/assets/icons/icon-return.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-4.svg'

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

const TransactionDetailModal = ({ item }: { item: ITransactionItem }) => {
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

	return (
		<div>
			<div className='flex w-[calc(100vw_-_80px)] flex-col text-[12px]'>
				<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('transaction_history_profile.id')}</span>
					<span className='text-white'>{item.id}</span>
				</div>
				<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('transaction_history_profile.method')}</span>
					<p className={'flex items-center gap-2'}>
						{item.method.icon && (
							<div className='flex h-5 w-5 items-center justify-center rounded-md bg-[#171D2A]'>
								<Image
									src={item.method.icon}
									width={12}
									height={12}
									alt='Payment method'
								/>
							</div>
						)}
						<span>{item.method.title}</span>
					</p>
				</div>
				<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('transaction_history_profile.amount')}</span>
					<span className='text-[#24FDBC]'>{item.amount}</span>
				</div>
				{item.bonus && (
					<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
						<span className='text-[#5A6786]'>{t('transaction_history_profile.bonus')}</span>
						<span className='text-[#E2B517]'>{item.bonus}</span>
					</div>
				)}
				<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('transaction_history_profile.date')}</span>
					<span className='text-white'>{item.date}</span>
				</div>
				<div className='flex justify-between py-[7px]'>
					<span className='text-[#5A6786]'>{t('transaction_history_profile.status')}</span>
					<div>
						<div
							className='ml-auto mr-1 flex h-6 w-6 items-center justify-center rounded-md'
							style={{ background: transactionStatusThemeConfig[item.status].background }}
						>
							<StatusIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TransactionDetailModal
