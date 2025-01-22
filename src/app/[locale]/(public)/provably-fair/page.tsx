import ProvablyFairBody from '@/widgets/ProvablyFair/ui/ProvablyFairBody'
import ProvablyFairHeader from '@/widgets/ProvablyFair/ui/ProvablyFairHeader'

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

const ProvablyFair = () => {
	return (
		<div className='mt-5 flex flex-col gap-4'>
			<ProvablyFairHeader />
			<ProvablyFairBody />
		</div>
	)
}

export default ProvablyFair
