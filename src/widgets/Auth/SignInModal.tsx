import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import IconEmail from '@/shared/assets/icons/icon-email.svg'
import IconLock from '@/shared/assets/icons/icon-lock.svg'
import IconStream from '@/shared/assets/icons/icon-steam-logo.svg'
import IconTwitch from '@/shared/assets/icons/icon-twitch.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import cls from './Auth.module.sass'

interface SignInModalProps {
	onClickSignUp: () => void
	onClickForgetPassword: () => void
	onClickSignIn: () => void
}

type AuthGroup = 'signin' | 'signup'

const SignInModal: FC<SignInModalProps> = ({ onClickSignUp, onClickForgetPassword, onClickSignIn }) => {
	// For translation
	const t = useTranslations()

	// Get email
	const [email, setEmail] = useState('')
	// Get password
	const [password, setPassword] = useState('')
	// Get auth buttons
	const [clickSide, setClickSide] = useState<AuthGroup>('signin')

	return (
		<div className={clsx(cls.modal, 'app-scrollbar max-h-[calc(100vh-150px)] overflow-auto py-6')}>
			<div className='flex flex-col gap-6'>
				<div className='flex w-full justify-center'>
					<Button
						hexagon
						disableAnimation
						hexagonAxis='x'
						classNames={{
							base: clsx(cls.btn_auth_group, 'h-auto w-auto'),
							content: clsx(cls.btn_auth_group_inner, 'w-full h-full')
						}}
					>
						<Button
							hexagon
							disableAnimation
							hexagonAxis='x'
							classNames={{
								base: clsx(clickSide == 'signin' && cls.btn_auth_group_signin, 'h-full'),
								content: clsx(
									clickSide == 'signin' && cls.btn_auth_group_signin_inner,
									'w-full h-full py-[9px] px-[43px]'
								)
							}}
						>
							<span
								className={clsx(
									clickSide == 'signin' ? 'text-[#121722]' : 'text-[#d1d9eb6e]',
									'font-primary-bold text-[12px] uppercase'
								)}
							>
								{t('auth.login')}
							</span>
						</Button>
						<Button
							hexagon
							disableAnimation
							hexagonAxis='x'
							classNames={{
								base: clsx(clickSide == 'signup' && cls.btn_auth_group_signin, 'h-full'),
								content: clsx(
									clickSide == 'signup' && cls.btn_auth_group_signin_inner,
									'w-full h-full py-[9px] px-[43px]'
								)
							}}
							onClick={() => {
								setClickSide('signup')
								onClickSignUp()
							}}
						>
							<span
								className={clsx(
									clickSide == 'signup' ? 'text-[#121722]' : 'text-[#d1d9eb6e]',
									'font-primary-bold text-[12px] uppercase'
								)}
							>
								{t('auth.register')}
							</span>
						</Button>
					</Button>
				</div>
				<Input
					value={email}
					onChange={v => {
						setEmail(v)
					}}
					label={t('auth.email_label').toUpperCase()}
					theme='theme-1'
					placeholder={t('auth.email_placeholder')}
					startContent={<IconEmail className={clsx(cls.box_icon, cls.input_search_icon)} />}
					classNames={{
						inputWrapper: [cls.box],
						input: [cls.box_value, 'w-full text-[14px]'],
						label: ['text-[10px]'],
						mainWrapper: 'w-full'
					}}
				/>
				<Input
					value={password}
					onChange={v => {
						setPassword(v)
					}}
					label={t('auth.password_label').toLocaleUpperCase()}
					theme='theme-1'
					placeholder={t('auth.password_placeholder')}
					type={'password'}
					startContent={<IconLock className={clsx(cls.box_icon, cls.input_search_icon)} />}
					classNames={{
						inputWrapper: [cls.box],
						input: [cls.box_value, 'w-full p-10 text-[13x]'],
						label: ['text-[10px]'],
						mainWrapper: 'w-full'
					}}
				/>
			</div>
			<span className='px-3 py-2 text-right text-[12px] font-[500] text-[#49526D] underline'>
				<span
					className='hover:cursor-pointer'
					onClick={onClickForgetPassword}
				>
					{t('auth.forget_pwd_btn_text')}
				</span>
			</span>
			<div className='flex flex-col gap-3'>
				<div className={clsx(cls.bg_gradent_gray_out, cls.border_r_12)}>
					<Button
						classNames={{
							content: [cls.btn_content, cls.bg_gradent_gray, cls.border_gradent, 'text-black py-3 border-none'],
							base: ['w-full', cls.border_r_12]
						}}
						onClick={onClickSignIn}
					>
						<span className='text-[rgba(21, 26, 38, 1)] text-[14px] font-[900]'>{t('auth.sigin_btn_text')}</span>
					</Button>
				</div>
				<div className='flex items-center justify-center gap-4'>
					<div className='flex h-full flex-1 items-center'>
						<div className='w-full border-[1px] border-[#2C3244]'></div>
					</div>
					<div className=''>or</div>
					<div className='flex h-full flex-1 items-center'>
						<div className='w-full border-[1px] border-[#2C3244]'></div>
					</div>
				</div>
				<div className={clsx(cls.bg_gradent_steam_out, cls.border_r_12)}>
					<Button
						classNames={{
							content: [cls.bg_gradent_steam, 'text-white py-3 flex'],
							base: ['w-full', cls.border_r_12]
						}}
						startContent={<IconStream className={clsx(cls.steam_box, cls.steam_icon)} />}
					>
						<span className='text-[rgba(21, 26, 38, 1)] text-[14px] font-[400]'>{t('auth.sigin_in_via_steam')}</span>
					</Button>
				</div>
				<div className={clsx(cls.bg_gradent_twitch_out, cls.border_r_12)}>
					<Button
						classNames={{
							content: [cls.bg_gradent_twitch, 'text-white py-3 flex'],
							base: ['w-full', cls.border_r_12]
						}}
						startContent={<IconTwitch className='h-6 w-6 fill-[#FFFFFF]' />}
					>
						<span className='text-[rgba(21, 26, 38, 1)] text-[14px] font-[400]'>{t('auth.sigin_in_via_twitch')}</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SignInModal
