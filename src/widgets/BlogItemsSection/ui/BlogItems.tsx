'use client'

import { blogItems } from '../model/items'
import { useState } from 'react'

import { BlogCard } from '@/entities/blogCard/ui/BlogCard'

import Icon from '@/shared/assets/blog/blog-tabs.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './BlogItems.module.sass'

export const BlogItems = () => {
	const [activeTab, setActiveTab] = useState<string>('all')

	const tabs = [
		{ id: 'all', label: 'All' },
		{ id: 'news', label: 'News' },
		{ id: 'guides', label: 'Guides' },
		{ id: 'skinkits', label: 'Skin kits' }
	]

	return (
		<>
			<div className='px-5'>
				<div className={cls.filters}>
					<Icon />
					{tabs.map(tab => (
						<div
							key={tab.id}
							style={{ filter: 'drop-shadow(0px 0px 18px rgba(253, 62, 36, 0.3))' }}
						>
							<Button
								onPress={() => setActiveTab(tab.id)}
								hexagonAngleOffset={12}
								classNames={{
									base: `${cls.btn} overflow-hidden ${activeTab === tab.id ? cls.active : ''} [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]`,
									content: 'overflow-hidden'
								}}
							>
								<div className={cls.btn_inner}>{tab.label}</div>
							</Button>
						</div>
					))}
				</div>

				<div className={cls.container}>
					{blogItems.items.map(item => (
						<BlogCard
							key={item.id}
							id={item.id}
							title={item.title}
							picUrl={item.image}
							date={item.datePublic}
						/>
					))}
				</div>
			</div>
		</>
	)
}
