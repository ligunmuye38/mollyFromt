import clsx from 'clsx'
import Image from 'next/image'

import cls from '../CaseBattle.module.sass'

interface ISmallAvatarProps {
	icon: string
}

const SmallAvatar = ({ icon }: ISmallAvatarProps) => {
	return (
		<div className={clsx(cls.card_avatar, '!z-20')}>
			<Image
				width={32}
				height={32}
				alt='avatar'
				className={cls.card_avatar_pic}
				src={icon}
			/>
			<svg
				width='48'
				height='48'
				viewBox='0 0 48 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<path
					d='M22.5 2.02073C23.4282 1.48483 24.5718 1.48483 25.5 2.02073L42.2846 11.7113C43.2128 12.2472 43.7846 13.2376 43.7846 14.3094V33.6906C43.7846 34.7624 43.2128 35.7528 42.2846 36.2887L25.5 45.9793C24.5718 46.5152 23.4282 46.5152 22.5 45.9793L5.71539 36.2887C4.78719 35.7528 4.21539 34.7624 4.21539 33.6906V14.3094C4.21539 13.2376 4.78719 12.2472 5.71539 11.7113L22.5 2.02073Z'
					stroke='#191A2B'
					stroke-width='2'
				/>
				<path
					d='M22.5 2.02073C23.4282 1.48483 24.5718 1.48483 25.5 2.02073L42.2846 11.7113C43.2128 12.2472 43.7846 13.2376 43.7846 14.3094V33.6906C43.7846 34.7624 43.2128 35.7528 42.2846 36.2887L25.5 45.9793C24.5718 46.5152 23.4282 46.5152 22.5 45.9793L5.71539 36.2887C4.78719 35.7528 4.21539 34.7624 4.21539 33.6906V14.3094C4.21539 13.2376 4.78719 12.2472 5.71539 11.7113L22.5 2.02073Z'
					stroke='url(#paint0_linear_4146_1705)'
					stroke-width='2'
				/>
				<mask
					id='mask0_4146_1705'
					style={{ maskType: 'alpha' }}
					maskUnits='userSpaceOnUse'
					x='7'
					y='5'
					width='34'
					height='38'
				>
					<path
						d='M22.0001 6.20743C23.2377 5.4929 24.7625 5.4929 26.0001 6.20744L38.409 13.3717C39.6466 14.0863 40.409 15.4068 40.409 16.8358V31.1644C40.409 32.5935 39.6466 33.914 38.409 34.6285L26.0001 41.7928C24.7625 42.5073 23.2377 42.5073 22.0001 41.7928L9.5912 34.6285C8.35359 33.914 7.5912 32.5934 7.5912 31.1644V16.8358C7.5912 15.4068 8.3536 14.0862 9.5912 13.3717L22.0001 6.20743Z'
						fill='#D9D9D9'
					/>
				</mask>
				<g mask='url(#mask0_4146_1705)'>
					<rect
						y='-7.5791'
						width='55.5789'
						height='111.158'
						fill='url(#pattern0_4146_1705)'
					/>
					<path
						d='M22.2501 6.64045C23.333 6.01523 24.6672 6.01523 25.7501 6.64045L38.159 13.8047C39.2419 14.4299 39.909 15.5854 39.909 16.8358V31.1644C39.909 32.4148 39.2419 33.5703 38.159 34.1955L25.7501 41.3598C24.6672 41.985 23.333 41.985 22.2501 41.3598L9.8412 34.1955C8.75829 33.5703 8.0912 32.4148 8.0912 31.1644V16.8358C8.0912 15.5854 8.7583 14.4299 9.8412 13.8047L22.2501 6.64045Z'
						stroke='#D1D9EB'
						stroke-opacity='0.15'
					/>
				</g>
				<defs>
					<pattern
						id='pattern0_4146_1705'
						patternContentUnits='objectBoundingBox'
						width='1'
						height='1'
					>
						<use
							xlinkHref='#image0_4146_1705'
							transform='matrix(0.00198807 0 0 0.000994036 -0.0606362 0)'
						/>
					</pattern>
					<linearGradient
						id='paint0_linear_4146_1705'
						x1='24'
						y1='0'
						x2='24'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.31841'
							stop-color='#272948'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#35375E'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default SmallAvatar
