import AcceptBar from '@/widgets/OpenCase/ui/Accept/AcceptBar'
import AcceptBody from '@/widgets/OpenCase/ui/Accept/AcceptBody'
import FarmContents from '@/widgets/OpenCase/ui/Farm/FarmContent'
import FarmLiveFeed from '@/widgets/OpenCase/ui/Farm/FarmLiveFeed'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Case(Accept)'
		},
		description: ''
	}
}

export default function Page({ params: { id: _ } }: { params: { id: string } }) {
	return (
		<>
			<div className='mt-4'>
				<AcceptBar />
				<AcceptBody />
				<FarmLiveFeed />
				<FarmContents />
			</div>
		</>
	)
}
