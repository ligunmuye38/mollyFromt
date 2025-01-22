import Image from 'next/image'

import Button from '@/shared/ui/Button/Button'

export const AllAchievementsItem = () => {
	return (
		<div className='border shadow-[0px_4px_69px_0px_rgba(0,0,0,0.25)_inset] rounded-xl border-solid border-[#161C28] bg-[#141925] flex flex-col justify-center items-center px-[18px] py-[20px]'>
			<Image
				src='/images/achievement/achievement.png'
				alt=''
				className='max-w-[60px] mb-[7px]'
			/>
			<h4 className='text-[#D1D9EB] text-xs font-bold leading-4 pb-2'>All in</h4>
			<span className='text-[#5A6786] text-[10px] font-medium leading-3 text-center  pb-2'>
				Refill witg one payment
			</span>
			<span className='text-white text-[10px] font-medium leading-3 pb-2'>0.07% of users</span>
			<Button
				theme='grey-4'
				strokeSize='reg'
				backdrop
				hexagon
				hexagonAxis='x'
				classNames={{
					base: 'h-[34px]',
					content:
						'bg-[linear-gradient(180deg,rgba(25,31,45,0.15)_0%,rgba(67,81,112,0.04)_100%)] w-[96px] h-[34px] text-[#7080A6] text-xs font-bold leading-4'
				}}
			>
				26 points
			</Button>
		</div>
	)
}
