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
			className={`${cls.achievementsFilters} flex justify-between px-[30px] bg-[#0F131C] py-3 mt-[37px] 2md:mt-5 2md:grid 2md:grid-cols-2 3sm:px-[10px]`}
		>
			<div className='flex items-center'>
				<div className='border rounded-lg border-solid border-[#21293A] bg-[#181E2B] w-[38px] h-[38px] flex justify-center items-center'>
					<Ranking />
				</div>
				<div className='pl-[10px]'>
					<p className='block text-white text-base font-bold leading-4'>483735</p>
					<span className='block text-[#5A6786] text-xs font-medium leading-4'>You rank</span>
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
					<p className='block text-white text-base font-bold leading-4 text-right'>43/100</p>
					<span className='block text-[#5A6786] text-xs font-medium leading-4 text-right'>Score</span>
				</div>
				<div className='border rounded-lg border-solid border-[#21293A] bg-[#181E2B] w-[38px] h-[38px] flex justify-center items-center'>
					<Crows />
				</div>
			</div>
		</div>
	)
}
