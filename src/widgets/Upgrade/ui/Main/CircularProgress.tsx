import { CircularProgress as NextCircularProgress } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Button from '@/shared/ui/Button/Button'

const CircularProgress = () => {
	const [percentage, setPercentage] = useState<number>(100)
	const pathname = usePathname()
	const isFailed = pathname.includes('/failed')
	const isSuccess = pathname.includes('/success')
	const t = useTranslations()

	useEffect(() => {
		setTimeout(() => setPercentage(49), 100)
	}, [])

	if (isFailed) {
		return (
			<div className='relative w-max'>
				<div className='flex h-[280px] w-[280px] flex-col items-center justify-center rounded-[100%] border-[7px] border-[#FF4D4D] bg-[linear-gradient(180deg,_rgba(255,_77,_77,_0.15)_0%,_rgba(153,_46,_46,_0.15)_100%)] backdrop-blur-sm'>
					<Button
						classNames={{
							base: '[clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[linear-gradient(0deg,_#E1B514,_#E1B514),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)] w-[116px] h-[48px] p-[2px] mb-[30px]',
							content:
								'flex items-center justify-center [clip-path:polygon(11px_0px,_calc(100%_-_11px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_11px)_100%,_11px_100%,_1px_50%)] bg-[#5D4029] w-full h-full'
						}}
					>
						<p className='text-[14px] font-bold text-[#E1B514]'>+0.52</p>
					</Button>
					<p className='mb-[8px] text-[24px] font-bold text-white'>{t('upgrade').toUpperCase()}</p>
					<p className='mb-[30px] text-[34px] font-bold leading-4 text-[#FF4D4D] [text-shadow:_0px_4px_4px_#00000040]'>
						{t('failed').toUpperCase()}
					</p>
					<Button
						classNames={{
							base: '[clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[#52444A] w-[146px] h-[48px] p-[1px]',
							content:
								'flex items-center justify-center [clip-path:polygon(11px_0px,_calc(100%_-_11px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_11px)_100%,_11px_100%,_1px_50%)] bg-[#453033] w-full h-full'
						}}
					>
						<p className='text-[14px] font-bold text-white'>ROLL: 38789812</p>
					</Button>
				</div>
			</div>
		)
	}

	if (isSuccess) {
		return (
			<div className='relative w-max'>
				<div className='relative flex h-[280px] w-[280px] flex-col items-center justify-end rounded-[100%] border-[7px] border-[#17E2A5] bg-[linear-gradient(180deg,_rgba(23,_226,_165,_0.15)_0%,_rgba(8,_129,_93,_0.15)_100%)] p-5 backdrop-blur-sm'>
					<Image
						className='absolute !left-1/2 !top-0 !h-full !w-auto !max-w-none !-translate-x-1/2'
						src='/images/livefeed/skin-11.png'
						fill
						alt='Upgrded Item'
					/>
					<p className='text-[24px] font-bold text-white'>XM1014</p>
					<p className='text-[14px] text-[#679494]'>Ziggy</p>
					<p className='text-[8px] text-[#679494]'>Field-Tested</p>
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='relative w-max'>
				<svg className='h-0 w-0'>
					<linearGradient
						id='linearColor'
						x1='0'
						y1='0'
						x2='1'
						y2='1'
					>
						<stop
							offset='0%'
							stop-color='#FACA23'
						></stop>
						<stop
							offset='100%'
							stop-color='#C58711'
						></stop>
					</linearGradient>
				</svg>
				<div className='absolute left-1 top-1 h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] rounded-[100%] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(39,_45,_60,_0.45)_0%,_#11141D_100%)]'></div>
				<NextCircularProgress
					size='lg'
					value={percentage}
					classNames={{
						svg: 'w-[280px] h-[280px] -scale-x-100',
						indicator: 'stroke-[url(#linearColor)]',
						track: 'stroke-[#2C354A]'
					}}
					strokeWidth={1}
				></NextCircularProgress>
				<div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center'>
					<p className='mb-4 text-[28px] font-bold leading-[28px] text-[#E1B514]'>9.274 %</p>
					<p className='mb-[25px] text-[12px] font-medium leading-3 text-[#A6B0C6]'>{t('risky_chance')}</p>
					<div className='mb-[14px] [filter:drop-shadow(0_0_14px_#FD3E2459)]'>
						<Button
							classNames={{
								base: '[clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_122.17%,_#FDCD24_141.22%),_linear-gradient(270deg,_#E1B514_6.54%,_#FEDB61_33.68%)] w-[206px] h-[48px] p-[3px]',
								content:
									'flex items-center justify-center [clip-path:polygon(11px_0px,_calc(100%_-_11px)_0px,_calc(100%_-_1px)_50%,_calc(100%_-_11px)_100%,_11px_100%,_1px_50%)] bg-[linear-gradient(0deg,_#E1B514,_#E1B514),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)] w-full h-full'
							}}
						>
							<IconUpgrade className='h-6 w-6 fill-[#121722]' />
							<p className='text-[14px] font-bold text-[#121722]'>{t('upgrade').toUpperCase()}</p>
						</Button>
					</div>
					<div className='flex gap-[6px]'>
						<p className='text-[12px] font-bold text-[#D1D9EB]'>+5.500</p>
						<div className='h-4 w-4 rounded-[3px] border-1 border-[#FDCD24] bg-[#E2B617]'>
							<p className='flex items-center justify-center text-[12px] font-bold leading-[14px] text-[#10151E]'>B</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CircularProgress
