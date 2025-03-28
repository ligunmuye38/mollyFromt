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
		icon: <IconSuccess className='w-6' />,
		iconTheme: 'green',
		iconShadow: true
	},
	[CaseType.AVAILABELED_IN]: {
		badgeMode: 'wide',
		icon: <IconLock className='w-6' />,
		iconTheme: 'yellow',
		iconShadow: true
	},
	[CaseType.DISCOUNTED]: {
		icon: <IconDiscount className='w-6' />,
		badgeTheme: 'gradient-green',
		iconTheme: 'outline-green',
		iconShadow: true
	},
	[CaseType.UNIQUE]: {
		icon: <IconUser className='w-6' />,
		badgeTheme: 'gradient-yellow',
		iconTheme: 'outline-yellow',
		iconShadow: true
	},
	[CaseType.EXPIRED_AT]: {
		badgeMode: 'wide',
		icon: <IconTimer className='w-6' />,
		iconTheme: 'grey',
		iconShadow: true
	},
	[CaseType.LIMITED]: {
		icon: <IconLightning className='w-6' />,
		iconTheme: 'outline-yellow',
		iconShadow: true
	},
	[CaseType.LOCKED]: {
		icon: <IconLock className='w-6' />
	}
}
