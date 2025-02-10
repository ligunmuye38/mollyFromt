import { caseItems } from '../model/items'
import { CircularProgress } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ReactNode, useMemo } from 'react'
import 'swiper/css'
import 'swiper/scss/pagination'

import IconCopy from '@/shared/assets/icons/icon-copy-2.svg'
import IconGift from '@/shared/assets/icons/icon-gift-box.svg'
import IconLink from '@/shared/assets/icons/icon-link.svg'
import Button from '@/shared/ui/Button/Button'

import CaseItem from './CaseItem'
import cls from './Giveaway.module.sass'
import ParticipantsList from './ParticipantsList'

interface IGiveawayDetailProps {
	mode?: boolean
}

interface IGreenCardProps {
	children: ReactNode
	className?: string
	imageContent?: ReactNode
}

const GreenCard = ({ children, className, imageContent }: IGreenCardProps) => {
	return (
		<div className={clsx('relative', className)}>
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(210.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			<div
				className='absolute left-0 top-0 h-full w-full scale-x-[-1] rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(210.03deg, rgba(16, 170, 152, 0) 80.11%, rgba(17, 191, 170, 0.35) 100%)'
				}}
			>
				<div className='h-full w-full rounded-[12px] bg-[#121722]'></div>
			</div>
			{imageContent}
			<div
				className='absolute left-0 top-0 h-full w-full rounded-[12px] p-[3px]'
				style={{
					background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.1) 100%)'
				}}
			>
				<div
					className='h-full w-full rounded-[12px] bg-[#121722]'
					style={{
						background: 'linear-gradient(180deg, rgba(16, 170, 152, 0.01) 0%, rgba(16, 170, 152, 0.1) 100%)'
					}}
				></div>
			</div>
			{children}
		</div>
	)
}

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				className='absolute left-[4px] top-[5px]'
				style={{
					clipPath:
						"path('M13.751 1.11408C14.8339 0.488865 16.1681 0.488866 17.251 1.11408L27.9507 7.29152C29.0336 7.91674 29.7007 9.07218 29.7007 10.3226V22.6775C29.7007 23.9279 29.0336 25.0834 27.9507 25.7086L17.251 31.886C16.1681 32.5112 14.8339 32.5112 13.751 31.886L3.05138 25.7086C1.96848 25.0834 1.30139 23.9279 1.30139 22.6775V10.3226C1.30139 9.07218 1.96848 7.91674 3.05139 7.29152L13.751 1.11408Z')"
				}}
				src={'/images/avatars/6.jpg'}
				width={30}
				height={30}
				alt='icon'
			/>
			<svg
				width='39'
				height='43'
				viewBox='0 0 39 43'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18 2.02073C18.9282 1.48483 20.0718 1.48483 21 2.02073L35.6195 10.4613C36.5477 10.9972 37.1195 11.9876 37.1195 13.0594V29.9406C37.1195 31.0124 36.5477 32.0028 35.6195 32.5387L21 40.9793C20.0718 41.5152 18.9282 41.5152 18 40.9793L3.38045 32.5387C2.45225 32.0028 1.88045 31.0124 1.88045 29.9406V13.0594C1.88045 11.9876 2.45225 10.9972 3.38045 10.4613L18 2.02073Z'
					stroke='url(#paint0_linear_120_14703)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_120_14703'
						x1='19.5'
						y1='5.20161'
						x2='19.5'
						y2='43'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							stop-color='#FDCD24'
							stop-opacity='0.19'
						/>
						<stop
							offset='1'
							stop-color='#FDCD24'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const PrizeCard = () => {
	return (
		<GreenCard className='h-[243px] w-[213px] 2sm:w-full'>
			<div className='relative z-10 flex h-full flex-col items-center justify-end py-5'>
				<div className='flex translate-y-1 items-center gap-2'>
					<Avatar />
					<p className='text-[12px] font-bold text-white'>Memory</p>
				</div>
				<Image
					className='mb-2'
					src='/images/skinsWiki/skins-wki-exmaple-item.png'
					width={126}
					height={126}
					alt='image'
				/>
				<p className='mb-1 text-[13px] font-medium text-white'>Cases Magic</p>
				<p className='text-[15px] font-bold text-[#1BD69E]'>$15.50</p>
			</div>
		</GreenCard>
	)
}

const ParticipantCard = () => {
	return (
		<div className='h-[268px] w-[213px] rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[2px] 2sm:w-full'>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[linear-gradient(180deg,_#191F2C_0%,_#141A25_100%)] pb-5'>
				<Image
					className='mb-2'
					src='/images/skinsWiki/skins-wki-exmaple-item.png'
					width={164}
					height={164}
					alt='image'
				/>
				<p className='mb-1 text-[13px] font-medium text-white'>Cases Magic</p>
				<div className='h-[42px] w-[115px] rounded-lg bg-[linear-gradient(90deg,_#434956_0%,_#151A26_40%,_#151A26_60%,_#434956_100%)] p-[2px] text-[15px] text-white'>
					<div className='flex h-full w-full items-center justify-center rounded-lg bg-[linear-gradient(90deg,_#1A1F2B_0%,_#151A26_40%,_#151A26_60%,_#1A1F2B_100%)]'>
						$15.50
					</div>
				</div>
			</div>
		</div>
	)
}

const GiveawayDetail = ({ mode }: IGiveawayDetailProps) => {
	const t = useTranslations()
	const pathname = usePathname()

	const isCompleted = useMemo(() => pathname.includes('/completed'), [pathname])

	return (
		<div>
			<div className='mb-7'>{isCompleted && <ParticipantsList />}</div>
			{!mode ? (
				<div className='mb-5 grid grid-cols-3 gap-5 2md:grid-cols-1'>
					<div className='h-[170px] w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px]'>
						<div className='flex h-full w-full flex-col items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)]'>
							<div className='relative mb-5'>
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
								<p className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] font-medium leading-4 text-white'>
									0/2
								</p>
							</div>
							<div>
								<p className='mb-[11px] max-w-[256px] text-center text-[14px] font-medium leading-4 text-[#FFFFFF]'>
									{t('giveaways.requirements_to_participate')}
								</p>
								<p className='max-w-[256px] text-center text-[12px] font-medium leading-[15px] text-[#485472]'>
									{t('giveaways.requirements_to_participate_description')}
								</p>
							</div>
						</div>
					</div>
					<GreenCard
						className='h-[170px] w-full'
						imageContent={
							<div className='absolute -top-3 left-1/2 -translate-x-1/2'>
								<Image
									className='[mask-image:_linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_80%)]'
									src={'/images/soldier.png'}
									width={127}
									height={119}
									alt='soldier'
								/>
							</div>
						}
					>
						<div className='relative z-10 flex h-full flex-col items-center justify-end py-5'>
							<p className='mb-[4px] text-center text-[14px] font-medium text-white'>
								{t('giveaways.buy_giveaway_squad')} | The Argonaut
							</p>
							<p className='mb-[11px] text-center text-[12px] font-medium leading-[15px] text-[#485472]'>
								0 / 1 {t('giveaways.completed')}
							</p>
							<Button
								classNames={{
									base: clsx(cls.hexagon_btn, 'h-[42px] w-[232px] !p-[1px]'),
									content: clsx(cls.hexagon_btn_inner, '!gap-0')
								}}
							>
								<p className='text-[12px] text-[#121722]'>{t('giveaways.buy_for').toUpperCase()} $1.50</p>
							</Button>
						</div>
					</GreenCard>
					<div className='h-[170px] w-full rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px]'>
						<div className='flex h-full w-full flex-col items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)]'>
							<div className='mb-[17px]'>
								<IconLink />
							</div>
							<div className='mb-[11px]'>
								<p className='mb-[11px] max-w-[256px] text-center text-[14px] font-medium leading-[6px] text-[#FFFFFF]'>
									{t('giveaways.follow_by_link')}
								</p>
								<p className='max-w-[256px] text-center text-[12px] font-medium leading-[5px] text-[#485472]'>
									0 / 1 {t('giveaways.completed')}
								</p>
							</div>
							<Button
								classNames={{
									base: 'w-[232px] h-[42px] p-[1px] bg-[#15BE8B] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]',
									content:
										'w-full h-full bg-[#14222B] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_10px)_100%,_10px_100%,_1px_50%)]'
								}}
							>
								<p className='text-[12px] font-bold text-[#15BE8B]'>{t('giveaways.completed').toUpperCase()}</p>
							</Button>
						</div>
					</div>
					{isCompleted && (
						<>
							<GreenCard className='h-[170px] w-full'>
								<div className='relative z-10 flex h-full flex-col items-center justify-center py-5'>
									<IconGift className='mb-[8px]' />
									<p className='text-center text-[14px] font-medium text-white'>{t('giveaways.refill_by_promocode')}</p>
									<p className='mb-[6px] text-center text-[12px] font-medium text-[#587083]'>
										{t('refill_your_balance_for')} <span className='text-[#23F9B9]'>$</span>{' '}
										<span className='text-white'>0.00 / 5.00</span>
									</p>
									<div className='flex justify-between gap-2'>
										<div
											className='h-[42px] w-[180px] cursor-pointer p-[1px]'
											style={{
												background:
													'linear-gradient(270deg, rgba(64, 106, 127, 0.45) 9.99%, rgba(27, 50, 61, 0.25) 54.99%, rgba(64, 106, 127, 0.45) 100%)',
												clipPath:
													'polygon(12px 0px, calc(100% - 12px) 0px, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0px 50%)'
											}}
										>
											<div
												className='flex h-full w-full items-center justify-center'
												style={{
													background:
														'linear-gradient(270deg, #1B323D -32.2%, rgba(18, 36, 44, 0.45) 33.9%, #1B323D 100%)',
													clipPath:
														'polygon(12px 0px, calc(100% - 12px) 0px, calc(100% - 1px) 50%, calc(100% - 12px) 100%, 12px 100%, 1px 50%)'
												}}
											>
												<div className='mr-[7px]'>
													<p className='text-center text-[10px] font-medium text-[#6490A7]'>
														{t('giveaways.code').toUpperCase()}
													</p>
													<p className='text-center text-[12px] font-bold uppercase text-white'>ok8ryh8k</p>
												</div>
												<div
													className='mr-[10px] h-[26px] w-[42px] p-[1px]'
													style={{
														background:
															'linear-gradient(90deg, rgba(36, 253, 188, 0) 77.44%, #24FDBC 89.52%), linear-gradient(270deg, #10AA7C 40.76%, #24FDBC 57.96%)',
														clipPath:
															'polygon(8px 0px, calc(100% - 8px) 0px, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0px 50%)'
													}}
												>
													<div
														className='flex h-full w-full items-center justify-center'
														style={{
															background:
																'linear-gradient(0deg, #10AA7C, #10AA7C), linear-gradient(180deg, rgba(36, 253, 188, 0) 0%, rgba(36, 253, 188, 0.65) 100%)',
															clipPath:
																'polygon(8px 0px, calc(100% - 8px) 0px, calc(100% - 1px) 50%, calc(100% - 8px) 100%, 8px 100%, 1px 50%)'
														}}
													>
														<p className='text-[10px] font-bold leading-4 text-[#121722]'>+10%</p>
													</div>
												</div>
												<IconCopy clasName='fill-[#668397]' />
											</div>
										</div>
										<Button
											classNames={{
												base: clsx(cls.hexagon_btn, 'h-[42px] w-[150px] !p-[1px]'),
												content: clsx(cls.hexagon_btn_inner, '!gap-0')
											}}
										>
											<p className='text-[12px] text-[#121722]'>{t('giveaways.refill').toUpperCase()} $1.50</p>
										</Button>
									</div>
								</div>
							</GreenCard>
							<GreenCard
								className='h-[170px] w-full'
								imageContent={
									<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
										<Image
											className='[mask-image:_linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_80%)]'
											src={'/images/case/case-full-2.png'}
											width={127}
											height={119}
											alt='soldier'
										/>
									</div>
								}
							>
								<div className='relative z-10 flex h-full flex-col items-center justify-end py-5'>
									<p className='mb-[4px] text-center text-[14px] font-medium text-white'>
										{t('giveaways.buy_new_beginning_case')}
									</p>
									<p className='mb-[11px] text-center text-[12px] font-medium leading-[15px] text-[#485472]'>
										0 / 1 {t('giveaways.completed')}
									</p>
									<Button
										classNames={{
											base: clsx(cls.hexagon_btn, 'h-[42px] w-[232px] !p-[1px]'),
											content: clsx(cls.hexagon_btn_inner, '!gap-0')
										}}
									>
										<p className='text-[12px] text-[#121722]'>{t('giveaways.buy_for').toUpperCase()} $1.50</p>
									</Button>
								</div>
							</GreenCard>
							<GreenCard
								className='h-[170px] w-full'
								imageContent={
									<div className='absolute -top-3 left-1/2 -translate-x-1/2'>
										<Image
											className='[mask-image:_linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_80%)]'
											src={'/images/soldier.png'}
											width={127}
											height={119}
											alt='soldier'
										/>
									</div>
								}
							>
								<div className='relative z-10 flex h-full flex-col items-center justify-end py-5'>
									<p className='mb-[4px] text-center text-[14px] font-medium text-white'>
										{t('giveaways.buy_giveaway_squad')} | The Argonaut
									</p>
									<p className='mb-[11px] text-center text-[12px] font-medium leading-[15px] text-[#485472]'>
										0 / 1 {t('giveaways.completed')}
									</p>
									<Button
										classNames={{
											base: clsx(cls.hexagon_btn, 'h-[42px] w-[232px] !p-[1px]'),
											content: clsx(cls.hexagon_btn_inner, '!gap-0')
										}}
									>
										<p className='text-[12px] text-[#121722]'>{t('giveaways.buy_for').toUpperCase()} $1.50</p>
									</Button>
								</div>
							</GreenCard>
						</>
					)}
				</div>
			) : (
				<div className='mb-5 grid auto-rows-auto grid-cols-[repeat(auto-fill,213px)] justify-between gap-5 2sm:grid-cols-2'>
					{Array.from(new Array(4)).map((_, index) => (
						<ParticipantCard key={index} />
					))}
				</div>
			)}
			<div className='mb-5'>
				<p className='mb-5 text-center text-[18px] font-medium leading-5 text-[#D1D9EB]'>
					{t('giveaways.prizes').toUpperCase()} <span className='text-[14px] font-medium text-[#3C4863]'>(8)</span>
				</p>
				{!mode ? (
					<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,133px)] justify-between gap-3'>
						{caseItems.map((item, index) => (
							<CaseItem
								key={index}
								title={item.title}
								content={item.content}
								price={item.price}
								picUrl={item.picUrl}
								type={item.type}
								name={item.name}
								percent={item.percent}
							/>
						))}
					</div>
				) : (
					<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,213px)] justify-between gap-5 2sm:grid-cols-2'>
						{caseItems.map((_, index) => (
							<PrizeCard key={index} />
						))}
					</div>
				)}
			</div>
			{!isCompleted && <ParticipantsList />}
		</div>
	)
}

export default GiveawayDetail
