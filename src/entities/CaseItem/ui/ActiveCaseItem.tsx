'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { ImageBgType } from '@/widgets/Cases/model/types'

import Button from '@/shared/ui/Button/Button'

import cls from './CaseItem.module.sass'

interface ActiveCaseItemProps {
	title: string
	theme: ImageBgType
	name: string
	price: string
	picUrl: string
}

const ActiveCaseItem = ({ title, theme, name, price, picUrl }: ActiveCaseItemProps) => {
	// Active state
	const [isActive, setIsActive] = useState<boolean>(false)

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

	// Active click function
	const active = () => {
		setIsActive(!isActive)
	}

	return (
		<div
			className={clsx(
				'relative h-[200px] w-[133px] rounded-[12px] p-0.5 hover:cursor-pointer',
				isActive == true ? '!bg-[#10AA7C]' : cls.item_shadow,
				cls.item
			)}
			onClick={active}
		>
			<div className='relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[12px] bg-black p-[13px]'>
				<div className={clsx('flex items-start justify-between')}>
					<span className='text-[10px] font-[700] uppercase text-[#2F374A]'>{title}</span>
					<div className='flex items-start gap-2'>
						<div className={clsx('mt-1 h-[8px] w-[8px] rounded-[2px]', getMarkBackground(theme))}></div>
					</div>
				</div>
				<div className='left-[13px] top-[29px] h-[76px] w-[107px]'>
					<div className={clsx('relative flex h-full w-full items-center justify-center', getBackground(theme))}>
						<Image
							src={picUrl}
							height={59}
							width={80}
							alt='box'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-[10px] font-[500] text-[#2F374A]'>{name}</span>
					<span className='text-[12px] font-[500] text-[#D1D9EB]'>$ {price}</span>
				</div>
				<div className={clsx(cls.item_sell_btn)}>
					<div className={clsx(cls.item_sell_btn_inner, 'h-full w-full')}>
						<Button
							classNames={{
								base: 'w-full h-full px-2 py-[10px] '
							}}
						>
							<span className='text-[12px] uppercase text-[#121722]'>SELL ${price}</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ActiveCaseItem
