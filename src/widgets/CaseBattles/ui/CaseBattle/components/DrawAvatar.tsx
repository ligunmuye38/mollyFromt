import clsx from 'clsx'
import Image from 'next/image'

import cls from '../CaseBattle.module.sass'

interface IDrawAvatarProps {
	color?: string
	left: string
	top: string
	rotation: string
}

const DrawAvatar = ({ color, left, top, rotation }: IDrawAvatarProps) => {
	return (
		<div
			className='absolute -translate-x-1/2 -translate-y-1/2'
			style={{ filter: `drop-shadow(0px 0px 11px ${color}59)`, top, left, rotate: rotation, transformOrigin: '0 0' }}
		>
			<svg
				width='78'
				height='88'
				viewBox='0 0 78 88'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M39 0L77.1051 22V66L39 88L0.894882 66V22L39 0Z'
					fill={`url(#paint0_linear_${color})`}
				/>
				<defs>
					<linearGradient
						id={`paint0_linear_${color}`}
						x1='39'
						y1='10.6452'
						x2='39'
						y2='88'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color={color}
							stop-opacity='0.19'
						/>
						<stop
							offset='1'
							stop-color={color}
						/>
					</linearGradient>
				</defs>
			</svg>
			<div className={clsx(cls.draw_avatar)}>
				<Image
					src='/images/avatars/2-lg.jpg'
					width={231}
					height={463}
					alt='avatar'
				/>
			</div>
		</div>
	)
}

export default DrawAvatar
