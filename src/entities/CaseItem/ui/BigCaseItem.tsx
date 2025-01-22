import clsx from 'clsx'
import Image from 'next/image'

import { ImageBgType } from '@/widgets/Cases/model/types'

import cls from './CaseItem.module.sass'

interface BigCaseItemProps {
	className?: string
	title?: string
	picUrl: string
	name?: string
	type: ImageBgType
}

const BigCaseItem = ({ title, picUrl, name, type, className }: BigCaseItemProps) => {
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
		<div
			className={clsx(
				'relative flex h-[190px] w-[194px] flex-col justify-between rounded-[12px] bg-[#141925] p-[13px]',
				cls.item_shadow,
				cls.item,
				className
			)}
		>
			<div className={clsx('flex items-start justify-between')}>
				<span className='text-[13px] font-[700] uppercase text-[#2F374A]'>{title}</span>
				<div className='flex items-start gap-2'>
					<div className={clsx('mt-1 h-[12px] w-[12px] rounded-[2px]', getMarkBackground(type))}></div>
				</div>
			</div>
			<div className={clsx('h-[112px] w-[158px]')}>
				<div className={clsx('relative flex h-full w-full items-center justify-center', getBackground(type))}>
					<Image
						src={picUrl}
						height={88}
						width={119}
						alt='box'
					/>
				</div>
			</div>
			<div className='flex flex-col gap-1'>
				<span className='text-[10px] font-[500] text-[#2F374A]'>{name}</span>
			</div>
		</div>
	)
}

export default BigCaseItem
