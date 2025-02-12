import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import IconAK47 from '@/shared/assets/icons/icon-ak-47.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import IconWalletAdd from '@/shared/assets/icons/icon-wallet-add.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import cls from './Main.module.sass'
import { Hexagon } from './MyItem'

const MobileSelect = () => {
	const t = useTranslations()
	const [_items, _setItems] = useState<boolean>(false)
	const [upgradeTo, setUpgradtTo] = useState<boolean>(false)

	const [times, setTimes] = useState<string>('X1')
	const [bidAmount, setBidAmount] = useState<string>('0.00')

	return (
		<div className='hidden grid-cols-2 gap-4 px-[10px] lg:grid md:gap-3 3sm:gap-2'>
			{upgradeTo ? (
				<div className='hidden h-[180px] w-full flex-col items-center justify-center rounded-xl border-2 border-[#1F253480] bg-[#181E2C80] px-[16px] py-[17px] lg:flex'>
					<Swiper
						className={cls.mobile_item_swiper}
						direction='vertical'
						loop
					>
						{Array.from(new Array(5)).map((_, index) => (
							<SwiperSlide key={index}>
								<div className='flex flex-col items-center'>
									<div>
										<Image
											className='mx-auto'
											src='/images/livefeed/skin-9.png'
											height={78}
											width={106}
											alt='myitem'
										/>
									</div>
									<p className='text-[10px] text-white'>Exoskeleton AWP</p>
									<p className='text-[8px] text-[#735E8D]'>Field-Tested</p>
									<p className='text-[12px] text-[#1AD19B]'>$2.64</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			) : (
				<div className='hidden w-full flex-col items-center justify-center rounded-xl border-2 border-[#1F253480] bg-[#181E2C80] px-[16px] py-[17px] lg:flex'>
					<IconAK47 className='mb-2 h-[44px] w-[167px] fill-[#566C9C] opacity-35 2sm:h-[36px] 2sm:w-[140px]' />
					<p className='mb-3 text-center text-[14px] text-white 2sm:text-[12px]'>{t('items_to_upgrade_to')}</p>
					<div className='flex items-center gap-2'>
						<Button
							classNames={{
								base: 'rounded-[7px] border-[1.4px] border-[rgba(36,253,188,0.65)] py-[6px] px-[30px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.0975)_100%)] text-[12px] text-[rgba(32,_227,_169,_1)]'
							}}
						>
							{t('select').toUpperCase()}
						</Button>
						<Button>
							<Hexagon />
							<IconWalletAdd className='absolute left-1/2 top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2' />
						</Button>
					</div>
				</div>
			)}
			<div className='hidden w-full flex-col items-center justify-center rounded-xl border-2 border-[#1F253480] bg-[#181E2C80] px-[16px] py-[17px] lg:flex'>
				<IconAK47 className='mb-2 h-[44px] w-[167px] fill-[#566C9C] opacity-35 2sm:h-[36px] 2sm:w-[140px]' />
				<p className='mb-3 text-center text-[14px] text-white 2sm:text-[12px]'>{t('items_or_balance_to_use')}</p>
				<Button
					classNames={{
						base: 'rounded-[7px] border-[1.4px] border-[rgba(36,253,188,0.65)] py-[6px] px-[30px] bg-[linear-gradient(0deg,_rgba(16,_170,_124,_0.15),_rgba(16,_170,_124,_0.15)),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.0975)_100%)] text-[12px] text-[rgba(32,_227,_169,_1)]'
					}}
				>
					{t('select').toUpperCase()}
				</Button>
			</div>
			<div className='hidden justify-center gap-[1px] lg:flex'>
				<Button
					classNames={{
						base: 'h-full w-full bg-[linear-gradient(90deg,_#1F2534_0%,_rgba(31,_37,_52,_0.15)_100%)] p-[2px] [clip-path:polygon(10px_0px,_100%_0px,_100%_100%,_10px_100%,_0px_50%)]',
						content:
							'flex h-full w-full items-center bg-[#181E2C] px-2 [clip-path:polygon(10px_0px,_100%_0px,_100%_100%,_10px_100%,_0px_50%)]'
					}}
					onPress={() => setUpgradtTo(true)}
				>
					<p className='w-full text-center text-[14px] font-bold text-[#60719A] 3sm:text-[10px]'>
						{t('random').toUpperCase()}
					</p>
				</Button>
				<Button
					classNames={{
						base: 'h-full w-full bg-[linear-gradient(270deg,_#1F2534_0%,_rgba(31,_37,_52,_0.15)_100%)] p-[2px] [clip-path:polygon(0px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_0px_100%)]',
						content:
							'flex h-full w-full items-center bg-[#181E2C] px-2 [clip-path:polygon(0px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_0px_100%)]'
					}}
					onPress={() => setUpgradtTo(true)}
				>
					<p className='w-full text-center text-[14px] font-bold text-[#60719A] 3sm:text-[10px]'>
						{t('select_all').toUpperCase()}
					</p>
				</Button>
			</div>
			<div className='mx-auto hidden w-full max-w-[300px] justify-between gap-[3px] lg:flex'>
				{['X1', 'X2', 'X3', 'X4', 'X5', 'X10'].map((value, index) => (
					<Button
						onPress={() => setTimes(value)}
						key={index}
						classNames={{
							base: clsx(
								'pb-[calc(16%_-_2.5px)] mt-auto h-0 w-full border-2 relative rounded-xl 3sm:rounded-md',
								value === times
									? 'border-[#FDCD24] bg-[#E2B617] text-[#121722] [text-shadow:0px_1px_0px_#FFD53F] shadow-[0px_0px_24px_#FD3E2459]'
									: 'border-[#1E2433] bg-[#181E2C] text-[#60719A]'
							)
						}}
					>
						<p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] font-bold 3sm:text-[12px]'>
							{value}
						</p>
					</Button>
				))}
			</div>
			<div className='col-span-2 hidden flex-col items-center gap-[10px] rounded-md border-1 border-[#242C3E] bg-[#191F2D] p-[10px] lg:flex'>
				<p className='text-center text-[12px] text-white'>{t('enter_the_bid_amount')}</p>
				<Input
					onChange={setBidAmount}
					theme='theme-1'
					value={bidAmount}
					type='number'
					startContent={<p className='text-[#20E3A9]'>$</p>}
					classNames={{
						mainWrapper: 'w-full',
						input: 'text-[11px]',
						inputWrapper: '!bg-[#121722] rounded-md'
					}}
				/>
			</div>
			<div className='col-span-2 mb-[14px] mt-2 hidden justify-center [filter:drop-shadow(0_0_14px_#FD3E2459)] lg:flex'>
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
	)
}

export default MobileSelect
