import { AchievementsContent } from '@/widgets/AchievementsContent/ui/AchievementsContent'
import { AchievementsFilters } from '@/widgets/AchievementsFilters/ui/AchievementsFilters'
import { PageName } from '@/widgets/PageName/ui/PageName'

const Page = () => {
	return (
		<>
			<PageName title='achievements' />
			<main className='px-5 3sm:px-3'>
				<AchievementsFilters />
				{/* <AchievementsInfo /> */}
				<AchievementsContent />
			</main>
		</>
	)
}

export default Page
