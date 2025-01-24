import { IAchievementItem } from '../../model/types'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import cls from './Achievements.module.sass'

interface IAchievementCardProps {
	data: IAchievementItem
	onClick: () => void
}

const AchievementCard: FC<IAchievementCardProps> = ({ data, onClick }) => {
	return (
		<div
			className='flex w-[140px] cursor-pointer flex-col items-center rounded-xl border-1 border-[#161C28] bg-[#141925] p-[15px]'
			onClick={onClick}
		>
			<Image
				className='mb-2'
				src={data.icon}
				width={70}
				height={70}
				alt='Achievement Icon'
			/>
			<div className='mb-[11px] flex flex-col justify-center gap-1'>
				<p className='text-center text-[12px] font-bold leading-4 text-[#D1D9EB]'>{data.title}</p>
				<p className='text-center text-[10px] font-normal leading-4 text-[#4D5A79]'>
					{data.description.length > 18 ? `${data.description.slice(0, 16)}...` : data.description}
				</p>
			</div>
			<div className='mb-[6px] flex h-7 w-[110px] items-center justify-between rounded-md bg-[#0F131D] px-[6px] text-[18px] leading-[18px]'>
				<span className={data.stars > 0 ? 'text-[#E1B514]' : 'text-[#2F374A]'}>★</span>
				<span className={data.stars > 1 ? 'text-[#E1B514]' : 'text-[#2F374A]'}>★</span>
				<span className={data.stars > 2 ? 'text-[#E1B514]' : 'text-[#2F374A]'}>★</span>
				<span className={data.stars > 3 ? 'text-[#E1B514]' : 'text-[#2F374A]'}>★</span>
				<span className={data.stars > 4 ? 'text-[#E1B514]' : 'text-[#2F374A]'}>★</span>
			</div>
			<div className='relative flex w-full items-center justify-between'>
				<div
					className={clsx(
						cls.achievement_card_level_progress_point,
						cls.active,
						'flex h-[18px] w-[18px] flex-shrink-0 flex-grow-0 items-center justify-center'
					)}
				>
					<span className='text-[9px] font-bold text-[#141925]'>{data.level}</span>
				</div>
				<div className='absolute left-[17px] right-[16px] top-1/2 h-[2px] flex-grow -translate-y-1/2 bg-[#242B3D]'></div>
				<div
					className={clsx(cls.active, 'absolute left-[16px] top-1/2 h-[2px] flex-grow -translate-y-1/2 bg-[#242B3D]')}
					style={{ right: `${100 - data.upgradePercentage}%` }}
				></div>
				<div
					className={clsx(
						cls.achievement_card_level_progress_point,
						'flex h-[18px] w-[18px] flex-shrink-0 flex-grow-0 items-center justify-center'
					)}
				>
					<span className='text-[9px] font-bold text-[#55617C]'>{data.level + 1}</span>
				</div>
			</div>
		</div>
	)
}

export default AchievementCard
