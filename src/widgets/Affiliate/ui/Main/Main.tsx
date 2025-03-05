'use client'

import { PartnershipTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'

import IconHome from '@/shared/assets/icons/icon-home.svg'
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

	const params = useSearchParams()
	const [caseId, setCaseId] = useState<string>()

	useEffect(() => {
		if (params.has('case-id') && type === PartnershipTypes.PARTNERSHIP_CASES) {
			setCaseId(params.get('case-id') ?? '')
		} else {
			setCaseId('')
		}
	}, [params, type])

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-5')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'mb-4 mt-5')}>
					<div className={cls.title}>{t('affiliate').toUpperCase()}</div>
				</div>
				<div className='absolute left-5 top-7 z-10 rounded-lg bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] text-[12px] font-medium text-[#353D52] md:hidden'>
					<div className='flex h-full w-full items-center gap-1 rounded-lg bg-[#121722] px-3 py-2'>
						<Link
							href={'/'}
							className='flex gap-1'
						>
							<IconHome />
							<p className='cursor-pointer'>{t('home')}</p>
						</Link>
						<span>{'>'}</span>
						{caseId ? (
							<>
								<Link
									href={'/affiliate'}
									className={clsx({ 'text-[#4A556F]': !caseId })}
								>
									<p className='cursor-pointer'>{t('affiliate')}</p>
								</Link>
								<span>{'>'}</span>
								<p className='text-[#4A556F]'>
									{t('case')} {caseId}
								</p>
							</>
						) : (
							<p className='text-[#4A556F]'>{t('affiliate')}</p>
						)}
					</div>
				</div>
				{(type !== PartnershipTypes.PARTNERSHIP_CASES || !caseId) && (
					<div className={clsx('relative z-20 mx-auto w-full')}>
						<PartnershipTypeSwitcher
							type={type}
							setType={setType}
							className='mx-auto'
						/>
					</div>
				)}
			</div>
			<div className='mb-5 px-5'>
				<MainHeader type={type} />
			</div>
			<div className='px-5'>{type === PartnershipTypes.PARTNERSHIP ? <MainStats /> : <CasesStats />}</div>
		</div>
	)
}
