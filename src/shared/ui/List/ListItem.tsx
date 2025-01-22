'use client'

import clsx from 'clsx'
import { FC } from 'react'

interface ListItemProps {
	classNames?: {
		body?: string
		icon?: string
		itemHover?: string
		itemActive?: string
	}
	content?: string
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	axis?: string
	onClick?: () => void
	isActive?: boolean
}

const ListItem: FC<ListItemProps> = ({
	classNames,
	content,
	startIcon,
	endIcon,
	axis = 'x',
	isActive = false,
	onClick
}) => {
	return (
		<div
			className={clsx(
				'relative flex w-full justify-center text-[#545778] transition-colors hover:cursor-pointer hover:text-white',
				axis == 'y' && '!justify-start pl-[20px] duration-150 hover:border-l-2 hover:border-[#24FDBC] hover:pl-[18px]',
				isActive == true ? (axis == 'y' ? '!border-l-2 !border-[#24FDBC] !pl-[18px] !text-white' : '!text-white') : '',
				classNames?.body
			)}
			onClick={() => {
				onClick!()
			}}
		>
			<span className='text-nowrap text-[16px]'>
				{startIcon}
				{content}
				{endIcon}
			</span>
		</div>
	)
}

export default ListItem
