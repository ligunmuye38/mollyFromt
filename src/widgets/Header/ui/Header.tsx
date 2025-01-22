'use client'

import { FC } from 'react'

import MainLiveFeed from '@/features/LiveFeed/ui/MainLiveFeed'

import { Media } from '@/shared/ui/Media/Media'

import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<>
			<Media greaterThanOrEqual='lg'>
				<HeaderDesktop className={className} />
			</Media>
			<Media lessThan='lg'>
				<HeaderMobile className={className} />
				<MainLiveFeed className='mt-3 pl-[40px] lg:pl-5 md:pl-3' />
			</Media>
		</>
	)
}
