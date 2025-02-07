import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconEditPicture from '@/shared/assets/icons/icon-edit-picture.svg'
import IconSetting from '@/shared/assets/icons/icon-setting-profile.svg'
import IconUpload from '@/shared/assets/icons/icon-upload.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'

import cls from './Settings.module.sass'

const SettingsHeader = () => {
	// For translation
	const t = useTranslations()

	// For responsive
	const breakpoints = useAppResponsive()

	// To get chatbar state
	const chatViewHidden = useCommonStore(state => state.chatViewHidden)

	const [avatar, setAvatar] = useState<boolean>(false)
	const [cover, setCover] = useState<boolean>(false)

	return (
		<>
			<div className='mb-[15px] flex items-center justify-between rounded-xl border-[1px] border-[#232B3E] bg-[#111620] p-[14px] 2sm:justify-center'>
				<div className='flex items-center gap-2 2sm:flex-col 2sm:gap-0'>
					<IconSetting className={clsx('h-7 w-7 fill-[#10AA7C]')} />
					<span>{t('settings_profile.settings')}</span>
				</div>
			</div>
			<div className={clsx('mb-10 h-auto w-full flex-wrap !p-0 lg:!p-1', !breakpoints.lg && cls.user_main)}>
				<div className={clsx('h-full w-full !p-0 lg:!p-5 3sm:!p-1.5', !breakpoints.lg && cls.user_main_inner)}>
					<div className='relative max-h-[500px] w-full'>
						<div className={clsx('absolute left-0 top-0 h-full w-full rounded-[14px] bg-[#111620]')}></div>
						<div className={clsx('h-full w-full overflow-hidden rounded-[14px]', { 'mix-blend-color-burn': !cover })}>
							{cover ? (
								<Image
									src={'/images/profile/user-bg.png'}
									alt='bg'
									sizes='100%'
									fill
									className='!relative !h-auto max-h-[200] min-h-[200px] !w-full object-cover 3sm:hidden'
								/>
							) : (
								<Image
									src={'/images/profile/chess-pattern.png'}
									alt='bg'
									sizes='100%'
									fill
									className='!relative !h-[220px] !w-full object-cover opacity-15 blur-0'
								/>
							)}
						</div>
						{cover && (
							<div
								className={clsx('absolute left-0 top-0 h-full w-full rounded-[14px] 3sm:hidden', cls.image_over)}
							></div>
						)}
						{cover ? (
							<div className='absolute top-0 flex h-auto w-full justify-between p-4 3sm:relative 3sm:p-0'>
								<div className='h-auto rounded-lg border-[1px] border-[#49547014] bg-[#4954700D] p-2 3sm:p-1'>
									<IconEditPicture className='h-[22px] w-[22px] fill-[#495470] 3sm:h-[12px] 3sm:w-[12px]' />
								</div>
							</div>
						) : (
							<div
								className={clsx(
									cls.upload_btn,
									'absolute left-1/2 top-1/2 z-10 h-auto w-[200px] -translate-x-1/2 -translate-y-1/2'
								)}
							>
								<div className={clsx(cls.upload_btn_inner, 'flex h-auto w-full items-center justify-center')}>
									<Button
										onPress={() => setCover(true)}
										classNames={{
											base: 'w-full h-full py-[10px] rounded-[18px]'
										}}
									>
										<IconUpload />
										<span
											className={clsx(
												'text-[12px] font-bold uppercase leading-5 text-[#606EA1]',
												cls.enable_btn_inner_font
											)}
										>
											{t('settings_profile.upload_cover')}
										</span>
									</Button>
								</div>
							</div>
						)}
						<div
							className={clsx(
								'absolute -bottom-8 left-4 flex w-full flex-wrap items-center gap-3 overflow-hidden 3sm:relative 3sm:bottom-0 3sm:left-0 3sm:overflow-visible 2sm:flex-col 2sm:items-start',
								chatViewHidden ? '' : '!bottom-0 !left-3 !gap-0'
							)}
						>
							<div className='flex items-center gap-3'>
								<div
									className={clsx(
										'relative flex h-[170px] w-[152px] items-center justify-center 3sm:h-auto 3sm:w-auto',
										!chatViewHidden && 'h-auto w-auto'
									)}
								>
									{avatar ? (
										<div
											className={clsx(
												cls.avatar_wrapper,
												'h-[148px] w-[128px] 3sm:h-[72px] 3sm:w-[66px]',
												!chatViewHidden && '!h-[100px] !w-[90px]'
											)}
										>
											<div className={clsx(cls.avatar_wrapper_inner, '3sm:!p-1')}>
												<div className={clsx(cls.avatar_wrapper_inner_img, 'relative')}>
													<Image
														src={'/images/avatars/1.jpg'}
														alt='user avatar'
														className={clsx(
															'h-[120px] w-[110px] 3sm:h-[57px] 3sm:w-[57px]',
															!chatViewHidden && '!h-[90px] !w-[70px]'
														)}
														width={chatViewHidden ? 110 : 70}
														height={chatViewHidden ? 120 : 90}
													/>
												</div>
											</div>
										</div>
									) : (
										<div
											onClick={() => setAvatar(true)}
											className={clsx(
												cls.avatar_uploader_wrapper,
												'h-[148px] w-[128px] cursor-pointer 3sm:h-[72px] 3sm:w-[66px]',
												!chatViewHidden && '!h-[100px] !w-[90px]'
											)}
										>
											<div className={clsx(cls.avatar_uploader_wrapper_inner, '3sm:!p-1')}>
												<div
													className={clsx(
														cls.avatar_uploader_wrapper_inner_img,
														'relative flex flex-col items-center justify-center gap-[9px]'
													)}
												>
													<IconUpload />
													{chatViewHidden && (
														<p className='max-w-14 text-center text-[12px] font-bold uppercase leading-[14px] text-[#606EA1]'>
															{t('settings_profile.upload_avatar')}
														</p>
													)}
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SettingsHeader
