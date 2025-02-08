import { upgradeItems } from '../../model/items'
import { IUpgradeItem } from '../../model/types'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

import cls from './Main.module.sass'

interface IListItemProps {
	item: IUpgradeItem
}

const RankBg = ({ rank }: { rank: number }) => {
	if (rank === 1) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4304_24910)'
					stroke='url(#paint1_linear_4304_24910)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4304_24910'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FEF0AE' />
						<stop
							offset='1'
							stop-color='#E79C5F'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4304_24910'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#E0CA86' />
						<stop
							offset='1'
							stop-color='#BE7B3C'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	if (rank === 2) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4303_24284)'
					stroke='url(#paint1_linear_4303_24284)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4303_24284'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#E5E5E5' />
						<stop
							offset='1'
							stop-color='#555454'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4303_24284'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#B4AFAF' />
						<stop
							offset='1'
							stop-color='#3C3C3C'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	if (rank === 3) {
		return (
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					fill='url(#paint0_linear_4304_24911)'
					stroke='url(#paint1_linear_4304_24911)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4304_24911'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#FAC36D' />
						<stop
							offset='1'
							stop-color='#A1513B'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4304_24911'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#C58C50' />
						<stop
							offset='1'
							stop-color='#7F412A'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}
	return (
		<svg
			width='42'
			height='48'
			viewBox='0 0 42 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
				fill='url(#paint0_linear_4303_24431)'
				stroke='url(#paint1_linear_4303_24431)'
				stroke-width='2'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4303_24431'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#232B3E' />
					<stop
						offset='0.5'
						stop-color='#232B3E'
						stop-opacity='0.25'
					/>
					<stop
						offset='1'
						stop-color='#232B3E'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4303_24431'
					x1='-3'
					y1='24'
					x2='45'
					y2='24'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#2D374F' />
					<stop
						offset='0.5'
						stop-color='#2D374F'
						stop-opacity='0.45'
					/>
					<stop
						offset='1'
						stop-color='#2D374F'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute left-[4px] top-[5px]'
				style={{
					clipPath:
						"path('M15.2521 1.64045C16.335 1.01523 17.6691 1.01523 18.7521 1.64045L31.161 8.80473C32.2439 9.42995 32.911 10.5854 32.911 11.8358V26.1644C32.911 27.4148 32.2439 28.5703 31.161 29.1955L18.7521 36.3598C17.6691 36.985 16.335 36.985 15.2521 36.3598L2.84315 29.1955C1.76025 28.5703 1.09315 27.4148 1.09315 26.1644V11.8358C1.09315 10.5854 1.76025 9.42994 2.84315 8.80473L15.2521 1.64045Z')"
				}}
				src={'/images/avatars/6.jpg'}
				width={35}
				height={35}
				alt='icon'
			/>
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.5 2.02073C20.4282 1.48483 21.5718 1.48483 22.5 2.02073L39.2846 11.7113C40.2128 12.2472 40.7846 13.2376 40.7846 14.3094V33.6906C40.7846 34.7624 40.2128 35.7528 39.2846 36.2887L22.5 45.9793C21.5718 46.5152 20.4282 46.5152 19.5 45.9793L2.71539 36.2887C1.78719 35.7528 1.21539 34.7624 1.21539 33.6906V14.3094C1.21539 13.2376 1.78719 12.2472 2.71539 11.7113L19.5 2.02073Z'
					stroke='url(#paint0_linear_4303_24209)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4303_24209'
						x1='21'
						y1='5.80645'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#FDCD24'
							stop-opacity='0.19'
						/>
						<stop
							offset='1'
							stop-color='#FDCD24'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const ListItem = ({ item: { rank } }: IListItemProps) => {
	return (
		<div
			className={clsx(
				cls.top_list,
				{ [cls.rank_first]: rank === 1 },
				{ [cls.rank_second]: rank === 2 },
				{ [cls.rank_third]: rank === 3 }
			)}
		>
			<div className='relative gap-4'>
				<RankBg rank={rank} />
				<p
					className={clsx(
						{ 'text-[#724719]': rank === 1 },
						{ 'text-[#383333]': rank === 2 },
						{ 'text-[#121722]': rank === 3 },
						{ 'text-[#60719A]': rank > 3 },
						'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
					)}
				>
					{rank}
				</p>
			</div>
			<Avatar />
			<div className='h-12 rounded-lg border-1 border-[#212838]'>
				<div className='rounded-lg bg-[#121722]'>
					<div className='rounded- h-[30px] w-[2px]'></div>
				</div>
			</div>
		</div>
	)
}

const UpgradeStreaks = () => {
	const [page, setPage] = useState<number>(1)

	return (
		<div>
			<div className='flex flex-col gap-2'>
				{upgradeItems.map((item, index) => (
					<ListItem
						item={item}
						key={index}
					/>
				))}
			</div>
			<div className='mt-2 flex justify-center'>
				<PaginationBar
					page={page}
					setPage={setPage}
					total={5}
				/>
			</div>
		</div>
	)
}

export default UpgradeStreaks
