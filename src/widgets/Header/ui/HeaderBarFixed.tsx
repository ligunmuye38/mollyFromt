'use client'

import clsx from 'clsx'
import { FC } from 'react'

import cls from './Header.module.sass'
import { HeaderBarContent } from './HeaderBarContent'

export const HeaderBarFixed: FC = () => {
	return (
		<div className={clsx(cls.bar_fixed, 'min-w-[270px]')}>
			<HeaderBarContent />
		</div>
	)
}
