import Image from 'next/image'

import Star from '@/shared/assets/icons/star.svg'
import Button from '@/shared/ui/Button/Button'
import { ViewPoints } from '@/shared/ui/ViewPoints/ViewPoints'

import cls from './AchievementsInfo.module.sass'

export const AchievementsInfo = () => {
	return (
		<div className={cls.achievement}>
			<div className='flex w-full items-center md:flex-wrap'>
				<div className='flex items-center md:mb-[15px] md:w-1/2 3sm:w-[60%]'>
					<Image
						src='/images/achievement/achievement.png'
						width={60}
						height={60}
						alt=''
					/>
					<div className='pl-5 3sm:pl-2'>
						<h4 className='pb-[10px] text-base font-bold leading-4 text-[#D1D9EB]'>Grant winner</h4>
						<span className='block text-xs font-medium leading-3 text-[#5A6786]'>
							100 users giveaway prizes received
						</span>
					</div>
				</div>
				<div className='ml-[43px] mr-[97px] flex flex-col items-center md:mb-[15px] md:ml-0 md:mr-0 md:w-1/2 md:items-end 3sm:w-[40%]'>
					<div className='flex pb-[8px]'>
						{[0, 1, 2, 3, 4].map(e => (
							<Star key={e} />
						))}
					</div>
					<span className='text-xs font-bold leading-4 text-white'>5 LVL</span>
				</div>
				<ViewPoints
					points='663'
					size={12}
				/>
				<div className='ml-auto flex w-full max-w-[100px] flex-col'>
					<span className='flex justify-center pb-[8px] text-[10px] font-medium leading-3 text-white'>
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
