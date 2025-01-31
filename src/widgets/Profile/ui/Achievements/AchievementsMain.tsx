'use client'

import { achievementsList } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconFilter from '@/shared/assets/icons/icon-filter-2.svg'
import IconInfoRounded from '@/shared/assets/icons/icon-info-2.svg'
import { useModal } from '@/shared/context/ModalContext'
// import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'
import { Select } from '@/shared/ui/Select/Select'

import AchievementCard from './AchievementCard'
import AchievementModal from './AchievementModal'
import cls from './Achievements.module.sass'
import AchievementsHeader from './AchievementsHeader'

const sortOptions = [
	{ value: 'Achieved at', label: 'Achieved at' },
	{ value: 'Name', label: 'Name' },
	{ value: 'Level', label: 'Level' }
]

const AchievementsMain = () => {
	const t = useTranslations()

	const { openModal } = useModal()

	// const [page, setPage] = useState<number>(1)
	const [selectedBalanceFilters, setSelectedBalanceFilters] = useState<string[]>([])

	const openAchievementModal = () => {
		openModal(
			<AchievementModal />,
			{},
			<IconInfoRounded className='fill-[#19D099]' />,
			t('profile_achievements.achievements'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className={cls.user_main}>
			<div className={clsx(cls.user_main_inner, 'p-5')}>
				<AchievementsHeader />
				<div className='mb-[15px] flex items-center justify-between gap-5 rounded-[10px] bg-[#1D2434] py-2 pl-3 pr-2'>
					<p className='text-[10px] font-medium leading-4 text-[#95AADB]'>
						You can select <span className='font-bold text-white'>5 achievements</span> to be shown to other
						<br />
						users on your profile. You have selected <span className='font-bold text-white'>5/5</span>.
					</p>
					<div className='flex translate-y-[2px] gap-[10px]'>
						{/* <Select
							value={new Set(selectedBalanceFilters)}
							onChangeValue={v => setSelectedBalanceFilters(Array.from(new Set(v)).map(value => value.toString()))}
							items={balanceFilters}
							theme='theme-2'
							placeholder={t('profile_achievements.balance')}
							startContent={<IconBalance className='w-3' />}
							classNames={{
								base: 'w-[150px] h-[36px]',
								trigger: 'rounded-lg',
								innerWrapper: '[&>*:first-child]:w-[26px]'
							}}
						/> */}
						<Select
							value={new Set(selectedBalanceFilters)}
							onChangeValue={v => setSelectedBalanceFilters(Array.from(new Set(v)).map(value => value.toString()))}
							items={sortOptions}
							theme='theme-2'
							placeholder={t('profile_achievements.sort_by')}
							startContent={<IconFilter className='w-3' />}
							classNames={{
								base: 'w-[150px] h-[36px]',
								trigger: 'rounded-lg',
								innerWrapper: '[&>*:first-child]:w-[26px]'
							}}
						/>
					</div>
				</div>
				<div
					className='mb-[15px] grid auto-rows-auto justify-between gap-[14px]'
					style={{ gridTemplateColumns: 'repeat(auto-fill, 140px)' }}
				>
					{achievementsList.map((item, index) => (
						<AchievementCard
							data={item}
							onClick={openAchievementModal}
							key={`achievement-card-${index}:${Date.now()}`}
						/>
					))}
				</div>
				{/* <div className='flex justify-center'>
					<PaginationBar
						page={page}
						setPage={setPage}
						total={Math.ceil(achievementsList.length / 18)}
					/>
				</div> */}
			</div>
		</div>
	)
}

export default AchievementsMain
