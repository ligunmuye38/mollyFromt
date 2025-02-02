import { CaseBattle } from '@/widgets/CaseBattles/ui/CaseBattle/CaseBattle'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Case Battle'
		},
		description: ''
	}
}

const CaseBattlePage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CaseBattle />
			</div>
		</>
	)
}

export default CaseBattlePage
