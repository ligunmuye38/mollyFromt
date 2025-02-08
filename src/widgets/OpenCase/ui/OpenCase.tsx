'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconBorder from '@/shared/assets/icons/icon-dotted-border.svg'
import IconLightning from '@/shared/assets/icons/icon-lightning.svg'
import IconSpeaking from '@/shared/assets/icons/icon-speaking-message.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'
import { CaseBadge } from '@/shared/ui/CaseCard/CaseBadge'

import CaseBar from './CaseBar'
import CountCases from './CountCases'
import cls from './OpenCase.module.sass'

interface OpenCaseProps {
	className?: string
}

export const OpenCase: FC<OpenCaseProps> = ({ className }) => {
	// For translation
	const t = useTranslations()

	const caseCount = useCommonStore(state => state.caseCount)

	// For case count
	const [caseCountState, setCaseCountState] = useState<number>(0)

	// Case count hook
	useEffect(() => {
		setCaseCountState(caseCount)
	}, [caseCount])

	return (
		<div className={clsx(cls.base, className)}>
			<CaseBar title={t('open_case.beach_season')} />
			<div className={cls.container}>
				<div className={clsx(cls.type, 'flex justify-center text-center md:hidden')}>{t('open_case.selected_top')}</div>
				<div
					className={cls.inner}
					style={{ backgroundImage: `url(${openCaseBg.src})` }}
				>
					<Backshape className={cls.backshape} />
					<div className={clsx(cls.backshape, '', caseCountState == 0 ? 'flex' : 'hidden')}>
						<Image
							src={'/images/case/case-full-2.png'}
							alt='case'
							width={320}
							height={320}
						/>
					</div>
					<div
						className={clsx(
							cls.grid,
							'relative w-full flex-row justify-between 2sm:flex-col 2sm:justify-center',
							caseCountState == 0 ? 'flex' : 'hidden'
						)}
					>
						<div
							className={clsx(
								cls.desc,
								'relative pl-20 pt-20 md:absolute md:!-top-5 md:flex md:w-full md:!flex-row md:!justify-between md:px-3 md:pt-0'
							)}
						>
							<div className='flex flex-col gap-1'>
								<div className={clsx(cls.desc_title, 'md:!text-start')}>{t('open_case.limited_edition')}</div>
								<div className={clsx(cls.desc_text, 'md:!text-start')}>{t('open_case.limited_content')}</div>
							</div>
							<CaseBadge
								label='2455 / 10000'
								icon={<IconLightning />}
								iconTheme='yellow'
								className={clsx(cls.desc_badge, '!relative !left-0 !transform-none')}
							/>
						</div>
						<div className={clsx('flex h-full justify-end md:hidden sm:-mr-7')}>
							<div className={clsx('absolute', cls.rotate_180)}>
								<Image
									src={'/images/case/girl-1.png'}
									alt='case'
									width={320}
									height={320}
								/>
							</div>
							<div className={clsx(cls.speaking_body, 'mr-[200px] mt-[80px] h-[60px] w-[150px]')}>
								<div className='absolute -top-4'>
									<IconSpeaking />
								</div>
								<div className={clsx(cls.speaking_body_inner, 'h-full w-full')}>
									<div className='flex h-full flex-col items-center justify-center gap-0.5'>
										<span className='text-[12px] font-[500] text-[#D1D9EB]'>There&apos;s something</span>
										<div className='flex gap-0.5'>
											<span className='text-[12px] font-[500] text-[#FDCD24]'>interesting</span>
											<span className='text-[12px] font-[500] text-[#D1D9EB]'>there!</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={clsx(
							'relative z-10 flex h-full w-full items-center justify-center py-2',
							caseCountState == 0 ? 'hidden' : 'flex'
						)}
					>
						<CountCases />
					</div>
				</div>
			</div>
			<div className={clsx('relative w-full justify-center overflow-hidden')}>
				<IconBorder />
			</div>
		</div>
	)
}
