'use client'

import { useState } from 'react'

import CasesHeader from '@/widgets/Cases/ui/CasesHeader'
import { caseSection } from '@/widgets/CasesSection/model/items'
import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'

import { CaseToolbar } from '@/entities/CaseToolbar/ui/CaseToolbar'
import { useCommonStore } from '@/entities/Common/model/store'

// import { IMetadata } from '@/shared/types/metadata'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

// export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
// 	// const t = await getTranslations({ locale, namespace: 'Main' })

// 	return {
// 		title: {
// 			default: 'Cases'
// 		},
// 		description: ''
// 	}
// }

const Page = () => {
	// const t = useTranslations()
	const [page, setPage] = useState<number>(1)
	const showCommunityCases = useCommonStore(store => store.showCommunityCases)

	return (
		<>
			<div className='mt-4'>
				<CasesHeader />
				<CaseToolbar className='container-common' />
				{!showCommunityCases && <CasesSection categoryKey='caseLimited' />}
				<CasesSection
					categoryKey={showCommunityCases ? 'communityCases' : 'caseBranded'}
					page={page}
				/>
				{showCommunityCases && (
					<div className='mt-2 flex justify-center'>
						<PaginationBar
							page={page}
							setPage={setPage}
							total={Math.ceil(caseSection.communityCases.items.length / 5)}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default Page
