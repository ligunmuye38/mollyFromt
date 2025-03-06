'use client'

import { useState } from 'react'

import { AllAchievementsItems } from '@/widgets/AllAchievementsItems/ui/AllAchievementsItems'
import { PageName } from '@/widgets/PageName/ui/PageName'

import { AllAchievementsFilters } from '@/entities/AllAchievementsFilters/AllAchievementsFilters'

const Page = () => {
	const [selectedLabel, selectLabel] = useState<string>('All')
	return (
		<>
			<PageName title='Achievements' />
			<main className='flex flex-col px-5'>
				<AllAchievementsFilters onSelect={selectLabel} />
				{selectedLabel === 'All' ? (
					<>
						<AllAchievementsItems label='balance' />
						<AllAchievementsItems label='cases' />
						<AllAchievementsItems label='case battles' />
						<AllAchievementsItems label='contracts' />
					</>
				) : (
					<AllAchievementsItems label={selectedLabel} />
				)}
			</main>
		</>
	)
}

export default Page
