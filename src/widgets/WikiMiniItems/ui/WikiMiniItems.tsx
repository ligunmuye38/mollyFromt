'use client'

import clsx from 'clsx'
import { useState } from 'react'
import 'swiper/css'

import { WikiMiniCard } from '@/entities/WikiMiniCard/WikiMiniCard'

import Arrow from '@/shared/assets/icons/icon-arrow-down.svg'
import Knife from '@/shared/assets/icons/knife-icon.svg'
import Button from '@/shared/ui/Button/Button'

export const WikiMiniItems = () => {
	const [isHidden, toggleIsHidden] = useState<boolean>(true)

	return (
		<div className=''>
			<div className='flex items-center justify-between'>
				<div className='flex items-center pb-5'>
					<Knife />
					<h3 className='pl-4 text-2xl font-black uppercase tracking-[0.48px] text-white'>Knives</h3>
				</div>
				<Button
					onPress={() => toggleIsHidden(v => !v)}
					classNames={{
						base: 'h-6 w-6 rounded-[6px] bg-[#252C3D]'
					}}
				>
					<Arrow className={clsx('w-[18px] fill-[#7785B3] duration-200', !isHidden ? 'rotate-180' : 'rotate-0')} />
				</Button>
			</div>
			<div
				className={clsx(
					'grid grid-cols-[repeat(auto-fill,150px)] justify-between gap-4 overflow-hidden duration-250',
					isHidden ? 'h-[174px]' : 'h-max'
				)}
			>
				{Array.from(new Array(20)).map((_, index) => (
					<WikiMiniCard key={index} />
				))}
			</div>
		</div>
	)
}
