import { BlogItemContent } from '@/widgets/BlogItem/BlogItemContent/BlogItemContent'
import { BlogItemInfo } from '@/widgets/BlogItem/BlogItemInfo/BlogItemInfo'
import { PageName } from '@/widgets/PageName/ui/PageName'

import { BlogCard } from '@/entities/blogCard/ui/BlogCard'

const blogItems = {
	items: [
		{
			id: 1,
			image: '/images/blog/blogItem.png',
			title: 'How to win solo? ips for solo in MM CS2',
			datePublic: '6 Jun. 2024'
		},
		{
			id: 2,
			image: '/images/blog/blogItem.png',
			title: 'How to win solo? ips for solo in MM CS2',
			datePublic: '6 Jun. 2024'
		},
		{
			id: 3,
			image: '/images/blog/blogItem.png',
			title: 'How to win solo? ips for solo in MM CS2',
			datePublic: '6 Jun. 2024'
		},
		{
			id: 4,
			image: '/images/blog/blogItem.png',
			title: 'How to win solo? ips for solo in MM CS2',
			datePublic: '6 Jun. 2024'
		}
	]
}

export default function Page({ params: { id } }: { params: { id: string } }) {
	return (
		<>
			<PageName title='blog' />
			<main className='rounded-[14px] border-3 border-[#1F2534] bg-gradient-to-b from-[#191F2D] to-[rgba(25,31,45,0.25)] py-[30px] px-[30px] pb-[24px] mx-auto max-w-[827px] mt-[28px] md:mx-4 md:px-4 sm:py-5'>
				<BlogItemInfo />
				<BlogItemContent />
			</main>
			<div className='lg:hidden mx-auto max-w-[827px] grid grid-cols-[2fr_2fr_2fr] gap-4 pt-5'>
				{[0, 1, 2].map(i => (
					<BlogCard
						key={blogItems.items[i].id}
						title={blogItems.items[i].title}
						picUrl={blogItems.items[i].image}
						date={blogItems.items[i].datePublic}
						id={blogItems.items[i].id}
					/>
				))}
			</div>
		</>
	)
}
