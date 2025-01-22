'use client'

import clsx from 'clsx'
import { FC } from 'react'

import { socialsitems } from '@/widgets/Sidebar/model/items'

import LangIconSwitcher from '@/entities/LangSwitcher/ui/LangIconSwitcher'

import { Link } from '@/shared/config/i18n/navigation'

import cls from './Header.module.sass'

interface TopBarRightNavProps {
	className?: string
}

const TopBarRightNav: FC<TopBarRightNavProps> = ({ className }) => {
	return (
		<div
			className={clsx(
				className,
				cls.nav,
				'flex flex-wrap items-center gap-x-[20px] gap-y-3 py-3 duration-150 xl:gap-x-3'
			)}
		>
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
			<div>
				<LangIconSwitcher />
			</div>
		</div>
	)
}

export default TopBarRightNav
