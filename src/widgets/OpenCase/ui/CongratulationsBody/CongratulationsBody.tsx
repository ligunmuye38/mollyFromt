'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import ActiveCaseItem from '@/entities/CaseItem/ui/ActiveCaseItem'
import { useCommonStore } from '@/entities/Common/model/store'

import IconDollar from '@/shared/assets/icons/icon-dollar.svg'
import IconExclamation from '@/shared/assets/icons/icon-exclamation-mark.svg'
import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import BackdropRays from '@/shared/assets/radial-rays-grey-3.png'
import Button from '@/shared/ui/Button/Button'

import cls from '../OpenCase.module.sass'

interface CongratulationsBodyProps {
	items: any[]
	onClose: () => void
}

const CongratulationsBody = ({ items, onClose }: CongratulationsBodyProps) => {
	// For translation
	const t = useTranslations()

	// Set case count and Current case number
	const setCaseCount = useCommonStore(state => state.setCaseCount)
	const setCurrentCaseNumber = useCommonStore(state => state.setCurrentCaseNumber)

	// Try again function
	const tryAgain = () => {
		setCaseCount(0)
		setCurrentCaseNumber(0)
		onClose()
	}

	return (
		<div className='app-scrollbar relative mt-4 flex h-full max-h-[calc(100vh-150px)] w-full flex-col items-center gap-5 overflow-x-hidden lg:max-h-full'>
			{items.length == 1 && (
				<div className={clsx('relative h-auto w-[490px] py-4 3sm:w-full')}>
					<div className={clsx(cls.congratulation_inner, 'flex h-full w-full items-center justify-center')}>
						<div className='absoulte flex w-full justify-center'>
							<span className='text-[14px] text-[#5F6C87]'>{t('case_congratulation.top_title')}</span>
						</div>
						<Backshape className={cls.backshape} />

						<div className='flex h-full max-w-[320px] items-center justify-center overflow-hidden'>
							<Image
								src={BackdropRays}
								alt='backdrop'
								className={clsx(cls.congratulation_backdrop, '!max-w-md')}
								height={350}
								width={320}
							/>
						</div>

						<div className={clsx(cls.congratulation_inner, cls.center, '!absolute top-1/2')}>
							<div className={clsx('h-[285px] w-[250px]', cls.congratulation, cls['purple'])}></div>
						</div>
					</div>
					<div
						className={clsx(
							cls.congratulation_pic,
							'absolute left-0 top-0 z-[10] flex h-full w-full flex-col items-center justify-center gap-[30px]'
						)}
					>
						<Image
							src={'/images/case/max-skin-1.png'}
							width={250}
							height={186}
							alt={'case'}
						/>
					</div>
				</div>
			)}
			{items.length == 1 && (
				<div className='flex w-full flex-col items-center justify-center gap-3'>
					<span className='text-[26px] text-[#D1D9EB]'>AUG — Dynamics</span>
					<span className='flex gap-2.5 text-[12px]'>
						<span className='text-[#FFFFFF80]'>$1.6</span>
						<span className='text-[#FFFFFF80]'>FT</span>
						<span className='text-[#FFFFFF80]'>0.3%</span>
					</span>
				</div>
			)}

			{items.length > 1 && (
				<div className='mt-4 flex min-w-[300px] max-w-[768px] flex-wrap justify-center gap-3 md:max-w-full'>
					{items.map((item, index) => (
						<ActiveCaseItem
							key={index}
							title={item.title}
							name={item.name}
							price={item.price}
							theme={item.type}
							picUrl={item.picUrl}
						/>
					))}
				</div>
			)}

			<div className={clsx('h-0.5 w-full overflow-hidden', items.length == 1 ? 'hidden' : 'flex')}>
				<div className='w-full border-[2px] border-dotted border-[#282e4b]'></div>
			</div>
			<div className='flex justify-center gap-[9px]'>
				<IconExclamation className='h-[18px] w-[18px] fill-[#5F6C87]' />
				<span className='text-[14px] text-[#5F6C87]'>{t('case_congratulation.bottom_title')}</span>
			</div>
			<div className={clsx('flex gap-2.5', items.length > 1 ? 'flex-row flex-wrap justify-center' : 'flex-col')}>
				<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_yellow)}>
					<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
						<Button
							fullWidth={true}
							hexagon={true}
							classNames={{
								base: 'w-full h-full'
							}}
							onClick={tryAgain}
							startContent={<IconTryagain className='h-[20px] w-[22px]' />}
						>
							<span className='text-[15px] font-[900] text-[#000000]'>{t('case_congratulation.try_again')}</span>
						</Button>
					</div>
				</div>
				<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_green)}>
					<div className={clsx('h-full w-full', cls.btn_hexagon_green_inner)}>
						<Button
							fullWidth={true}
							hexagon={true}
							classNames={{
								base: 'w-full h-full'
							}}
							startContent={<IconDollar className='h-[20px] w-[22px]' />}
						>
							<span className='text-[15px] font-[900] text-[#000000]'>{t('case_congratulation.sell_everything')}</span>
						</Button>
					</div>
				</div>
				<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_purple, items.length > 1 ? 'hidden' : 'flex')}>
					<div className={clsx('h-full w-full', cls.btn_hexagon_purple_inner)}>
						<Button
							fullWidth={true}
							hexagon={true}
							classNames={{
								base: 'w-full h-full'
							}}
						>
							<span className='text-[15px] font-[900] text-[#000000]'>{t('case_congratulation.go_inventory')}</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CongratulationsBody
