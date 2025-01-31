'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import OtpInput from 'react-otp-input'
import QRCode from 'react-qr-code'

import Button from '@/shared/ui/Button/Button'

import cls from './Settings.module.sass'

const VerificationModal = () => {
	// For translation
	const t = useTranslations()
	const [otp, setOtp] = useState<string>('')

	return (
		<div className={clsx(cls.modal, 'app-scrollbar max-h-[calc(100vh-150px)] overflow-auto')}>
			<div className='flex flex-col items-center'>
				<div className='mb-5 h-[140px] w-[140px] rounded-xl bg-white p-3'>
					<QRCode
						value='key'
						style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
					/>
				</div>
				<p className='mb-4 text-[16px] font-bold leading-[16px] text-white'>
					{t('settings_profile.two_factor_verification')}
				</p>
				<p className='mb-[13px] text-[12px] font-bold leading-[16px] text-[#49516D]'>
					{t('settings_profile.enter_six_digit_code')}
				</p>
				<p className='mb-[6px] text-[12px] font-bold uppercase leading-[16px] text-[#49526D]'>
					{t('settings_profile.secret_code')}
				</p>
				<div className='mb-[15px]'>
					<OtpInput
						value={otp}
						onChange={setOtp}
						numInputs={6}
						renderSeparator={<span className='w-1' />}
						renderInput={({ className, ...props }) => (
							<div className='flex h-12 w-12 items-center justify-center rounded-[10px] border-1 border-[#232B3E] bg-[#1A2030]'>
								<input
									className={clsx(className, 'bg-transparent text-[18px] text-white outline-none')}
									{...props}
								/>
							</div>
						)}
					/>
				</div>
				<div className={clsx(cls.enable_btn, 'h-auto w-[308px]')}>
					<div className={clsx(cls.enable_btn_inner, 'flex h-auto w-full items-center justify-center')}>
						<Button
							classNames={{
								base: 'w-full h-full py-[14px] hover:!bg-[#1d9c76] rounded-[18px]'
							}}
						>
							<span className={clsx('text-[14px] text-[#151A26]', cls.enable_btn_inner_font)}>
								{t('settings_profile.verify')}
							</span>
						</Button>
					</div>
				</div>
				{/* <div className={clsx(cls.default_btn, 'mb-[10px] h-auto w-[308px]')}>
					<div className={clsx(cls.default_btn_inner, 'flex h-auto w-full items-center justify-center')}>
						<Button
							classNames={{
								base: 'w-full h-full py-[14px] hover:!bg-[#1d9c76] rounded-[18px]'
							}}
						>
							<span className={clsx('text-[14px] text-[#707DA3]', cls.default_btn_inner_font)}>
								{t('settings_profile.sign_out')}
							</span>
						</Button>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default VerificationModal
