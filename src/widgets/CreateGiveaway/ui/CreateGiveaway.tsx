'use client'

import { caseItems } from '../model/items'
import { Popover, PopoverContent, PopoverTrigger, Switch } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'

import IconArrowDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconBucket from '@/shared/assets/icons/icon-bag-tick.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconClose from '@/shared/assets/icons/icon-close-black.svg'
import IconFacebook from '@/shared/assets/icons/icon-facebook-2.svg'
import IconGun from '@/shared/assets/icons/icon-gun.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import IconLink from '@/shared/assets/icons/icon-link-3.svg'
import IconLock from '@/shared/assets/icons/icon-lock.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconTelegram from '@/shared/assets/icons/icon-telegram.svg'
import IconTimer from '@/shared/assets/icons/icon-timer.svg'
import IconTrash from '@/shared/assets/icons/icon-trash.svg'
import IconTwitch from '@/shared/assets/icons/icon-twitch-2.svg'
import IconTwitter from '@/shared/assets/icons/icon-twitter-2.svg'
import IconVerification from '@/shared/assets/icons/icon-verification-profile.svg'
import IconVK from '@/shared/assets/icons/icon-vkontakte-2.svg'
import IconWallet from '@/shared/assets/icons/icon-wallet.svg'
import IconYoutube from '@/shared/assets/icons/icon-youtube.svg'
import HeaderBg from '@/shared/assets/section-header-bg.svg'
import Button from '@/shared/ui/Button/Button'
import DateTimePicker from '@/shared/ui/DateTimePicker/DateTimePicker'
import { Input } from '@/shared/ui/Input/Input'

import CaseItem from './CaseItem'
import cls from './CreateGiveaway.module.sass'

interface GiveawaysProps {
	className?: string
}

interface IHexagonIconProps {
	icon: ReactNode
}

interface IRequirementIconProps {
	icon: ReactNode
	active?: boolean
}

interface IRequirementCardProps {
	icon: ReactNode
	content: string
	active?: boolean
	locked?: boolean
}

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute left-[7px] top-[7px]'
				style={{
					clipPath:
						"path('M22.4988 2.38938C23.427 1.85348 24.5706 1.85348 25.4988 2.38938L45.4284 13.8958C46.3566 14.4317 46.9284 15.422 46.9284 16.4938V39.5066C46.9284 40.5784 46.3566 41.5688 45.4284 42.1047L25.4988 53.6111C24.5706 54.147 23.427 54.147 22.4988 53.6111L2.56912 42.1047C1.64091 41.5688 1.06912 40.5784 1.06912 39.5066V16.4938C1.06912 15.422 1.64091 14.4317 2.56912 13.8958L22.4988 2.38938Z')"
				}}
				src='/images/avatars/1.jpg'
				width={50}
				height={55}
				alt='avatar'
			/>
			<svg
				width='62'
				height='70'
				viewBox='0 0 62 70'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M29.5 2.02073C30.4282 1.48483 31.5718 1.48483 32.5 2.02073L58.8109 17.2113C59.7391 17.7472 60.3109 18.7376 60.3109 19.8094V50.1906C60.3109 51.2624 59.7391 52.2528 58.8109 52.7887L32.5 67.9793C31.5718 68.5152 30.4282 68.5152 29.5 67.9793L3.18911 52.7887C2.26091 52.2528 1.68911 51.2624 1.68911 50.1906V19.8094C1.68911 18.7376 2.26091 17.7472 3.18911 17.2113L29.5 2.02073Z'
					stroke='url(#paint0_linear_4193_5429)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4193_5429'
						x1='31'
						y1='8.46774'
						x2='31'
						y2='70'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#24FDBC'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#24FDBC'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const HexagonIcon = ({ icon }: IHexagonIconProps) => {
	return (
		<div className='relative w-max'>
			{icon}
			<svg
				width='42'
				height='48'
				viewBox='0 0 42 48'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19.25 1.58771C20.3329 0.962498 21.6671 0.962498 22.75 1.58771L39.5346 11.2783C40.6175 11.9035 41.2846 13.059 41.2846 14.3094V33.6906C41.2846 34.941 40.6175 36.0965 39.5346 36.7217L22.75 46.4123C21.6671 47.0375 20.3329 47.0375 19.25 46.4123L2.46539 36.7217C1.38249 36.0965 0.715391 34.941 0.715391 33.6906V14.3094C0.715391 13.059 1.38249 11.9035 2.46539 11.2783L19.25 1.58771Z'
					fill='url(#paint0_linear_4211_3321)'
					stroke='url(#paint1_linear_4211_3321)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4211_3321'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#191F2D' />
						<stop
							offset='1'
							stop-color='#191F2D'
							stop-opacity='0.25'
						/>
					</linearGradient>
					<linearGradient
						id='paint1_linear_4211_3321'
						x1='21'
						y1='0'
						x2='21'
						y2='48'
						gradientUnits='userSpaceOnUse'
					>
						<stop stop-color='#1F2534' />
						<stop
							offset='1'
							stop-color='#1F2534'
							stop-opacity='0.25'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const RequirementIcon = ({ active, icon }: IRequirementIconProps) => {
	return (
		<div className='relative'>
			<div
				className={clsx(
					'absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center',
					!active ? 'fill-[#60719A]' : 'fill-[#141925]'
				)}
			>
				{icon}
			</div>
			{active ? (
				<svg
					width='54'
					height='48'
					viewBox='0 0 54 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M41.4556 2.98426L52.4671 22.0157C53.1776 23.2435 53.1776 24.7563 52.4671 25.9842L41.4556 45.0156C40.7452 46.2436 39.4323 47 38.0114 46.9999L15.9886 47C14.5676 47 13.2547 46.2436 12.5443 45.0156L1.53283 25.9842C0.82239 24.7563 0.822391 23.2435 1.53283 22.0157L12.5443 2.98426C13.2547 1.7564 14.5676 1 15.9886 1H38.0115C39.4323 1 40.7452 1.7564 41.4556 2.98426Z'
						fill='#10AA7C'
					/>
					<path
						d='M41.4556 2.98426L52.4671 22.0157C53.1776 23.2435 53.1776 24.7563 52.4671 25.9842L41.4556 45.0156C40.7452 46.2436 39.4323 47 38.0114 46.9999L15.9886 47C14.5676 47 13.2547 46.2436 12.5443 45.0156L1.53283 25.9842C0.82239 24.7563 0.822391 23.2435 1.53283 22.0157L12.5443 2.98426C13.2547 1.7564 14.5676 1 15.9886 1H38.0115C39.4323 1 40.7452 1.7564 41.4556 2.98426Z'
						fill='url(#paint0_linear_4211_3783)'
					/>
					<path
						d='M41.4556 2.98426L52.4671 22.0157C53.1776 23.2435 53.1776 24.7563 52.4671 25.9842L41.4556 45.0156C40.7452 46.2436 39.4323 47 38.0114 46.9999L15.9886 47C14.5676 47 13.2547 46.2436 12.5443 45.0156L1.53283 25.9842C0.82239 24.7563 0.822391 23.2435 1.53283 22.0157L12.5443 2.98426C13.2547 1.7564 14.5676 1 15.9886 1H38.0115C39.4323 1 40.7452 1.7564 41.4556 2.98426Z'
						stroke='url(#paint1_linear_4211_3783)'
					/>
					<path
						d='M41.4556 2.98426L52.4671 22.0157C53.1776 23.2435 53.1776 24.7563 52.4671 25.9842L41.4556 45.0156C40.7452 46.2436 39.4323 47 38.0114 46.9999L15.9886 47C14.5676 47 13.2547 46.2436 12.5443 45.0156L1.53283 25.9842C0.82239 24.7563 0.822391 23.2435 1.53283 22.0157L12.5443 2.98426C13.2547 1.7564 14.5676 1 15.9886 1H38.0115C39.4323 1 40.7452 1.7564 41.4556 2.98426Z'
						stroke='url(#paint2_linear_4211_3783)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4211_3783'
							x1='36.5627'
							y1='1'
							x2='36.5627'
							y2='47'
							gradientUnits='userSpaceOnUse'
						>
							<stop
								stop-color='#24FDBC'
								stop-opacity='0'
							/>
							<stop
								offset='1'
								stop-color='#24FDBC'
								stop-opacity='0.65'
							/>
						</linearGradient>
						<linearGradient
							id='paint1_linear_4211_3783'
							x1='37.9218'
							y1='24'
							x2='47.5486'
							y2='24'
							gradientUnits='userSpaceOnUse'
						>
							<stop
								offset='0.347781'
								stop-color='#24FDBC'
								stop-opacity='0'
							/>
							<stop
								offset='1'
								stop-color='#24FDBC'
							/>
						</linearGradient>
						<linearGradient
							id='paint2_linear_4211_3783'
							x1='31.8059'
							y1='24'
							x2='22.8586'
							y2='24'
							gradientUnits='userSpaceOnUse'
						>
							<stop
								stop-color='#24FDBC'
								stop-opacity='0'
							/>
							<stop
								offset='1'
								stop-color='#24FDBC'
							/>
						</linearGradient>
					</defs>
				</svg>
			) : (
				<svg
					width='54'
					height='48'
					viewBox='0 0 54 48'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M41.4556 2.98426L52.4671 22.0157C53.1776 23.2435 53.1776 24.7563 52.4671 25.9842L41.4556 45.0156C40.7452 46.2436 39.4323 47 38.0114 46.9999L15.9886 47C14.5676 47 13.2547 46.2436 12.5443 45.0156L1.53283 25.9842C0.82239 24.7563 0.822391 23.2435 1.53283 22.0157L12.5443 2.98426C13.2547 1.7564 14.5676 1 15.9886 1H38.0115C39.4323 1 40.7452 1.7564 41.4556 2.98426Z'
						fill='url(#paint0_linear_4211_3799)'
						stroke='url(#paint1_linear_4211_3799)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_4211_3799'
							x1='40.6357'
							y1='0.433067'
							x2='13.4522'
							y2='47.6175'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#191F2D' />
							<stop
								offset='1'
								stop-color='#191F2D'
								stop-opacity='0.25'
							/>
						</linearGradient>
						<linearGradient
							id='paint1_linear_4211_3799'
							x1='40.6357'
							y1='0.433067'
							x2='13.4522'
							y2='47.6175'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#1F2534' />
							<stop
								offset='1'
								stop-color='#1F2534'
								stop-opacity='0.25'
							/>
						</linearGradient>
					</defs>
				</svg>
			)}
		</div>
	)
}

const RequirementCard = ({ icon, content, active, locked }: IRequirementCardProps) => {
	return (
		<div
			className={clsx(
				'relative flex flex-col items-center justify-center gap-[10px] rounded-[12px] border-1 bg-[#141925] p-[15px]',
				active ? 'border-[#24FDBC]' : 'border-[#1A2130]'
			)}
		>
			{locked && (
				<div className='absolute right-2 top-2 h-6 w-6 rounded-[6px] bg-[#1A202F] p-[6px]'>
					<IconLock className='h-3 w-3 fill-[#60719A]' />
				</div>
			)}
			{active && (
				<div className='absolute right-2 top-2 h-6 w-6 rounded-[6px] bg-[#153436] p-[5px]'>
					<IconCheck className='w-[14px] fill-[#10AA7C]' />
				</div>
			)}
			<RequirementIcon
				icon={icon}
				active={active}
			/>
			<p className={clsx('w-[140px] text-center text-[12px]', active ? 'text-white' : 'text-[#60719A]')}>{content}</p>
		</div>
	)
}

const EmptyCaseCard = () => {
	const t = useTranslations()

	return (
		<div className='flex h-[153px] w-[133px] flex-col items-center justify-center gap-2 rounded-[12px] border-1 border-[#161C28] bg-[#141925]'>
			<div className='flex h-6 w-6 items-center justify-center rounded-md bg-[#2A3143] text-[16px] leading-[14px] text-[#141925]'>
				+
			</div>
			<span className='text-[12px] font-medium text-[#2A3143]'>{t('giveaways.add').toUpperCase()}</span>
		</div>
	)
}

export const CreateGiveaway: FC<GiveawaysProps> = ({ className }) => {
	const t = useTranslations()

	const [name, setName] = useState<string>('')
	const [isActive, toggleIsActive] = useState<boolean>(false)
	const [isOpen, toggleIsOpen] = useState<boolean>(false)
	const [casesCount, setCasesCount] = useState<number>(1)

	return (
		<div className={clsx(cls.container, className)}>
			<div className={clsx(cls.h, 'relative mb-2')}>
				<div className={cls.bg}>
					<HeaderBg className={cls.bg_pic} />
				</div>
				<div className={clsx(cls.h_inner, 'relative mb-[15px] mt-[20px] px-5')}>
					<div className={clsx(cls.title, '!text-[18px]')}>{t('giveaways.create_giveaways').toUpperCase()}</div>
				</div>
			</div>
			<div className='px-5'>
				<div className='mb-5 w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
					<div className='grid h-full w-full grid-cols-3 gap-4 rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-5 md:grid-cols-1'>
						<div className='flex items-center gap-[10px] rounded-lg border-1 border-[#1E2536] bg-[#141925] py-2 pl-2 pr-4'>
							<Avatar />
							<p className='bg-[linear-gradient(0deg,_#D1D9EB,_#D1D9EB),_linear-gradient(0deg,_rgba(28,_34,_48,_0)_-0.71%,_rgba(28,_34,_48,_0.35)_100.71%) flex-grow bg-clip-text'>
								Aleksandr
							</p>
							<div
								className='mb-1 h-[18px] w-[53px] p-[1px]'
								style={{
									background:
										'linear-gradient(270deg, rgba(64, 106, 127, 0.45) 9.99%, rgba(27, 50, 61, 0.25) 54.99%, rgba(64, 106, 127, 0.45) 100%)',
									clipPath: 'polygon(5px 0px, calc(100% - 5px) 0px, 100% 50%, calc(100% - 5px) 100%, 5px 100%, 0px 50%)'
								}}
							>
								<div
									className='flex h-full w-full items-center justify-center'
									style={{
										background: 'linear-gradient(270deg, #1B323D -32.2%, rgba(18, 36, 44, 0.45) 33.9%, #1B323D 100%)',
										clipPath:
											'polygon(5px 0px, calc(100% - 5px) 0px, calc(100% - 1px) 50%, calc(100% - 5px) 100%, 5px 100%, 1px 50%)'
									}}
								>
									<p className='text-[8px] font-medium leading-4 tracking-wide text-[#6490A7]'>
										{t('giveaways.creator').toUpperCase()}
									</p>
								</div>
							</div>
						</div>
						<div className='col-span-2 md:hidden'></div>
						<div>
							<p className='mb-2 text-[14px] font-medium leading-4 text-white'>{t('giveaways.name_giveaway')}</p>
							<Input
								value={name}
								onChange={setName}
								startContent={<IconLock className='h-5 w-5 fill-[#60719A]' />}
								placeholder={t('giveaways.name_giveaway_placeholder')}
								classNames={{
									inputWrapper: '!border-[#1E2536] !bg-[#141925] rounded-[8px]',
									input: 'text-[14px]',
									mainWrapper: 'w-full'
								}}
							/>
						</div>
						<div>
							<p className='mb-2 text-[14px] font-medium leading-4 text-white'>{t('giveaways.users_limit')}</p>
							<Input
								value={name}
								onChange={setName}
								startContent={<IconPeople className='h-5 w-5 fill-[#60719A]' />}
								placeholder={t('giveaways.users_limit_placeholder')}
								classNames={{
									inputWrapper: '!border-[#1E2536] !bg-[#141925] rounded-[8px]',
									input: 'text-[14px]',
									mainWrapper: 'w-full'
								}}
							/>
						</div>
						<div className='col-span-1 md:hidden'></div>
						<div>
							<p className='mb-2 text-[14px] font-medium leading-4 text-white'>{t('giveaways.custom_giveaway_link')}</p>
							<Input
								value={name}
								onChange={setName}
								startContent={<IconLock className='h-5 w-5 fill-[#60719A]' />}
								placeholder={t('giveaways.name_giveaway_placeholder')}
								classNames={{
									inputWrapper: '!border-[#1E2536] !bg-[#141925] rounded-[8px]',
									input: 'text-[14px]',
									mainWrapper: 'w-full'
								}}
							/>
						</div>
						<Popover>
							<PopoverTrigger>
								<div>
									<p className='mb-2 flex justify-between text-[14px] font-medium leading-4 text-white'>
										{t('giveaways.ends')}
										<span className='text-[12px] font-medium text-[#404B65]'>({t('giveaways.max_duration')})</span>
									</p>
									<Input
										value={name}
										onChange={setName}
										startContent={<IconTimer className='h-5 w-5 fill-[#60719A]' />}
										placeholder={t('giveaways.users_limit_placeholder')}
										classNames={{
											inputWrapper: '!border-[#1E2536] !bg-[#141925] rounded-[8px]',
											input: 'text-[14px]',
											mainWrapper: 'w-full'
										}}
									/>
								</div>
							</PopoverTrigger>
							<PopoverContent className='p-0'>
								<DateTimePicker />
							</PopoverContent>
						</Popover>
						<div className='col-span-1 md:hidden'></div>
						<div className='mt-2'>
							<p className='mb-2 text-[14px] font-medium leading-4 text-white'>
								{t('giveaways.make_this_giveaway_private')}
							</p>
							<div className='flex gap-2'>
								<Switch
									color='default'
									classNames={{
										base: 'rounded-sm w-[30px]',
										wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
										thumb:
											"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
									}}
								/>
								<p className='text-[12px] font-medium leading-4 text-[#60719A]'>
									{t('giveaways.private_giveaway_description')}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mb-5 w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
					<div className='flex w-full items-center justify-between gap-3 rounded-t-[12px] bg-[#141925] p-[11px] md:flex-wrap'>
						<div className='flex flex-shrink-0 gap-3 md:w-full md:justify-between'>
							<div className='flex items-center gap-[10px]'>
								<HexagonIcon
									icon={<IconGun className='absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2' />}
								/>
								<div>
									<p className='text-[14px] font-medium'>3 {t('giveaways.skins')}</p>
									<p className='text-[12px] font-medium'>
										<span className='text-[#17E2A5]'>$</span> 131.00
									</p>
								</div>
							</div>
							<div className='flex items-center gap-[10px]'>
								<HexagonIcon
									icon={
										<IconWallet className='absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 fill-[#10AA7C]' />
									}
								/>
								<div>
									<p className='text-[14px] text-white'>
										<span className='text-[#17E2A5]'>$</span> 11.00 <span className='text-[#60719A]'>/</span>{' '}
										<span className='text-[#17E2A5]'>$</span> 17.34
									</p>
									<p className='text-[12px] text-[#60719A]'>{t('giveaways.account_balance_used')}</p>
								</div>
							</div>
						</div>
						<div>
							<div className='flex gap-1'>
								<IconHint className='h-[18px] w-[18px] fill-[#60719A]' />
								<p className='text-[12px] font-medium text-[#60719A]'>
									{t('giveaways.giveaway_choose_description')} <span className='text-[#17E2A5]'>$</span>
									<span className='text-white'>3.00+</span>.
								</p>
							</div>
							<p className='text-right text-[12px] text-[#CE3C3C] md:pl-4 md:text-left'>
								{t('giveaways.minimum_prize_sum')}
							</p>
						</div>
					</div>
					<div className='w-full gap-[7px] rounded-b-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-4'>
						<div className='mb-4 grid auto-rows-auto grid-cols-[repeat(auto-fill,133px)] justify-between gap-2'>
							<CaseItem
								title={caseItems[0].title}
								content={caseItems[0].content}
								price={caseItems[0].price}
								picUrl={caseItems[0].picUrl}
								type={caseItems[0].type}
								name={caseItems[0].name}
								percent={caseItems[0].percent}
							/>
							{Array.from(new Array(15)).map((_, index) => (
								<EmptyCaseCard key={index} />
							))}
						</div>
						<div className='mx-auto flex w-max items-center gap-2 rounded-lg border-1 border-[#1E2536] bg-[#1A202E] px-3 py-[10px]'>
							<IconBucket className='h-6 w-6 fill-[#60719A]' />
							<p className='text-[14px] text-[#60719A]'>
								{t('giveaways.total_cost')} <span className='text-[#17E2A5]'>$</span>
								<span className='text-white'>15.50</span>.
							</p>
						</div>
					</div>
				</div>
				<div className='w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
					<div className='flex w-full items-center justify-start gap-3 rounded-t-[12px] bg-[#141925] p-[11px]'>
						<HexagonIcon
							icon={
								<IconVerification className='absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2' />
							}
						/>
						<p className='ml-[10px] text-[14px] font-medium text-white'>{t('giveaways.entry_requirements')}</p>
					</div>
					<div className='w-full gap-[7px] rounded-b-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#131924_100%)] p-4'>
						<div className='grid grid-cols-5 gap-[10px] 2md:grid-cols-3 md:grid-cols-2'>
							<RequirementCard
								icon={<IconWallet />}
								active
								content={t('giveaways.wallet_requirement')}
							/>
							<RequirementCard
								icon={<IconYoutube />}
								locked
								content={t('giveaways.youtube_requirement')}
							/>
							<RequirementCard
								icon={<IconCaseOpen />}
								content={t('giveaways.case_requirement')}
							/>
							<RequirementCard
								icon={<IconTwitter />}
								content={t('giveaways.twitter_requirement')}
							/>
							<RequirementCard
								icon={<IconVK />}
								content={t('giveaways.vk_requirement')}
							/>
							<RequirementCard
								icon={<IconFacebook />}
								content={t('giveaways.facebook_requirement')}
							/>
							<RequirementCard
								icon={<IconTwitch />}
								locked
								content={t('giveaways.twitch_requirement')}
							/>
							<RequirementCard
								icon={<IconLink />}
								locked
								content={t('giveaways.link_requirement')}
							/>
							<RequirementCard
								icon={<IconTelegram />}
								locked
								content={t('giveaways.telegram_requirement')}
							/>
						</div>
						<hr className='my-4 border-[#222A3D]' />
						<div className='grid grid-cols-5 gap-[10px] 2md:grid-cols-1'>
							<div className='relative col-span-2 h-max rounded-[12px] border-1 border-[#1A2130] bg-[#141925] p-4 2md:col-span-1'>
								<div className='flex items-center gap-2'>
									<RequirementIcon
										icon={<IconWallet />}
										active
									/>
									<p className='text-[12px] font-medium text-white'>{t('giveaways.use_special_code')}</p>
								</div>
								<Button className='!absolute !right-4 !top-4'>
									<div className='h-7 w-7 rounded-md bg-[#1A202F] p-[6px]'>
										<IconTrash />
									</div>
								</Button>
								<p className='mb-2 mt-4 text-[12px] text-[#768BBD]'>{t('giveaways.set_amount')}</p>
								<Input
									value='5.00'
									onChange={() => {
										return
									}}
									startContent={<p className='text-[12px] text-[#18CC96]'>$</p>}
									classNames={{
										inputWrapper: '!border-none !bg-[#1B2233] !rounded-[8px]',
										mainWrapper: 'w-full',
										input: '!text-white'
									}}
								/>
							</div>
							<div className='relative col-span-2 rounded-[12px] border-1 border-[#1A2130] bg-[#141925] p-4 2md:col-span-1'>
								<div className='flex items-center gap-2'>
									<RequirementIcon
										icon={<IconCaseOpen />}
										active
									/>
									<p className='text-[12px] font-medium text-white'>{t('giveaways.buy_case')}</p>
								</div>
								<Button className='!absolute !right-4 !top-4'>
									<div className='h-7 w-7 rounded-md bg-[#1A202F] p-[6px]'>
										<IconTrash />
									</div>
								</Button>
								<p className='mb-2 mt-4 text-[12px] text-[#768BBD]'>{t('giveaways.select_case')}</p>
								<div className='flex gap-2'>
									<Popover
										isOpen={isOpen}
										onOpenChange={v => toggleIsOpen(v)}
									>
										<PopoverTrigger>
											<div className='flex w-full items-center gap-2 rounded-lg bg-[#1B2233] p-2'>
												<Image
													src='/images/case/case-full-2.png'
													width={24}
													height={24}
													alt='option'
												/>
												<div className='flex w-full justify-between 2sm:flex-col'>
													<p className='flex-grow text-[12px] leading-3 text-white'>New begin</p>
													<p className='bg-clip-text text-[12px] leading-3 text-[#10AA7C]'>$3.33</p>
												</div>
												<Button classNames={{ base: 'bg-[#AD4848] rounded-full w-4 h-4 flex-shrink-0' }}>
													<IconClose className='h-2 w-2 fill-[#1B2233]' />
												</Button>
												<div className='flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#252C3F]'>
													<IconArrowDown
														className={clsx('w-[18px] fill-[#60719A] duration-150', isOpen ? 'rotate-180' : 'rotate-0')}
													/>
												</div>
											</div>
										</PopoverTrigger>
										<PopoverContent className='p-0 text-[12px] font-medium leading-4'>
											<div className='flex flex-col gap-2 rounded-lg bg-[#1B2233] p-2'>
												<div className='flex items-center gap-2 rounded-lg border-1 border-[#1E2536] bg-[#141925] px-4 py-[10px]'>
													<p className={!isActive ? 'text-white' : 'text-[#60719A]'}>
														{t('giveaways.community_cases')}
													</p>
													<Switch
														isSelected={isActive}
														onValueChange={v => toggleIsActive(v)}
														color='default'
														classNames={{
															base: 'rounded-sm w-[30px]',
															wrapper:
																'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
															thumb:
																"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
														}}
													/>
													<p className={isActive ? 'text-white' : 'text-[#60719A]'}>{t('giveaways.official_cases')}</p>
												</div>
												<Input
													onChange={() => {
														return
													}}
													value=''
													placeholder='Search'
													startContent={<IconSearch className='h-4 w-4 fill-[#60719A]' />}
													classNames={{
														base: 'w-full max-w-none',
														mainWrapper: 'w-full',
														inputWrapper: 'rounded-lg'
													}}
												/>
												<div className='app-scrollbar max-h-[300px] overflow-auto'>
													<div className='flex flex-col gap-2'>
														{Array.from(new Array(12)).map((_, index) => (
															<Button
																key={index}
																classNames={{
																	base: 'border-1 border-[#2D364B] py-[9px] pl-[7px] pr-[15px] rounded-lg flex items-center gap-2'
																}}
															>
																<Image
																	src='/images/case/case-full-2.png'
																	width={24}
																	height={24}
																	alt='option'
																/>
																<p className='flex-grow text-[12px] leading-3 text-white'>New begin</p>
																<p className='bg-clip-text text-[12px] leading-3 text-[#10AA7C]'>$3.33</p>
															</Button>
														))}
													</div>
												</div>
											</div>
										</PopoverContent>
									</Popover>
									<div className='flex flex-[0_0_100px] items-center justify-between rounded-lg bg-[#1B2233] p-[5px]'>
										<Button
											onPress={() => setCasesCount(v => (v > 1 ? v - 1 : 1))}
											classNames={{ base: 'w-7 h-7 rounded-lg bg-[#252C3F] text-[24px] text-[#60719A] leading-6' }}
										>
											-
										</Button>
										<p className='text-[14px] text-white'>{casesCount}</p>
										<Button
											onPress={() => setCasesCount(v => v + 1)}
											classNames={{ base: 'w-7 h-7 rounded-lg bg-[#252C3F] text-[24px] text-[#60719A] leading-6' }}
										>
											+
										</Button>
									</div>
								</div>
								<div className='mt-[10px] flex items-center justify-center rounded-lg border-1 border-[#1B2233] p-[11px]'>
									<div className='mr-2 flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#60719A] text-[12px] leading-[0px] text-[#141925]'>
										+
									</div>
									<p className='text-[12px] text-[#768BBD]'>{t('giveaways.add_case').toUpperCase()}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
