import PromocodeMain from '@/widgets/Profile/ui/Promocode/PromocodeMain'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/Promocode'
		},
		description: ''
	}
}

const Promocode = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<PromocodeMain />
			</div>
		</div>
	)
}

export default Promocode
