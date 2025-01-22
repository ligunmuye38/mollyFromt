import { PageName } from '@/widgets/PageName/ui/PageName'
import { WikiMiniItems } from '@/widgets/WikiMiniItems/ui/WikiMiniItems'
import WikiSearch from '@/widgets/WikiSearch/ui/WikiSearch'

const Page = () => {
	return (
		<>
			<PageName title='Wiki CS2 (CS:GO)' />
			<main className='px-5'>
				<WikiSearch />
				<WikiMiniItems />
			</main>
		</>
	)
}

export default Page
