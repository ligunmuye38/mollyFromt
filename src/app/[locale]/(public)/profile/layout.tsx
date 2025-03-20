'use client'

import { useTranslations } from 'next-intl'

import FairnessModal from '@/widgets/CaseBattles/ui/Main/FairnessModal'
import ProfileHeader from '@/widgets/Profile/ui/ProfileHeader'
import ProfileMain from '@/widgets/Profile/ui/ProfileMain'

import IconVerification from '@/shared/assets/icons/icon-verification-profile.svg'
import { usePathname } from '@/shared/config/i18n/navigation'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

const Layout = ({ children }: { children: React.ReactNode }) => {
	// To get current route
	const pathname = usePathname()

	const { openModal } = useModal()
	const t = useTranslations()

	const onClickProvablyFair = () => {
		openModal(
			<FairnessModal />,
			{},
			<IconVerification className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('case_battles.fairness'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className='mt-5 flex flex-col'>
			<ProfileHeader />
			<div className='flex lg:flex-col'>
				{pathname != '/profile/user' && (
					<div className='h-max w-auto lg:h-auto'>
						<ProfileMain />
					</div>
				)}

				<div className='flex-1 px-0 lg:px-5'>{children}</div>
			</div>
			{pathname === '/profile' && (
				<Button
					onPress={onClickProvablyFair}
					classNames={{
						base: 'w-[101px] mx-auto mt-5 h-[29px] border-[#1C223040] border-[2px] rounded-lg bg-[#181E2B40] text-[#272F42] text-[12px] leading-[14px] font-medium'
					}}
				>
					{t('pages.provablyFair')}
				</Button>
			)}
		</div>
	)
}

export default Layout
