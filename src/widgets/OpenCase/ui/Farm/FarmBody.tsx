'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { useCommonStore } from '@/entities/Common/model/store'

import IconBorder from '@/shared/assets/icons/icon-dotted-border.svg'
import IconHint from '@/shared/assets/icons/icon-hint.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'

import OpenFarm from './OpenFarm'

import cls from '../OpenCase.module.sass'

export const FarmBody = () => {
	// For translation
	const t = useTranslations()

	// Open farm state
	const openFarm = useCommonStore(state => state.openFarm)

	return (
		<div className={clsx(cls.base, 'relative')}>
			<Popover
				placement='bottom'
				offset={15}
			>
				<PopoverTrigger>
					<p className='absolute left-3 top-3 hidden w-max md:block'>
						<IconHint className='h-[34px] w-[34px] fill-[#FFA3A3]' />
					</p>
				</PopoverTrigger>
				<PopoverContent className='w-max p-0'>
					<div className='w-full max-w-[350px] rounded-[12px] bg-[linear-gradient(90deg,_#FAAA65_0%,_#161E37_100%)] p-[1px]'>
						<div className='h-full w-full rounded-[12px] bg-[linear-gradient(270deg,_#151E39_0%,_#714825_100%)] p-[15px]'>
							<p className='mb-[6px] text-[14px] font-[500] uppercase text-[#FFA3A3]'>{t('case_farm.hint_title')}</p>
							<span className='flex flex-col text-[12px] text-[#FFA3A3]'>
								<span>
									{t('case_farm.hint_content1')} {t('case_farm.hint_content2')}
								</span>
							</span>
						</div>
					</div>
				</PopoverContent>
			</Popover>
			<div className={clsx(cls.container, openFarm == false ? '!pt-0' : 'md:!pt-9')}>
				<div className={clsx(cls.type, openFarm == false ? 'hidden' : 'flex justify-center', 'flex md:hidden')}>
					{t('open_case.selected_top')}
				</div>
				{openFarm == true && (
					<div
						className={cls.inner}
						style={{ backgroundImage: `url(${openCaseBg.src})` }}
					>
						<Backshape className={cls.backshape} />
						<div className={clsx(cls.backshape, 'flex')}>
							<Image
								src={'/images/case/case-full-2.png'}
								alt='case'
								width={320}
								height={320}
							/>
						</div>
						<div className={clsx(cls.grid, 'flex w-full flex-row justify-end md:ml-3 md:hidden md:justify-start')}>
							<div className={clsx(cls.farm_hint, 'mr-5 max-w-[374px] md:mx-1 md:mr-0')}>
								<div className={clsx(cls.farm_hint_inner, 'flex gap-2 p-4')}>
									<IconHint className='absolute h-[34px] w-[34px] fill-[#FFA3A3] md:-top-9' />
									<div className='ml-12 flex flex-col gap-1 text-[12px] font-[500] text-[#FFA3A3] md:ml-[15px]'>
										<span className='text-[14px] font-[500] uppercase text-[#FFA3A3]'>{t('case_farm.hint_title')}</span>
										<span className='flex flex-col text-[12px] text-[#FFA3A3]'>
											<span>{t('case_farm.hint_content1')}</span>
											<span>{t('case_farm.hint_content2')}</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{openFarm == false && (
					<div
						className={cls.inner}
						style={{ backgroundImage: `url(${openCaseBg.src})` }}
					>
						<OpenFarm />
					</div>
				)}
			</div>
			<div className={clsx('relative w-full justify-center overflow-hidden', openFarm == false ? 'hidden' : 'flex')}>
				<IconBorder />
			</div>
		</div>
	)
}
