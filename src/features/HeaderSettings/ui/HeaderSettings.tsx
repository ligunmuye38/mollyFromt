'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import React from 'react'

import { useCommonStore } from '@/entities/Common/model/store'
import LangSwitcher from '@/entities/LangSwitcher/ui/LangSwitcher'
import { VolumeSlider } from '@/entities/Volume/ui/VolumeSlider'

import IconLogout from '@/shared/assets/icons/icon-logout.svg'
import IconSettings from '@/shared/assets/icons/icon-settings.svg'
import IconSteamLogo from '@/shared/assets/icons/icon-steam-logo.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'
import { ButtonHexSquare } from '@/shared/ui/ButtonHexSquare/ButtonHexSquare'

import cls from './HeaderSettings.module.sass'

interface HeaderSettingsProps {
	className?: string
}

export const HeaderSettings: FC<HeaderSettingsProps> = ({ className }) => {
	const t = useTranslations()

	const setSigninState = useCommonStore(state => state.setSigninState)
	const signinState = useCommonStore(state => state.signinState)

	const breakpoints = useAppResponsive()

	const logOut = () => {
		setSigninState(false)
	}

	return (
		<Popover
			showArrow={breakpoints.lg ? true : false}
			placement={breakpoints.lg ? 'bottom' : 'bottom-end'}
			offset={breakpoints.lg ? 10 : 5}
			classNames={{
				base: [cls.base, cls['_with-arrow']]
			}}
		>
			<PopoverTrigger>
				<ButtonHexSquare className={clsx('h-[38px] w-[34px] md:h-[24px] md:w-[22px]', cls.trigger, className)}>
					<IconSettings
						className={clsx('h-[20px] w-[20px] text-[#64749B] md:h-[10px] md:w-[10px]', cls.trigger_icon)}
					/>
				</ButtonHexSquare>
			</PopoverTrigger>
			<PopoverContent className={cls.content}>
				<div className='grid grid-cols-1 gap-2.5'>
					<div className='font-primary-bold text-sm text-white'>{t('settings.title')}</div>

					<div>
						<div className={cls.label}>{t('settings.language')}</div>
						<LangSwitcher />
					</div>

					<div>
						<div className={cls.label}>{t('settings.volume')}</div>
						<VolumeSlider />
					</div>

					<div className={clsx('grid gap-2.5 lg:block', signinState && 'grid-cols-2')}>
						<Button
							strokeSize='thin'
							theme='grey-2'
							startContent={<IconSteamLogo />}
							classNames={{ base: [cls.btn, 'lg:w-full', !signinState ? '!w-full' : ''], content: cls.btn_content }}
						>
							{t('settings.trade')}
						</Button>
						{breakpoints.lg && signinState && (
							<Button
								strokeSize='thin'
								theme='gradient-red-2'
								startContent={<IconLogout />}
								classNames={{ base: cls.btn, content: cls.btn_content }}
								onPress={logOut}
							>
								{t('settings.logout')}
							</Button>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
