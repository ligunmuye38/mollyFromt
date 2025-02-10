import clsx from 'clsx'
import Image from 'next/image'

import cls from '../CaseBattle.module.sass'

const WinnerAvatar = () => {
	return (
		<div className='relative'>
			<div className={clsx(cls.result_avatar, cls.winner)}>
				<div className={cls.result_avatar_inner}>
					<Image
						src='/images/avatars/2-lg.jpg'
						width={231}
						height={463}
						alt='avatar'
					/>
				</div>
			</div>
			<svg
				width='174'
				height='200'
				viewBox='0 0 174 200'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M85.2988 2.02073C86.227 1.48483 87.3706 1.48483 88.2988 2.02073L170.901 49.7113C171.83 50.2472 172.401 51.2376 172.401 52.3094V147.691C172.401 148.762 171.83 149.753 170.901 150.289L88.2988 197.979C87.3706 198.515 86.227 198.515 85.2988 197.979L2.69629 150.289C1.76809 149.753 1.19629 148.762 1.19629 147.691V52.3094C1.19629 51.2376 1.76809 50.2472 2.69629 49.7113L85.2988 2.02073Z'
					stroke='#10AA7C'
					stroke-width='2'
				/>
				<path
					d='M85.2988 2.02073C86.227 1.48483 87.3706 1.48483 88.2988 2.02073L170.901 49.7113C171.83 50.2472 172.401 51.2376 172.401 52.3094V147.691C172.401 148.762 171.83 149.753 170.901 150.289L88.2988 197.979C87.3706 198.515 86.227 198.515 85.2988 197.979L2.69629 150.289C1.76809 149.753 1.19629 148.762 1.19629 147.691V52.3094C1.19629 51.2376 1.76809 50.2472 2.69629 49.7113L85.2988 2.02073Z'
					stroke='url(#paint0_linear_4149_4434)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4149_4434'
						x1='123.578'
						y1='0'
						x2='123.578'
						y2='200'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
							stop-opacity='0.65'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default WinnerAvatar
