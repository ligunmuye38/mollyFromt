import { giveaways } from '../model/items'
import { GiveawayStatus, GiveawaysFilters, IGiveaway } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'

import GiveawayCardBrand from '@/shared/assets/giveaway-card-brand-decorator.svg'
import GiveawayCardEffect from '@/shared/assets/giveaway-card-effect.svg'
import IconDollarCircle from '@/shared/assets/icons/icon-dollar-circle.svg'
import IconGift from '@/shared/assets/icons/icon-gift.svg'
import IconPeople from '@/shared/assets/icons/icon-people.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Giveaways.module.sass'

interface IGiveawaysListProps {
	filter: GiveawaysFilters
}

interface IGiveawyCardProps {
	giveaway: IGiveaway
	filter: GiveawaysFilters
}

const GiveawayCard = ({ filter, giveaway }: IGiveawyCardProps) => {
	const t = useTranslations()

	const Avatar = () => {
		return (
			<div className='relative'>
				<Image
					className='absolute left-1 top-1'
					style={{
						clipPath:
							"path('M11.5 2.02073C12.4282 1.48483 13.5718 1.48483 14.5 2.02073L23.4904 7.21133C24.4186 7.74722 24.9904 8.7376 24.9904 9.8094V20.1906C24.9904 21.2624 24.4186 22.2528 23.4904 22.7887L14.5 27.9793C13.5718 28.5152 12.4282 28.5152 11.5 27.9793L2.50962 22.7887C1.58141 22.2528 1.00962 21.2624 1.00962 20.1906V9.8094C1.00962 8.7376 1.58142 7.74722 2.50962 7.21133L11.5 2.02073Z')"
					}}
					src={giveaway.creator.icon}
					width={30}
					height={30}
					alt='icon'
				/>
				<svg
					width='34'
					height='38'
					viewBox='0 0 34 38'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.5 2.02073C16.4282 1.48483 17.5718 1.48483 18.5 2.02073L30.9545 9.21132C31.8827 9.74722 32.4545 10.7376 32.4545 11.8094V26.1906C32.4545 27.2624 31.8827 28.2528 30.9545 28.7887L18.5 35.9793C17.5718 36.5152 16.4282 36.5152 15.5 35.9793L3.04552 28.7887C2.11731 28.2528 1.54552 27.2624 1.54552 26.1906V11.8094C1.54552 10.7376 2.11731 9.74722 3.04552 9.21132L15.5 2.02073Z'
						stroke='url(#paint0_linear_4189_4942)'
						stroke-width='2'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4189_4942'
							x1='17'
							y1='4.59677'
							x2='17'
							y2='38'
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
				width='29'
				height='27'
				viewBox='0 0 29 27'
				fill='#246764'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter='url(#filter0_b_4189_5052)'>
					<path
						d='M19.4394 0.942627C20.8684 0.942627 22.1889 1.70502 22.9035 2.94263L27.8441 11.5C28.5586 12.7376 28.5586 14.2624 27.8441 15.5L22.9035 24.0574C22.1889 25.295 20.8684 26.0574 19.4394 26.0574L9.55818 26.0574C8.12911 26.0574 6.80861 25.295 6.09407 24.0574L1.15348 15.5C0.438944 14.2624 0.438944 12.7376 1.15347 11.5L6.09407 2.94263C6.80861 1.70502 8.12911 0.942627 9.55818 0.942627L19.4394 0.942627Z'
						fill='#10AA7C'
						fill-opacity='0.15'
					/>
					<path
						d='M19.4394 0.942627C20.8684 0.942627 22.1889 1.70502 22.9035 2.94263L27.8441 11.5C28.5586 12.7376 28.5586 14.2624 27.8441 15.5L22.9035 24.0574C22.1889 25.295 20.8684 26.0574 19.4394 26.0574L9.55818 26.0574C8.12911 26.0574 6.80861 25.295 6.09407 24.0574L1.15348 15.5C0.438944 14.2624 0.438944 12.7376 1.15347 11.5L6.09407 2.94263C6.80861 1.70502 8.12911 0.942627 9.55818 0.942627L19.4394 0.942627Z'
						fill='url(#paint0_linear_4189_5052)'
						fill-opacity='0.15'
					/>
					<path
						d='M19.4394 1.44263C20.6898 1.44263 21.8452 2.10972 22.4705 3.19263L27.4111 11.75C28.0363 12.8329 28.0363 14.1671 27.4111 15.25L22.4705 23.8074C21.8452 24.8903 20.6898 25.5574 19.4394 25.5574L9.55818 25.5574C8.30775 25.5574 7.1523 24.8903 6.52709 23.8074L1.58649 15.25C0.961273 14.1671 0.961273 12.8329 1.58649 11.75L6.52709 3.19263C7.1523 2.10972 8.30775 1.44263 9.55818 1.44263L19.4394 1.44263Z'
						stroke='url(#paint1_linear_4189_5052)'
						stroke-opacity='0.15'
					/>
					<path
						d='M19.4394 1.44263C20.6898 1.44263 21.8452 2.10972 22.4705 3.19263L27.4111 11.75C28.0363 12.8329 28.0363 14.1671 27.4111 15.25L22.4705 23.8074C21.8452 24.8903 20.6898 25.5574 19.4394 25.5574L9.55818 25.5574C8.30775 25.5574 7.1523 24.8903 6.52709 23.8074L1.58649 15.25C0.961273 14.1671 0.961273 12.8329 1.58649 11.75L6.52709 3.19263C7.1523 2.10972 8.30775 1.44263 9.55818 1.44263L19.4394 1.44263Z'
						stroke='url(#paint2_linear_4189_5052)'
						stroke-opacity='0.15'
					/>
				</g>
				<defs>
					<filter
						id='filter0_b_4189_5052'
						x='-44.3828'
						y='-44.0574'
						width='117.764'
						height='115.115'
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
							result='effect1_backgroundBlur_4189_5052'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_backgroundBlur_4189_5052'
							result='shape'
						/>
					</filter>
					<linearGradient
						id='paint0_linear_4189_5052'
						x1='26.3673'
						y1='3.60914'
						x2='11.8673'
						y2='28.7239'
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
						id='paint1_linear_4189_5052'
						x1='19.7737'
						y1='16.5455'
						x2='24.4233'
						y2='19.2299'
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
						id='paint2_linear_4189_5052'
						x1='16.8199'
						y1='14.8401'
						x2='12.4986'
						y2='12.3452'
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
		<div className={clsx(cls.giveaway_card)}>
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(230.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			<div
				className='absolute left-0 top-0 h-full w-full scale-x-[-1] rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(230.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.1) 100%)'
				}}
			>
				<div
					className='h-full w-full rounded-[12px] bg-[#121722]'
					style={{
						background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.1) 100%)'
					}}
				></div>
			</div>
			<div
				className='relative z-10 mb-4 h-[120px] w-full rounded-[12px] p-[1px]'
				style={{
					background: 'linear-gradient(104.98deg, #24B7AC 0%, rgba(21, 103, 97, 0.13) 50%)'
				}}
			>
				<div
					className='absolute left-0 top-0 h-full w-full rounded-[12px]'
					style={{
						background:
							'radial-gradient(44.17% 61.22% at 0% 0%, rgba(16, 166, 154, 0.65) 0%, rgba(21, 194, 180, 0) 100%)'
					}}
				></div>
				<div
					className='absolute left-0 top-0 h-full w-full rotate-180 rounded-[12px]'
					style={{
						background:
							'radial-gradient(44.17% 61.22% at 0% 0%, rgba(16, 166, 154, 0.65) 0%, rgba(21, 194, 180, 0) 100%)'
					}}
				></div>
				<div className='absolute left-0 top-0'>
					<GiveawayCardBrand />
				</div>
				<div className='absolute bottom-[6px] left-[16px]'>
					<GiveawayCardEffect />
				</div>
				<div className='absolute right-[16px] top-[6px] rotate-180'>
					<GiveawayCardEffect />
				</div>
				<div
					className='absolute left-0 top-0 h-full w-full'
					style={{
						background: 'linear-gradient(180deg, rgba(45, 225, 214, 0.15) 0%, rgba(25, 123, 117, 0) 67.92%)',
						clipPath: 'polygon(56px 0px, calc(100% - 56px) 0px, 100% 100%, 0px 100%)'
					}}
				></div>
				<div className='absolute left-[56px] right-[56px] top-0 h-[2px] rounded-bl-[12px] rounded-br-[12px] bg-[#2DE1D6]'></div>
				<div
					className='h-full w-full rounded-[12px]'
					style={{
						background: 'linear-gradient(180deg, #151C27 0%, #0E121A 100%)'
					}}
				>
					<div className={cls.slider}>
						<Swiper
							id='swiper-icon'
							className={cls.icon_swiper}
							navigation
							modules={[Pagination, Navigation]}
							loop
							pagination={{
								clickable: true,
								dynamicBullets: true,
								dynamicMainBullets: 3
							}}
							spaceBetween={50}
							slidesPerView={1}
						>
							{giveaway.items.map((item, index) => (
								<SwiperSlide key={`${index}-${Date.now()}`}>
									<Image
										className='mx-auto'
										src={item.icon}
										width={142}
										height={104}
										alt='giveaway'
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
			<div className='relative z-10 mb-[7px] flex justify-between'>
				<div>
					<p className='text-[10px] font-medium leading-4 text-[#FFFFFF]'>{giveaway.items[0].name}</p>
					<p className='text-[12px] leading-4 text-[#18CC97]'>{giveaway.items[0].price}</p>
				</div>
				<p className='text-[10px] font-medium leading-4 text-[#4A6070]'>{giveaway.items[0].title}</p>
			</div>
			{filter === GiveawaysFilters.ACTIVE_GIVEAWAYS || filter === GiveawaysFilters.MY_PARTICIPATION ? (
				<>
					<div className='relative z-10 mb-[10px] rounded-[8px] border-1 border-[#202F38] p-[9px]'>
						{giveaway.status === GiveawayStatus.COMPLETED ? (
							<p className='absolute -top-[9px] left-1/2 -translate-x-1/2 bg-[#12262E] px-4 text-[10px] font-bold leading-4 text-[#4A6070]'>
								{t('giveaways.players').toUpperCase()}
							</p>
						) : (
							<p className='absolute -top-[9px] left-1/2 -translate-x-1/2 bg-[#12262E] px-4 text-[10px] font-bold leading-4 text-[#4A6070]'>
								{t('giveaways.end_by').toUpperCase()}
							</p>
						)}
						{giveaway.status === GiveawayStatus.COMPLETED ? (
							<div className='flex items-center justify-center gap-1 text-[#4A6070]'>
								{Array.from(new Array(giveaway.players.participants.toString().length)).map((_, index) => (
									<div
										key={index}
										className={cls.card_number}
									>
										{giveaway.players.participants.toString()[index]}
									</div>
								))}{' '}
								<p className='mx-[2px]'>/</p>
								{Array.from(new Array(giveaway.players.total.toString().length)).map((_, index) => (
									<div
										key={index}
										className={clsx(cls.card_number, cls.disabled)}
									>
										{giveaway.players.total.toString()[index]}
									</div>
								))}
							</div>
						) : (
							<div className='flex items-center gap-1 text-[#4A6070]'>
								{Array.from(new Array(giveaway.endBy?.length)).map((_, index) => (
									<>
										{index % 3 === 2 ? (
											<p className='mx-[2px]'>:</p>
										) : (
											<div
												key={index}
												className={clsx(cls.card_number, cls.disabled)}
											>
												{giveaway.endBy?.toString()[index]}
											</div>
										)}
									</>
								))}
							</div>
						)}
						{giveaway.status === GiveawayStatus.ON_PROGRESS && (
							<div className='flex justify-between'>
								<p className='leading-1 w-[46px] text-center text-[8px] font-medium text-[#4A6070]'>
									{t('giveaways.days').toUpperCase()}
								</p>
								<p className='leading-1 w-[46px] text-center text-[8px] font-medium text-[#4A6070]'>
									{t('giveaways.hours').toUpperCase()}
								</p>
								<p className='leading-1 w-[46px] text-center text-[8px] font-medium text-[#4A6070]'>
									{t('giveaways.minutes').toUpperCase()}
								</p>
								<p className='leading-1 w-[46px] text-center text-[8px] font-medium text-[#4A6070]'>
									{t('giveaways.seconds').toUpperCase()}
								</p>
							</div>
						)}
					</div>
					<div className='relative z-10 mb-4 flex items-center justify-between'>
						<div className='flex items-center gap-[12px]'>
							<Avatar />
							<p className='text-[12px] font-bold leading-4 text-white'>{giveaway.creator.name}</p>
						</div>
						<div
							className='h-7 w-16 p-[1px]'
							style={{
								background:
									'linear-gradient(270deg, rgba(27, 50, 61, 0.45) 0%, rgba(27, 50, 61, 0.25) 50%, rgba(60, 70, 27, 0.196078) 100%)',
								clipPath: 'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
							}}
						>
							<div
								className='flex h-full w-full items-center justify-center'
								style={{
									background: 'linear-gradient(270deg, #1B323D 0%, rgba(18, 36, 44, 0.45) 50%, #1B323D 100%)',
									clipPath:
										'polygon(8px 0px, calc(100% - 8px) 0px, calc(100% - 1px) 50%, calc(100% - 8px) 100%, 8px 100%, 1px 50%)'
								}}
							>
								<IconPeople />
								<p className='ml-1 text-[12px] font-bold leading-4'>{giveaway.participants}</p>
							</div>
						</div>
					</div>
					<div className='mb-[10px] flex items-center gap-[10px]'>
						<div
							className='relative z-10 h-[45px] w-full rounded-[8px] p-[1px]'
							style={{
								background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
							}}
						>
							<div className='absolute -top-[14px] left-1/2 -translate-x-1/2'>
								<HexagonBg />
								<IconGift className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<div
								className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
								style={{
									background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
								}}
							>
								<p className='mb-1 text-[12px] font-medium leading-[8px] text-[#1BD69E]'>{giveaway.prizes}</p>
								<p className='mb-[6px] text-[8px] font-medium leading-[8px] text-[#4A6070]'>
									{t('giveaways.prizes').toUpperCase()}
								</p>
							</div>
						</div>
						<div
							className='relative z-10 h-[45px] w-full rounded-[8px] p-[1px]'
							style={{
								background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
							}}
						>
							<div className='absolute -top-[14px] left-1/2 -translate-x-1/2'>
								<HexagonBg />
								<IconDollarCircle className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<div
								className='flex h-full w-full flex-col items-center justify-end rounded-[8px]'
								style={{
									background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
								}}
							>
								<p className='mb-1 text-[12px] font-medium leading-[8px] text-[#1BD69E]'>{giveaway.total}</p>
								<p className='mb-[6px] text-[8px] font-medium leading-[8px] text-[#4A6070]'>
									{t('giveaways.total').toUpperCase()}
								</p>
							</div>
						</div>
					</div>
					<div
						style={
							giveaway.status === GiveawayStatus.ON_PROGRESS ? { filter: 'drop-shadow(0px 0px 12px #10AA7C59)' } : {}
						}
					>
						{giveaway.status === GiveawayStatus.COMPLETED ? (
							<div
								className='h-[42px] w-[232px] bg-[#15BE8B] p-[1px]'
								style={{
									clipPath:
										'polygon(10px 0px, calc(100% - 10px) 0px, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0px 50%)'
								}}
							>
								<div
									className='flex h-full w-full items-center justify-center bg-[#112B31] text-[12px] font-bold text-[#15BE8B]'
									style={{
										clipPath:
											'polygon(10px 0px, calc(100% - 10px) 0px, calc(100% - 1px) 50%, calc(100% - 10px) 100%, 10px 100%, 1px 50%)'
									}}
								>
									{t('giveaways.completed').toUpperCase()}
								</div>
							</div>
						) : (
							<Button
								classNames={{
									base: clsx(cls.hexagon_btn, 'h-[42px] w-[232px]'),
									content: clsx(cls.hexagon_btn_inner, '!gap-0')
								}}
							>
								{t('giveaways.view_requirements').toUpperCase()}
							</Button>
						)}
					</div>
				</>
			) : (
				<>
					<div className='relative z-10 mb-2 flex items-center gap-3 rounded-[8px] border-1 border-[#202F38] p-[9px]'>
						<p className='absolute -top-[9px] left-1/2 -translate-x-1/2 bg-[#12262E] px-4 text-[10px] font-bold leading-4 text-[#4A6070]'>
							{t('giveaways.winner').toUpperCase()}
						</p>
						<Avatar />
						<p className='text-[12px] font-bold leading-4 text-white'>{giveaway.creator.name}</p>
					</div>
					<div
						className='relative z-10 mb-[8px] h-[45px] w-full rounded-[8px] p-[1px]'
						style={{
							background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
						}}
					>
						<div
							className='flex h-full w-full items-center gap-2 rounded-[8px] p-[7px]'
							style={{
								background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
							}}
						>
							<div className='relative'>
								<HexagonBg />
								<IconDollarCircle className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<div>
								<p className='text-[12px] font-medium leading-4 text-[#1BD69E]'>{giveaway.total}</p>
								<p className='text-[8px] font-medium leading-4 text-[#4A6070]'>{t('giveaways.winning_amount')}</p>
							</div>
						</div>
					</div>
					<div
						className='relative z-10 mb-[8px] h-[45px] w-full rounded-[8px] p-[1px]'
						style={{
							background: 'linear-gradient(180deg, #233E4B 0%, #14262F 100%)'
						}}
					>
						<div
							className='flex h-full w-full items-center gap-2 rounded-[8px] p-[7px]'
							style={{
								background: 'linear-gradient(180deg, #1A313C 0%, #13252E 100%)'
							}}
						>
							<div className='relative'>
								<HexagonBg />
								<IconPeople className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
							</div>
							<div>
								<p className='text-[12px] font-medium leading-4 text-[#1BD69E]'>{giveaway.participants}</p>
								<p className='text-[8px] font-medium leading-4 text-[#4A6070]'>{t('giveaways.participants')}</p>
							</div>
						</div>
					</div>
					<Button
						classNames={{
							base: 'w-full h-[42px] p-[1px] bg-[#213D48] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]',
							content:
								'w-full h-full bg-[#152B34] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_10px)_100%,_10px_100%,_1px_50%)]'
						}}
					>
						<p className='text-[10px] font-bold text-[#5B92AA]'>{t('giveaways.go_to').toUpperCase()}</p>
					</Button>
				</>
			)}
		</div>
	)
}

const GiveawaysList = ({ filter }: IGiveawaysListProps) => {
	return (
		<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,272px)] justify-between gap-5'>
			{giveaways.map((giveaway, index) => (
				<GiveawayCard
					key={index}
					filter={filter}
					giveaway={giveaway}
				/>
			))}
		</div>
	)
}

export default GiveawaysList
