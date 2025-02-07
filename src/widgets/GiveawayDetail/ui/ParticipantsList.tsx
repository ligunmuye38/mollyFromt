import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const Particiant = () => {
	return (
		<Popover
			showArrow
			placement='bottom'
			classNames={{ base: 'before:bg-[#242B3B]' }}
		>
			<PopoverTrigger>
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
			</PopoverTrigger>
			<PopoverContent className='!rounded-md bg-[#242B3B]'>
				<p className='text-[12px] font-medium text-[#8B99BA]'>Alibek Ananiev</p>
			</PopoverContent>
		</Popover>
	)
}

const ParticipantsList = () => {
	const t = useTranslations()
	const pathname = usePathname()
	const isCompleted = useMemo(() => pathname.includes('/completed'), [pathname])

	return (
		<div>
			<p className='mb-5 text-center text-[18px] font-medium leading-5 text-[#D1D9EB]'>
				{t('giveaways.participants').toUpperCase()} <span className='text-[14px] font-medium text-[#3C4863]'>(28)</span>
			</p>
			{isCompleted ? (
				<div className='relative rounded-[12px] border-1 border-[#1F2639] bg-[#171D2C] py-[10px]'>
					<div className='flex justify-center gap-[13px] overflow-hidden'>
						{Array.from(new Array(27)).map((_, index) => (
							<div
								className='flex h-[70px] w-[70px] justify-center'
								key={index}
							>
								<Particiant />
							</div>
						))}
						<div className='absolute left-1/2 top-1/2 z-10 h-[100px] w-1 -translate-y-1/2 rounded-sm bg-[#FFC600] [box-shadow:_0px_0px_18px_0px_#FFC600CC]'></div>
					</div>
				</div>
			) : (
				<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,70px)] gap-[13px]'>
					{Array.from(new Array(28)).map((_, index) => (
						<div
							className='flex h-[70px] w-[70px] justify-center'
							key={index}
						>
							<Particiant />
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default ParticipantsList
