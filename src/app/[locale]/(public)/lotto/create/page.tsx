import { CreateLotto } from '@/widgets/Lotto/ui/CreateLotto/CreateLotto'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Create Lotto'
		},
		description: ''
	}
}

const CreateLottoPage = async () => {
	// const t = useTranslations()
	return (
		<>
			<div className='mt-4'>
				<CreateLotto />
			</div>
		</>
	)
}

export default CreateLottoPage
