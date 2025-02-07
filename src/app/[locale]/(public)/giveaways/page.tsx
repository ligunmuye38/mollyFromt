import { Giveaways } from '@/widgets/Giveaways/ui/Giveaways'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Giveaways'
		},
		description: ''
	}
}

const GiveawaysPage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<Giveaways />
			</div>
		</>
	)
}

export default GiveawaysPage
