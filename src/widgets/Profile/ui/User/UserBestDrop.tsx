'use client'

import { userBestDropData } from '../../model/items'
import { ImageBgType } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCase from '@/shared/assets/icons/icon-case-battle.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import BadgeBarItem from '@/shared/ui/BadgeBarItem/BadgeBarItem'

import cls from './User.module.sass'

interface UserBestDropProps {
	title: string
	type: ImageBgType
	name: string
	imgUrl: string
}

const UserBestDrop = ({ title, type, name, imgUrl }: UserBestDropProps) => {
	// For translation
	const t = useTranslations()

	// For responsive
	const breakpoints = useAppResponsive()

	// To get chatbar state
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
		<div className='app-scrollbar mt-7 flex w-full flex-wrap'>
			<div
				className={clsx(
					'h-auto w-1/4 min-w-[279px] rounded-xl bg-[#E3B718] p-[1px] lg:w-full',
					!chatViewHidden && 'xl:!w-1/2'
				)}
			>
				<div className='relative h-full w-full rounded-xl bg-yellow-400'>
					<div
						className={clsx(
							'relative flex h-full w-full flex-col overflow-hidden rounded-[12px] bg-[#121722] px-5 lg:py-5'
						)}
					>
						<div className={clsx('hidden w-full items-start justify-between lg:flex')}>
							<div className={clsx('flex flex-col items-end justify-end gap-[3px]')}>
								<span className='text-[13px] font-[500] uppercase text-[#2F374A]'>{title}</span>
							</div>
							<div className={clsx('h-[12px] w-[12px] rounded-[3px]', getMarkBackground(type))}></div>
						</div>
						<div className={clsx('flex w-full items-center justify-center gap-5 lg:gap-10 2sm:gap-4')}>
							<div className={clsx('flex w-auto justify-center pt-3')}>
								<div className='relative h-[62px] w-[84px] lg:h-[127px] lg:w-[179px] 2sm:h-[60px] 2sm:w-[100px]'>
									<div className={clsx('relative flex h-full w-full items-center justify-center', getBackground(type))}>
										<Image
											src={imgUrl}
											height={breakpoints?.lg ? 62 : 127}
											width={breakpoints?.lg ? 84 : 179}
											alt='box'
										/>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-1 pt-6'>
								<span className='text-[12px] font-[500] text-[#2F374A] lg:text-[14px] xs:text-[9px]'>{name}</span>
								<span className='text-[14px] font-[500] text-[#D1D9EB] lg:text-[16px] xs:text-[10px]'>
									$ {'242,02'}
								</span>
							</div>
						</div>

						<div className='absolute bottom-2 right-2 mt-3 flex w-auto justify-center gap-2'>
							<IconCase className='h-[18px] w-[22px] fill-[#5A6786] lg:h-[38px] lg:w-[40px] 2sm:h-[22px] 2sm:w-[22px]' />
						</div>
					</div>
					<div className='absolute -top-[1px] left-1/2 -translate-x-1/2 rounded-bl-[4px] rounded-br-[4px] bg-yellow-400 px-3 py-[2px] lg:px-6 lg:py-2'>
						<span className='text-[10px] text-[#181E2C] lg:text-[14px]'>Best drop</span>
					</div>
				</div>
			</div>
			{userBestDropData.map((item, index) => (
				<div
					key={index}
					className={clsx(
						'w-1/4 px-2 py-1 lg:w-1/3 2sm:w-1/2 2sm:flex-1 sm:mt-8 sm:px-1',
						!chatViewHidden && 'xl:!w-1/2 xl:!px-1'
					)}
				>
					<BadgeBarItem
						key={item.id}
						isUpperContent={true}
						title={item.title}
						content={t(item.content)}
						icon={item.icon}
						titleType={item?.titleType}
					/>
				</div>
			))}
		</div>
	)
}

export default UserBestDrop
