import { CreateGiveaway } from '@/widgets/CreateGiveaway/ui/CreateGiveaway'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Create Giveaways'
		},
		description: ''
	}
}

const CreateGiveawayPage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CreateGiveaway />
			</div>
		</>
	)
}

export default CreateGiveawayPage
