import clsx from 'clsx'
import { FC } from 'react'

import cls from './CaseCardView.module.sass'

interface CaseBadgeProps {
	label: React.ReactNode
	icon?: React.ReactNode
	badgeMode?: string
	badgeTheme?: string
	iconTheme?: string
	iconShadow?: boolean
	className?: string
}

export const CaseBadge: FC<CaseBadgeProps> = ({
	label,
	icon,
	badgeMode,
	iconTheme,
	iconShadow,
	badgeTheme,
	className
}) => {
	return (
		<div className={clsx(cls.badge, cls[badgeTheme || 'default'], cls[badgeMode || ''], className)}>
			<div className={cls.badge_inner}>
				{icon && (
					<div
						className={clsx(cls.badge_icon, cls[iconTheme || 'default'], {
							[cls.badge_icon_shadow]: iconShadow
						})}
					>
						{icon}
					</div>
				)}
				<div className={cls.badge_label}>{label}</div>
			</div>
		</div>
	)
}
