import clsx from 'clsx'
import { FC } from 'react'

import IconSwitchBack from '@/shared/assets/icons/icon-switch-back.svg'

import cls from './ToggleButton.module.sass'

interface ToggleButtonProps {
	value: boolean
	onToggle: () => void
}

const ToggleButton: FC<ToggleButtonProps> = ({ value, onToggle }) => {
	return (
		<div
			className='relative cursor-pointer'
			onClick={onToggle}
		>
			<div
				className={clsx(cls.switch_btn_track, { [cls.disabled]: !value })}
				style={{ left: value ? '20px' : '3px' }}
			>
				<div className={clsx(cls.hexagon, cls.switch_btn, { [cls.disabled]: !value })}>
					<div className={clsx(cls.hexagon, cls.switch_btn_inner, { [cls.disabled]: !value })}>
						<div className={clsx(cls.hexagon, `h-[10px] w-[10px] ${value ? 'bg-[#BB9613]' : 'bg-[#181E2C]'}`)}></div>
					</div>
				</div>
			</div>
			<IconSwitchBack />
		</div>
	)
}

export default ToggleButton
