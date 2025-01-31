import { CreateBattle } from '@/widgets/CaseBattles/ui/CreateBattle/CreateBattle'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Case Battles/Create'
		},
		description: ''
	}
}

const CreateBattlePage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CreateBattle />
			</div>
		</>
	)
}

export default CreateBattlePage
