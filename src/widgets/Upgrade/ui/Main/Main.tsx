'use client'

import { UpgradeTypes } from '../../model/types'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import IconArrowDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconFilter from '@/shared/assets/icons/icon-filter-3.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconWalletAdd from '@/shared/assets/icons/icon-wallet-add.svg'
import IconGun from '@/shared/assets/icons/icon-weapon.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/Input/Input'
import { Slider } from '@/shared/ui/Slider/Slider'

import CircularProgress from './CircularProgress'
import cls from './Main.module.sass'
import MobileSelect from './MobileSelect'
import MyItem from './MyItem'
import SuccessPrompt from './SuccessPrompt'
import UpgradeItem from './UpgradeItem'
import UpgradeStreaks from './UpgradeStreaks'
import UpgradeTypeSwitcher from './UpgradeTypeSwitcher'

interface MainProps {
	className?: string
}

export const CaseItem = ({ selected, onSelect }: { selected?: boolean; onSelect: (_: boolean) => void }) => {
	return (
		<div
			onClick={() => onSelect(!selected)}
			className={clsx(
				'h-[140px] w-[125px] rounded-[12px] p-[1px] 3sm:w-full',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#111620] p-[13px]'>
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

const MyItems = ({ className, onSelect }: { className?: string; onSelect: (_: boolean) => void }) => {
	const t = useTranslations()
	const [selectedItems, setSelectedItems] = useState<number[]>([])
	const [dir, toggleDir] = useState<boolean>(false)

	useEffect(() => {
		onSelect(selectedItems.length > 0)
	}, [selectedItems, onSelect])

	return (
		<div
			className={clsx(
				'rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]',
				className
			)}
		>
			<div className='flex max-h-[390px] w-full flex-col gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-5'>
				<div className='flex w-full items-center gap-3'>
					<div className='h-[42px] w-[42px] rounded-[8px] bg-[#202839] p-[10.5px]'>
						<IconGun className='h-[21px] w-[21px] fill-[#5A6786]' />
					</div>
					<p className='flex-grow text-[14px] font-bold text-[#FFFFFF]'>{t('my_items').toUpperCase()}</p>
					<Button
						onPress={() => toggleDir(v => !v)}
						classNames={{
							base: 'flex items-center gap-2 rounded-[10px] border-1 border-[#232B3E] px-[10px] py-[9px] text-[14px] text-[#60719A]'
						}}
					>
						Price
						<div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#252C3F]'>
							<IconArrowDown
								className={clsx('w-[14px] fill-[#60719A] duration-150', dir ? 'rotate-180' : 'rotate-0')}
							/>
						</div>
					</Button>
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

const UpgradeItems = ({
	selected,
	onSelect,
	className
}: {
	selected?: number
	onSelect: (v?: number) => void
	className?: string
}) => {
	const t = useTranslations()
	const [dir, toggleDir] = useState<boolean>(false)

	return (
		<div
			className={clsx(
				'rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]',
				className
			)}
		>
			<div className='flex max-h-[390px] w-full flex-col gap-5 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-5'>
				<div className='flex w-full items-center'>
					<div className='mr-3 h-[42px] w-[42px] rounded-[8px] bg-[#202839] p-[10.5px]'>
						<IconUpgrade className='h-[21px] w-[21px] fill-[#5A6786]' />
					</div>
					<p className='flex-grow text-[14px] font-bold text-[#FFFFFF]'>{t('upgrade').toUpperCase()}</p>
					<div className='flex items-center gap-[5px]'>
						<Button
							onPress={() => toggleDir(v => !v)}
							classNames={{
								base: 'flex items-center gap-2 rounded-[10px] border-1 border-[#232B3E] px-[10px] py-[9px] text-[14px] text-[#60719A]'
							}}
						>
							Price
							<div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#252C3F]'>
								<IconArrowDown
									className={clsx('w-[14px] fill-[#60719A] duration-150', dir ? 'rotate-180' : 'rotate-0')}
								/>
							</div>
						</Button>
						<Popover placement='bottom'>
							<PopoverTrigger>
								<div className='h-10 w-10 rounded-[10px] border-1 border-[#232B3E] bg-[#181E2C] p-[10px]'>
									<IconSearch className='h-5 w-5 fill-[#60719A]' />
								</div>
							</PopoverTrigger>
							<PopoverContent className='p-0'>
								<Input
									onChange={() => {
										return
									}}
									value='Butterfly Knife'
									startContent={<IconSearch className='h-5 w-5 fill-[#60719A]' />}
								/>
							</PopoverContent>
						</Popover>
						<Input
							onChange={() => {
								return
							}}
							value='0.00'
							startContent={<p className='text-[12px] font-medium leading-3 text-[#17E2A5]'>$</p>}
							type='number'
							classNames={{
								base: 'bg-[#181E2C] w-[95px] hide-spin flex-[0_0_95px]',
								inputWrapper: 'rounded-[10px]'
							}}
						/>
						<Popover
							showArrow
							classNames={{
								base: 'before:!bg-[#121722] before:!left-auto before:right-10 before:z-10 before:shadow-none before:border-t-1 before:border-l-1 before:border-t-[#202738] before:border-l-[#202738]'
							}}
						>
							<PopoverTrigger>
								<Button className='flex-[0_0_42px]'>
									<div className='h-[42px] w-[42px] rounded-[10px] bg-[#232B3E] p-[11px]'>
										<IconFilter className='h-5 w-5 fill-[#60719A]' />
									</div>
								</Button>
							</PopoverTrigger>
							<PopoverContent className='border-1 border-[#202738] bg-[#121722] p-[10px]'>
								<div className='flex gap-[5px]'>
									<div className='flex max-h-[248px] w-[135px] flex-col rounded-lg bg-[#191F2D] p-[10px]'>
										<p className='mb-[10px] text-[14px] font-bold leading-4 text-white'>Weapon</p>
										<div className='app-scrollbar overflow-auto'>
											<div className='flex flex-col gap-[5px]'>
												{Array.from(new Array(16)).map((_, index) => (
													<div
														key={index}
														className='flex items-center'
													>
														<Checkbox
															theme='theme-2'
															name={`Butterfly Knife ${index}`}
															value={`butterfly_knife_${index}`}
														/>
														<p className='text-[10px] leading-4 text-[#5A6786]'>Butterfly Knife</p>
													</div>
												))}
											</div>
										</div>
									</div>
									<div className='flex max-h-[248px] w-[135px] flex-col rounded-lg bg-[#191F2D] p-[10px]'>
										<p className='mb-[10px] text-[14px] font-bold leading-4 text-white'>Rarity</p>
										<div className='app-scrollbar overflow-auto'>
											<div className='flex flex-col gap-[5px]'>
												{Array.from(new Array(16)).map((_, index) => (
													<div
														key={index}
														className='flex items-center'
													>
														<Checkbox
															theme='theme-2'
															name={`Butterfly Knife ${index}`}
															value={`butterfly_knife_${index}`}
														/>
														<p className='text-[10px] leading-4 text-[#5A6786]'>Butterfly Knife</p>
													</div>
												))}
											</div>
										</div>
									</div>
									<div className='flex max-h-[248px] w-[135px] flex-col rounded-lg bg-[#191F2D] p-[10px]'>
										<p className='mb-[10px] text-[14px] font-bold leading-4 text-white'>Exterior</p>
										<div className='app-scrollbar overflow-auto'>
											<div className='flex flex-col gap-[5px]'>
												{Array.from(new Array(16)).map((_, index) => (
													<div
														key={index}
														className='flex items-center'
													>
														<Checkbox
															theme='theme-2'
															name={`Butterfly Knife ${index}`}
															value={`butterfly_knife_${index}`}
														/>
														<p className='text-[10px] leading-4 text-[#5A6786]'>Butterfly Knife</p>
													</div>
												))}
											</div>
										</div>
									</div>
									<div className='flex max-h-[248px] w-[135px] flex-col rounded-lg bg-[#191F2D] p-[10px]'>
										<p className='mb-[10px] text-[14px] font-bold leading-4 text-white'>StatTrak™</p>
										<div className='app-scrollbar overflow-auto'>
											<div className='flex flex-col gap-[5px]'>
												{Array.from(new Array(16)).map((_, index) => (
													<div
														key={index}
														className='flex items-center'
													>
														<Checkbox
															theme='theme-2'
															name={`Butterfly Knife ${index}`}
															value={`butterfly_knife_${index}`}
														/>
														<p className='text-[10px] leading-4 text-[#5A6786]'>Butterfly Knife</p>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
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
	const [selected, toggleSelected] = useState<boolean>(false)
	const [bidAmount, setBidAmount] = useState<string>('0')

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-5')}>
				<SuccessPrompt />
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
					<div className={cls.bg_icon}>
						<IconUpgrade />
					</div>
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
								className='[mask-image:radial-gradient(rgba(0,0,0,0.7)_20%,_rgba(0,0,0,0)_80%)]'
								src='/images/upgrade-bg.jpg'
								width={1200}
								height={600}
								alt='bg'
							/>
						</div>
						<div className='absolute bottom-0 left-0 h-[126px] w-full bg-[linear-gradient(180deg,_rgba(18,_23,_34,_0)_0%,_#121722_100%)]'></div>
						<div className='relative px-5'>
							<div className='relative flex items-center justify-center gap-16'>
								<MyItem
									isSelected={selected}
									className='lg:!hidden'
								/>
								<div className='relative'>
									<CircularProgress />
								</div>
								<UpgradeItem
									className='lg:!hidden'
									selected={Boolean(selectedUpgrade)}
									onClose={() => setSelectedUpgrade(undefined)}
								/>
							</div>
							<div className='absolute bottom-2 left-8 h-[35px] w-[calc(50%_-_250px)] bg-[#1F2534] p-[1px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)] lg:hidden'>
								<div className='flex h-full w-full items-center gap-2 bg-[#151a26] px-4 [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
									<IconWalletAdd className='h-5 w-5' />
									<input
										className='bg-transparent text-[12px] text-white outline-none'
										value={bidAmount}
										type='number'
										onChange={ev => setBidAmount(ev.target.value)}
									/>
								</div>
							</div>
							<div className='absolute bottom-[2px] left-[42px] w-[calc(50%_-_270px)] lg:hidden'>
								<Slider
									value={Number(bidAmount) / 10}
									onChange={value => setBidAmount((Number(value) * 10).toString())}
									minValue={0}
									maxValue={100}
									classNames={{
										track: 'h-[1px] bg-[#262F41]',
										filler: '!bg-[#04ECA8] !bg-none',
										thumb:
											'after:!w-[7px] after:!h-[7px] after:!bg-[#0EB989] !w-[6px] !h-[6px] !rounded-[14px] !bg-[#0EB989]'
									}}
								/>
							</div>
							{/* <div className='relative mx-auto mt-3 flex h-[32px] w-[230px] items-center rounded-lg border-1 border-[#242C3E] bg-[#191F2D] px-[11px] lg:w-full lg:border-0 lg:bg-transparent'>
								<div className='absolute left-[11px] top-0 h-[7px] w-[calc(100%_-_22px)] bg-[linear-gradient(to_right,_#262F41_1px,_transparent_1px)] [background-size:3px] lg:hidden'></div>
								<div className='absolute bottom-0 left-[11px] h-[7px] w-[calc(100%_-_22px)] bg-[linear-gradient(to_right,_#262F41_1px,_transparent_1px)] [background-size:3px] lg:hidden'></div>
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
							</div> */}

							<div className='mx-auto mb-6 mt-4 w-max [filter:drop-shadow(0_0_14px_#FD3E2459)] lg:hidden'>
								<Button
									classNames={{
										base: '[clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_122.17%,_#FDCD24_141.22%),_linear-gradient(270deg,_#E1B514_6.54%,_#FEDB61_33.68%)] w-[206px] h-[48px] p-[3px]',
										content:
											'flex items-center justify-center [clip-path:polygon(11px_0px,_calc(100%_-_11px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_11px)_100%,_11px_100%,_1px_50%)] bg-[linear-gradient(0deg,_#E1B514,_#E1B514),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)] w-full h-full'
									}}
								>
									<IconUpgrade className='h-6 w-6 fill-[#121722]' />
									<p className='text-[14px] font-bold text-[#121722]'>{t('upgrade').toUpperCase()}</p>
								</Button>
							</div>
						</div>
					</>
				)}
			</div>
			{type === UpgradeTypes.UPGRADE && (
				<>
					<div className='grid grid-cols-2 gap-5 px-5 lg:hidden lg:gap-3 2sm:px-[10px]'>
						<MyItems onSelect={v => toggleSelected(v)} />
						<UpgradeItems
							onSelect={v => setSelectedUpgrade(v)}
							selected={selectedUpgrade}
						/>
					</div>
					<MobileSelect />
				</>
			)}
			<div className='px-5'>{type === UpgradeTypes.UPGRADE_STREAKS && <UpgradeStreaks />}</div>
		</div>
	)
}
