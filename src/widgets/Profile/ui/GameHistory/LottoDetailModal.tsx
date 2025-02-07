import { ILottoItem } from '../../model/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import cls from './GameHistory.module.sass'

const LottoDetailModal = ({ item }: { item: ILottoItem }) => {
	const t = useTranslations()

	return (
		<div>
			<div className='flex w-[calc(100vw_-_80px)] flex-col text-[12px]'>
				<div className='flex justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('game_history_profile.bet').toUpperCase()}</span>
					<p className='text-white'>
						<span className={cls.currency}>$</span>
						{item.bet}
					</p>
				</div>
				<div className='flex items-center justify-between border-b-2 border-b-[#161C28] py-[7px]'>
					<span className='text-[#5A6786]'>{t('game_history_profile.winning').toUpperCase()}</span>
					<div className='flex items-center gap-2'>
						{item.status ? (
							<>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-[#111620]'>
									<Image
										src={item.result?.[0].icon ?? ''}
										width={33}
										height={33}
										alt='Upgrade History Item'
									/>
								</div>
								<div>
									<p className={cls.game_history_upgrade_result_name}>{item.result?.[0].name}</p>
									<p className={cls.game_history_upgrade_result_price}>
										<span className={cls.currency}>$</span> {item.result?.[0].price}
									</p>
								</div>
							</>
						) : (
							<p className='text-[#FB4949]'>Fail</p>
						)}
					</div>
				</div>
				<div className='flex justify-between py-[7px]'>
					<span className='text-[#5A6786]'>{t('game_history_profile.date').toUpperCase()}</span>
					<p className='text-white'>{item.date}</p>
				</div>
			</div>
		</div>
	)
}

export default LottoDetailModal
