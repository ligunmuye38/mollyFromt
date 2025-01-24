import SettingsMain from '@/widgets/Profile/ui/Settings/SettingsMain'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/Settings'
		},
		description: ''
	}
}

const Settings = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<SettingsMain />
			</div>
		</div>
	)
}

export default Settings
