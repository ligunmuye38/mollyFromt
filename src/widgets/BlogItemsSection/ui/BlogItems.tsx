'use client'

import { blogItems } from '../model/items'

import { BlogCard } from '@/entities/blogCard/ui/BlogCard'

import Icon from '@/shared/assets/blog/blog-tabs.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './BlogItems.module.sass'

export const BlogItems = () => {
	const activeTab = 'all'

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
						<Button
							key={tab.id}
							hexagonAngleOffset={12}
							classNames={{
								base: `${cls.btn} ${activeTab === tab.id ? cls.active : ''}`
							}}
						>
							<div className={cls.btn_inner}>{tab.label}</div>
						</Button>
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
