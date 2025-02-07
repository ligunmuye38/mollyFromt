import { Giveaway } from '@/widgets/GiveawayDetail/ui/Giveaway'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _, id } }: IMetadata & { params: { id: string } }) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: `Giveaway - ${id}`
		},
		description: ''
	}
}

const GiveawayPage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<Giveaway />
			</div>
		</>
	)
}

export default GiveawayPage
