import clsx from 'clsx'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { HeaderNotifications } from '@/features/HeaderNotifications/ui/HeaderNotifications'
import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'

import { Balance } from '@/entities/Balance/ui/Balance'

import IconLevelFrame from '@/shared/assets/icons/icon-level-frame-header.svg'
import IconAvatarFrame from '@/shared/assets/icons/icon-user-avatar-frame.svg'
import AvatarExample from '@/shared/assets/user-avatar-example.png'
import { Media } from '@/shared/ui/Media/Media'
import IconSignIn from '@/shared/assets/icons/icon-signin.svg'
import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'

import cls from './Header.module.sass'

import { useCommonStore } from '@/entities/Common/model/store'
import { useTranslations } from 'next-intl'
import SignInModal from '@/widgets/Auth/SignInModal'
import { useModal } from '@/shared/context/ModalContext'
import SignUpModal from '@/widgets/Auth/SignUpModal'
import ForgetPassword from '@/widgets/Auth/ForgetPasswordModal'
import { useRouter } from '@/shared/config/i18n/navigation'

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

	const [isSignin, setIsSignin] = useState(signinState);

	const { openModal } = useModal();
	const { closeModal } = useModal();

	const signIn = () => {
		setSigninState(true)
		closeModal();
	}

	const signInModal = () => {
		openModal(
			<SignInModal onClickForgetPassword={foregetPassword} onClickSignUp={signUpModal} onClickSignIn={signIn} />,
			{},
			<HeaderIcon />,
			t('auth.sigin_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		);
	};

	const signUpModal = () => {
		openModal(
			<SignUpModal onClickSignIn={signInModal} />,
			{},
			<HeaderIcon />,
			t('auth.signup_btn_text'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		);
	}

	const foregetPassword = () => {
		openModal(
			<ForgetPassword />,
			{},
			<HeaderIcon />,
			t('auth.password_recovery'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex justify-center items-center'
			},
			true
		);
	}

	// The function to go profile page
	const goToProfile = () => {
		navigation.push('/profile');
	}

	useEffect(() => {
		setIsSignin(signinState)
	}, [signinState])


	return (
		isSignin == true ?
			<div className={clsx(className, 'flex items-center !pt-1', cls.bar)}>
				{/* <HeaderLangSwitcher className='mr-3' /> */}
				<div className={cls.balance}>
					<Balance />
				</div>
				<div
					className={clsx(
						cls.avatar_wrapper,
						'ml-2 relative z-[1] shrink-0 w-[58px] h-[58px] flex items-center justify-center cursor-pointer'
					)}
					onClick={goToProfile}
				>
					<IconAvatarFrame
						className={clsx(
							cls.avatar_frame,
							'absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
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
			:
			<div className={clsx(className, 'flex items-center !pt-1', cls.bar)}>

				<div
					className={clsx(
						cls.avatar_wrapper,
						'ml-2 relative z-[1] shrink-0 w-[58px] h-[58px] flex items-center justify-center cursor-pointer'
					)}
					onClick={signInModal}
				>
					<IconAvatarFrame
						className={clsx(
							cls.avatar_frame,
							'absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full'
						)}
					/>
					<div className={clsx(cls.avatar_pic, 'relative z-[1] flex justify-center items-center')}>
						<IconSignIn
							width={30}
							height={30}
							className="fill-white"
						/>
					</div>
				</div>
				<Media greaterThanOrEqual='lg'>
					<div className={cls.settings}>
						<HeaderSettings className='ml-3' />
					</div>
				</Media>
			</div>
	)
}
