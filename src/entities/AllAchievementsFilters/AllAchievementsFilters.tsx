'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@/shared/ui/Button/Button'

import cls from './AllAchievementsFilters.module.sass'

export const AllAchievementsFilters = () => {
	const activeTab = 'Balance'

	const tabs = [
		{ id: 'Balance', label: 'all' },
		{ id: 'Cases', label: 'News' },
		{ id: 'Case Battles', label: 'Guides' },
		{ id: 'Contracts', label: 'Skin kits' },
		{ id: 'Daily free', label: 'Skin kits' },
		{ id: 'Event', label: 'Skin kits' },
		{ id: 'General', label: 'Skin kits' },
		{ id: 'Inventory', label: 'Skin kits' },
		{ id: 'Mixxes', label: 'Skin kits' },
		{ id: 'Partner', label: 'Skin kits' },
		{ id: 'Premium', label: 'Skin kits' },
		{ id: 'Shards', label: 'Skin kits' },
		{ id: 'Upgrade', label: 'Skin kits' },
		{ id: 'User Giveaways', label: 'Skin kits' }
	]

	return (
		<Button
			theme='grey-4'
			strokeSize='reg'
			backdrop
			hexagon
			hexagonAxis='x'
			classNames={{
				base: cls.filters
			}}
		>
			<Swiper slidesPerView={'auto'}>
				{tabs.map(tab => (
					<SwiperSlide
						style={{ width: 'auto' }}
						key={tab.id}
					>
						<div className={`${cls.btn} ${activeTab === tab.id ? cls.active : ''}`}>{tab.id}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Button>
	)
}
