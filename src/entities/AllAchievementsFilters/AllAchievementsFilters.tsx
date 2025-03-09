'use client'

import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import Button from '@/shared/ui/Button/Button'

import cls from './AllAchievementsFilters.module.sass'

export const AllAchievementsFilters = ({ onSelect }: { onSelect: (_: string) => void }) => {
	const [activeTab, setActiveTab] = useState<string>('all')

	const tabs = [
		{ label: 'All', id: 'all' },
		{ label: 'Balance', id: 'balance' },
		{ label: 'Cases', id: 'cases' },
		{ label: 'Case Battles', id: 'case_battles' },
		{ label: 'Contracts', id: 'contracts' },
		{ label: 'Daily free', id: 'daily_free' },
		{ label: 'Event', id: 'event' },
		{ label: 'General', id: 'general' },
		{ label: 'Inventory', id: 'inventory' },
		{ label: 'Mixxes', id: 'mixxes' },
		{ label: 'Partner', id: 'partner' },
		{ label: 'Premium', id: 'premium' },
		{ label: 'Shards', id: 'shards' },
		{ label: 'Upgrade', id: 'upgrade' },
		{ label: 'User Giveaways', id: 'user_giveaways' }
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
						<div
							style={{
								filter:
									activeTab === tab.id
										? 'drop-shadow(0px 0px 24px rgba(253, 62, 36, 0.35)) drop-shadow(0px 0px 12px rgba(253, 62, 36, 0.25))'
										: 'none'
							}}
						>
							<Button
								onPress={() => {
									setActiveTab(tab.id)
									onSelect(tab.label)
								}}
								classNames={{
									base: `${cls.btn} ${activeTab === tab.id ? cls.active : ''}`,
									content: `!w-full !h-full ${activeTab === tab.id ? '!text-[#121722] !bg-[#FDCD24] px-5' : 'px-3 bg-transparent'}`
								}}
							>
								{tab.label}
							</Button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Button>
	)
}
