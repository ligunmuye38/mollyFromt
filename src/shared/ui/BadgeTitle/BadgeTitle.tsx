import clsx from 'clsx'
import React from 'react'

import IconBadgeTitle from '@/shared/assets/icons/icon-badge-title-hexagon.svg'

import cls from './BadgeTitle.module.sass'

interface BadgeTitleProps {
	icon: React.ReactNode
	title: string
	content: string
}

const BadgeTitle = ({ icon: Icon, title, content }: BadgeTitleProps) => {
	return (
		<div className={clsx('relative h-[98px] w-[210px] 3sm:mt-[35px] 3sm:w-[30%]', cls.badge_box)}>
			<div className={clsx(cls.badge_inner, 'relative 3sm:pt-[20px]')}>
				<div className={clsx('absolute h-full w-auto 3sm:!left-1/2 3sm:-top-1/2', cls.badge_center)}>
					<div className='relative flex h-full w-[98px] items-center justify-center'>
						<IconBadgeTitle className='absolute left-0 top-0 -z-[1]' />
						{Icon}
					</div>
				</div>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2 3sm:gap-1'>
					<span className='text-[18px] text-white'>{title}</span>
					<span className='text-center text-[14px] uppercase text-[#55698F] 3sm:text-[12px]'>{content}</span>
				</div>
			</div>
		</div>
	)
}

export default BadgeTitle
