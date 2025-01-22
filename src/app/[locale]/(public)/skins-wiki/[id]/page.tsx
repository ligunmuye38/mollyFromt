import { PageName } from '@/widgets/PageName/ui/PageName'
import { WikiCases } from '@/widgets/WikiCases/ui/WikiCases'
import WikiSidebar from '@/widgets/WikiSidebar/ui/WikiSidebar'
import { WikiTextContent } from '@/widgets/WikiTextContent/WikiTextContent'

import { Warning } from '@/entities/Warning/Warning'

const Page = () => {
	return (
		<>
			<PageName title='Wiki CS2 (CS:GO)' />
			<main className='grid grid-cols-[29%_auto] items-start gap-5 px-5 pb-[26px] pt-[37px] lg:grid-cols-[2fr] md:px-3'>
				<WikiSidebar />

				<div className='rounded-[14px] border-[3px] border-solid border-[#1F2534] bg-[#191F2D] p-5 pb-[14px] md:px-3'>
					<WikiCases />
					<Warning />
					<WikiTextContent />
				</div>
			</main>
		</>
	)
}

export default Page
