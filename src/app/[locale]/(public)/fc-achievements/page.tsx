import { AchievementsInfo } from '@/widgets/AchievementsInfo/ui/AchievementsInfo'
import { AchievementsContent } from '@/widgets/FcAchievementsContent/ui/AchievementsContent'
import { PageName } from '@/widgets/PageName/ui/PageName'

const Page = () => {
	return (
		<>
			<PageName title='achievements' />
			<main className='px-3'>
				<AchievementsInfo />
				<AchievementsContent />
			</main>
		</>
	)
}

export default Page
