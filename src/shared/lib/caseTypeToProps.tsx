import { CaseType } from '../types/case'
import { CaseConfigProps } from '../ui/CaseCard/CaseCardView'
import { ReactNode } from 'react'

import IconSuccess from '@/shared/assets/icons/icon-check-rounded-2.svg'
import IconDiscount from '@/shared/assets/icons/icon-discount.svg'
import IconLightning from '@/shared/assets/icons/icon-lightning.svg'
import IconLock from '@/shared/assets/icons/icon-lock.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-3.svg'
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'

interface Props extends CaseConfigProps {
	badgeMode?: string
	icon?: ReactNode
	iconTheme?: string
	iconShadow?: boolean
	theme?: string
}

export const caseTypeToProps: Record<CaseType, Props> = {
	[CaseType.COMMON]: {},
	[CaseType.AVAILABLE]: {
		badgeMode: 'wide',
		badgeTheme: 'green',
		icon: <IconSuccess />,
		iconTheme: 'green',
		iconShadow: true
	},
	[CaseType.AVAILABELED_IN]: {
		badgeMode: 'wide',
		icon: <IconLock />,
		iconTheme: 'yellow',
		iconShadow: true
	},
	[CaseType.DISCOUNTED]: {
		icon: <IconDiscount />,
		badgeTheme: 'gradient-green',
		iconTheme: 'outline-green',
		iconShadow: true
	},
	[CaseType.UNIQUE]: {
		icon: <IconUser />,
		badgeTheme: 'gradient-yellow',
		iconTheme: 'outline-yellow',
		iconShadow: true
	},
	[CaseType.EXPIRED_AT]: {
		theme: 'gradient-yellow',
		badgeMode: 'wide',
		icon: <IconTimer />,
		iconTheme: 'grey',
		iconShadow: true
	},
	[CaseType.LIMITED]: {
		icon: <IconLightning />,
		iconTheme: 'outline-yellow',
		iconShadow: true
	},
	[CaseType.LOCKED]: {
		icon: <IconLock />
	}
}
