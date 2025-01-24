import AchievementsMain from '@/widgets/Profile/ui/Achievements/AchievementsMain'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/Achievements'
		},
		description: ''
	}
}

const Achievements = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<AchievementsMain />
			</div>
		</div>
	)
}

export default Achievements
