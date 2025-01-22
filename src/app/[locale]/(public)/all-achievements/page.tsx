import { AllAchievementsItems } from '@/widgets/AllAchievementsItems/ui/AllAchievementsItems'
import { PageName } from '@/widgets/PageName/ui/PageName'

import { AllAchievementsFilters } from '@/entities/AllAchievementsFilters/AllAchievementsFilters'

const Page = () => {
	return (
		<>
			<PageName title='Achievements' />
			<main className='flex flex-col px-5'>
				<AllAchievementsFilters />
				<AllAchievementsItems />
				<AllAchievementsItems />
			</main>
		</>
	)
}

export default Page
