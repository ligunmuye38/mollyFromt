'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { mobileProfileList, profileList } from '@/widgets/Profile/model/items'

import ListItem from '@/entities/ListItem/ui/ListItem'

import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
// import IconEye from '@/shared/assets/icons/icon-eye.svg'
import IconWallet from '@/shared/assets/icons/icon-profile-wallet.svg'
import { useRouter } from '@/shared/config/i18n/navigation'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import Button from '@/shared/ui/Button/Button'

import cls from './Profile.module.sass'

const ProfileMain = () => {
	const pathName = usePathname()

	// For translation
	const t = useTranslations()

	// Selected profile list item
	const [selectedItem, setSelectedItem] = useState<number>(
		profileList.find(item => item.link === pathName.slice(3))?.id ?? 0
	)

	// For responsive
	const breakpoints = useAppResponsive()

	// To move the route
	const navigation = useRouter()

	// To hide balance
	const [isBalanceHidden, _toggleIsBalanceHidden] = useState<boolean>(false)

	// The function for profile list
	const clickListItem = (item: number, link: string) => {
		setSelectedItem(item)
		navigation.push(link)
	}

	return (
		<div className='h-auto w-full'>
			<div className={clsx(cls.profile_main, 'mx-4 h-auto w-[330px] lg:!m-0 lg:!w-full lg:!bg-none')}>
				<div className={clsx(cls.profile_main_inner, 'h-full w-full p-5 lg:!bg-none')}>
					<div className='flex flex-col gap-[14px]'>
						<div className='flex w-full flex-col gap-3 rounded-[14px] bg-[#121722] p-[15px] lg:hidden'>
							<div className='flex justify-between'>
								<div className='flex gap-2.5'>
									<div>
										<IconWallet />
									</div>
									<span className='flex flex-col justify-between'>
										<span className='mb-[6px] text-[12px] leading-[14px] text-[#495470]'>
											{t('profile_main.balance')}
										</span>
										<span className='text-[14px] leading-[14px] text-[#1CD9A1]'>
											{isBalanceHidden ? '******' : '$1740.00'}
										</span>
									</span>
								</div>
								{/* <Button
									className='h-8 w-8 rounded-sm'
									onPress={() => toggleIsBalanceHidden(v => !v)}
								>
									<IconEye className='h-6 w-6 fill-[#2C354A]' />
								</Button> */}
							</div>
							<div className='min-h-[1px] w-full bg-[#1A202D]'></div>
							<div className={clsx(cls.deposit_btn, 'h-auto w-full')}>
								<div className={clsx(cls.deposit_btn_inner, 'flex h-auto w-full items-center justify-center')}>
									<Button
										startContent={<IconPlus className='h-5 w-5 fill-[#121722]' />}
										classNames={{
											base: 'w-full h-full py-[11px] hover:!bg-[#1d9c76]'
										}}
									>
										<span className={clsx('text-[17px] text-[#121722]', cls.deposit_btn_inner_font)}>
											{t('profile_main.deposit')}
										</span>
									</Button>
								</div>
							</div>
						</div>
						<div className='app-scrollbar flex h-full flex-col gap-0.5 overflow-x-auto rounded-xl lg:flex-row lg:justify-center lg:gap-0 lg:rounded-none 2sm:justify-start'>
							{breakpoints.lg ? (
								<>
									{profileList.map(item => (
										<div
											className='h-full w-full'
											key={item.title}
										>
											<ListItem
												icon={item.icon}
												onClick={() => clickListItem(item.id, item.link)}
												isActived={item.id == selectedItem}
												title={t(item.title)}
											/>
										</div>
									))}
								</>
							) : (
								mobileProfileList.map(item => (
									<div
										className='h-full w-full lg:w-1/5 lg:px-2 lg:pb-2 md:px-1 2sm:w-1/3'
										key={item.title}
									>
										<ListItem
											icon={item.icon}
											onClick={() => clickListItem(item.id, item.link)}
											isActived={item.id == selectedItem}
											title={t(item.title)}
										/>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileMain
