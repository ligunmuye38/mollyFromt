'use client'

import Image from 'next/image'
import 'swiper/css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { AllAchievementsItem } from '@/entities/AllAchievementsItem/ui/AllAchievementsItem'

export const AllAchievementsItems = () => {
	return (
		<>
			<div className='mb-5'>
				<div className='mb-[15px] flex items-center justify-center'>
					<Image
						src='/images/achievement/achievement.png'
						alt=''
						className='max-w-[40px]'
					/>
					<h2 className='pl-2 text-lg font-black uppercase leading-5 tracking-[0.36px] text-white'>balance</h2>
				</div>
				{/* <div className='grid grid-cols-[repeat(8,2fr)] gap-3'> */}
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
					{[0, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
						<SwiperSlide key={idx}>
							<AllAchievementsItem />
						</SwiperSlide>
					))}
				</Swiper>
				{/* </div> */}
			</div>
		</>
	)
}
