import User from '@/widgets/Profile/ui/User/User'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/User'
		},
		description: ''
	}
}

const UserProfile = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<User />
			</div>
		</div>
	)
}

export default UserProfile
