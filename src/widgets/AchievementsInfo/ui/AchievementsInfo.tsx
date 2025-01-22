import Image from 'next/image'

import Star from '@/shared/assets/icons/star.svg'
import Button from '@/shared/ui/Button/Button'
import { ViewPoints } from '@/shared/ui/ViewPoints/ViewPoints'

import cls from './AchievementsInfo.module.sass'

export const AchievementsInfo = () => {
	return (
		<div className={cls.achievement}>
			<div className='flex items-center md:flex-wrap w-full'>
				<div className='flex items-center md:w-1/2 md:mb-[15px] 3sm:w-[60%]'>
					<Image
						src='/images/achievement/achievement.png'
						alt=''
					/>
					<div className='pl-5 3sm:pl-2'>
						<h4 className='text-[#D1D9EB] text-base font-bold leading-4 pb-[10px]'>Grant winner</h4>
						<span className='block text-[#5A6786] text-xs font-medium leading-3'>
							100 users giveaway prizes received
						</span>
					</div>
				</div>
				<div className='flex flex-col items-center ml-[43px] mr-[97px] md:ml-0 md:mr-0 md:w-1/2 md:mb-[15px] md:items-end 3sm:w-[40%]'>
					<div className='flex pb-[8px]'>
						{[0, 1, 2, 3, 4].map(e => (
							<Star key={e} />
						))}
					</div>
					<span className='text-white text-xs font-bold leading-4'>5 LVL</span>
				</div>
				<ViewPoints
					points='663'
					size={12}
				/>
				<div className='flex flex-col w-full max-w-[100px] ml-auto'>
					<span className='pb-[8px] text-white flex justify-center text-[10px] font-medium leading-3'>
						0.07% of users
					</span>
					<Button
						theme='grey-4'
						strokeSize='reg'
						backdrop
						hexagon
						hexagonAxis='x'
					>
						<div className={cls.points}>26 points</div>
					</Button>
				</div>
			</div>
		</div>
	)
}
