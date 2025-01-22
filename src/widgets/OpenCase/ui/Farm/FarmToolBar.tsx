'use client'

import { farmPaginationData } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconInstance from '@/shared/assets/icons/icon-instance.svg'
import HeaderBg from '@/shared/assets/section-header-bg-top.svg'
import Button from '@/shared/ui/Button/Button'
import Pagination from '@/shared/ui/Pagination/ui/Pagination'

import cls from '../OpenCase.module.sass'

const FarmToolBar = () => {
	// For translation
	const t = useTranslations()

	const openFarm = useCommonStore(state => state.openFarm)

	return (
		openFarm == true && (
			<div>
				<div className='relative h-auto w-full overflow-hidden py-3'>
					<div className='absolute bottom-0 -z-10 flex h-[74px] w-full md:hidden'>
						<HeaderBg className={clsx(cls.border_top, 'top-[40px]')} />
					</div>
					<div className='flex h-auto min-h-[161px] items-center justify-between gap-5 3md:flex-wrap 3md:justify-center'>
						<div className='flex w-1/3 flex-col items-center justify-center gap-4 3md:w-auto'>
							<span className='flex text-[13px] font-[500] text-[#5F6C87] 2sm:hidden'>
								{t('open_case.count_title')}
							</span>
							<Pagination items={farmPaginationData} />
						</div>
						<div className={clsx('flex w-1/3 flex-col items-center justify-center gap-4 3md:w-auto')}>
							<span className='flex text-[13px] font-[500] text-[#5F6C87] 2sm:hidden'>{t('open_case.click_open')}</span>
							<div
								className={clsx(
									'relative flex h-[52px] min-w-[313px] items-center justify-center',
									cls.btn_hexagon_yellow_shadow
								)}
							>
								<div className={clsx('h-[48px] min-w-[313px]', cls.btn_hexagon_yellow)}>
									<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
										<Button
											fullWidth={true}
											hexagon={true}
											classNames={{
												base: 'w-full h-full'
											}}
											startContent={<IconCase className='h-[20px] w-[22px]' />}
										>
											<span className='text-[15px] font-[900] text-[#000000]'>
												{t('open_case.open_case') + '• $15.50'}
											</span>
										</Button>
									</div>
								</div>
							</div>
						</div>
						<div className='flex w-1/3 flex-col items-center justify-center gap-4 3md:w-auto'>
							<div className='flex gap-2 2sm:hidden'>
								<span className='text-[13px] font-[500] text-[#5F6C87]'>{t('open_case.fast_mod')}</span>
							</div>
							<div
								className={clsx(
									'relative flex h-[52px] min-w-[313px] items-center justify-center',
									cls.btn_hexagon_green_shadow
								)}
							>
								<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_green)}>
									<div className={clsx('h-full w-full', cls.btn_hexagon_green_inner)}>
										<Button
											fullWidth={true}
											hexagon={true}
											classNames={{
												base: 'w-full h-full'
											}}
											startContent={<IconInstance className='h-[14px] w-[20px]' />}
										>
											<span className='text-[15px] font-[900] text-[#000000]'>{t('open_case.instant_result')}</span>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default FarmToolBar
