import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconAchievements from '@/shared/assets/icons/icon-achievements.svg'
import IconRanking from '@/shared/assets/icons/ranking.svg'

const AchievementsHeader = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='mb-[15px] flex items-center justify-between rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px]'>
			<div className='flex items-center gap-2'>
				<IconAchievements className={clsx('h-7 w-7 fill-[#10AA7C]')} />
				<span>{t('profile_achievements.achievements')}</span>
			</div>
			<div className='mr-6 flex items-center gap-[30px]'>
				<div className='flex gap-[10px]'>
					<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg border-1 border-[#21293A] bg-[#181E2B]'>
						<IconRanking className='fill-[#5A6786]' />
					</div>
					<div>
						<p className='mb-1 text-[16px] font-bold leading-4 text-white'>483735</p>
						<p className='text-[12px] font-medium leading-4 text-[#5A6786]'>{t('profile_achievements.you_rank')}</p>
					</div>
				</div>
				<div className='flex items-center gap-[10px]'>
					<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg border-1 border-[#21293A] bg-[#181E2B]'>
						<IconAchievements className='w-6 fill-[#5A6786]' />
					</div>
					<div>
						<p className='mb-1 text-[16px] font-bold leading-4 text-white'>43/1000</p>
						<p className='text-[12px] font-medium leading-4 text-[#5A6786]'>{t('profile_achievements.score')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AchievementsHeader
