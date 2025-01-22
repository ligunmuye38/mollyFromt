'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { WikiMiniCard } from '@/entities/WikiMiniCard/WikiMiniCard'

import Arrow from '@/shared/assets/icons/icon-arrow-down.svg'
import Knife from '@/shared/assets/icons/knife-icon.svg'

export const WikiMiniItems = () => {
	return (
		<div className=''>
			<div className='flex justify-between'>
				<div className='flex items-center pb-5'>
					<Knife />
					<h3 className='pl-4 text-2xl font-black uppercase tracking-[0.48px] text-white'>Knives</h3>
				</div>
				<div className='flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-[#252C3D]'>
					<Arrow className='w-[18px] fill-[#7785B3]' />
				</div>
			</div>
			<Swiper
				spaceBetween={12}
				slidesPerView={8}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 8
					},
					480: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 4,
						spaceBetween: 12
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 12
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 12
					},
					1280: {
						slidesPerView: 8,
						spaceBetween: 12
					}
				}}
			>
				{[0, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
					<SwiperSlide key={idx}>
						<WikiMiniCard />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
