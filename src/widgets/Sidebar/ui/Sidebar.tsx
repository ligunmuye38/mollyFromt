'use client'

import { footerNavItems, navItems, socialsitems } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import IconReward from '@/shared/assets/icons/icon-reward-gold.svg'
import { Link } from '@/shared/config/i18n/navigation'
import { Media } from '@/shared/ui/Media/Media'
import { SidebarNav } from '@/shared/ui/SidebarNav/SidebarNav'

import cls from './Sidebar.module.sass'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const t = useTranslations()

	return (
		<Media greaterThanOrEqual='lg'>
			<aside className={clsx(className, 'flex h-screen w-[136px] flex-col bg-[#141925] px-1 py-6 xl:w-[110px]')}>
				<div className={clsx(cls.sb_body, 'mb-3 grow px-5 xl:px-2')}>
					<button
						type='button'
						className={clsx(cls.btn_rew)}
					>
						<div className={cls.btn_rew_icon}>
							<IconReward />
						</div>
						<span className={cls.btn_rew_label}>{t('sidebar.rewards')}</span>
					</button>
					<SidebarNav
						className='pt-6'
						items={navItems}
					/>
				</div>
				<div className='shrink-0 px-5 xl:px-2'>
					<div className='flex flex-wrap items-center gap-x-[14px] gap-y-2 xl:gap-x-[10px]'>
						{socialsitems.map(item => (
							<Link
								key={item.label}
								href={item.src}
								target='_blank'
								rel='noreferrer'
								className={clsx(cls.social, item.hover)}
							>
								<item.icon className={cls.social_icon} />
							</Link>
						))}
					</div>
					<div className={clsx(cls.fnav, 'mt-4')}>
						{footerNavItems.map(item => (
							<Link
								href={item.src}
								key={item.src}
								className={cls.fnav_item}
							>
								<div className={cls.fnav_item_icon}>
									<item.icon />
								</div>
								<div className={clsx(cls.fnav_item_label)}>{t(item.label)}</div>
							</Link>
						))}
					</div>
				</div>
			</aside>
		</Media>
	)
}
