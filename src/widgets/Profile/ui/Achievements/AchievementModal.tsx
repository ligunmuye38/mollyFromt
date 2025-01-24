'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import IconAchievement from '@/shared/assets/icons/icon-achievements.svg'
import IconDiscord from '@/shared/assets/icons/icon-discord-profile.svg'
import IconExport from '@/shared/assets/icons/icon-export.svg'
import IconFacebook from '@/shared/assets/icons/icon-facebook-profile.svg'
import IconInfo from '@/shared/assets/icons/icon-info.svg'
import IconTwitter from '@/shared/assets/icons/icon-twitter.svg'
import IconRanking from '@/shared/assets/icons/ranking.svg'
import Button from '@/shared/ui/Button/Button'
import ToggleButton from '@/shared/ui/ToggleButton/ToggleButton'

import cls from './Achievements.module.sass'

const levelStarColors = ['#E1B514', '#2697E8', '#F1761C', '#992BDC', '#E03232']

const AchievementModal = () => {
	// For translation
	const t = useTranslations()
	const [canShowInProfile, toggleCanShowInProfile] = useState<boolean>(false)
	const [canShowDetails, toggleCanShowDetails] = useState<boolean>(false)

	return (
		<div
			className={clsx(
				cls.modal,
				'app-scrollbar max-h-[calc(100vh-150px)] overflow-auto',
				canShowDetails ? 'w-[780px]' : 'w-[560px]'
			)}
		>
			<div className='flex flex-row gap-[15px] md:flex-col'>
				<div className='flex w-full flex-col gap-[15px]'>
					<div className='relative flex items-center justify-between gap-11 overflow-hidden rounded-[14px] p-[20px]'>
						<div className='absolute left-0 top-0 h-full w-full rounded-[14px] bg-[url(/images/achievement/achievement-detail.png)] bg-cover bg-center opacity-25'></div>
						<div className={cls.modal_content_leading}>
							<div className={cls.modal_content_leading_inner}></div>
						</div>
						<div className='z-10'>
							<Image
								src='/images/achievement/arsenal.png'
								width={70}
								height={70}
								alt='Modal leading icon'
							/>
						</div>
						<div className='z-10 flex-grow'>
							<p className='mb-2 text-[14px] font-bold leading-4 text-[#D1D9EB]'>Arsenal</p>
							<p className='text-[12px] font-medium leading-4 text-[#687CAA]'>Bonus received 5 items</p>
						</div>
						<div className='z-10'>
							<div className='mb-2 flex h-[36px] w-[143px] items-center justify-between rounded-md border-1 border-[#FFFFFF0D] bg-[#14182340] px-[9px] text-[18px] leading-[18px] backdrop-blur-[45px]'>
								<span className='text-[22px] text-[#E1B514]'>★</span>
								<span className='text-[22px] text-[#E1B514]'>★</span>
								<span className='text-[22px] text-[#E1B514]'>★</span>
								<span className='text-[22px] text-[#2F374A]'>★</span>
								<span className='text-[22px] text-[#2F374A]'>★</span>
							</div>
							<div className='relative flex w-[143px] items-center justify-between'>
								<div
									className={clsx(
										cls.achievement_card_level_progress_point,
										cls.active,
										'flex h-[18px] w-[18px] flex-shrink-0 flex-grow-0 items-center justify-center'
									)}
								>
									<span className='text-[9px] font-bold text-[#141925]'>{2}</span>
								</div>
								<div className='absolute left-[17px] right-[16px] top-1/2 h-[2px] flex-grow -translate-y-1/2 bg-[#242B3D]'></div>
								<div
									className={clsx(
										cls.active,
										'absolute left-[16px] top-1/2 h-[2px] flex-grow -translate-y-1/2 bg-[#242B3D]'
									)}
									style={{ right: '30%' }}
								></div>
								<div
									className={clsx(
										cls.achievement_card_level_progress_point,
										'flex h-[18px] w-[18px] flex-shrink-0 flex-grow-0 items-center justify-center'
									)}
								>
									<span className='text-[9px] font-bold text-[#55617C]'>{3}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='flex items-center gap-2 rounded-[10px] border-1 border-[#F4AD5C59] bg-[#F4AD5C26] p-[9px]'>
						<IconInfo />
						<span className='text-[12px] font-bold leading-4 text-[#F4AD5C]'>
							{t('profile_achievements.get_daily_free_bonus')}
						</span>
					</div>
					<div className='flex gap-5'>
						<div className='flex w-full items-center gap-4 rounded-[10px] border-1 border-[#262E4240] bg-[#191F2D] p-[11px]'>
							<div className={cls.modal_rank_icon}>
								<div className={cls.modal_rank_icon_inner}>
									<IconRanking className='fill-[#10AA7C]' />
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-[16px] font-bold leading-[16px] text-white'>483735</span>
								<span className='text-[12px] font-medium leading-[16px] text-[#5A6786]'>
									{t('profile_achievements.you_rank')}
								</span>
							</div>
						</div>
						<div className='flex w-full items-center gap-4 rounded-[10px] border-1 border-[#262E4240] bg-[#191F2D] p-[11px]'>
							<div className={cls.modal_score_icon}>
								<div className={cls.modal_score_icon_inner}>
									<IconAchievement className='w-6 fill-[#E1B514]' />
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<span className='text-[16px] font-bold leading-[16px] text-white'>43/100</span>
								<span className='text-[12px] font-medium leading-[16px] text-[#5A6786]'>
									{t('profile_achievements.score')}
								</span>
							</div>
						</div>
					</div>
					{!canShowDetails &&
						levelStarColors.map((color, index) => (
							<div
								key={`level-item-row-${index}:${Date.now()}`}
								className='flex items-center justify-between gap-2 rounded-[10px] border-1 border-[#262E42] bg-[#191F2D40] p-[9px] text-[12px] font-bold leading-4 text-[#5A6786]'
							>
								<span className={`ml-2 mr-1 text-xl text-[${color}]`}>★</span>
								<span className='mr-3 flex-grow-0'>Level {index + 1}</span>
								<span className='flex-grow'>Daily free bonuses...</span>
								<span className='flex-grow'>
									<span className='text-white'>0</span> / 5
								</span>
								<p className='w-max rounded-md bg-[#191F2D] p-[11px]'>
									<span>In progress</span>
								</p>
							</div>
						))}
					<div className='mt-2 flex items-center justify-center gap-2'>
						<ToggleButton
							value={canShowInProfile}
							onToggle={() => toggleCanShowInProfile(v => !v)}
						/>
						<span className='text-[13px] font-medium leading-[18px] text-[#5F6C87]'>
							{t('profile_achievements.show_in_profile')}
						</span>
					</div>
					<Button
						onPress={() => toggleCanShowDetails(v => !v)}
						theme='grey-4'
						classNames={{
							base: 'h-[48px] flex-shrink-0 w-[280px] mx-auto rounded-[8px]',
							content: 'text-[14px] leading-[18px] text-[#5A6786] font-bold w-[280px] h-[48px]'
						}}
					>
						About this achievement
					</Button>
				</div>
				{canShowDetails && (
					<div className='flex min-w-[320px] flex-col gap-[15px] md:min-w-0'>
						<div>
							<p className='mb-2 text-[16px] font-bold leading-4 text-white'>
								{t('profile_achievements.achievement_progress')}
							</p>
							<p className='text-[12px] font-bold leading-4 text-[#4D5A79]'>
								{t('profile_achievements.get_all_skins')}
							</p>
						</div>
						<div className='flex items-center justify-between gap-2 rounded-[12px] bg-[#191F2D] p-[11px]'>
							<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#32A8EB]'>
								<IconTwitter className='w-5 fill-white' />
							</div>
							<p className='flex-grow text-[12px] font-bold leading-4 text-white'>
								{t('profile_achievements.follow_on_twitter')}
							</p>
							<Link href='https://x.com'>
								<IconExport className='fill-[#4D5A79]' />
							</Link>
						</div>
						<div className='flex items-center justify-between gap-2 rounded-[12px] bg-[#191F2D] p-[11px]'>
							<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#134EC0]'>
								<IconFacebook className='w-5 fill-white' />
							</div>
							<p className='flex-grow text-[12px] font-bold leading-4 text-white'>
								{t('profile_achievements.follow_on_facebook')}
							</p>
							<Link href='https://facebook.com'>
								<IconExport className='fill-[#4D5A79]' />
							</Link>
						</div>
						<div className='flex items-center justify-between gap-2 rounded-[12px] bg-[#191F2D] p-[11px]'>
							<div className='flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-[#7017E1]'>
								<IconDiscord className='w-5 fill-white' />
							</div>
							<p className='flex-grow text-[12px] font-bold leading-4 text-white'>
								{t('profile_achievements.follow_on_discord')}
							</p>
							<Link href='https://discord.com'>
								<IconExport className='fill-[#4D5A79]' />
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default AchievementModal
