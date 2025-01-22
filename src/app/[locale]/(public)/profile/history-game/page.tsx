import GameHistoryMain from '@/widgets/Profile/ui/GameHistory/GameHistoryMain'

import { IMetadata } from '@/shared/types/metadata'

export async function generateMetadata({ params: { locale: _ } }: IMetadata) {
	// const t = await getTranslations({ locale, namespace: 'Main' })

	return {
		title: {
			default: 'Profile/History-game'
		},
		description: ''
	}
}

const GameHistory = () => {
	return (
		<div className='h-full w-full px-4 lg:!p-0'>
			<div className='h-full w-full'>
				<GameHistoryMain />
			</div>
		</div>
	)
}

export default GameHistory
