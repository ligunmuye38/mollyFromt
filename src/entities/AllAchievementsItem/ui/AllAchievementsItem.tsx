import Image from 'next/image'

import Button from '@/shared/ui/Button/Button'

export const AllAchievementsItem = () => {
	return (
		<div className='flex flex-col items-center justify-center rounded-xl border border-solid border-[#161C28] bg-[#141925] px-[18px] py-[20px] shadow-[0px_4px_69px_0px_rgba(0,0,0,0.25)_inset]'>
			<Image
				src='/images/achievement/achievement.png'
				alt=''
				className='mb-[7px] max-w-[60px]'
			/>
			<h4 className='pb-2 text-xs font-bold leading-4 text-[#D1D9EB]'>All in</h4>
			<span className='pb-2 text-center text-[10px] font-medium leading-3 text-[#5A6786]'>Refill witg one payment</span>
			<span className='pb-2 text-[10px] font-medium leading-3 text-white'>0.07% of users</span>
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
