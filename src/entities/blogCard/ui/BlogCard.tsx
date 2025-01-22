import Link from 'next/link'

import { BlogCardView } from '@/shared/ui/blogCard/BlogCardView'

interface BlogCardProps {
	title: string
	picUrl: string
	date: string
	id: number
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, picUrl, date, id }) => {
	return (
		<Link href={`/blog/${id}`}>
			<BlogCardView
				title={title}
				picUrl={picUrl}
				date={date}
			/>
		</Link>
	)
}
