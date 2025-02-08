import { Main } from '@/widgets/Affiliate/ui/Main/Main'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Affiliate'
		},
		description: ''
	}
}

const AffiliatePage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<Main />
			</div>
		</>
	)
}

export default AffiliatePage
