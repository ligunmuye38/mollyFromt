import { useTranslations } from 'next-intl'

const GameHistoryList = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex w-full rounded-lg bg-[#1F2536] px-[15px] py-[9px] font-primary-bold text-[10px] text-[#5A6786]'>
				<span className='flex w-1/4 items-center justify-start uppercase'>{t('game_history_profile.case_name')}</span>
				<span className='flex w-1/4 items-center justify-start uppercase'>{t('game_history_profile.price')}</span>
				<span className='flex w-1/4 items-center justify-start uppercase'>
					{t('game_history_profile.date_of_opening')}
				</span>
				<span className='flex w-1/4 items-center justify-end uppercase'>{t('game_history_profile.prizes')}</span>
			</div>
		</div>
	)
}

export default GameHistoryList
