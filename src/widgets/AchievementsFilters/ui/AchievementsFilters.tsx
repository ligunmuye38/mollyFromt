'use client'

import { useState } from 'react'

import Crows from '@/shared/assets/icons/crown.svg'
import Ranking from '@/shared/assets/icons/ranking.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './AchievementsFilters.module.sass'

export const AchievementsFilters = () => {
	const [activeFilter, setActiveFilter] = useState('DAY')

	const handleClick = (filter: string) => {
		setActiveFilter(filter)
	}

	const filters = ['DAY', 'WEEK', 'MONTH', '3 MONTHS', 'ALL TIME']

	return (
		<div
			className={`${cls.achievementsFilters} mt-[37px] flex justify-between bg-[#0F131C] px-[30px] py-3 2md:mt-5 2md:grid 2md:grid-cols-2 3sm:px-[10px]`}
		>
			<div className='flex items-center'>
				<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-[#21293A] bg-[#181E2B]'>
					<Ranking />
				</div>
				<div className='pl-[10px]'>
					<p className='block text-base font-bold leading-4 text-white'>483735</p>
					<span className='block text-xs font-medium leading-4 text-[#5A6786]'>You rank</span>
				</div>
			</div>

			<Button
				theme='grey-4'
				strokeSize='reg'
				backdrop
				hexagon
				hexagonAxis='x'
				classNames={{
					base: cls.filters,
					content: '!bg-[#0F131C] !gap-0'
				}}
			>
				{filters.map(filter => (
					<button
						key={filter}
						className={`${cls.filters__btn} ${activeFilter === filter ? cls.active : ''}`}
						onClick={() => handleClick(filter)}
					>
						{filter}
					</button>
				))}
			</Button>

			<div className='flex items-center 2md:justify-end'>
				<div className='pr-[10px]'>
					<p className='block text-right text-base font-bold leading-4 text-white'>43/100</p>
					<span className='block text-right text-xs font-medium leading-4 text-[#5A6786]'>Score</span>
				</div>
				<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-[#21293A] bg-[#181E2B]'>
					<Crows />
				</div>
			</div>
		</div>
	)
}
