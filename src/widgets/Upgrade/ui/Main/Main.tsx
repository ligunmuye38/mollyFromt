'use client'

import { UpgradeTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { FC, useState } from 'react'

import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconGun from '@/shared/assets/icons/icon-weapon.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'
import { Select } from '@/shared/ui/Select/Select'
import { Slider } from '@/shared/ui/Slider/Slider'

import CircularProgress from './CircularProgress'
import cls from './Main.module.sass'
import MyItem from './MyItem'
import UpgradeItem from './UpgradeItem'
import UpgradeStreaks from './UpgradeStreaks'
import UpgradeTypeSwitcher from './UpgradeTypeSwitcher'

interface MainProps {
	className?: string
}

const HexagonSm = () => {
	return (
		<svg
			width='30'
			height='26'
			viewBox='0 0 30 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_b_24_9276)'>
				<path
					d='M7.55737 0.250121L22.0574 0.250121L29.3074 12.8075L22.0574 25.3649L7.55737 25.3649L0.307369 12.8075L7.55737 0.250121Z'
					fill='url(#paint0_linear_24_9276)'
					fill-opacity='0.72'
				/>
				<path
					d='M7.55737 0.250121L22.0574 0.250121L29.3074 12.8075L22.0574 25.3649L7.55737 25.3649L0.307369 12.8075L7.55737 0.250121Z'
					fill='url(#paint1_linear_24_9276)'
					fill-opacity='0.15'
				/>
				<path
					d='M0.884719 12.8075L7.84605 0.750121L21.7687 0.750121L28.73 12.8075L21.7687 24.8649L7.84605 24.8649L0.884719 12.8075Z'
					stroke='#00FFB2'
					stroke-opacity='0.75'
				/>
			</g>
			<defs>
				<filter
					id='filter0_b_24_9276'
					x='-14.6914'
					y='-14.7499'
					width='59'
					height='55.1147'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood
						flood-opacity='0'
						result='BackgroundImageFix'
					/>
					<feGaussianBlur
						in='BackgroundImageFix'
						stdDeviation='7.5'
					/>
					<feComposite
						in2='SourceAlpha'
						operator='in'
						result='effect1_backgroundBlur_24_9276'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_backgroundBlur_24_9276'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_24_9276'
					x1='23.6691'
					y1='-0.843595'
					x2='5.94567'
					y2='26.4586'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#0AFFB5' />
					<stop
						offset='1'
						stop-color='#06996D'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_24_9276'
					x1='12.1759'
					y1='-2.4164'
					x2='26.6759'
					y2='22.6983'
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
	)
}

const CaseItem = ({ selected, onSelect }: { selected?: boolean; onSelect: (_: boolean) => void }) => {
	return (
		<div
			onClick={() => onSelect(!selected)}
			className={clsx(
				'h-[140px] w-[125px] rounded-[12px] p-[1px]',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#141925] p-[13px]'>
				<div className='flex w-full justify-between'>
					<p className='text-[10px] font-medium leading-[10px] text-[#2F374A]'>FT</p>
					<div className='h-2 w-2 rounded-sm bg-[#FF00F5] shadow-[0_0_4px_#FF00F54D]'></div>
				</div>
				<div className='h-[60px] w-[81px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md'>
					<Image
						src='/images/case/skin-2.png'
						width={81}
						height={60}
						alt='gun'
					/>
				</div>
				<div>
					<p className='w-full text-left text-[10px] font-medium text-[#2F374A]'>AK-47 | Fire Serpent</p>
					<p className='w-full text-left text-[12px] font-bold text-[#D1D9EB]'>$ 456,05</p>
				</div>
			</div>
		</div>
	)
}

const MyItems = () => {
	const t = useTranslations()
	const [selectedItems, setSelectedItems] = useState<number[]>([])

	return (
		<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
			<div className='flex max-h-[390px] w-full flex-col gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-5'>
				<div className='flex w-full items-center gap-4'>
					<div className='h-[42px] w-[42px] rounded-[8px] bg-[#202839] p-[10.5px]'>
						<IconGun className='h-[21px] w-[21px] fill-[#5A6786]' />
					</div>
					<p className='flex-grow text-[14px] font-bold text-[#FFFFFF]'>{t('my_items').toUpperCase()}</p>
					<Select
						onChangeValue={() => {
							return
						}}
						value={'all'}
						theme='theme-2'
						items={[{ label: 'Price', value: 'Price' }]}
						classNames={{
							base: 'w-[90px]',
							trigger: 'h-[42px] !rounded-[10px] !bg-[#181E2C] !border-[#232B3E] w-[90px]',
							itemInner: 'text-[#60719A]',
							selectorIcon: 'w-5 h-5'
						}}
					/>
				</div>
				<div className='app-scrollbar overflow-auto px-1'>
					<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,125px)] justify-between gap-2'>
						{Array.from(new Array(12)).map((_, index) => (
							<CaseItem
								selected={selectedItems.includes(index)}
								onSelect={value => setSelectedItems(prev => (value ? [...prev, index] : prev.filter(v => v !== index)))}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const UpgradeItems = ({ selected, onSelect }: { selected?: number; onSelect: (v?: number) => void }) => {
	const t = useTranslations()

	return (
		<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
			<div className='flex max-h-[390px] w-full flex-col gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-5'>
				<div className='flex w-full items-center gap-4'>
					<div className='h-[42px] w-[42px] rounded-[8px] bg-[#202839] p-[10.5px]'>
						<IconUpgrade className='h-[21px] w-[21px] fill-[#5A6786]' />
					</div>
					<p className='flex-grow text-[14px] font-bold text-[#FFFFFF]'>{t('upgrade').toUpperCase()}</p>
					<Select
						onChangeValue={() => {
							return
						}}
						value={'all'}
						theme='theme-2'
						items={[{ label: 'Price', value: 'Price' }]}
						classNames={{
							base: 'w-[90px]',
							trigger: 'h-[42px] !rounded-[10px] !bg-[#181E2C] !border-[#232B3E] w-[90px]',
							itemInner: 'text-[#60719A]',
							selectorIcon: 'w-5 h-5'
						}}
					/>
				</div>
				<div className='app-scrollbar overflow-auto px-1'>
					<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,125px)] justify-between gap-2'>
						{Array.from(new Array(12)).map((_, index) => (
							<CaseItem
								selected={selected === index}
								onSelect={value => {
									onSelect(value ? index : undefined)
								}}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export const Main: FC<MainProps> = ({ className }) => {
	const t = useTranslations()

	const [type, setType] = useState<UpgradeTypes>(UpgradeTypes.UPGRADE)
	const [selectedUpgrade, setSelectedUpgrade] = useState<number>()

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-5')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'mb-4 mt-5')}>
					<div className={cls.title}>{t('upgrade').toUpperCase()}</div>
				</div>
				<div className={clsx('relative z-20 mx-auto w-full', { 'mb-[76px]': type === UpgradeTypes.UPGRADE })}>
					<UpgradeTypeSwitcher
						type={type}
						setType={setType}
						className='mx-auto'
					/>
				</div>
				{type === UpgradeTypes.UPGRADE && (
					<>
						<div className='absolute left-1/2 top-[64px] w-[1200px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_at_top,_rgba(0,0,0,0)_15%,_rgba(0,0,0,1)_40%)]'>
							<Image
								className='[mask-image:radial-gradient(rgba(0,0,0,1)_20%,_rgba(0,0,0,0)_80%)]'
								src='/images/upgrade-bg.jpg'
								width={1200}
								height={600}
								alt='bg'
							/>
						</div>
						<div className='absolute bottom-0 left-0 h-[126px] w-full bg-[linear-gradient(180deg,_rgba(18,_23,_34,_0)_0%,_#121722_100%)]'></div>
						<div className='relative px-5'>
							<div className='relative flex items-center gap-16'>
								<MyItem />
								<div className='relative'>
									<CircularProgress />
								</div>
								<UpgradeItem
									selected={Boolean(selectedUpgrade)}
									onClose={() => setSelectedUpgrade(undefined)}
								/>
							</div>
							<div className='absolute right-[calc(50%_+_172px)] h-[35px] w-[152px] bg-[#24FDBC] p-[1px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
								<div className='flex h-full w-full items-center justify-between gap-3 bg-[#0C4438] px-1 [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
									<div className='ml-2 flex flex-grow justify-between'>
										<Button>
											<div className='flex h-4 w-4 items-center justify-center rounded-[5px] border-t-1 border-t-[#189A7F] bg-[#186750]'>
												-
											</div>
										</Button>
										<p className='text-[12px] text-[#03F1AA]'>0.00</p>
										<Button>
											<div className='flex h-4 w-4 items-center justify-center rounded-[5px] border-t-1 border-t-[#189A7F] bg-[#186750]'>
												+
											</div>
										</Button>
									</div>
									<div className='relative w-max'>
										<HexagonSm />
										<IconCheck className='absolute left-1/2 top-1/2 w-[12px] -translate-x-1/2 -translate-y-1/2 fill-[#141925]' />
									</div>
								</div>
							</div>
							<div className='relative mx-auto mt-3 flex h-[32px] w-[230px] items-center rounded-lg border-1 border-[#242C3E] bg-[#191F2D] px-[11px]'>
								<div className='absolute left-[11px] top-0 h-[7px] w-[calc(100%_-_22px)] bg-[linear-gradient(to_right,_#262F41_1px,_transparent_1px)] [background-size:3px]'></div>
								<div className='absolute bottom-0 left-[11px] h-[7px] w-[calc(100%_-_22px)] bg-[linear-gradient(to_right,_#262F41_1px,_transparent_1px)] [background-size:3px]'></div>
								<Slider
									value={50}
									minValue={0}
									maxValue={100}
									classNames={{
										track: 'h-[6px] bg-[#262F41]',
										filler: '!bg-[#F2C41F] !bg-none',
										thumb:
											'after:!w-[18px] after:!h-[12px] after:!bg-[linear-gradient(0deg,_#E1B514,_#E1B514),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)] !w-5 !h-[14px] !rounded-[14px] !bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_122.17%,_#FDCD24_141.22%),_linear-gradient(270deg,_#E1B514_6.54%,_#FEDB61_33.68%)]'
									}}
								/>
							</div>
						</div>
					</>
				)}
			</div>
			{type === UpgradeTypes.UPGRADE && (
				<div className='grid grid-cols-2 gap-5 px-5'>
					<MyItems />
					<UpgradeItems
						onSelect={v => setSelectedUpgrade(v)}
						selected={selectedUpgrade}
					/>
				</div>
			)}
			<div className='px-5'>{type === UpgradeTypes.UPGRADE_STREAKS && <UpgradeStreaks />}</div>
		</div>
	)
}
