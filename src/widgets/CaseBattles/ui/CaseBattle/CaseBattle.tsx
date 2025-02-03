'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import IconCaseBattles from '@/shared/assets/icons/icon-case-battle.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'

import BattleDetails from './BattleDetails'
import cls from './CaseBattle.module.sass'
import CaseBattleHeader from './CaseBattleHeader'
import PlayersList from './PlayersList'

interface CaseBattleProps {
	className?: string
}

export const CaseBattle: FC<CaseBattleProps> = ({ className }) => {
	const t = useTranslations()

	const [battleStarted, toggleBattleStarted] = useState<boolean>(false)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<IconCaseBattles />
					</div>
				</div>
				<div className={clsx(cls.h_inner, 'mb-[15px]')}>
					<div className={cls.title}>{t('case_battles.case_battle').toUpperCase()}</div>
				</div>
			</div>
			<div className='mb-5 px-[20px]'>
				<CaseBattleHeader />
			</div>
			<div className='px-[20px]'>
				{battleStarted ? <BattleDetails /> : <PlayersList onStartBattle={() => toggleBattleStarted(true)} />}
			</div>
		</div>
	)
}
