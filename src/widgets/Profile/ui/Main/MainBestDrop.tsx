'use client'

import { bestDropData } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { ImageBgType } from '@/widgets/Cases/model/types'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import BadgeBarItem from '@/shared/ui/BadgeBarItem/BadgeBarItem'

import cls from './Main.module.sass'

interface MainBestDropProps {
	title: string
	type: ImageBgType
	name: string
	imgUrl: string
}

const MainBestDrop = ({ title, type, name, imgUrl }: MainBestDropProps) => {
	// For translation
	const t = useTranslations()

	// To get the chat hidden state(Desktop)
	const chatViewHidden = useCommonStore(state => state.chatViewHidden)

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
			className={clsx('mt-[15px] flex h-full w-full items-center gap-5 md:flex-col', !chatViewHidden && '3lg:flex-col')}
		>
			<div
				className={clsx(
					'h-[271px] w-[200px] rounded-xl bg-[#E3B718] p-[1px] md:h-auto md:w-full',
					!chatViewHidden && '3lg:!h-auto 3lg:!w-full'
				)}
			>
				<div className='relative h-full w-full rounded-xl bg-yellow-400'>
					<div className={clsx('relative flex h-full w-full flex-col overflow-hidden rounded-[12px] bg-[#121722] p-5')}>
						<div className={clsx('flex w-full items-start justify-between')}>
							<div className={clsx('flex flex-col items-end justify-end gap-[3px]')}>
								<span className='text-[13px] font-[500] uppercase text-[#2F374A]'>{title}</span>
							</div>
							<div className={clsx('h-[12px] w-[12px] rounded-[3px]', getMarkBackground(type))}></div>
						</div>
						<div
							className={clsx(
								'flex w-full flex-col items-center justify-center md:flex-row md:gap-5',
								!chatViewHidden && '3lg:!flex-row 3lg:!gap-5'
							)}
						>
							<div className={clsx('flex w-full justify-center md:w-auto', !chatViewHidden && '3lg:!w-auto')}>
								<div className='relative h-[127px] w-[180px]'>
									<div className={clsx('relative flex h-full w-full items-center justify-center', getBackground(type))}>
										<Image
											src={imgUrl}
											height={127}
											width={180}
											alt='box'
										/>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-2.5'>
								<span className='text-[14px] font-[500] text-[#2F374A] xs:text-[9px]'>{name}</span>
								<span className='text-[16px] font-[500] text-[#D1D9EB] xs:text-[10px]'>$ {'242,02'}</span>
							</div>
						</div>

						<div className='mt-3 flex w-full justify-center gap-2'>
							<IconCase className='h-[18px] w-[22px] fill-[#5A6786]' />
							<span className='text-[14px] text-[#5A6786]'>Case Battles</span>
						</div>
					</div>
					<div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-bl-lg rounded-br-lg bg-yellow-400 px-[14px] py-[6px]'>
						<span className='text-[12px] text-[#181E2C]'>Best drop</span>
					</div>
				</div>
			</div>
			<div className='flex h-full flex-1'>
				<div className={clsx('flex h-full w-full flex-wrap sm:mt-3')}>
					{bestDropData.map((item, index) => (
						<div
							key={index}
							className={clsx(
								item?.icon ? 'w-1/2' : 'w-1/4',
								'p-1 sm:!w-1/3',
								item.id == 2 && 'sm:!order-4',
								item.id == 4 && 'sm:!order-2',
								item.id == 3 && 'sm:!order-7',
								item.id == 7 && 'sm:!order-3',
								item.id == 6 && 'sm:!order-8',
								item.id == 8 && 'sm:!order-6'
							)}
							style={{ order: item.id }}
						>
							<BadgeBarItem
								key={item.id}
								titleIcon={item?.titleIcon}
								title={item.title}
								content={t(item.content)}
								icon={item.icon}
								titleType={item?.titleType}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MainBestDrop
