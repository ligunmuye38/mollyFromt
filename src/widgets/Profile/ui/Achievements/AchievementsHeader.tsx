import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconAchievements from '@/shared/assets/icons/icon-achievements.svg'
import IconRanking from '@/shared/assets/icons/ranking.svg'

import cls from './Achievements.module.sass'

const AchievementsHeader = () => {
	// For translation
	const t = useTranslations()

	return (
		<div className='mb-[15px] flex items-center justify-between gap-3 rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px] 2sm:flex-col'>
			<div className='flex items-center gap-2 2sm:flex-col 2sm:gap-0'>
				<IconAchievements className={clsx('h-7 w-7 fill-[#10AA7C]')} />
				<span>{t('profile_achievements.achievements')}</span>
			</div>
			<div className='flex items-center gap-[30px]'>
				<div className='flex items-center gap-[10px] 2sm:flex-row-reverse'>
					<div className={clsx(cls.modal_rank_icon, '!h-[38px] !w-[38px]')}>
						<div className={cls.modal_rank_icon_inner}>
							<IconRanking className='h-6 w-6 fill-[#10AA7C]' />
						</div>
					</div>
					<div className='w-[75px]'>
						<p className='mb-1 text-[16px] font-bold leading-4 text-white 2sm:text-right'>483735</p>
						<p className='text-[12px] font-medium leading-4 text-[#10AA7C] 2sm:text-right'>
							{t('profile_achievements.you_rank')}
						</p>
					</div>
				</div>
				<div className='flex items-center gap-[10px]'>
					<div className={clsx(cls.modal_score_icon, '!h-[38px] !w-[38px]')}>
						<div className={cls.modal_score_icon_inner}>
							<IconAchievements className='w-6 fill-[#E1B514]' />
						</div>
					</div>
					<div className='w-[75px]'>
						<p className='mb-1 text-[16px] font-bold leading-4 text-white'>43/1000</p>
						<p className='text-[12px] font-medium leading-4 text-[#E1B514]'>{t('profile_achievements.score')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AchievementsHeader
