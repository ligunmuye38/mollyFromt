'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import cls from './IntroBar.module.sass'

interface IntroBarProps {
	icon: React.ReactNode
	title: string
	content: string
	buttons: React.ReactNode
}

const IntroBar = ({ icon, title, content, buttons }: IntroBarProps) => {
	const t = useTranslations()

	return (
		<div
			className={clsx('flex h-auto w-full items-center justify-between px-5 py-[14px] 2sm:px-0', cls.header_gradient)}
		>
			<div className='flex items-center gap-7 md:gap-3 2sm:gap-1'>
				<div className='flex items-center gap-5 2sm:gap-1'>
					<div className='h-6 w-6 fill-white'>{icon}</div>
					<span className={clsx('font-[Gotham Ultra] block px-[5px] text-[20px] font-[1000] italic', cls.mask_text)}>
						{t(title).toUpperCase()}
					</span>
				</div>
				<div className='flex h-8 w-[2px] rotate-[20deg] bg-[#1C2232] md:hidden'></div>
				<span className={clsx('font-[Gotham Ultra] ,block text-[12px] italic text-[#545778] lg:hidden')}>
					{t(content)}
				</span>
			</div>
			{buttons}
		</div>
	)
}

export default IntroBar
