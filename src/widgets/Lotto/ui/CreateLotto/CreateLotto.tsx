'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { FC, useState } from 'react'

import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCheck from '@/shared/assets/icons/icon-check-box.svg'
import IconCopySuccess from '@/shared/assets/icons/icon-copy-success.svg'
import IconGift from '@/shared/assets/icons/icon-gift.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import IconLink from '@/shared/assets/icons/icon-link-2.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import IconUnprotected from '@/shared/assets/icons/icon-unprotected.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './CreateLotto.module.sass'

interface MainProps {
	className?: string
}

const TicketAvatar = ({ type }: { type?: boolean }) => {
	return (
		<div className='relative'>
			<Image
				className={clsx('absolute', type ? 'left-[6px] top-[6px]' : 'left-[4px] top-[4px]')}
				style={{
					clipPath: type
						? "path('M26.3113 1.52846L42.0445 10.612C43.9396 11.7061 45.107 13.7282 45.107 15.9164V34.0835C45.107 36.2717 43.9396 38.2939 42.0445 39.388L26.3113 48.4715C24.4163 49.5656 22.0814 49.5656 20.1863 48.4715L4.45312 39.388C2.55805 38.2939 1.39062 36.2717 1.39062 34.0835V15.9164C1.39062 13.7282 2.55805 11.7061 4.45312 10.612L20.1863 1.52846C22.0814 0.434361 24.4163 0.434361 26.3113 1.52846Z')"
						: "path('M11.25 1.58771C12.3329 0.962498 13.6671 0.962498 14.75 1.58771L23.7404 6.77831C24.8233 7.40353 25.4904 8.55897 25.4904 9.8094V20.1906C25.4904 21.441 24.8233 22.5965 23.7404 23.2217L14.75 28.4123C13.6671 29.0375 12.3329 29.0375 11.25 28.4123L2.25962 23.2217C1.17671 22.5965 0.509619 21.441 0.509619 20.1906V9.8094C0.509619 8.55897 1.17671 7.40353 2.25962 6.77831L11.25 1.58771Z')"
				}}
				src='/images/avatars/5.jpg'
				width={type ? 50 : 26}
				height={type ? 50 : 26}
				alt='ticket avatar'
			/>
			{type ? (
				<svg
					width='56'
					height='62'
					viewBox='0 0 56 62'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M30.8735 1.28625L52.6689 13.8698C54.2932 14.8076 55.2939 16.5408 55.2939 18.4164V43.5835C55.2939 45.4592 54.2932 47.1924 52.6689 48.1302L30.8735 60.7138C29.2492 61.6516 27.2479 61.6516 25.6235 60.7138L3.82812 48.1302C2.20377 47.1924 1.20312 45.4592 1.20312 43.5835V18.4164C1.20312 16.5408 2.20377 14.8076 3.82812 13.8698L25.6235 1.28625C27.2479 0.348429 29.2492 0.348429 30.8735 1.28625Z'
						stroke='white'
						stroke-opacity='0.15'
					/>
				</svg>
			) : (
				<svg
					width='34'
					height='38'
					viewBox='0 0 34 38'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.5 2.02073C16.4282 1.48483 17.5718 1.48483 18.5 2.02073L30.9545 9.21132C31.8827 9.74722 32.4545 10.7376 32.4545 11.8094V26.1906C32.4545 27.2624 31.8827 28.2528 30.9545 28.7887L18.5 35.9793C17.5718 36.5152 16.4282 36.5152 15.5 35.9793L3.04552 28.7887C2.11731 28.2528 1.54552 27.2624 1.54552 26.1906V11.8094C1.54552 10.7376 2.11731 9.74722 3.04552 9.21132L15.5 2.02073Z'
						stroke='#191A2B'
						stroke-width='2'
					/>
					<path
						d='M15.5 2.02073C16.4282 1.48483 17.5718 1.48483 18.5 2.02073L30.9545 9.21132C31.8827 9.74722 32.4545 10.7376 32.4545 11.8094V26.1906C32.4545 27.2624 31.8827 28.2528 30.9545 28.7887L18.5 35.9793C17.5718 36.5152 16.4282 36.5152 15.5 35.9793L3.04552 28.7887C2.11731 28.2528 1.54552 27.2624 1.54552 26.1906V11.8094C1.54552 10.7376 2.11731 9.74722 3.04552 9.21132L15.5 2.02073Z'
						stroke='url(#paint0_linear_4358_9865)'
						stroke-width='2'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4358_9865'
							x1='17'
							y1='0'
							x2='17'
							y2='38'
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
			)}
		</div>
	)
}

const HexagonWrapper = () => {
	return (
		<svg
			width='42'
			height='48'
			viewBox='0 0 42 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M0.715391 12.2887L21 0.57735L41.2846 12.2887V35.7113L21 47.4226L0.715391 35.7113V12.2887Z'
				fill='url(#paint0_linear_4358_9665)'
				stroke='url(#paint1_linear_4358_9665)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4358_9665'
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
					id='paint1_linear_4358_9665'
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

const HexagonRedWrapper = () => {
	return (
		<svg
			width='34'
			height='38'
			viewBox='0 0 34 38'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M20.0148 1.49847L30.563 7.73776C32.3561 8.79835 33.4608 10.7585 33.4608 12.8798V25.3584C33.4608 27.4796 32.3561 29.4397 30.563 30.5004L20.0148 36.7397C18.2217 37.8003 16.0125 37.8003 14.2194 36.7397L3.67116 30.5004C1.87805 29.4397 0.773438 27.4796 0.773438 25.3584V12.8798C0.773438 10.7585 1.87805 8.79835 3.67117 7.73776L14.2194 1.49847C16.0125 0.437846 18.2217 0.437846 20.0148 1.49847Z'
				fill='url(#paint0_linear_4540_15668)'
				stroke='url(#paint1_linear_4540_15668)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_4540_15668'
					x1='17.1171'
					y1='0.703003'
					x2='17.1171'
					y2='37.5351'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#F26040' />
					<stop
						offset='1'
						stop-color='#BA2727'
					/>
				</linearGradient>
				<linearGradient
					id='paint1_linear_4540_15668'
					x1='17.1171'
					y1='0.703003'
					x2='17.1171'
					y2='37.5351'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#FA8068' />
					<stop
						offset='1'
						stop-color='#D44133'
					/>
				</linearGradient>
			</defs>
		</svg>
	)
}

const CaseItem = () => {
	return (
		<div className='h-[154px] w-[133px] rounded-[12px] bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] p-[1px] shadow-[0px_25px_80px_0px_#15BD8B40]'>
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

const Ticket = ({
	index,
	selectable,
	selected,
	onSelect,
	opened
}: {
	index: number
	selectable: boolean
	selected: boolean
	onSelect: () => void
	opened?: boolean
}) => {
	if (opened) {
		return (
			<div className='flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1D2433] text-[14px] text-[#FFFFFF]'>
				<TicketAvatar />
				Mr.Horse
			</div>
		)
	}
	return (
		<>
			{selectable ? (
				<Button onPress={onSelect}>
					{selected ? (
						<div className='h-12 w-full rounded-xl bg-[linear-gradient(90deg,_rgba(36,_253,_188,_0)_77.44%,_#24FDBC_89.52%),_linear-gradient(270deg,_rgba(36,_253,_188,_0.65)_40.76%,_#24FDBC_57.96%)] p-[1px]'>
							<div className='flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(0deg,_#24FDBC,_#10AA7C),linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)] text-[#121722]'>
								{index}
							</div>
						</div>
					) : (
						<div className='flex h-12 w-full items-center justify-center rounded-xl border-1 border-[#1E2635] bg-[#121722] text-[14px] text-[#6C7998]'>
							{index}
						</div>
					)}
				</Button>
			) : (
				<div className='flex h-12 w-full items-center justify-center rounded-xl border-1 border-[#1E2635] bg-[#121722] text-[14px] text-[#6C7998]'>
					{index}
				</div>
			)}
		</>
	)
}

export const CreateLotto: FC<MainProps> = ({ className }) => {
	const t = useTranslations()
	const [joined, setJoined] = useState<boolean>(false)
	const [selectedRooms, setSelectedRooms] = useState<number[]>([])

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative', joined ? 'mb-6' : 'mb-0')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'mb-[20px] mt-[20px]')}>
					<div className={cls.title}>{t('lotto.lotto').toUpperCase()}</div>
				</div>
			</div>
			<div className={clsx('mx-auto max-w-[824px]', { '-translate-y-6': !joined })}>
				{!joined && (
					<div className='mb-4 flex justify-between'>
						<div className='w-max rounded-lg bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
							<div className='flex h-full w-max items-center bg-[linear-gradient(180deg,_#191F2D_0%,_rgba(25,_31,_45,_0.25)_100%)] p-2'>
								<IconCopySuccess className='h-[18px] w-[18px] fill-[#3B455C]' />
								<p className='ml-1 text-[12px] font-bold text-[#3B455C]'>{t('lotto.select_10_cells').toUpperCase()}</p>
							</div>
						</div>
						<div className='w-max rounded-lg bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
							<div className='flex h-full w-max items-center bg-[linear-gradient(180deg,_#191F2D_0%,_rgba(25,_31,_45,_0.25)_100%)] p-2'>
								<IconHint className='h-[18px] w-[18px] fill-[#3B455C]' />
								<p className='ml-1 text-[12px] font-bold text-[#3B455C]'>FAQ</p>
							</div>
						</div>
					</div>
				)}
				<div className='z-10 mb-12 rounded-[14px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[2px]'>
					<div className='rounded-[14px] bg-[linear-gradient(270deg,_rgba(25,_31,_45,_0.65)_0%,_rgba(25,_31,_45,_0.15)_50%,_rgba(25,_31,_45,_0.65)_100%)] p-[26px]'>
						<div className='relative flex justify-between'>
							<div className='flex items-center gap-3'>
								<div className='relative h-max'>
									<HexagonRedWrapper />
									<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
										<IconUnprotected className='h-[18px] w-[18px] fill-white' />
									</div>
								</div>
								<div className='relative'>
									<HexagonWrapper />
									<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
										<IconPeople className='h-[18px] w-[18px] fill-[#60719A]' />
									</div>
								</div>
								<div>
									<p className='text-[12px] font-medium text-[#3B455C]'>{t('lotto.players').toUpperCase()}</p>
									<p className='text-[14px] font-medium text-white'>14/50</p>
								</div>
							</div>
							<div className='flex items-center gap-3'>
								<div>
									<p className='text-[12px] font-bold text-[#3B455C]'>{t('lotto.grand_prize').toUpperCase()}</p>
									<p className='text-right text-[14px] font-bold text-white'>
										<span className='text-[#17E2A5]'>$</span> 500.34
									</p>
								</div>
								<div className='relative'>
									<HexagonWrapper />
									<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
										<IconGift className='scale-150' />
									</div>
								</div>
								<Button>
									<IconLink />
								</Button>
							</div>
							<div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
								<CaseItem />
							</div>
						</div>
					</div>
				</div>
				<div className='relative rounded-[14px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
					<div className='absolute left-1/2 top-0 flex h-[50px] w-[192px] -translate-x-1/2 flex-col items-center justify-center bg-[#121722] [clip-path:_polygon(0px_0px,_100%_0px,_calc(100%_-_20px)_100%,_20px_100%)]'>
						{joined ? (
							<p className='max-w-[114px] text-center text-[16px] font-[900] leading-4 text-[#D1D9EB]'>
								{t('lotto.choose_10_rooms').toUpperCase()}
							</p>
						) : (
							<>
								<p className='text-[16px] leading-3 text-[#D1D9EB]'>{t('lotto.start_in').toUpperCase()}</p>
								<p className='text-[16px] text-[#D1D9EB]'>00:34</p>
							</>
						)}
					</div>
					<div className='h-full w-full rounded-[14px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] px-[30px] pb-[30px] pt-[70px]'>
						{selectedRooms.length < 10 ? (
							<div className='mb-[30px] grid grid-cols-5 gap-4'>
								{Array.from(new Array(20)).map((_, index) => (
									<Ticket
										key={index}
										selected={selectedRooms.includes(index)}
										onSelect={() => {
											if (selectedRooms.includes(index)) setSelectedRooms(selectedRooms.filter(v => v !== index))
											else setSelectedRooms(v => [...v, index])
										}}
										selectable={joined}
										index={index}
										opened={joined && index === 12}
									/>
								))}
							</div>
						) : (
							<div className='flex min-h-[300px] flex-col items-center justify-center'>
								<div
									className='flex w-max flex-col items-center'
									style={{ filter: 'drop-shadow(0 0 75px #10AA7C73)' }}
								>
									<div className='flex h-[38px] w-[135px] items-center justify-center rounded-t-[12px] bg-[linear-gradient(180deg,_#11AC7E_0%,_#1DDEA4_100%)] text-[14px] font-bold text-[#121722]'>
										{t('lotto.winner').toUpperCase()} !
									</div>
									<div className='flex h-[84px] w-[285px] items-center gap-[18px] rounded-3xl border-1 border-[#24FDBC] bg-[linear-gradient(180deg,_#163336_0%,_#174441_100%)] px-5'>
										<TicketAvatar type />
										Mr.Horse
									</div>
								</div>
							</div>
						)}
						<div
							className={clsx(
								'flex items-center gap-4 rounded-xl border-1 border-[#1A202E] py-[18px] pl-5 pr-[14px]',
								selectedRooms.length < 10 ? 'justify-between' : 'justify-center'
							)}
						>
							{selectedRooms.length < 10 ? (
								<>
									<div className='flex items-center gap-4'>
										<div className='flex w-max items-center rounded-[8px] border-1 border-[#15C18F] bg-[#1A202E] px-3 py-[9px]'>
											<IconBagTick className='mr-2 w-6 fill-[#15C18D]' />
											<span className='text-[12px] font-medium leading-4 text-[#60719A]'>
												{t('lotto.total_cost')}:{' '}
												<span className='font-medium text-white'>
													<span className='text-[#17E2A5]'>$</span>15.50
												</span>
											</span>
										</div>
										<div className='flex w-max items-center gap-2 rounded-lg border-1 border-[#1E2536] bg-[#1A202E] px-[13px] py-[11px]'>
											<IconCheck className='h-[18px] w-[18px] fill-[#60719A]' />
											<p className='text-[12px] text-[#60719A]'>
												{t('lotto.selected')}: <span>{selectedRooms.length}</span>
											</p>
										</div>
									</div>
									<div style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C40)' }}>
										<Button
											onPress={() => setJoined(true)}
											classNames={{
												base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
												content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
											}}
										>
											<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
											<span className='text-[12px] font-[900] leading-4 text-[#121722]'>
												{t('lotto.join').toUpperCase()}
											</span>
										</Button>
									</div>
								</>
							) : (
								<Button
									onPress={() => {
										setJoined(false)
										setSelectedRooms([])
									}}
									classNames={{
										base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
										content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
									}}
								>
									<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
									<span className='text-[12px] font-[900] leading-4 text-[#121722]'>
										{t('lotto.repeat').toUpperCase()}
									</span>
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
