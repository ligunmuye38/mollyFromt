'use client'

import { CaseBattleTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'

import IconPlusRounded from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseBattles from '@/shared/assets/icons/icon-case-battle.svg'
import HeaderBgTop2 from '@/shared/assets/section-header-bg-top-2.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'

import BattlesTypeSwitcher from './BattlesTypeSwitcher'
import cls from './Main.module.sass'
import MainHeader from './MainHeader'
import MainList from './MainList'

interface MainProps {
	className?: string
}

export const Main: FC<MainProps> = ({ className }) => {
	const t = useTranslations()
	const router = useRouter()
	const [type, setType] = useState<CaseBattleTypes>(CaseBattleTypes.ACTIVE_BATTLES)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<IconCaseBattles />
					</div>
				</div>
				<div className={clsx(cls.h_inner, 'mb-[20px]')}>
					<div className={cls.title}>{t('case_battles.case_battle').toUpperCase()}</div>
				</div>
				<div className='relative z-20 mx-auto mb-[40px] w-full'>
					<BattlesTypeSwitcher
						type={type}
						setType={setType}
						className='mx-auto'
					/>
					<div
						className='absolute right-5 top-0 md:hidden'
						style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C59)' }}
					>
						<Button
							onPress={() => router.push('/case-battles/create')}
							classNames={{
								base: clsx(cls.hexagon_btn, 'h-[42px] w-[200px]'),
								content: clsx(cls.hexagon_btn_inner, '!gap-0')
							}}
						>
							<IconPlusRounded className={clsx(cls.hexagon_btn_inner_icon, 'fill-[#121722]')} />
							{t('case_battles.create_battle')}
						</Button>
					</div>
				</div>
				<div className='absolute bottom-0 flex h-[84px] w-full justify-center'>
					<HeaderBgTop2 className='flex-shrink-0' />
				</div>
			</div>
			<div className='mb-5 flex justify-center px-[20px]'>
				<MainHeader type={type} />
			</div>
			<div className='px-[20px]'>
				<MainList type={type} />
			</div>
			<div className='sticky bottom-[69px] z-20 hidden h-[76px] w-full items-center justify-center bg-[linear-gradient(180deg,_#12172200_0%,_#121722_60%)] md:flex'>
				<Button
					onPress={() => router.push('/case-battles/create')}
					classNames={{
						base: clsx(cls.hexagon_btn, 'h-[42px] w-[200px]'),
						content: clsx(cls.hexagon_btn_inner, '!gap-0')
					}}
				>
					<IconPlusRounded className={clsx(cls.hexagon_btn_inner_icon, 'fill-[#121722]')} />
					{t('case_battles.create_battle')}
				</Button>
			</div>
		</div>
	)
}
