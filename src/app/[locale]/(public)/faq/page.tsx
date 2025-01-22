import FaqBar from '@/widgets/Faq/ui/FaqBar'
import FaqBody from '@/widgets/Faq/ui/FaqBody'
import FaqHeader from '@/widgets/Faq/ui/FaqHeader'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Cases'
		},
		description: ''
	}
}

const Faq = () => {
	return (
		<div className='mt-5 flex flex-col gap-4'>
			<FaqHeader />
			<FaqBar />
			<FaqBody />
		</div>
	)
}

export default Faq
