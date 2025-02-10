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

	const SwitchBtn = ({
		icon: Icon,
		content,
		active,
		onClick
	}: {
		icon: React.FC<React.SVGProps<SVGSVGElement>>
		active?: boolean
		content: string
		onClick: () => void
	}) => {
		return (
			<div
				onClick={onClick}
				className={active ? '[filter:drop-shadow(0_2px_11px_#FD3E2459)]' : ''}
			>
				<div
					className={clsx(
						'h-[34px] cursor-pointer p-[2px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]',
						active
							? 'bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_91.63%,_#FDCD24_105.92%),_linear-gradient(270deg,_#E2B617_29.91%,_#FDCD24_50.26%)]'
							: 'bg-[#232B3B]'
					)}
				>
					<div
						className={clsx(
							'flex h-full w-full items-center justify-start pl-4 text-[12px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_10px)_100%,_10px_100%,_1px_50%)]',
							active
								? 'bg-[linear-gradient(0deg,_#E2B617,_#E2B617),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)]'
								: 'bg-[#121722]'
						)}
					>
						<Icon className={clsx('h-4 w-4', active ? 'fill-[#121722]' : 'fill-[#60719A]')} />
						<p
							className={clsx(
								'w-full text-center font-bold',
								active ? 'text-[#121722] [text-shadow:_0_1px_0_rgba(255,_213,_63)]' : 'text-[#60719A]'
							)}
						>
							{content}
						</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='relative lg:!hidden'>
				<div className={clsx(cls.filter_switch)}>
					<div className={clsx(cls.filter_switch_inner)}>
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
			<div className='hidden w-full grid-cols-4 gap-3 lg:grid 2md:grid-cols-2'>
				<SwitchBtn
					active={filter === GiveawaysFilters.ACTIVE_GIVEAWAYS}
					icon={IconBucket}
					onClick={() => setFilter(GiveawaysFilters.ACTIVE_GIVEAWAYS)}
					content={t('giveaways.active_giveaways').toUpperCase()}
				/>
				<SwitchBtn
					active={filter === GiveawaysFilters.GIVEAWAYS_HISTORY}
					icon={IconBriefcaseTimer}
					onClick={() => setFilter(GiveawaysFilters.GIVEAWAYS_HISTORY)}
					content={t('giveaways.giveaways_history').toUpperCase()}
				/>
				<SwitchBtn
					active={filter === GiveawaysFilters.MY_PARTICIPATION}
					icon={IconRoundedCheck}
					onClick={() => setFilter(GiveawaysFilters.MY_PARTICIPATION)}
					content={t('giveaways.my_participation').toUpperCase()}
				/>
				<SwitchBtn
					active={filter === GiveawaysFilters.MY_GIVEAWAYS}
					icon={IconProfileTick}
					onClick={() => setFilter(GiveawaysFilters.MY_GIVEAWAYS)}
					content={t('giveaways.my_giveaways').toUpperCase()}
				/>
			</div>
		</>
	)
}

export default GiveAwaysFilterSwitcher
