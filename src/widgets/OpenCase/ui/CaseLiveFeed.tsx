import { itemsList } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconCrown from '@/shared/assets/icons/icon-crown-gradient-grey.svg'
import { CardLiveFeed } from '@/shared/ui/CardLiveFeed/CardLiveFeed'

import cls from './OpenCase.module.sass'

const CaseLiveFeed = () => {
	// For translation
	const t = useTranslations()

	// Build live feeds
	const items = itemsList.map(item => (
		<CardLiveFeed
			key={item.id}
			title={item.title}
			pic={item.picUrl}
			theme={item.rarity}
			className={cls.card}
		/>
	))

	return (
		<div className='w-full overflow-hidden'>
			<div className='relative mt-2 flex h-auto w-full flex-col px-5 3sm:px-1'>
				<div className={clsx(cls.livefeed_logo, 'z-[1] -mb-[2px]')}>
					<div className={clsx(cls.livefeed_logo_inner, 'flex justify-center gap-1 pt-2.5')}>
						<IconCrown className={clsx('h-3 w-3', cls.crown_bg)} />
						<span className='text-[8px] uppercase text-[#D1D9EB]'>{t('open_case.top_drops')}</span>
					</div>
				</div>
				<div className={clsx(cls.livefeed_container)}>
					<div className={clsx(cls.livefeed_container_inner, 'overflow-hidden')}>
						<div className='relative z-20 flex h-full w-full gap-0.5 p-1'>{items}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CaseLiveFeed
