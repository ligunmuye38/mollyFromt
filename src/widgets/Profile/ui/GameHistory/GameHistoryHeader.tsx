import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconHistoryGame from '@/shared/assets/icons/icon-game-history-profile-logo.svg'

import GameHistoryTypeSwitcher from './GameHistoryTypeSwitcher'

const GameHistoryHeader = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='mb-[15px] flex items-center justify-between rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px]'>
			<div className='flex items-center gap-2'>
				<IconHistoryGame className={clsx('h-7 w-7')} />
				<span>{t('game_history_profile.history_games')}</span>
			</div>
			<div className=''>
				<GameHistoryTypeSwitcher />
			</div>
		</div>
	)
}

export default GameHistoryHeader
