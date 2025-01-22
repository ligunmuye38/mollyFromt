'use client'

import { topbarNavItmes } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import { Link, usePathname } from '@/shared/config/i18n/navigation'

import cls from './Header.module.sass'

interface TopBarLeftNavProps {
	className?: string
}

const TopBarLeftNav: FC<TopBarLeftNavProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()
	const headerBarInView = useCommonStore(state => state.headerBarInView)

	return (
		<div
			className={clsx(
				className,
				cls.nav,
				'flex flex-wrap items-center gap-x-[30px] gap-y-3 py-3 duration-150 xl:gap-x-4'
			)}
		>
			{headerBarInView ? (
				<div></div>
			) : (
				<Link
					href='/'
					className={clsx('h-[40px] w-[50px]')}
					style={{
						backgroundImage: 'url(/images/logo-header-mobile.svg)',
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat'
					}}
				></Link>
			)}

			{topbarNavItmes.map(
				item =>
					item.side == 'left' && (
						<Link
							title={t(item.label)}
							href={item.src}
							key={item.src}
							className={clsx(cls.item, {
								[cls.active]: pathname === item.src
							})}
						>
							<div className={clsx(cls.item_icon, 'h-[18px] w-[18px]')}>
								<item.icon />
							</div>
							<div className={cls.item_label}>{t(item.label)}</div>
						</Link>
					)
			)}
		</div>
	)
}

export default TopBarLeftNav
