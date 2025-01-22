import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import ForgetPassword from '@/widgets/Auth/ForgetPasswordModal'
import SignInModal from '@/widgets/Auth/SignInModal'
import SignUpModal from '@/widgets/Auth/SignUpModal'

import { HeaderNotifications } from '@/features/HeaderNotifications/ui/HeaderNotifications'
import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'

import { Balance } from '@/entities/Balance/ui/Balance'
import { useCommonStore } from '@/entities/Common/model/store'

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'
import IconLevelFrame from '@/shared/assets/icons/icon-level-frame-header.svg'
import IconLogin from '@/shared/assets/icons/icon-login.svg'
import IconSignInLock from '@/shared/assets/icons/icon-signin-lock.svg'
import IconPlus from '@/shared/assets/icons/icon-signup-plus.svg'
import IconAvatarFrame from '@/shared/assets/icons/icon-user-avatar-frame.svg'
import AvatarExample from '@/shared/assets/user-avatar-example.png'
import { useRouter } from '@/shared/config/i18n/navigation'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import { Media } from '@/shared/ui/Media/Media'

import cls from './Header.module.sass'

interface HeaderBarContentProps {
	className?: string
}

export const HeaderBarContent: FC<HeaderBarContentProps> = ({ className }) => {
	// For translation
	const t = useTranslations()

	// Navigation
	const navigation = useRouter()

	const signinState = useCommonStore(state => state.signinState)
	const setSigninState = useCommonStore(state => state.setSigninState)

	const [isSignin, setIsSignin] = useState(signinState)

	const { openModal } = useModal()
	const { closeModal } = useModal()

	const signIn = () => {
		setSigninState(true)
		closeModal()
	}

	const signInModal = () => {
		openModal(
			<SignInModal
				onClickForgetPassword={foregetPassword}
				onClickSignUp={signUpModal}
				onClickSignIn={signIn}
			/>,
			{},
			<IconSignInLock className='h-[18px] w-[14px] fill-[#19D099]' />,
			t('auth.sigin_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	const signUpModal = () => {
		openModal(
			<SignUpModal onClickSignIn={signInModal} />,
			{},
			<IconPlus className='h-[19px] w-[19px] fill-[#19D099]' />,
			t('auth.signup_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	const foregetPassword = () => {
		openModal(
			<ForgetPassword />,
			{},
			<HeaderIcon />,
			t('auth.password_recovery'),
			{
				body: '',
				modal: 'relative w-full md:h-full h-screen flex md:items-start justify-center items-center'
			},
			true
		)
	}

	// The function to go profile page
	const goToProfile = () => {
		navigation.push('/profile')
	}

	useEffect(() => {
		setIsSignin(signinState)
	}, [signinState])

	return isSignin == true ? (
		<div className={clsx(className, 'flex items-center !pt-1', cls.bar)}>
			{/* <HeaderLangSwitcher className='mr-3' /> */}
			<div className={cls.balance}>
				<Balance />
			</div>
			<div
				className={clsx(
					cls.avatar_wrapper,
					'relative z-[1] ml-2 flex h-[58px] w-[58px] shrink-0 cursor-pointer items-center justify-center'
				)}
				onClick={goToProfile}
			>
				<IconAvatarFrame
					className={clsx(
						cls.avatar_frame,
						'absolute left-1/2 top-1/2 z-[2] h-full w-full -translate-x-1/2 -translate-y-1/2'
					)}
				/>
				<div className={clsx(cls.avatar_pic, 'relative z-[1]')}>
					<Image
						width={50}
						height={50}
						src={AvatarExample}
						alt='user avatar'
					/>
				</div>
				<div className={cls.level}>
					<IconLevelFrame className={cls.level_frame} />
					<div className={cls.level_count}>99</div>
				</div>
			</div>
			<Media greaterThanOrEqual='lg'>
				<div className={cls.settings}>
					<HeaderSettings className='ml-3' />
				</div>
			</Media>
			<div className={cls.notif}>
				<HeaderNotifications className='ml-2 lg:ml-0' />
			</div>
		</div>
	) : (
		<div className={clsx(className, 'flex items-center !pt-1', cls.bar)}>
			<Button
				theme='grey-4'
				backdrop
				hexagon
				hexagonAxis='x'
				classNames={{
					base: clsx(cls.btn_login)
				}}
				onClick={signInModal}
			>
				<div
					className='flex items-center gap-3 pl-2 pr-3 sm:pr-2'
					style={{
						background:
							'linear-gradient(0deg, rgba(47, 55, 74, 0.35), rgba(47, 55, 74, 0.35)),linear-gradient(360deg, rgba(16, 170, 124, 0.25) 0%, rgba(16, 170, 124, 0) 100%)'
					}}
				>
					<IconLogin />
					<span className='text-[13px] uppercase text-[#D1D9EB] sm:hidden'>{t('auth.login_or_create')}</span>
				</div>
			</Button>

			<Media greaterThanOrEqual='lg'>
				<div className={cls.settings}>
					<HeaderSettings className='ml-3' />
				</div>
			</Media>
		</div>
	)
}
