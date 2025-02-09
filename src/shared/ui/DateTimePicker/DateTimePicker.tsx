'use client'

import Button from '../Button/Button'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

const DateTimePicker = () => {
	const t = useTranslations()
	const hoursSwiperRef = useRef<SwiperRef>(null)
	const minutessSwiperRef = useRef<SwiperRef>(null)
	const [isSelected, toggleIsSelected] = useState<boolean>(false)
	const [hour, setHour] = useState<number>(new Date().getHours())
	const [minute, setMinute] = useState<number>(new Date().getMinutes())
	const [_year, setYear] = useState<number>(new Date().getFullYear())
	const [_month, setMonth] = useState<number>(new Date().getMonth())
	const [_date, setDate] = useState<number>(new Date().getDate())

	return (
		<div className='flex h-[395px] w-[314px] flex-col bg-[#1B2130]'>
			<div className='grid w-full flex-[0_0_35px] grid-cols-2 text-[14px]'>
				<Button
					onPress={() => toggleIsSelected(false)}
					classNames={{
						base: clsx('w-full h-full', isSelected ? 'bg-[#339A7B] text-[#195341]' : 'bg-[#1AD19A] text-[#1B2130]')
					}}
				>
					{t('date').toUpperCase()}
				</Button>
				<Button
					onPress={() => toggleIsSelected(true)}
					className={clsx('h-full w-full', !isSelected ? 'bg-[#339A7B] text-[#195341]' : 'bg-[#1AD19A] text-[#1B2130]')}
				>
					{t('time').toUpperCase()}
				</Button>
			</div>
			<Button
				onPress={() => {
					hoursSwiperRef.current?.swiper.slideToLoop(new Date().getHours())
					minutessSwiperRef.current?.swiper.slideToLoop(new Date().getMinutes())
					setYear(new Date().getFullYear())
					setMonth(new Date().getMonth())
					setDate(new Date().getDate())
				}}
				classNames={{
					base: 'bg-[#1AD19A] w-full flex-[0_0_44px] h-[44px]',
					content: clsx('mx-4', isSelected ? '!justify-center' : '!justify-start')
				}}
			>
				{isSelected ? (
					<p className='text-[24px] font-medium leading-6 text-[#1B213080]'>
						<span className='text-[#1B2130]'>{new Date().getHours().toString().padStart(2, '0')}</span>:
						{new Date().getMinutes().toString().padStart(2, '0')}
					</p>
				) : (
					<div>
						<p className='text-left text-[12px] font-bold leading-3 text-[#0C4E3A]'>
							{new Date().getFullYear().toString()}
						</p>
						<p className='text-left text-[14px] font-bold leading-[14px] text-[#1B2130]'>
							{t(`week_days.${new Date().getDay()}`)}, {t(`months.${new Date().getMonth()}`)} {new Date().getDate()}
						</p>
					</div>
				)}
			</Button>
			{isSelected ? (
				<div className='relative mx-[22px] my-4 grid grid-cols-2 gap-4'>
					<div>
						<Swiper
							direction='vertical'
							centeredSlides={true}
							loop={true}
							slidesPerView={5}
							className='h-[280px]'
							onSlideChange={swiper => setHour(swiper.realIndex)}
							tabIndex={hour}
							ref={hoursSwiperRef}
						>
							{Array.from(new Array(24)).map((_, index) => (
								<SwiperSlide
									key={index}
									className={clsx(
										'!flex !h-[56px] items-center justify-end gap-[2px] font-medium',
										hour === index ? 'pr-3 text-[28px] text-white' : 'pr-0 text-[22px] text-[#556388]'
									)}
								>
									<p className={hour === index ? 'w-5 text-right' : 'w-4 text-right'}>
										{index.toString().padStart(2, '0')[0]}
									</p>
									<p className={hour === index ? 'w-5 text-center' : 'w-4 text-center'}>
										{index.toString().padStart(2, '0')[1]}
									</p>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<p className='absolute left-1/2 top-1/2 flex h-[54px] w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] bg-[#283044] text-[24px] font-bold text-white'>
						:
					</p>
					<div>
						<Swiper
							direction='vertical'
							centeredSlides={true}
							loop={true}
							slidesPerView={5}
							className='h-[280px]'
							onSlideChange={swiper => setMinute(swiper.realIndex)}
							tabIndex={minute}
							ref={minutessSwiperRef}
						>
							{Array.from(new Array(60)).map((_, index) => (
								<SwiperSlide
									key={index}
									className={clsx(
										'!flex !h-[56px] items-center justify-start gap-[2px] font-medium',
										minute === index ? 'pl-3 text-[28px] text-white' : 'pl-0 text-[22px] text-[#556388]'
									)}
								>
									<p className={minute === index ? 'w-5 text-center' : 'w-4 text-center'}>
										{index.toString().padStart(2, '0')[0]}
									</p>
									<p className={minute === index ? 'w-5 text-left' : 'w-4 text-left'}>
										{index.toString().padStart(2, '0')[1]}
									</p>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	)
}

export default DateTimePicker
