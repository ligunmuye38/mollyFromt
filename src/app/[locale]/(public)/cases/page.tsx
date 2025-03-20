'use client'

import { useState } from 'react'

import CasesHeader from '@/widgets/Cases/ui/CasesHeader'
import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'

import { CaseToolbar } from '@/entities/CaseToolbar/ui/CaseToolbar'

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

	return (
		<>
			<div className='mt-4'>
				<CasesHeader />
				<CaseToolbar className='container-common' />
				<CasesSection categoryKey='caseLimited' />
				<CasesSection categoryKey='caseBranded' />
				<div className='mt-2 flex justify-center'>
					<PaginationBar
						page={page}
						setPage={setPage}
						total={5}
					/>
				</div>
			</div>
		</>
	)
}

export default Page
