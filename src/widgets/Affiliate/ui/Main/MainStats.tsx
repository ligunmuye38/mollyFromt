import { chartData, periods } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import IconDownload from '@/shared/assets/icons/icon-document-download.svg'
import IconGallery from '@/shared/assets/icons/icon-gallery.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import IconUserAdd from '@/shared/assets/icons/icon-user-add.svg'
import IconWallet from '@/shared/assets/icons/icon-wallet-2.svg'
import Button from '@/shared/ui/Button/Button'
import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'

const StatsChart = () => {
	return (
		<ResponsiveContainer
			width='100%'
			height={300}
			minHeight={205}
		>
			<LineChart
				className='!w-full'
				data={chartData}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid stroke='#202838' />
				<XAxis
					dataKey='name'
					stroke='#202838'
				/>
				<YAxis
					stroke='#202838'
					width={20}
				/>
				<Tooltip />
				<Line
					type='monotone'
					dot={false}
					dataKey='pv'
					stroke='#E1B514'
				/>
				<Line
					type='monotone'
					dot={false}
					dataKey='uv'
					stroke='#10AA7C'
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}

const Avatar = () => {
	return (
		<div className='relative'>
			<Image
				src='/images/avatars/4.jpg'
				className='absolute left-[4px] top-[5px]'
				style={{
					clipPath:
						"path('M14.2512 1.21906C15.3341 0.593846 16.6683 0.593846 17.7512 1.21906L28.7927 7.59387C29.8756 8.21909 30.5427 9.37453 30.5427 10.625V23.3746C30.5427 24.625 29.8756 25.7805 28.7927 26.4057L17.7512 32.7805C16.6683 33.4057 15.3341 33.4057 14.2512 32.7805L3.20974 26.4057C2.12684 25.7805 1.45974 24.625 1.45974 23.3746V10.625C1.45974 9.37453 2.12684 8.21909 3.20974 7.59387L14.2512 1.21906Z')"
				}}
				width={30}
				height={30}
				alt='icon'
			/>
			<svg
				width='40'
				height='44'
				viewBox='0 0 40 44'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18.5 2.02073C19.4282 1.48483 20.5718 1.48483 21.5 2.02073L36.5526 10.7113C37.4808 11.2472 38.0526 12.2376 38.0526 13.3094V30.6906C38.0526 31.7624 37.4808 32.7528 36.5526 33.2887L21.5 41.9793C20.5718 42.5152 19.4282 42.5152 18.5 41.9793L3.44744 33.2887C2.51924 32.7528 1.94744 31.7624 1.94744 30.6906V13.3094C1.94744 12.2376 2.51924 11.2472 3.44744 10.7113L18.5 2.02073Z'
					stroke='#191A2B'
					stroke-width='2'
				/>
				<path
					d='M18.5 2.02073C19.4282 1.48483 20.5718 1.48483 21.5 2.02073L36.5526 10.7113C37.4808 11.2472 38.0526 12.2376 38.0526 13.3094V30.6906C38.0526 31.7624 37.4808 32.7528 36.5526 33.2887L21.5 41.9793C20.5718 42.5152 19.4282 42.5152 18.5 41.9793L3.44744 33.2887C2.51924 32.7528 1.94744 31.7624 1.94744 30.6906V13.3094C1.94744 12.2376 2.51924 11.2472 3.44744 10.7113L18.5 2.02073Z'
					stroke='url(#paint0_linear_4421_10727)'
					stroke-width='2'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_4421_10727'
						x1='20'
						y1='0'
						x2='20'
						y2='44'
						gradientUnits='userSpaceOnUse'
					>
						<stop
							offset='0.31841'
							stop-color='#272948'
							stop-opacity='0'
						/>
						<stop
							offset='1'
							stop-color='#35375E'
						/>
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

const MainStats = () => {
	const t = useTranslations()
	const [activePeriod, setActivePeriod] = useState<string>(periods[0])
	const [stats, setStats] = useState<boolean>(false)

	return (
		<div>
			<div className='mb-5 grid grid-cols-2 gap-5 lg:grid-cols-1'>
				<div className='hidden rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] lg:block'>
					<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
						<div className='mb-[10px] grid h-[39px] w-full grid-cols-2 gap-3'>
							<Button
								onPress={() => setStats(false)}
								classNames={{
									base: clsx(
										'w-full rounded-[10px]',
										stats ? 'border-[#283245] border-1 bg-[#1F2737]' : 'bg-[#E1B514] border-1 border-[#E1B514]'
									)
								}}
							>
								<IconUserAdd className={clsx('h-6 w-6', stats ? 'fill-[#536180]' : 'fill-[#191F2D]')} />
								<p className={clsx(stats ? 'text-[#536180]' : 'text-[#191F2D]')}>{t('register').toUpperCase()}</p>
							</Button>
							<Button
								onPress={() => setStats(true)}
								classNames={{
									base: clsx(
										'w-full rounded-[10px]',
										!stats ? 'border-[#283245] border-1 bg-[#1F2737]' : 'bg-[#E1B514] border-1 border-[#E1B514]'
									)
								}}
							>
								<IconWallet className={clsx('h-6 w-6', !stats ? 'fill-[#536180]' : 'fill-[#191F2D]')} />
								<p className={clsx(!stats ? 'text-[#536180]' : 'text-[#191F2D]')}>{t('payments').toUpperCase()}</p>
							</Button>
						</div>
						<div className='mb-3 flex justify-center gap-2'>
							<div className='flex items-center gap-2'>
								{periods.map((value, index) => (
									<Button
										onPress={() => setActivePeriod(value)}
										key={index}
										classNames={{
											base: `${activePeriod === value ? 'bg-[#E1B514]' : 'bg-[#272F40]'} rounded-[8px] h-[34px] px-[14px]`,
											content: `${activePeriod === value ? 'text-[#191F2D]' : 'text-[#536180]'} text-[14px] font-bold`
										}}
									>
										{value}
									</Button>
								))}
							</div>
						</div>
						<StatsChart />
					</div>
				</div>
				<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] lg:hidden'>
					<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
						<div className='mb-3 flex justify-between gap-2'>
							<div className='flex items-center gap-[5px]'>
								<IconUserAdd className='h-6 w-6 fill-white' />
								<p>{t('register').toUpperCase()}</p>
							</div>
							<div className='flex items-center gap-2'>
								{periods.map((value, index) => (
									<Button
										onPress={() => setActivePeriod(value)}
										key={index}
										classNames={{
											base: `${activePeriod === value ? 'bg-[#E1B514]' : 'bg-[#272F40]'} rounded-[8px] h-[34px] px-[14px]`,
											content: `${activePeriod === value ? 'text-[#191F2D]' : 'text-[#536180]'} text-[14px] font-bold`
										}}
									>
										{value}
									</Button>
								))}
							</div>
						</div>
						<StatsChart />
					</div>
				</div>
				<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px] lg:hidden'>
					<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
						<div className='mb-3 flex justify-between gap-2'>
							<div className='flex items-center gap-[5px]'>
								<IconWallet className='h-6 w-6 fill-white' />
								<p>{t('payments').toUpperCase()}</p>
							</div>
							<div className='flex items-center gap-2'>
								{periods.map((value, index) => (
									<Button
										onPress={() => setActivePeriod(value)}
										key={index}
										classNames={{
											base: `${activePeriod === value ? 'bg-[#E1B514]' : 'bg-[#272F40]'} rounded-[8px] h-[34px] px-[14px]`,
											content: `${activePeriod === value ? 'text-[#191F2D]' : 'text-[#536180]'} text-[14px] font-bold`
										}}
									>
										{value}
									</Button>
								))}
							</div>
						</div>
						<StatsChart />
					</div>
				</div>
			</div>
			<div className='mb-5 rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
				<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
					<div className='mb-4 flex items-center gap-[5px]'>
						<IconPeople className='h-6 w-6 fill-white' />
						<p>{t('all_referrals').toUpperCase()}</p>
					</div>
					<div className='mb-[10px] grid grid-cols-3 gap-2 rounded-[10px] bg-[#202737] px-5 py-[14px] text-[12px] leading-3 text-[#60719A] 3sm:grid-cols-2'>
						<p>{t('player')}</p>
						<p className='text-center 3sm:hidden'>{t('registration_date')}</p>
						<p className='text-right'>{t('income')}</p>
					</div>
					<div className='flex flex-col gap-2'>
						{Array.from(new Array(6)).map((_, index) => (
							<div
								className='grid grid-cols-3 items-center gap-2 rounded-[14px] bg-[#11151F] px-5 py-2 3sm:grid-cols-2'
								key={index}
							>
								<div className='flex items-center gap-2'>
									<Avatar />
									<p className='text-[14px] font-bold text-white'>Alexander</p>
								</div>
								<p className='text-center text-[14px] font-bold text-white 3sm:hidden'>13.06.2024 11:39</p>
								<p className='text-right text-[14px] font-bold text-white'>
									<span className='text-[#17E2A5]'>$ </span>
									400.34
								</p>
							</div>
						))}
					</div>
					<div className='mt-2 flex justify-center'>
						<PaginationBar
							page={1}
							setPage={() => {
								return
							}}
							total={5}
						/>
					</div>
				</div>
			</div>
			<div className='rounded-[12px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[1px]'>
				<div className='relative h-full w-full items-center rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_#141925_100%)] px-5 py-[15px]'>
					<div className='mb-4 flex items-center gap-[5px]'>
						<IconGallery className='h-6 w-6 fill-white' />
						<p>{t('advertising_materials').toUpperCase()}</p>
					</div>
					<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,200px)] justify-between gap-4 2sm:grid-cols-2'>
						{Array.from(new Array(10)).map((_, index) => (
							<div
								key={index}
								className='h-[130px] w-[200px] rounded-[12px] bg-white 2sm:w-full'
							>
								<Button classNames={{ base: 'h-[34px] w-[34px] rounded-lg bg-[#121722] m-3' }}>
									<IconDownload className='h-5 w-5 fill-white' />
								</Button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainStats
