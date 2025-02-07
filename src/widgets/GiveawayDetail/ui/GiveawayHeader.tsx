import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import IconDollarCircle from '@/shared/assets/icons/icon-dollar-circle.svg'
import IconFlag from '@/shared/assets/icons/icon-flag.svg'
import IconGift from '@/shared/assets/icons/icon-gift.svg'
import IconProfile2Users from '@/shared/assets/icons/icon-profile-2user.svg'

import cls from './Giveaway.module.sass'

const GiveawaysHeader = () => {
	const t = useTranslations()
	const pathname = usePathname()
	const isCompleted = useMemo(() => pathname.includes('/completed'), [pathname])

	const Avatar = () => {
		return (
			<div className='relative'>
				<Image
					className='absolute left-[8px] top-[10px]'
					style={{
						clipPath:
							"path('M29.499 1.49436C30.4272 0.95846 31.5708 0.95846 32.499 1.49436L59.2657 16.9481C60.1939 17.484 60.7657 18.4744 60.7657 19.5462V50.4537C60.7657 51.5255 60.1939 52.5159 59.2657 53.0518L32.499 68.5055C31.5708 69.0414 30.4272 69.0414 29.499 68.5055L2.73228 53.0518C1.80408 52.5159 1.23228 51.5255 1.23228 50.4537V19.5462C1.23228 18.4744 1.80408 17.484 2.73228 16.9481L29.499 1.49436Z')"
					}}
					src={'/images/avatars/1.jpg'}
					width={60}
					height={60}
					alt='icon'
				/>
				<svg
					width='78'
					height='90'
					viewBox='0 0 78 90'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M37.5 2.02073C38.4282 1.48483 39.5718 1.48483 40.5 2.02073L75.4711 22.2113C76.3993 22.7472 76.9711 23.7376 76.9711 24.8094V65.1906C76.9711 66.2624 76.3993 67.2528 75.4711 67.7887L40.5 87.9793C39.5718 88.5152 38.4282 88.5152 37.5 87.9793L2.52886 67.7887C1.60066 67.2528 1.02886 66.2624 1.02886 65.1906V24.8094C1.02886 23.7376 1.60066 22.7472 2.52886 22.2113L37.5 2.02073Z'
						stroke='url(#paint0_linear_4193_4987)'
						stroke-width='2'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4193_4987'
							x1='39'
							y1='10.8871'
							x2='39'
							y2='90'
							gradientUnits='userSpaceOnUse'
						>
							<stop
								stop-color='#24FDBC'
								stop-opacity='0'
							/>
							<stop
								offset='1'
								stop-color='#24FDBC'
							/>
						</linearGradient>
					</defs>
				</svg>
			</div>
		)
	}

	const HexagonBg = () => {
		return (
			<svg
				width='36'
				height='40'
				viewBox='0 0 36 40'
				fill='#143F3F'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter='url(#filter0_b_4193_5146)'>
					<path
						d='M16 1.1547C17.2376 0.440169 18.7624 0.440169 20 1.1547L33.3205 8.8453C34.5581 9.55983 35.3205 10.8803 35.3205 12.3094V27.6906C35.3205 29.1197 34.5581 30.4402 33.3205 31.1547L20 38.8453C18.7624 39.5598 17.2376 39.5598 16 38.8453L2.67949 31.1547C1.44189 30.4402 0.679491 29.1197 0.679491 27.6906L0.679491 12.3094C0.679491 10.8803 1.44189 9.55983 2.67949 8.8453L16 1.1547Z'
						fill='#10AA7C'
						fill-opacity='0.15'
					/>
					<path
						d='M16 1.1547C17.2376 0.440169 18.7624 0.440169 20 1.1547L33.3205 8.8453C34.5581 9.55983 35.3205 10.8803 35.3205 12.3094V27.6906C35.3205 29.1197 34.5581 30.4402 33.3205 31.1547L20 38.8453C18.7624 39.5598 17.2376 39.5598 16 38.8453L2.67949 31.1547C1.44189 30.4402 0.679491 29.1197 0.679491 27.6906L0.679491 12.3094C0.679491 10.8803 1.44189 9.55983 2.67949 8.8453L16 1.1547Z'
						fill='url(#paint0_linear_4193_5146)'
						fill-opacity='0.15'
					/>
					<path
						d='M16.25 1.58771C17.3329 0.962498 18.6671 0.962498 19.75 1.58771L33.0705 9.27831C34.1534 9.90353 34.8205 11.059 34.8205 12.3094V27.6906C34.8205 28.941 34.1534 30.0965 33.0705 30.7217L19.75 38.4123C18.6671 39.0375 17.3329 39.0375 16.25 38.4123L2.92949 30.7217C1.84659 30.0965 1.17949 28.941 1.17949 27.6906L1.17949 12.3094C1.17949 11.059 1.84659 9.90353 2.92949 9.27831L16.25 1.58771Z'
						stroke='url(#paint1_linear_4193_5146)'
						stroke-opacity='0.15'
					/>
					<path
						d='M16.25 1.58771C17.3329 0.962498 18.6671 0.962498 19.75 1.58771L33.0705 9.27831C34.1534 9.90353 34.8205 11.059 34.8205 12.3094V27.6906C34.8205 28.941 34.1534 30.0965 33.0705 30.7217L19.75 38.4123C18.6671 39.0375 17.3329 39.0375 16.25 38.4123L2.92949 30.7217C1.84659 30.0965 1.17949 28.941 1.17949 27.6906L1.17949 12.3094C1.17949 11.059 1.84659 9.90353 2.92949 9.27831L16.25 1.58771Z'
						stroke='url(#paint2_linear_4193_5146)'
						stroke-opacity='0.15'
					/>
				</g>
				<defs>
					<filter
						id='filter0_b_4193_5146'
						x='-44.3203'
						y='-44.3811'
						width='124.641'
						height='128.762'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood
							flood-opacity='0'
							result='BackgroundImageFix'
						/>
						<feGaussianBlur
							in='BackgroundImageFix'
							stdDeviation='22.5'
						/>
						<feComposite
							in2='SourceAlpha'
							operator='in'
							result='effect1_backgroundBlur_4193_5146'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_4193_5146'
							result='shape'
						/>
					</filter>
					<linearGradient
						id='paint0_linear_4193_5146'
						x1='25.3559'
						y1='0'
						x2='25.3559'
						y2='40'
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
						id='paint1_linear_4193_5146'
						x1='26.4014'
						y1='20'
						x2='33.8066'
						y2='20'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.347781'
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
						/>
					</linearGradient>
					<linearGradient
						id='paint2_linear_4193_5146'
						x1='21.6968'
						y1='20'
						x2='14.8143'
						y2='20'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
						/>
					</linearGradient>
				</defs>
			</svg>
		)
	}

	return (
		<div className={'relative p-5'}>
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(200.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			<div
				className='absolute left-0 top-0 h-full w-full scale-x-[-1] rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(200.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			<Image
				className='opacity-[0.05]'
				src='/images/cave-bg.png'
				fill
				alt='bg'
			/>
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.05) 100%)'
				}}
			>
				<div
					className='h-full w-full rounded-[12px] bg-[#121722]'
					style={{
						background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.05) 100%)'
					}}
				></div>
			</div>
			<div className='relative z-10 flex items-center justify-between gap-1'>
				<div className='flex items-center gap-5'>
					<Avatar />
					<div>
						<div
							className='mb-1 h-7 w-16 p-[1px]'
							style={{
								background:
									'linear-gradient(270deg, rgba(64, 106, 127, 0.45) 9.99%, rgba(27, 50, 61, 0.25) 54.99%, rgba(64, 106, 127, 0.45) 100%)',
								clipPath: 'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
							}}
						>
							<div
								className='flex h-full w-full items-center justify-center'
								style={{
									background: 'linear-gradient(270deg, #1B323D -32.2%, rgba(18, 36, 44, 0.45) 33.9%, #1B323D 100%)',
									clipPath:
										'polygon(8px 0px, calc(100% - 8px) 0px, calc(100% - 1px) 50%, calc(100% - 8px) 100%, 8px 100%, 1px 50%)'
								}}
							>
								<p className='text-[8px] font-medium leading-4 text-[#6490A7]'>
									{t('giveaways.creator').toUpperCase()}
								</p>
							</div>
						</div>
						<p className='text-[18px] font-medium text-[#D1D9EB]'>Aleksandr</p>
					</div>
				</div>
				<div>
					<p className='mb-2 text-[18px] font-medium text-[#D1D9EB]'>The argonaut N48</p>
					<div className='relative z-10 rounded-[8px] border-1 border-[#202F38] p-[9px]'>
						<p className='absolute -top-[9px] left-1/2 -translate-x-1/2 bg-[#121E28F0] px-4 text-[10px] font-bold leading-4 text-[#4A6070]'>
							{isCompleted ? t('giveaways.players').toUpperCase() : t('giveaways.end_by').toUpperCase()}
						</p>
						{isCompleted ? (
							<div className='flex items-center justify-center gap-1 text-[#4A6070]'>
								{Array.from(new Array('25'.toString().length)).map((_, index) => (
									<div
										key={index}
										className={cls.card_number}
									>
										{'25'.toString()[index]}
									</div>
								))}{' '}
								<p className='mx-[2px]'>/</p>
								{Array.from(new Array('100'.toString().length)).map((_, index) => (
									<div
										key={index}
										className={clsx(cls.card_number, cls.disabled)}
									>
										{'100'.toString()[index]}
									</div>
								))}
							</div>
						) : (
							<>
								<div className='flex items-center gap-1 text-[#4A6070]'>
									{Array.from(new Array('55:55:55:55'.length)).map((_, index) => (
										<>
											{index % 3 === 2 ? (
												<p className='mx-[2px]'>:</p>
											) : (
												<div
													key={index}
													className={clsx(cls.card_number, cls.disabled)}
												>
													{'55:55:55:55'.toString()[index]}
												</div>
											)}
										</>
									))}
								</div>
								<div className='flex justify-between'>
									<p className='leading-1 w-[42px] text-center text-[8px] font-medium text-[#4A6070]'>
										{t('giveaways.days').toUpperCase()}
									</p>
									<p className='leading-1 w-[42px] text-center text-[8px] font-medium text-[#4A6070]'>
										{t('giveaways.hours').toUpperCase()}
									</p>
									<p className='leading-1 w-[42px] text-center text-[8px] font-medium text-[#4A6070]'>
										{t('giveaways.minutes').toUpperCase()}
									</p>
									<p className='leading-1 w-[42px] text-center text-[8px] font-medium text-[#4A6070]'>
										{t('giveaways.seconds').toUpperCase()}
									</p>
								</div>
							</>
						)}
					</div>
				</div>
				<div className='flex gap-[10px] pt-4'>
					<div
						className='relative z-10 h-[60px] w-[154px] rounded-[8px] p-[1px]'
						style={{
							background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
						}}
					>
						<div className='absolute -top-[20px] left-1/2 -translate-x-1/2'>
							<HexagonBg />
							<IconDollarCircle className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
						</div>
						<div
							className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
							style={{
								background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
							}}
						>
							<p className='mb-2 text-[14px] font-medium leading-[8px] text-[#1BD69E]'>$5 425.33</p>
							<p className='mb-2 text-[10px] font-medium leading-[8px] text-[#4A6070]'>
								{t('giveaways.total_prizes_sum').toUpperCase()}
							</p>
						</div>
					</div>
					<div
						className='relative z-10 h-[60px] w-[154px] rounded-[8px] p-[1px]'
						style={{
							background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
						}}
					>
						<div className='absolute -top-[20px] left-1/2 -translate-x-1/2'>
							<HexagonBg />
							<IconProfile2Users className='absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 fill-[#1BD69E]' />
						</div>
						<div
							className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
							style={{
								background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
							}}
						>
							<p className='mb-2 text-[14px] font-medium leading-[8px] text-[#1BD69E]'>$5 425.33</p>
							<p className='mb-2 text-[10px] font-medium leading-[8px] text-[#4A6070]'>
								{t('giveaways.participants').toUpperCase()}
							</p>
						</div>
					</div>
					<div
						className='relative z-10 h-[60px] w-[154px] rounded-[8px] p-[1px]'
						style={{
							background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
						}}
					>
						<div className='absolute -top-[20px] left-1/2 -translate-x-1/2'>
							<HexagonBg />
							<IconGift className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
						</div>
						<div
							className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
							style={{
								background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
							}}
						>
							<p className='mb-2 text-[14px] font-medium leading-[8px] text-[#1BD69E]'>$5 425.33</p>
							<p className='mb-2 text-[10px] font-medium leading-[8px] text-[#4A6070]'>
								{t('giveaways.prizes').toUpperCase()}
							</p>
						</div>
					</div>
					{!isCompleted && (
						<div
							className='relative z-10 h-[60px] w-[154px] rounded-[8px] p-[1px]'
							style={{
								background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
							}}
						>
							<div className='absolute -top-[20px] left-1/2 -translate-x-1/2'>
								<HexagonBg />
								<IconFlag className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<div
								className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
								style={{
									background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
								}}
							>
								<p className='mb-2 text-[14px] font-medium leading-[8px] text-[#1BD69E]'>$5 425.33</p>
								<p className='mb-2 text-[10px] font-medium leading-[8px] text-[#4A6070]'>
									{t('giveaways.requirements').toUpperCase()}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default GiveawaysHeader
