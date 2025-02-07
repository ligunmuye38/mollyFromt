import { GiveawaysFilters } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconBriefcaseTimer from '@/shared/assets/icons/icon-brifecase-timer.svg'
import IconBucket from '@/shared/assets/icons/icon-bucket-2.svg'
import IconRoundedCheck from '@/shared/assets/icons/icon-check-rounded-3.svg'
import IconProfileTick from '@/shared/assets/icons/icon-profile-tick.svg'

import cls from './Giveaways.module.sass'

interface IGiveAwaysFilterSwitcher {
	filter: GiveawaysFilters
	setFilter: (_: GiveawaysFilters) => void
}

const GiveAwaysFilterSwitcher = ({ filter, setFilter }: IGiveAwaysFilterSwitcher) => {
	const t = useTranslations()

	return (
		<div className='relative'>
			<div className={cls.filter_switch}>
				<div className={cls.filter_switch_inner}>
					<div
						className={cls.filter_switch_item}
						onClick={() => setFilter(GiveawaysFilters.ACTIVE_GIVEAWAYS)}
					>
						<IconBucket className='h-4 w-4 fill-[#60719A]' /> {t('giveaways.active_giveaways').toUpperCase()}
					</div>
					<div
						className={cls.filter_switch_item}
						onClick={() => setFilter(GiveawaysFilters.GIVEAWAYS_HISTORY)}
					>
						<IconBriefcaseTimer className='h-4 w-4 fill-[#60719A]' />
						{t('giveaways.giveaways_history').toUpperCase()}
					</div>
					<div
						className={cls.filter_switch_item}
						onClick={() => setFilter(GiveawaysFilters.MY_PARTICIPATION)}
					>
						<IconRoundedCheck className='h-4 w-4 fill-[#60719A]' />
						{t('giveaways.my_participation').toUpperCase()}
					</div>
					<div
						className={cls.filter_switch_item}
						onClick={() => setFilter(GiveawaysFilters.MY_GIVEAWAYS)}
					>
						<IconProfileTick className='h-4 w-4 fill-[#60719A]' />
						{t('giveaways.my_giveaways').toUpperCase()}
					</div>
				</div>
			</div>
			<div
				className={clsx(
					cls.filter_switch_track_wrapper,
					{
						'left-[6px]': GiveawaysFilters.ACTIVE_GIVEAWAYS === filter
					},
					{
						'left-[194px]': GiveawaysFilters.GIVEAWAYS_HISTORY === filter
					},
					{
						'left-[382px]': GiveawaysFilters.MY_PARTICIPATION === filter
					},
					{
						'left-[567px]': GiveawaysFilters.MY_GIVEAWAYS === filter
					}
				)}
			>
				<div className={cls.filter_switch_track}>
					<div className={cls.filter_switch_track_inner}>
						{(() => {
							switch (filter) {
								case GiveawaysFilters.ACTIVE_GIVEAWAYS:
									return <IconBucket className='h-4 w-4 fill-[#121722]' />
								case GiveawaysFilters.GIVEAWAYS_HISTORY:
									return <IconBriefcaseTimer className='h-4 w-4 fill-[#121722]' />
								case GiveawaysFilters.MY_PARTICIPATION:
									return <IconRoundedCheck className='h-4 w-4 fill-[#121722]' />
								case GiveawaysFilters.MY_GIVEAWAYS:
									return <IconProfileTick className='h-4 w-4 fill-[#121722]' />
							}
						})()}
						{t(`giveaways.${filter}`).toUpperCase()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default GiveAwaysFilterSwitcher
