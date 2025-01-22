'use client'

import { caseSection } from '../model/items'
import { CaseCategory } from '../model/types'
import { useSize } from 'ahooks'
import clsx from 'clsx'
import React, { FC, useRef } from 'react'

import { CaseCard } from '@/entities/CaseCard/ui/CaseCard'

import HeaderBg from '@/shared/assets/section-header-bg.svg'

import cls from './CasesSection.module.sass'

interface CasesSectionProps {
	className?: string
	categoryKey: CaseCategory
	barElement?: React.ReactNode
}

export const CasesSection: FC<CasesSectionProps> = ({ className, categoryKey, barElement }) => {
	const barRef = useRef(null)
	const barSize = useSize(barRef)

	if (!categoryKey) {
		return <div>The selected case category does not exist</div>
	}

	const section = caseSection[categoryKey]

	const cases = section.items.map(item => (
		<div
			key={item.id}
			className='flex justify-center'
		>
			<CaseCard
				{...item}
				className={'w-full max-w-[200px] 3sm:max-w-[175px]'}
			/>
		</div>
	))

	return (
		<div className={clsx(cls.container, className)}>
			<div className={cls.h}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<section.icon />
					</div>
				</div>
				<div className={cls.h_inner}>
					{barElement && <div style={{ width: barSize?.width ? `${barSize?.width}px` : '0px' }}></div>}
					<div className={cls.title}>{section.title}</div>
					{barElement && (
						<div
							ref={barRef}
							className={cls.bar}
						>
							{barElement}
						</div>
					)}
				</div>
			</div>
			<div className={clsx('container-common', cls.grid)}>{cases}</div>
		</div>
	)
}
