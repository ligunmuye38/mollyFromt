'use client'

import { caseItems } from '../../model/items'
import FarmContents from '../Farm/FarmContent'
import FarmLiveFeed from '../Farm/FarmLiveFeed'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconDollar from '@/shared/assets/icons/icon-dollar.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'
import BackdropRays from '@/shared/assets/radial-rays-grey-3.png'
import Button from '@/shared/ui/Button/Button'

import CaseSelectSection from './CaseSelectSection'

import cls from '../OpenCase.module.sass'

const MysteryBody = () => {
	// For translation
	const t = useTranslations()

	const searchParams = useSearchParams()

	return (
		<>
			<div className={clsx(cls.base, 'relative')}>
				<Popover
					placement='bottom'
					offset={15}
				>
					<PopoverTrigger>
						<p className='absolute -top-1 left-3 hidden w-max md:block'>
							<IconHint className='h-[34px] w-[34px] fill-[#FFA3A3]' />
						</p>
					</PopoverTrigger>
					<PopoverContent className='w-max p-0'>
						<div className='w-full max-w-[350px] rounded-[12px] bg-[linear-gradient(90deg,_#FAAA65_0%,_#161E37_100%)] p-[1px]'>
							<div className='h-full w-full rounded-[12px] bg-[linear-gradient(270deg,_#151E39_0%,_#714825_100%)] p-[15px]'>
								<p className='mb-[6px] text-[14px] font-[500] uppercase text-[#FFA3A3]'>{t('case_accept.hint')}</p>
							</div>
						</div>
					</PopoverContent>
				</Popover>
				{searchParams.get('case_id') ? (
					<div className={clsx(cls.container)}>
						<div
							className={clsx(
								cls.type,
								searchParams.get('case_id') ? 'hidden' : 'flex justify-center',
								'flex md:hidden'
							)}
						>
							{t('open_case.selected_top')}
						</div>
						<div
							className={cls.inner}
							style={{ backgroundImage: `url(${openCaseBg.src})` }}
						>
							<Backshape className={cls.backshape} />
							<div className={clsx(cls.backshape, 'flex items-center justify-center')}>
								<div className='absolute flex h-full max-w-[320px] items-center justify-center overflow-hidden opacity-25'>
									<Image
										src={BackdropRays}
										alt='backdrop'
										className={clsx(cls.congratulation_backdrop, '!max-w-md')}
										height={350}
										width={320}
									/>
								</div>
								<div>
									<Image
										src={caseItems[Number(searchParams.get('case_id')) ?? 0].picUrl}
										alt='case'
										width={180}
										height={135}
									/>
								</div>
							</div>
						</div>
						<div className='-translate-y-8'>
							<p className='mb-1 text-center text-[18px] font-medium text-[#D1D9EB]'>
								{caseItems[Number(searchParams.get('case_id')) ?? 0].name}
							</p>
							<p className='flex justify-center gap-4 text-center text-[12px] font-medium text-white'>
								<span className='opacity-50'>{caseItems[Number(searchParams.get('case_id')) ?? 0].price}</span>
								<span className='opacity-25'>{caseItems[Number(searchParams.get('case_id')) ?? 0].title}</span>
								<span className='opacity-25'>0.3%</span>
							</p>
						</div>
						<div className='flex justify-center gap-5'>
							<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_yellow)}>
								<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
									<Button
										fullWidth={true}
										hexagon={true}
										classNames={{
											base: 'w-full h-full'
										}}
										onPress={() => window.history.pushState({}, '', '/case/accept')}
										startContent={<IconTryagain className='h-[20px] w-[22px]' />}
									>
										<span className='text-[15px] font-[900] text-[#000000]'>{t('case_congratulation.try_again')}</span>
									</Button>
								</div>
							</div>
							<div className={clsx('flex h-[48px] w-[313px]', cls.btn_hexagon_green)}>
								<div className={clsx('h-full w-full', cls.btn_hexagon_green_inner)}>
									<Button
										fullWidth={true}
										hexagon={true}
										classNames={{
											base: 'w-full h-full'
										}}
										startContent={<IconDollar className='h-[20px] w-[22px]' />}
									>
										<span className='text-[15px] font-[900] text-[#000000]'>
											{t(`sell_for`)}
											{` $${caseItems[Number(searchParams.get('case_id')) ?? 0].price}`}
										</span>
									</Button>
								</div>
							</div>
							<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_white)}>
								<div className={clsx('h-full w-full', cls.btn_hexagon_white_inner)}>
									<Button
										fullWidth={true}
										hexagon={true}
										classNames={{
											base: 'w-full h-full'
										}}
										startContent={<IconUpgrade className='h-[20px] w-[22px]' />}
									>
										<span className='text-[15px] font-[900] text-[#000000]'>{t('upgrade')}</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className={clsx(cls.container, 'md:!pt-9')}>
						<div className={clsx(cls.inner, 'flex items-center justify-center')}>
							<div
								className={clsx(
									cls.accept_group,
									'flex w-[376px] flex-col items-center justify-center gap-[15px] md:w-full'
								)}
							>
								<div className={'flex flex-col items-center justify-center gap-[15px] pb-5'}>
									<Image
										src={'/images/case/case-full-3.png'}
										alt='case'
										width={198}
										height={182}
									/>
									<div className='flex w-full flex-col items-center justify-center gap-4 3md:w-auto'>
										<span className='text-[13px] font-[500] text-[#5F6C87]'>{t('case_accept.cases_magic')}</span>
										<div className={clsx('h-[48px] w-[243px]', cls.btn_hexagon_yellow)}>
											<div className={clsx('pointer-events-none h-full w-full', cls.btn_hexagon_yellow_inner)}>
												<Button
													fullWidth={true}
													hexagon={true}
													classNames={{
														base: 'w-full h-full'
													}}
													startContent={<IconCase className='h-[20px] w-[22px]' />}
												>
													<span className='text-[15px] font-[900] text-[#000000]'>
														{t('open_case.open_case') + ' • $15.50'}
													</span>
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className={clsx(
									cls.grid,
									'!absolute flex w-full flex-row justify-end md:ml-3 md:hidden md:justify-start'
								)}
							>
								<div className={clsx(cls.farm_hint, 'mr-5 w-[calc(50%_-_228px)] max-w-[374px] md:mx-1 md:mr-0')}>
									<div className={clsx(cls.farm_hint_inner, 'flex gap-2 p-4')}>
										<IconHint className='absolute h-[34px] w-[34px] fill-[#FFA3A3] md:-top-9' />
										<div className='ml-12 flex flex-col gap-1 text-[12px] font-[500] text-[#FFA3A3] md:ml-[15px]'>
											<span className='text-[14px] font-[500] uppercase text-[#FFA3A3]'>{t('case_accept.hint')}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className='my-5'>
				<CaseSelectSection />
			</div>
			{!searchParams.get('case_id') && (
				<>
					<FarmLiveFeed />
					<FarmContents />
				</>
			)}
		</>
	)
}

export default MysteryBody
