'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FC, useMemo, useState } from 'react'

import IconLink from '@/shared/assets/icons/icon-link-2.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Giveaway.module.sass'
import GiveawayDetail from './GiveawayDetail'
import GiveawaysHeader from './GiveawayHeader'

interface GiveawaysProps {
	className?: string
}

export const Giveaway: FC<GiveawaysProps> = ({ className }) => {
	const t = useTranslations()
	const pathname = usePathname()
	const isCompleted = useMemo(() => pathname.includes('/completed'), [pathname])
	const [completePageMode, toggleCompletePageMode] = useState<boolean>(false)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'relative mb-[15px] mt-[20px] px-5')}>
					<div className={clsx(cls.title, { '!text-[18px]': isCompleted })}>
						{t('giveaways.giveaways').toUpperCase()} {isCompleted ? '#12738931' : ''}
					</div>
					<Button
						onPress={() => toggleCompletePageMode(v => !v)}
						className='absolute right-0'
					>
						<IconLink className='h-[38px] w-[34px]' />
					</Button>
				</div>
			</div>
			<div className='mb-5 px-[20px]'>
				<GiveawaysHeader />
			</div>
			<div className='mb-5 px-[20px]'>
				<GiveawayDetail mode={completePageMode} />
			</div>
		</div>
	)
}
