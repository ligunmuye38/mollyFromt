import { CasesSection } from '@/widgets/CasesSection/ui/CasesSection'

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

const Page = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CasesSection categoryKey='caseCashback' />
			</div>
		</>
	)
}

export default Page
