'use client'

import Image from 'next/image'
import 'swiper/css'

// Import Swiper React components
import { AllAchievementsItem } from '@/entities/AllAchievementsItem/ui/AllAchievementsItem'

export const AllAchievementsItems = ({ label }: { label: string }) => {
	return (
		<>
			<div className='mb-5'>
				<div className='mb-[15px] flex items-center justify-center'>
					<Image
						src='/images/achievement/achievement.png'
						width={60}
						height={60}
						alt=''
						className='max-w-[40px]'
					/>
					<h2 className='pl-2 text-lg font-black uppercase leading-5 tracking-[0.36px] text-white'>{label}</h2>
				</div>
				<div className='grid grid-cols-[repeat(8,2fr)] gap-3'>
					{Array.from(new Array(20)).map((_, index) => (
						<AllAchievementsItem key={index} />
					))}
				</div>
			</div>
		</>
	)
}
