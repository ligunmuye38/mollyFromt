'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconStar from '@/shared/assets/icons/icon-star.svg'
import HeaderBg from '@/shared/assets/section-header-bg-top.svg'

import cls from './OpenCase.module.sass'

interface CaseBarProps {
	title: string
}

const CaseBar = ({ title }: CaseBarProps) => {
	// For translation
	const t = useTranslations()

	// Favorites button active state
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	// Add to battle active state
	const [isBattle, setIsBattle] = useState<boolean>(false)

	return (
		<div className='relative min-h-[120px] w-full overflow-hidden'>
			<div className={cls.title}>{title}</div>
			<div className='mt-[11px] flex w-full justify-center gap-1.5'>
				<div
					className={clsx(cls.item, 'flex h-auto w-auto px-4 py-2 2sm:px-2 2sm:py-2', isFavorite == true && cls.active)}
					onClick={() => setIsFavorite(!isFavorite)}
				>
					<div className={clsx(cls.item_icon, 'h-[23px] w-[23px]')}>
						<IconStar />
					</div>
					<div className={clsx(cls.item_label, 'text-[12px] uppercase')}>{t('cases_header.to_favorites')}</div>
				</div>
				<div
					className={clsx(cls.item, 'flex h-auto w-auto px-4 py-2', isBattle == true && cls.active)}
					onClick={() => setIsBattle(!isBattle)}
				>
					<div className={clsx(cls.item_icon, 'h-[23px] w-[23px]')}>
						<IconCaseBattle />
					</div>
					<div className={clsx(cls.item_label, 'text-[12px] uppercase')}>{t('cases_header.add_to_battle')}</div>
				</div>
			</div>
			<HeaderBg className={clsx(cls.border_top, 'top-[110px]')} />
		</div>
	)
}

export default CaseBar
