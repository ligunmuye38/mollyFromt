'use client'

import { languages } from '../../model/items'
import { Selection } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

import { VolumeSlider } from '@/entities/Volume/ui/VolumeSlider'

import IconFacebook from '@/shared/assets/icons/icon-facebook-logo.svg'
import IconGoogle from '@/shared/assets/icons/icon-google-logo.svg'
import IconLock from '@/shared/assets/icons/icon-lock-heart.svg'
import IconOK from '@/shared/assets/icons/icon-odnoklassniki-svg.svg'
import IconSteam from '@/shared/assets/icons/icon-steam.svg'
import IconVerification from '@/shared/assets/icons/icon-verification-profile.svg'
import IconVK from '@/shared/assets/icons/icon-vkontakte.svg'
import IconYandex from '@/shared/assets/icons/icon-yandex-logo.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { ISelectItem, Select } from '@/shared/ui/Select/Select'
import ToggleButton from '@/shared/ui/ToggleButton/ToggleButton'

import cls from './Settings.module.sass'
import SettingsHeader from './SettingsHeader'
import VerificationModal from './VerificationModal'

const SettingsMain = () => {
	const t = useTranslations()

	const [nickname, setNickname] = useState<string>('')
	const [language, setLanguage] = useState<Selection>(new Set([languages[0].value]))
	const [isProfileHidden, toggleIsProfileHidden] = useState<boolean>(false)
	const [isSteamHidden, toggleIsSteamHidden] = useState<boolean>(false)
	const [isAccoladesHidden, toggleIsAccoladesHidden] = useState<boolean>(false)
	const [is2FAenabled, toggleIs2FAenabled] = useState<boolean>(false)

	const { openModal } = useModal()

	const openVerificationModal = () => {
		openModal(
			<VerificationModal />,
			{},
			<IconVerification className='w-6' />,
			t('profile_main.verification'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
		toggleIs2FAenabled(true)
	}

	const items = languages.map(
		item =>
			({
				value: item.value,
				label: item.label,
				startContent: <item.icon className='h-[24px] w-[24px] fill-[#E1B514]' />
			}) as ISelectItem
	)

	return (
		<div className={cls.user_main}>
			<div className={clsx(cls.user_main_inner, 'p-5')}>
				<SettingsHeader />
				<div className='mb-[25px] grid grid-cols-2 gap-[18px] lg:grid-cols-1'>
					<div className='col-span-1'>
						<Input
							value={nickname}
							onChange={setNickname}
							label={t('settings_profile.nickname').toLocaleUpperCase()}
							theme='theme-1'
							classNames={{
								inputWrapper: '!bg-[#151A26] !h-[48px]',
								input: [cls.box_value, 'w-full text-[13x]'],
								label: ['text-[10px]'],
								mainWrapper: 'w-full'
							}}
						/>
					</div>
					<div className='col-span-1'>
						<p className='mb-[6px] text-[10px] leading-[16px] text-[#49526D]'>
							{t('settings_profile.language').toLocaleUpperCase()}
						</p>
						<Select
							value={language}
							onChangeValue={v => setLanguage(v)}
							theme='theme-2'
							strokeSize='reg'
							selectorIcon='2'
							items={items}
							classNames={{
								innerWrapper: '!h-[48px]',
								trigger: '!h-[48px]'
							}}
						/>
					</div>
					<div className='col-span-1'>
						<p className='mb-[6px] text-[10px] leading-[16px] text-[#49526D]'>
							{t('settings_profile.volume').toLocaleUpperCase()}
						</p>
						<div className='h-[48px] rounded-[10px] bg-[#1A2130]'>
							<VolumeSlider />
						</div>
					</div>
				</div>
				<p className='mb-[15px] text-[16px] font-bold leading-[16px] text-white'>
					{t('settings_profile.private_settings')}
				</p>
				<div className='mb-[15px] grid grid-cols-2 gap-[18px] lg:grid-cols-1'>
					<div className='col-span-1'>
						<div className='flex h-[48px] items-center justify-between rounded-[10px] border-1 border-[#232B3E] bg-[#1A203073] p-4'>
							<p className='text-[14px] font-medium leading-[16px] text-[#8792B8]'>
								{t('settings_profile.hide_profile')}
							</p>
							<ToggleButton
								value={isProfileHidden}
								onToggle={() => toggleIsProfileHidden(v => !v)}
							/>
						</div>
					</div>
					<div className='col-span-1'>
						<div className='flex h-[48px] items-center justify-between rounded-[10px] border-1 border-[#232B3E] bg-[#1A203073] p-4'>
							<p className='text-[14px] font-medium leading-[16px] text-[#8792B8]'>
								{t('settings_profile.hide_steam')}
							</p>
							<ToggleButton
								value={isSteamHidden}
								onToggle={() => toggleIsSteamHidden(v => !v)}
							/>
						</div>
					</div>
					<div className='col-span-1'>
						<div className='flex h-[48px] items-center justify-between rounded-[10px] border-1 border-[#232B3E] bg-[#1A203073] p-4'>
							<p className='text-[14px] font-medium leading-[16px] text-[#8792B8]'>
								{t('settings_profile.hide_accolades')}
							</p>
							<ToggleButton
								value={isAccoladesHidden}
								onToggle={() => toggleIsAccoladesHidden(v => !v)}
							/>
						</div>
					</div>
				</div>
				<div className='relative mb-[15px] flex items-center gap-[13px] rounded-xl border-1 border-[#21293B] bg-[#181E2C] p-[15px] 2sm:flex-col'>
					<div className={clsx(cls.icon_wrapper, '2sm:absolute 2sm:-top-2')}>
						<div className={cls.icon_wrapper_inner}>
							<IconLock />
						</div>
					</div>
					<p className='max-w-[193px] text-[12px] font-medium leading-[14.4px] text-[#606EA1] md:text-center 2sm:mt-6'>
						{t('settings_profile.protect_description')}
					</p>
					<div className='flex flex-grow justify-end gap-[6px]'>
						{is2FAenabled ? (
							<div className={clsx(cls.disable_btn, 'h-auto w-32')}>
								<div className={clsx(cls.disable_btn_inner, 'flex h-auto w-full items-center justify-center')}>
									<Button
										onPress={() => toggleIs2FAenabled(false)}
										classNames={{
											base: 'w-full h-full py-[10px] rounded-[18px]'
										}}
									>
										<span className={clsx('text-[12px] text-white', cls.disable_btn_inner_font)}>
											{t('settings_profile.disable_2fa')}
										</span>
									</Button>
								</div>
							</div>
						) : (
							<div className={clsx(cls.enable_btn, 'h-auto w-32')}>
								<div className={clsx(cls.enable_btn_inner, 'flex h-auto w-full items-center justify-center')}>
									<Button
										onPress={openVerificationModal}
										classNames={{
											base: 'w-full h-full py-[10px] rounded-[18px]'
										}}
									>
										<span className={clsx('text-[12px] text-[#151A26]', cls.enable_btn_inner_font)}>
											{t('settings_profile.enable_2fa')}
										</span>
									</Button>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='flex gap-5 md:flex-col'>
					<div>
						<p className='mb-[11px] text-[10px] font-bold leading-[16px] text-[#49526D] md:text-center'>
							{t('settings_profile.connected_accounts').toLocaleUpperCase()}
						</p>
						<Link href='https://vk.com/'>
							<div className='flex items-center gap-[10px] rounded-lg bg-[#3377F6] px-[15px] py-[13px]'>
								<IconVK />
								<span className='text-[12px] font-medium leading-[15.26px] text-white'>Alex Kotovsky</span>
							</div>
						</Link>
					</div>
					<div>
						<p className='mb-[11px] text-[10px] font-bold leading-[16px] text-[#49526D] md:text-center'>
							{t('settings_profile.you_can_connect').toLocaleUpperCase()}
						</p>
						<div className='flex gap-[10px] md:justify-center'>
							<Link href='https://facebook.com/'>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg border-[1px] border-[#49547014] bg-[#181D2B]'>
									<IconFacebook className='max-w-[24px] fill-[#60719A]' />
								</div>
							</Link>
							<Link href='https://yandex.com/'>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg border-[1px] border-[#49547014] bg-[#181D2B]'>
									<IconYandex className='max-w-[24px] fill-[#60719A]' />
								</div>
							</Link>
							<Link href='https://google.com'>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg border-[1px] border-[#49547014] bg-[#181D2B]'>
									<IconGoogle className='max-w-[24px] fill-[#60719A]' />
								</div>
							</Link>
							<Link href='https://ok.ru/'>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg border-[1px] border-[#49547014] bg-[#181D2B]'>
									<IconOK className='max-w-[24px] fill-[#60719A]' />
								</div>
							</Link>
							<Link href='https://store.steampowered.com/'>
								<div className='flex h-[42px] w-[42px] items-center justify-center rounded-lg border-[1px] border-[#49547014] bg-[#181D2B]'>
									<IconSteam className='max-w-[24px] fill-[#60719A]' />
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SettingsMain
