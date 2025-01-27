'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { CircularProgress } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconWallet from '@/shared/assets/icons/icon-profile-wallet.svg'
import IconSteam from '@/shared/assets/icons/icon-steam-logo.svg'
import Iconverified from '@/shared/assets/icons/icon-verified-user.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'

import cls from './Main.module.sass'

const MainHeader = () => {
	// For translation
	const t = useTranslations()

	// For responsive
	const breakpoints = useAppResponsive()

	// To get chatbar state
	const chatViewHidden = useCommonStore(state => state.chatViewHidden)

	const [popoverOpen, togglePopoverOpen] = useState<boolean>(false)

	return (
		<div className={clsx('h-auto w-full flex-wrap !p-0 lg:!p-1', !breakpoints.lg && cls.user_main)}>
			<div className={clsx('h-full w-full !p-0 lg:!p-5 3sm:!p-1.5', !breakpoints.lg && cls.user_main_inner)}>
				<div className='relative max-h-[500px] w-full'>
					<div className='h-full w-full overflow-hidden rounded-xl'>
						<Image
							src={'/images/profile/user-bg.png'}
							alt='bg'
							sizes='100%'
							fill
							className='!relative !h-auto max-h-[200] min-h-[200px] !w-full object-cover 3sm:hidden'
						/>
					</div>

					{/* <div className={clsx('absolute left-0 top-0 h-full w-full rounded-[14px] 3sm:hidden', cls.image_over)}></div>
					<div className='absolute top-0 flex h-auto w-full justify-between p-4 3sm:relative 3sm:p-0'>
						<div className='h-auto rounded-lg border-[1px] border-[#49547014] bg-[#4954700D] p-2 3sm:p-1'>
							<IconEditPicture className='h-[22px] w-[22px] fill-[#495470] 3sm:h-[12px] 3sm:w-[12px]' />
						</div>
						<div className='rounded-lg border-[1px] border-[#49547014] bg-[#181D2B] p-2 3sm:hidden'>
							<IconSteam className='h-[22px] w-[22px] fill-[#60719A]' />
						</div>
					</div> */}
					<div
						className={clsx(
							'absolute -bottom-8 left-4 flex w-full flex-wrap items-center gap-3 overflow-hidden 3sm:relative 3sm:bottom-0 3sm:left-0 3sm:overflow-visible 2sm:flex-col 2sm:items-start',
							chatViewHidden ? '' : '!bottom-0 !left-3 !gap-2'
						)}
					>
						<div className='flex items-center gap-3'>
							<div
								className={clsx(
									'relative flex h-[170px] w-[152px] items-center justify-center 3sm:h-auto 3sm:w-auto',
									!chatViewHidden && 'h-auto w-auto'
								)}
							>
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
								<div
									className={clsx(
										cls.level_wrapper,
										'absolute bottom-4 right-[17px] 3sm:bottom-0.5 3sm:right-2 3sm:!h-[22px] 3sm:!w-[18px] 3sm:!p-[2px]',
										!chatViewHidden && '!bottom-[2px] !right-0.5 !h-[30px] !w-[26px] !p-[2px]'
									)}
								>
									<div className={clsx(cls.level_wrapper_inner_border)}>
										<div
											className={clsx(cls.level_wrapper_inner_body, 'flex h-full w-full items-center justify-center')}
										>
											<span className='text-[14px] font-[700] text-[#121722] 3sm:text-[10px]'>2</span>
										</div>
									</div>
								</div>
							</div>
							<div className='flex h-full w-auto items-center gap-4'>
								<div className='flex items-center gap-4'>
									<div className='flex flex-col'>
										<div className='relative flex'>
											<Iconverified className='absolute -left-4 -top-1/3' />
											<span className='ml-2 text-[16px] text-[#D1D9EB]'>Aleksandr</span>
										</div>
										{/* <div className='flex gap-2'>
											<IconLogout className='h-4 w-4 fill-[#CB3434]' />
											<span className='text-[12px] text-[#CB3434]'>{t('profile_page.leave_site')}</span>
										</div> */}
										<div className='mt-1 hidden w-auto 3sm:flex'>
											<div className='h-auto rounded-lg border-[1px] border-[#49547014] bg-[#4954700D] p-2 3sm:p-1'>
												<IconSteam className='h-[12px] w-[12px] fill-[#60719A]' />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<Popover
								placement='bottom'
								showArrow={true}
								classNames={{
									base: clsx(cls.base, cls['_with-arrow'], '-mt-3')
								}}
								isOpen={popoverOpen}
								offset={0}
							>
								<PopoverTrigger>
									<div
										className='relative h-auto w-auto'
										onMouseEnter={() => togglePopoverOpen(true)}
										onMouseLeave={() => togglePopoverOpen(false)}
									>
										<CircularProgress
											color='success'
											size='lg'
											value={70}
											classNames={{
												svg: 'w-[60px] h-[60px] rotate-180',
												indicator: 'stroke-[#10AA7C]',
												track: 'stroke-[#2C354A]'
											}}
											strokeWidth={1.5}
										></CircularProgress>
										<span className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center'>
											<span className='text-[18px] font-[700] text-white'>2</span>
											<span className='text-[11px] uppercase text-[#7082B0]'>lvl</span>
										</span>
									</div>
								</PopoverTrigger>
								<PopoverContent className='!rounded-md bg-[#2E354C] p-[1px]'>
									<div className='rounded-md bg-[#22283A] px-2 py-1'>
										<div className='text-[8px] text-white'>13941/184924</div>
									</div>
								</PopoverContent>
							</Popover>
							<div>
								<div className='relative flex h-auto w-auto gap-0'>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints.lg && chatViewHidden ? 60 : 35}
										height={breakpoints.lg && chatViewHidden ? 60 : 35}
										alt=''
									/>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints.lg && chatViewHidden ? 60 : 35}
										height={breakpoints.lg && chatViewHidden ? 60 : 35}
										alt=''
									/>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints.lg && chatViewHidden ? 60 : 35}
										height={breakpoints.lg && chatViewHidden ? 60 : 35}
										alt=''
									/>
								</div>
							</div>
						</div>

						<div className='absolute right-10 hidden h-auto w-[168px] flex-col gap-1 rounded-[14px] bg-[#121722] p-2 lg:flex 3sm:right-1 sm:-right-1 sm:w-[120px]'>
							<div className='flex justify-between'>
								<div className='flex gap-2.5 xs:w-full'>
									<div className='xs:hidden'>
										<IconWallet />
									</div>
									<span className='flex flex-col justify-between xs:w-full xs:flex-row xs:items-center'>
										<span className='text-[8px] text-[#495470]'>{t('profile_main.balance')}</span>
										<span className='text-[10px] text-[#1CD9A1]'>$1740.00</span>
									</span>
								</div>
								<IconEye className='h-6 w-6 fill-[#2C354A] xs:hidden' />
							</div>
							<div className='min-h-[1px] w-full bg-[#1A202D]'></div>
							<div className={clsx(cls.deposit_btn, 'h-auto w-full xs:!p-0')}>
								<div
									className={clsx(
										cls.deposit_btn_inner,
										'flex h-auto w-full items-center justify-center overflow-hidden xs:!p-0'
									)}
								>
									<Button
										startContent={<IconPlus className='h-[10px] w-[10px]' />}
										classNames={{
											base: 'w-full h-full py-[6px] hover:!bg-[#1d9c76]'
										}}
									>
										<span className={clsx('text-[10px] text-[#121722]', cls.deposit_btn_inner_font)}>
											{t('profile_main.deposit')}
										</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainHeader
