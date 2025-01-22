import TermsBody from '@/widgets/TermsOfServices/TermsBody'
import TermsHeader from '@/widgets/TermsOfServices/TermsHeader'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Support'
		},
		description: ''
	}
}

const TermsOfServices = () => {
	return (
		<div className='mt-5 flex flex-col gap-4 px-5 md:px-1'>
			<TermsHeader />
			<TermsBody />
		</div>
	)
}

export default TermsOfServices
