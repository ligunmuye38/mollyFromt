'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'
import IconEmail from '@/shared/assets/icons/icon-email.svg'
import Close from '@/shared/assets/icons/icon-modal-close.svg'
import IconRecoveried from '@/shared/assets/icons/icon-open-email.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import cls from './Auth.module.sass'

const ForgetPassword = () => {
	// For translation
	const t = useTranslations()

	// Get email
	const [email, setEmail] = useState('')

	// Recovery state
	const [isSent, setIsSent] = useState<boolean>(false)

	return (
		<div>
			<div className={clsx(cls.modal, 'py-6')}>
				<div className='flex flex-col gap-6'>
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
				</div>
				<div className='mt-4 flex flex-col gap-3'>
					<div className={clsx(cls.bg_gradent_gray_out, cls.border_r_12)}>
						<Button
							classNames={{
								content: [cls.btn_content, cls.bg_gradent_gray, cls.border_gradent, 'text-black py-3 border-none'],
								base: ['w-full', cls.border_r_12]
							}}
							onClick={() => setIsSent(true)}
						>
							<span className='text-[rgba(21, 26, 38, 1)] text-[14px] font-[900]'>{t('auth.continue')}</span>
						</Button>
					</div>
				</div>
			</div>
			{isSent && (
				<div className='absolute -bottom-full left-0 h-auto w-full p-3'>
					<div className={clsx('w-full', cls.revovery_modal)}>
						<div
							className={clsx(
								cls.header,
								'flex h-auto min-h-[30px] w-auto items-center justify-between gap-4 border-b-[2px] border-[#161C28] p-1'
							)}
						>
							<div className={clsx('flex items-center gap-3')}>
								<div className={clsx(cls.header_maxWidth)}>
									<HeaderIcon />
								</div>
								<span>{t('auth.password_recovery')}</span>
							</div>
							<Button
								startContent={<Close />}
								className={clsx(
									'flex min-h-[30px] min-w-[30px] items-center justify-center',
									cls.revovery_modal_header_content
								)}
								onClick={() => setIsSent(false)}
							/>
						</div>
						<div className='flex w-full flex-col items-center justify-center gap-2 py-[29px]'>
							<IconRecoveried className='h-[56px] w-[56px] fill-[#16C390]' />
							<span className='gpa-1 flex flex-col items-center justify-center'>
								<span className='font-primary-heavy-ultra text-[12px] uppercase text-[#17C591]'>
									{t('auth.sent_email_success')}
								</span>
								<span className='font-primary-med text-[12px] text-[#49516D]'>{t('auth.check_email')}</span>
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ForgetPassword
