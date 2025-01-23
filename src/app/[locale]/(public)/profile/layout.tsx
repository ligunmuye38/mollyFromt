'use client'

import ProfileHeader from '@/widgets/Profile/ui/ProfileHeader'
import ProfileMain from '@/widgets/Profile/ui/ProfileMain'

import { usePathname } from '@/shared/config/i18n/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
	// To get current route
	const pathname = usePathname()

	return (
		<div className='mt-5 flex flex-col'>
			<ProfileHeader />
			<div className='flex lg:flex-col'>
				{pathname != '/profile/user' && (
					<div className='sticky top-4 h-screen w-auto lg:h-auto'>
						<ProfileMain />
					</div>
				)}

				<div className='flex-1'>{children}</div>
			</div>
		</div>
	)
}

export default Layout
