'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useState } from 'react'

import ForgetPassword from '@/widgets/Auth/ForgetPasswordModal'
import SignInModal from '@/widgets/Auth/SignInModal'
import SignUpModal from '@/widgets/Auth/SignUpModal'

import { HeaderSettings } from '@/features/HeaderSettings/ui/HeaderSettings'

import { useCommonStore } from '@/entities/Common/model/store'

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'
import IconCheckRounded from '@/shared/assets/icons/icon-check-rounded.svg'
import IconLogout from '@/shared/assets/icons/icon-logout-2.svg'
import IconSignIn from '@/shared/assets/icons/icon-signin.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from './MobileMenu.module.sass'

interface MobileMenuHeaderProps {
	className?: string
}

export const MobileMenuHeader: FC<MobileMenuHeaderProps> = ({ className }) => {
	const t = useTranslations()
	const signinState = useCommonStore(state => state.signinState)
	const setSigninState = useCommonStore(state => state.setSigninState)

	const [isSignin, setIsSignin] = useState(signinState)

	const { openModal } = useModal()
	const { closeModal } = useModal()

	const signIn = () => {
		setSigninState(true)
		closeModal()
	}

	const logOut = () => {
		setSigninState(false)
	}

	const signInModal = () => {
		openModal(
			<SignInModal
				onClickForgetPassword={foregetPassword}
				onClickSignUp={signUpModal}
				onClickSignIn={signIn}
			/>,
			{},
			<HeaderIcon />,
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
			<HeaderIcon />,
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
				modal: 'relative w-full lg:h-full h-screen flex justify-center items-center'
			},
			true
		)
	}

	useEffect(() => {
		setIsSignin(signinState)
	}, [signinState])

	return (
		<div className={clsx(cls.header, className)}>
			{isSignin && (
				<div className='flex items-center gap-1'>
					<IconCheckRounded className='h-[16px] w-[16px] shrink-0 fill-primary md:h-[10px] md:w-[10px]' />
					<span className='font-primary-bold text-sm md:text-xs'>Aleksandr</span>
				</div>
			)}
			<div className='ml-auto flex items-center gap-4'>
				<HeaderSettings />
				<div className='h-5 w-5 shrink-0 cursor-pointer md:h-3 md:w-3'>
					{isSignin ? (
						<Button onPress={logOut}>
							<IconLogout className='h-full w-full shrink-0 fill-[#364055]' />
						</Button>
					) : (
						<Button onPress={signInModal}>
							<IconSignIn className='h-[16px] w-[16px] shrink-0 fill-[#fff]' />
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}
