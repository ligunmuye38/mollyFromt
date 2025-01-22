'use client'

import clsx from 'clsx'
import { useState } from 'react'

import cls from './SwitchButton.module.sass'

interface SwitchButtonProps {
	prevClick?: () => void
	nextClick?: () => void
}

const SwitchButton = ({ prevClick, nextClick }: SwitchButtonProps) => {
	const [isPrev, setIsPrev] = useState<boolean>(true)

	const switchHandle = () => {
		if (isPrev) {
			if (nextClick) nextClick()
		} else {
			if (prevClick) prevClick()
		}
		setIsPrev(!isPrev)
	}

	return (
		<div
			className={clsx(cls.switch_btn, 'h-[22px] w-[42px] hover:cursor-pointer')}
			onClick={switchHandle}
		>
			<div className={clsx('relative h-full w-full', cls.switch_btn_inner)}>
				<div
					className={clsx(cls.switch_btn_icon, 'absolute', isPrev ? 'left-0 duration-150' : 'left-[18px] duration-150')}
				>
					<div className={clsx(cls.switch_btn_icon_inner)}>
						<div className={clsx(cls.switch_btn_icon_inner_center)}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SwitchButton
