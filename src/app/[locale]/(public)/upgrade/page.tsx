import { Main } from '@/widgets/Upgrade/ui/Main/Main'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Upgrade'
		},
		description: ''
	}
}

const UpgradePage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<Main />
			</div>
		</>
	)
}

export default UpgradePage
