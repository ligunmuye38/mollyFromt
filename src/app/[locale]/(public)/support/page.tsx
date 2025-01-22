import SupportBody from '@/widgets/Support/ui/SupportBody'
import SupportHeader from '@/widgets/Support/ui/SupportHeader'

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

const Support = () => {
	return (
		<div className='mt-5 flex flex-col gap-4 px-5 md:px-1'>
			<SupportHeader />
			<SupportBody />
		</div>
	)
}

export default Support
