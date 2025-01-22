import clsx from 'clsx'
import { FC } from 'react'

import { Link } from '@/shared/config/i18n/navigation'

import cls from './Header.module.sass'
import { HeaderBar } from './HeaderBar'
import { HeaderNav } from './HeaderNav'

interface HeaderDesktopProps {
	className?: string
}

export const HeaderDesktop: FC<HeaderDesktopProps> = ({ className }) => {
	return (
		<header className={clsx(className, 'relative flex items-center justify-between gap-2')}>
			<HeaderNav />
			<div className={clsx('absolute left-1/2', cls.logo_center)}>
				<Link
					href='/'
					className='flex h-[92px] w-[386px] items-center justify-center 3xl:h-[72px] 3xl:w-[300px]'
					style={{
						backgroundImage: 'url(/images/logo-header.svg)',
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat'
					}}
				></Link>
			</div>

			<HeaderBar />
		</header>
	)
}
