import { BlogItems } from '@/widgets/BlogItemsSection/ui/BlogItems'
import { PageName } from '@/widgets/PageName/ui/PageName'

import { BlogBigCard } from '@/entities/blogCard/ui/BlogBigCard/BlogBigCard'

const Page = async () => {
	return (
		<div className='mt-4'>
			<PageName title='Blog' />
			<BlogBigCard />
			<BlogItems />
		</div>
	)
}

export default Page
