'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

import IconCaseBattles from '@/shared/assets/icons/icon-case-battle.svg'
import HeaderBgTop2 from '@/shared/assets/section-header-bg-top-2.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'

import cls from './CreateBattle.module.sass'
import CreateBattleHeader from './CreateBattleHeader'
import CreateBattleList from './CreateBattleList'

interface CreateBattleProps {
	className?: string
}

export const CreateBattle: FC<CreateBattleProps> = ({ className }) => {
	const t = useTranslations()

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<IconCaseBattles />
					</div>
				</div>
				<div className={clsx(cls.h_inner, 'mb-[35px]')}>
					<div className={cls.title}>{t('case_battles.create_battle').toUpperCase()}</div>
				</div>
				<div className='absolute bottom-0 flex h-[84px] w-full justify-center'>
					<HeaderBgTop2 className='flex-shrink-0' />
				</div>
			</div>
			<div className='mb-5 px-[20px]'>
				<CreateBattleHeader />
			</div>
			<div className='px-[20px]'>
				<CreateBattleList />
			</div>
		</div>
	)
}
