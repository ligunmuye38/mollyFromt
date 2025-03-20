'use client'

import { chances } from '../../model/items'
import { IChance } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import DropChance from './DropChance'

import cls from '../Cases.module.sass'

const SetDropChances = () => {
	// For translation
	const t = useTranslations()

	// The values are to reference swiper and swiper index.
	const [swiperIndex, setSwiperIndex] = useState<number>(0)
	const swiperRef = useRef<SwiperRef>(null)
	const [dropChances, setDropChances] = useState<number[]>(Array.from(new Array(chances.length)).map(() => 1))
	const [adjustedChances, setAdjustedChances] = useState<IChance[]>(chances)

	// For slider(Select Images)
	const slides = adjustedChances.map((item, index) => (
		<SwiperSlide key={item.id}>
			<DropChance
				onRemove={() => {
					setDropChances(prev => {
						return [...prev.filter((_, i) => i !== index)]
					})
					setAdjustedChances(prev => {
						return [...prev.filter((_, i) => i !== index)]
					})
				}}
				chance={dropChances[index]}
				setChance={value =>
					setDropChances(prev => {
						prev[index] = value
						return [...prev]
					})
				}
			/>
		</SwiperSlide>
	))

	useEffect(() => {
		console.log(swiperIndex)
	}, [swiperIndex])

	return (
		<div className={clsx('relative flex flex-col')}>
			<div className='flex justify-between'>
				<span className='text-[14px] font-[500] text-white'>{t('create_case.set_drop_chances')}</span>
				<span className='text-[14px] font-[500] text-[#17E2A5]'>
					{dropChances.length > 0 ? dropChances.reduce((prev, current) => prev + current) : 0}%
				</span>
			</div>
			<div className={clsx('h-[406px] overflow-hidden pt-2 md:h-[370px]')}>
				<Swiper
					direction='vertical'
					slidesPerView={3}
					spaceBetween={8}
					loop={false}
					onSlideChange={swiper => setSwiperIndex(swiper.activeIndex)}
					tabIndex={swiperIndex}
					ref={swiperRef}
					wrapperClass='flex flex-col h-full'
					className='relative h-full'
					mousewheel={true}
					modules={[Mousewheel]}
				>
					{slides}
				</Swiper>
			</div>
			{swiperIndex < chances.length - 3 && (
				<div className={clsx(cls.chance_body, 'absolute bottom-0 left-0 z-[35] h-[98px] w-full')}></div>
			)}
		</div>
	)
}

export default SetDropChances
