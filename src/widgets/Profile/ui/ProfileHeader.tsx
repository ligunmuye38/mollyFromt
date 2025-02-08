'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

// import IconSettings from '@/shared/assets/icons/icon-settings.svg'
import IconUser from '@/shared/assets/icons/icon-user-avatar.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'

// import { usePathname } from '@/shared/config/i18n/navigation'
// import { ButtonHexSquare } from '@/shared/ui/ButtonHexSquare/ButtonHexSquare'
import cls from './Profile.module.sass'

const ProfileHeader = () => {
	// For translation
	const t = useTranslations()

	// To get current route
	// const pathname = usePathname()

	return (
		<div className={clsx(cls.h, 'relative md:!min-h-[70px] md:!pt-0')}>
			<div className={cls.bg}>
				<HeaderBg className={cls.bg_pic} />
				<div className={clsx(cls.item, '!absolute -top-[5px] z-[10] h-[35px]')}>
					<div className={clsx(cls.item_icon, 'relative')}>
						<IconUser className={clsx('relative h-[25px] w-[25px] fill-[#17E2A5] 2sm:h-[20px] 2sm:w-[20px]')} />
					</div>
				</div>
			</div>

			<div className={cls.h_inner}>
				<div className={clsx(cls.title, 'uppercase md:!text-[18px]')}>{t('profile_main.profile')}</div>
				{/* {pathname != '/profile/user' && (
					<ButtonHexSquare
						className={clsx('absolute right-3 hidden h-[38px] w-[34px] lg:flex md:h-[24px] md:w-[22px]')}
					>
						<IconSettings
							className={clsx('h-[20px] w-[20px] text-[#64749B] md:h-[10px] md:w-[10px]', cls.trigger_icon)}
						/>
					</ButtonHexSquare>
				)} */}
			</div>
		</div>
	)
}

export default ProfileHeader
