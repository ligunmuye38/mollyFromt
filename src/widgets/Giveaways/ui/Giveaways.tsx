'use client'

import { GiveawaysFilters } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'

import IconPlusRounded from '@/shared/assets/icons/icon-black-plus.svg'
import HeaderBgTop2 from '@/shared/assets/section-header-bg-top-2.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'

import GiveAwaysFilterSwitcher from './GiveAwaysFilterSwitcher'
import cls from './Giveaways.module.sass'
import GiveawaysHeader from './GiveawaysHeader'
import GiveawaysList from './GiveawaysList'

interface GiveawaysProps {
	className?: string
}

export const Giveaways: FC<GiveawaysProps> = ({ className }) => {
	const t = useTranslations()
	const router = useRouter()

	const [filter, setFilter] = useState<GiveawaysFilters>(GiveawaysFilters.ACTIVE_GIVEAWAYS)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'mb-[15px] mt-[20px]')}>
					<div className={cls.title}>{t('giveaways.giveaways').toUpperCase()}</div>
				</div>
				<div className='relative z-10 mx-auto mb-10 flex items-center justify-between gap-4 px-5'>
					<div>
						<GiveAwaysFilterSwitcher
							filter={filter}
							setFilter={setFilter}
						/>
					</div>
					<div style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C59)' }}>
						<Button
							onPress={() => router.push('/case-battles/create')}
							classNames={{
								base: clsx(cls.hexagon_btn, 'h-[42px] w-[240px]'),
								content: clsx(cls.hexagon_btn_inner, '!gap-0')
							}}
						>
							<IconPlusRounded className={clsx(cls.hexagon_btn_inner_icon, 'fill-[#121722]')} />
							{t('giveaways.create_giveaway').toUpperCase()}
						</Button>
					</div>
				</div>
				<div className='absolute bottom-0 flex h-[84px] w-full justify-center'>
					<HeaderBgTop2 className='flex-shrink-0' />
				</div>
			</div>
			<div className='mb-5 px-[20px]'>
				<GiveawaysHeader />
			</div>
			<div className='mb-5 px-[20px]'>
				<GiveawaysList filter={filter} />
			</div>
			{/* <div className='px-[20px]'>
				{battleStarted ? <BattleDetails /> : <PlayersList onStartBattle={() => toggleBattleStarted(true)} />}
			</div> */}
		</div>
	)
}
