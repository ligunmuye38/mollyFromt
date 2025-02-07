'use client'

import clsx from 'clsx'
import Image from 'next/image'

import { ImageBgType } from '@/widgets/Cases/model/types'

import { CaseItemTheme } from '@/shared/const/rarity'

import cls from './Giveaway.module.sass'

interface CaseItemProps {
	className?: string
	title?: string
	content?: string
	percent?: number
	picUrl: string
	name?: string
	price?: string
	type: ImageBgType
	backTheme?: CaseItemTheme
	hoverContent?: React.ReactNode
	isOpen?: boolean
	isRotate?: boolean
	isActive?: boolean
}

const CaseItem = ({
	title,
	content,
	percent,
	picUrl,
	name,
	price,
	type,
	className,
	backTheme,
	isActive = false
}: CaseItemProps) => {
	// Get background based on type
	const getBackground = (type: ImageBgType) => {
		switch (type) {
			case 'yellow':
				return cls.item_bg_yellow

			case 'pink':
				return cls.item_bg_pink

			case 'purple':
				return cls.item_bg_purple

			case 'blue':
				return cls.item_bg_blue

			case 'limit_blue':
				return cls.item_bg_limit_blue

			default:
				return cls.item_bg_yellow
		}
	}

	// Get mark background color
	const getMarkBackground = (type: ImageBgType) => {
		switch (type) {
			case 'yellow':
				return cls.item_mark_yellow

			case 'pink':
				return cls.item_mark_pink

			case 'purple':
				return cls.item_mark_purple

			case 'blue':
				return cls.item_mark_blue

			case 'limit_blue':
				return cls.item_mark_limit_blue

			default:
				return cls.item_mark_yellow
		}
	}

	return (
		<div className={clsx('h-auto w-max hover:cursor-pointer')}>
			<div className={clsx(cls.item_box, backTheme && cls[backTheme])}>
				<div
					className={clsx(
						'relative h-[153px] w-[133px] overflow-hidden rounded-[12px] p-[1px]',
						isActive ? 'bg-[#10AA7C]' : 'bg-[#161C28]'
					)}
				>
					<div
						className={clsx(
							'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[12px] p-[13px]',
							cls.item_shadow,
							cls.item,
							className
						)}
					>
						<div className={clsx('flex items-start justify-between')}>
							<span className='text-[10px] font-[700] uppercase text-[#2F374A]'>{title}</span>
							<div className='flex items-start gap-2'>
								<div className={clsx('flex flex-col items-end justify-end gap-[3px]')}>
									<span className='text-[8px] font-[500] uppercase text-[#2F374A]'>{content}</span>
									<span className='text-[12px] font-[500] text-[#10AA7C]'>{percent}%</span>
								</div>
								<div className={clsx('mt-1 h-[8px] w-[8px] rounded-[2px]', getMarkBackground(type))}></div>
							</div>
						</div>
						<div className='absolute left-[24px] top-[45px] h-[52px] w-[85px]'>
							<div className={clsx('relative flex h-full w-full items-center justify-center', getBackground(type))}>
								<Image
									src={picUrl}
									height={60}
									width={81}
									alt='box'
								/>
							</div>
						</div>
						<div className='flex flex-col gap-1'>
							<span className='text-[10px] font-[500] text-[#2F374A]'>{name}</span>
							<span className='text-[12px] font-[500] text-[#D1D9EB]'>$ {price}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CaseItem
