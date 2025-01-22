'use client'

import React from 'react'

import DesktopLayout from '@/shared/layout/DesktopLayout'
import MobileLayout from '@/shared/layout/MobileLayout'
import { useAppResponsive } from '@/shared/lib/useResponsive'

const Layout = ({ children }: { children: React.ReactNode }) => {
	// To get the screen size for responsive
	const { lg } = useAppResponsive()

	return lg == true ? <DesktopLayout>{children}</DesktopLayout> : <MobileLayout>{children}</MobileLayout>
}

export default Layout
