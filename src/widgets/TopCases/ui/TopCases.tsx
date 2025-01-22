'use client'

import { caseList } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import { CaseCard } from '@/entities/CaseCard/ui/CaseCard'
import { CaseToolbarContent } from '@/entities/CaseToolbar/ui/CaseToolbarContent'

import IconCase from '@/shared/assets/icons/icon-case-grey.svg'
import IconFilter from '@/shared/assets/icons/icon-filter.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader'

import cls from './TopCases.module.sass'

interface TopCasesProps {
	className?: string
}

export const TopCases: FC<TopCasesProps> = ({ className }) => {
	const t = useTranslations()

	const breakpoints = useAppResponsive()

	const [isFilter, setIsFilter] = useState<boolean>(false)

	const cases = caseList.map(item => (
		<div
			key={item.id}
			className='flex justify-center'
		>
			<CaseCard
				{...item}
				className='w-full max-w-[200px] 3sm:max-w-[175px]'
			/>
		</div>
	))

	return (
		<div className={clsx(className, 'relative')}>
			<SectionHeader
				title={t('topcases.title')}
				icon={<IconCase />}
				subtitle={t('topcases.subtitle')}
				barElement={
					breakpoints.lg ? (
						<Button
							theme='grey-4'
							strokeSize='reg'
							backdrop
							hexagon
							hexagonAxis='x'
							classNames={{
								base: 'h-10',
								content: 'px-6 text-xs'
							}}
						>
							See more
						</Button>
					) : (
						<Button
							hexagon
							hexagonAxis='y'
							disableAnimation
							startContent={<IconFilter />}
							onClick={() => setIsFilter(!isFilter)}
						></Button>
					)
				}
			/>
			<div className={clsx('absolute top-12 z-[20]', isFilter == true ? 'flex' : 'hidden')}>
				<CaseToolbarContent className='rounded-[12px] border-[2px] border-[#161C28] bg-[#141925] px-0.5 py-1 scrollbar-hide' />
			</div>

			<div className={clsx(cls.grid, 'mt-6')}>{cases}</div>
		</div>
	)
}
