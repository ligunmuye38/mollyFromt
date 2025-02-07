import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import IconAK47 from '@/shared/assets/icons/icon-ak-47.svg'
import IconClose from '@/shared/assets/icons/icon-close-black.svg'
import IconShoppingCart from '@/shared/assets/icons/icon-shopping-cart.svg'
import IconWalletAdd from '@/shared/assets/icons/icon-wallet-add.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Main.module.sass'

const Hexagon = () => {
	return (
		<svg
			width='39'
			height='45'
			viewBox='0 0 39 45'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g filter='url(#filter0_b_4313_30114)'>
				<path
					d='M19.2344 0.03125L38.2869 11.0312V33.0312L19.2344 44.0312L0.181816 33.0312V11.0312L19.2344 0.03125Z'
					fill='#10AA7C'
					fill-opacity='0.15'
				/>
				<path
					d='M19.2344 0.03125L38.2869 11.0312V33.0312L19.2344 44.0312L0.181816 33.0312V11.0312L19.2344 0.03125Z'
					fill='url(#paint0_linear_4313_30114)'
					fill-opacity='0.15'
				/>
				<path
					d='M0.881816 11.4354L19.2344 0.839541L37.5869 11.4354V32.6271L19.2344 43.223L0.881816 32.6271V11.4354Z'
					stroke='#10AA7C'
					stroke-opacity='0.45'
					stroke-width='1.4'
				/>
				<path
					d='M0.881816 11.4354L19.2344 0.839541L37.5869 11.4354V32.6271L19.2344 43.223L0.881816 32.6271V11.4354Z'
					stroke='url(#paint1_linear_4313_30114)'
					stroke-opacity='0.45'
					stroke-width='1.4'
				/>
			</g>
			<defs>
				<filter
					id='filter0_b_4313_30114'
					x='-14.8164'
					y='-14.9688'
					width='68.1016'
					height='74'
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
						result='effect1_backgroundBlur_4313_30114'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_backgroundBlur_4313_30114'
						result='shape'
					/>
				</filter>
				<linearGradient
					id='paint0_linear_4313_30114'
					x1='27.3259'
					y1='0.03125'
					x2='27.3259'
					y2='44.0313'
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
				<linearGradient
					id='paint1_linear_4313_30114'
					x1='27.3259'
					y1='0.03125'
					x2='27.3259'
					y2='44.0313'
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

const MyItem = () => {
	const t = useTranslations()
	const [selected, toggleSelected] = useState<boolean>(false)
	const pathname = usePathname()
	const isFailed = pathname.includes('/failed')
	const isSuccess = pathname.includes('/success')

	if (isSuccess) {
		return (
			<div className='relative h-[200px] w-full bg-[linear-gradient(90deg,_#1F2534_0%,_rgba(31,_37,_52,_0)_81.03%)] p-[3px] backdrop-blur-md [clip-path:polygon(36px_0px,_100%_0px,_100%_100%,_36px_100%,_0px_50%)]'>
				<div className='flex h-full w-full items-center justify-center bg-[linear-gradient(90deg,_#191F2D_0%,_rgba(25,_31,_45,_0.15)_100%)] [clip-path:polygon(36px_0px,_100%_0px,_100%_100%,_36px_100%,_0px_50%)]'>
					<div
						style={{
							filter: 'drop-shadow(0px 0px 24px #10AA7C59)'
						}}
					>
						<Button
							classNames={{
								base: clsx(cls.hexagon_btn, 'h-[42px] w-[216px]'),
								content: clsx(cls.hexagon_btn_inner, '!gap-0')
							}}
						>
							<IconShoppingCart className={cls.hexagon_btn_inner_icon} />
							{t('sell_for').toUpperCase()} $50.00
						</Button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='relative h-[240px] w-full'>
			<div className='h-full w-full origin-top-left -skew-y-3 self-start overflow-hidden rounded-[12px] backdrop-blur-sm'>
				<div className='h-full w-full origin-top-left skew-y-6 rounded-[12px] bg-[linear-gradient(90deg,_#1F2534_0%,_rgba(64,_75,_101,_0.15)_72.9%)] p-[3px]'>
					{selected ? (
						<div className='h-full w-full rounded-[12px] bg-[linear-gradient(90deg,_rgba(223,_6,_217,_0.15)_0%,_rgba(25,_31,_45,_0.0225)_30%)]'></div>
					) : (
						<div className='h-full w-full rounded-[12px] bg-[linear-gradient(90deg,_#191F2D_0%,_rgba(18,_23,_35,_0.25)_100%)]'></div>
					)}
				</div>
				<div className='absolute left-0 top-4 h-[208px] w-[3px] bg-[linear-gradient(180deg,_#1F2534_0%,_#E5B919_50%,_#1F2534_100%)]'></div>
			</div>
			{selected ? (
				<>
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)]'>
						<Image
							src='/images/livefeed/skin-9.png'
							height={138}
							width={188}
							alt='myitem'
						/>
					</div>
					<div className='absolute bottom-5 flex w-full -rotate-3 justify-between px-5'>
						<div>
							<p className='text-[14px] font-bold text-white'>Exoskeleton AWP</p>
							<p className='text-[12px] font-medium text-[#735E8D]'>Field-Tested</p>
						</div>
						<div className='h-[38px] w-[82px] bg-[#263147] p-[2px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
							<div className='flex h-full w-full items-center justify-center bg-[#1E2739] text-[12px] font-bold text-[#1AD19B] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
								$2.64
							</div>
						</div>
					</div>
					<div className='absolute top-0 z-10 flex w-full rotate-3 justify-end'>
						<Button
							onPress={() => toggleSelected(false)}
							className='translate-x-1/2'
						>
							<div className='h-[30px] w-[30px] -rotate-3 rounded-[8px] bg-[#0D1018] pl-[7px] pt-[7px]'>
								<IconClose className='h-4 w-4 fill-[#2F374A]' />
							</div>
						</Button>
					</div>
				</>
			) : (
				<>
					<div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center'>
						<IconAK47 className='mb-6 h-[44px] w-[167px] fill-[#566C9C] opacity-35' />
						<p className='text-[12px] font-bold text-[#FFFFFF]'>{t('select_items_balance_to_use')}</p>
						<p className='text-[12px] font-medium text-[#5E6D8D]'>{t('you_could_use_multiple_skins')}</p>
					</div>
					{!isFailed && (
						<div className='absolute bottom-0 left-0 flex w-full origin-[center_left] translate-y-1/2 -rotate-3 justify-center gap-2'>
							<div className='flex gap-[1px]'>
								<Button onPress={() => toggleSelected(true)}>
									<div className='h-[44px] w-[135px] bg-[linear-gradient(90deg,_#1F2534_0%,_rgba(31,_37,_52,_0.15)_100%)] p-[2px] [clip-path:polygon(10px_0px,_100%_0px,_100%_100%,_10px_100%,_0px_50%)]'>
										<div className='flex h-full w-full items-center bg-[#181E2C] px-5 [clip-path:polygon(10px_0px,_100%_0px,_100%_100%,_10px_100%,_0px_50%)]'>
											<p className='w-full text-center text-[14px] font-bold text-[#60719A]'>
												{t('random').toUpperCase()}
											</p>
										</div>
									</div>
								</Button>
								<Button onPress={() => toggleSelected(true)}>
									<div className='h-[44px] w-[135px] bg-[linear-gradient(270deg,_#1F2534_0%,_rgba(31,_37,_52,_0.15)_100%)] p-[2px] [clip-path:polygon(0px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_0px_100%)]'>
										<div className='flex h-full w-full items-center bg-[#181E2C] px-5 [clip-path:polygon(0px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_0px_100%)]'>
											<p className='w-full text-center text-[14px] font-bold text-[#60719A]'>
												{t('select_all').toUpperCase()}
											</p>
										</div>
									</div>
								</Button>
							</div>
							<Button>
								<div className='relative'>
									<Hexagon />
									<IconWalletAdd className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
								</div>
							</Button>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default MyItem
