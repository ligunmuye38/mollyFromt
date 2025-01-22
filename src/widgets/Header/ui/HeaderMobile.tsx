'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import { HeaderLiveFeed } from '@/features/LiveFeed/ui/HeaderLiveFeed'

import { useCommonStore } from '@/entities/Common/model/store'

import LineGradientPic from '@/shared/assets/line-green-gradient.svg'
import { Link } from '@/shared/config/i18n/navigation'

import { HeaderBar } from './HeaderBar'

interface HeaderMobileProps {
	className?: string
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ className }) => {
	// const setMobileRightBarState = useCommonStore(state => state.setMobileRightBarState)
	const mobileRightBarState = useCommonStore(state => state.mobileRightBarState)

	const [rightBarState, _setRightBarState] = useState<boolean>(mobileRightBarState)

	return (
		<div className='h-[110px] lg:h-[85px]'>
			<header
				className={clsx(
					'fixed top-0 z-[100] flex h-[80px] w-full items-center justify-between gap-4 bg-[#141925]',
					className
				)}
			>
				<HeaderLiveFeed
					className={clsx(
						'absolute top-0 mt-[80px] h-[calc(100vh-150px)] w-[100px] bg-[#10151E] duration-200',
						rightBarState ? 'right-0' : '-right-[150px]'
					)}
				/>

				<LineGradientPic className='absolute bottom-0 left-0 z-[1] w-[40%] translate-y-1/2' />
				<div className='relative z-[1] h-[70px] w-full max-w-[115px]'>
					<Image
						src={'/images/back-sparks.png'}
						alt='sparks'
						width={176}
						height={97}
						className='absolute right-[-20px] top-[-10px] z-[1] scale-150'
					/>
					<Link
						href='/'
						className='relative z-[2] block h-full w-full'
						style={{
							backgroundImage: 'url(/images/logo-header-mobile.svg)',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				</div>
				<HeaderBar />
			</header>
		</div>
	)
}
