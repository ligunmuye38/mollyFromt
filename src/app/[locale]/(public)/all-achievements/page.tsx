import { AllAchievementsItems } from '@/widgets/AllAchievementsItems/ui/AllAchievementsItems'
import { PageName } from '@/widgets/PageName/ui/PageName'

import { AllAchievementsFilters } from '@/entities/AllAchievementsFilters/AllAchievementsFilters'

const Page = () => {
	return (
		<>
			<PageName title='Achievements' />
			<main className='px-5 flex flex-col'>
				<AllAchievementsFilters />
				<AllAchievementsItems />
				<AllAchievementsItems />
			</main>
		</>
	)
}

export default Page
