'use client'

import { PartnershipTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import React, { FC, useState } from 'react'

import HeaderBg from '@/shared/assets/section-header-bg.svg'

import CasesStats from './CasesStats'
import cls from './Main.module.sass'
import MainHeader from './MainHeader'
import MainStats from './MainStats'
import PartnershipTypeSwitcher from './PartnershipTypeSwitcher'

interface MainProps {
	className?: string
}

export const Main: FC<MainProps> = ({ className }) => {
	const t = useTranslations()

	const [type, setType] = useState<PartnershipTypes>(PartnershipTypes.PARTNERSHIP)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-5')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'mb-4 mt-5')}>
					<div className={cls.title}>{t('affiliate').toUpperCase()}</div>
				</div>
				<div className={clsx('relative z-20 mx-auto w-full')}>
					<PartnershipTypeSwitcher
						type={type}
						setType={setType}
						className='mx-auto'
					/>
				</div>
			</div>
			<div className='mb-5 px-5'>
				<MainHeader type={type} />
			</div>
			<div className='px-5'>{type === PartnershipTypes.PARTNERSHIP ? <MainStats /> : <CasesStats />}</div>
		</div>
	)
}
