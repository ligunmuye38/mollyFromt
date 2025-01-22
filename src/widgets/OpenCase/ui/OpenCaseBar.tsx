'use client'

import { paginationData } from '../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCase from '@/shared/assets/icons/icon-case-open.svg'
import IconInstance from '@/shared/assets/icons/icon-instance.svg'
import HeaderBg from '@/shared/assets/section-header-bg-top.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import Pagination from '@/shared/ui/Pagination/ui/Pagination'

import CongratulationsBody from './CongratulationsBody/CongratulationsBody'
import CongratulationsHeader from './CongratulationsBody/CongratulationsHeader'
import cls from './OpenCase.module.sass'

const OpenCaseBar = () => {
	// For translation
	const t = useTranslations()

	const currentCaseNumber = useCommonStore(state => state.currentCaseNumber)
	const caseCount = useCommonStore(state => state.caseCount)

	// Get setCaseCount function
	const setCaseCount = useCommonStore(state => state.setCaseCount)

	const setCurrentCaseNumber = useCommonStore(state => state.setCurrentCaseNumber)
	const selectedCaseItems = useCommonStore(state => state.selectedCaseItems)

	// Case count value
	const [count, setCount] = useState<number>(0)

	// Balance state
	const [isRefill, setIsRefill] = useState<boolean>(false)

	// Selected case items
	const [caseItems, setCaseItems] = useState<any[]>([])

	// For pagination function
	const setPagination = (value: number) => {
		setCount(value)
	}

	const { openModal, closeModal } = useModal()

	// For open case function
	const openCase = () => {
		if (count > 0) {
			setCaseCount(count)
			setCurrentCaseNumber(0)
		}
	}

	useEffect(() => {
		setCaseCount(0)
	}, [setCaseCount])

	useEffect(() => {
		setCaseItems(selectedCaseItems)
	}, [selectedCaseItems])

	useEffect(() => {
		if (caseCount == currentCaseNumber && caseCount > 0) {
			setTimeout(() => {
				openModal(
					<CongratulationsBody
						items={caseItems}
						onClose={closeModal}
					/>,
					{},
					<CongratulationsHeader />,
					'',
					{
						body: ' !overflow-x-none',
						modal:
							'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center !overflow-x-hidden'
					},
					false
				)
			}, 1500)
		}
	}, [caseCount, caseItems, closeModal, currentCaseNumber, openModal])

	return (
		<div>
			<div className='relative h-auto w-full overflow-hidden py-3'>
				<div className='absolute bottom-0 -z-10 flex h-[74px] w-full md:hidden'>
					<HeaderBg className={clsx(cls.border_top, isRefill == true ? 'top-[30px]' : 'top-[70px]')} />
				</div>
				{isRefill == true ? (
					<div className='mb-4 flex h-auto min-h-[161px] items-center justify-between gap-5 3md:flex-wrap 3md:justify-center'>
						<div className='flex w-1/3 flex-col items-center justify-center gap-4 3md:w-auto'>
							<span className='flex text-[13px] font-[500] text-[#5F6C87] 2sm:hidden'>
								{t('open_case.count_title')}
							</span>
							<Pagination
								items={paginationData}
								onClick={setPagination}
							/>
						</div>
						<div className='flex w-1/3 flex-col items-center justify-center gap-4 3md:w-auto'>
							<span className='flex text-[13px] font-[500] text-[#5F6C87] 2sm:hidden'>{t('open_case.click_open')}</span>
							<div
								className={clsx(
									'relative flex h-[52px] min-w-[313px] items-center justify-center',
									cls.btn_hexagon_yellow_shadow
								)}
							>
								<div className={clsx('h-[48px] w-[313px]', cls.btn_hexagon_yellow)}>
									<div className={clsx('h-full w-full', cls.btn_hexagon_yellow_inner)}>
										<Button
											fullWidth={true}
											hexagon={true}
											classNames={{
												base: 'w-full h-full'
											}}
											startContent={<IconCase className='h-[20px] w-[22px]' />}
											onClick={openCase}
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
				) : (
					<div className='flex h-auto w-full flex-col items-center justify-center gap-4 pb-4'>
						<div className={clsx(cls.btn_refill, 'h-[48px] w-[313px]')}>
							<div className={cls.btn_refill_inner}>
								<Button
									fullWidth={true}
									classNames={{
										base: 'w-full h-full'
									}}
								>
									<span className='text-[15px] font-[900] text-[#DD2C2C]'>
										{'$15.50 ' + t('open_case.refill') + ' $5.50'}
									</span>
								</Button>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center gap-2'>
							<span className='text-[13px] font-[500] text-[#5F6C87]'>{t('open_case.refill_text')}</span>
							<div className={clsx('h-[48px] w-[233px]', cls.btn_hexagon_green)}>
								<div className={clsx('h-full w-full', cls.btn_hexagon_green_inner)}>
									<Button
										fullWidth={true}
										classNames={{
											base: 'w-full h-full'
										}}
										onClick={() => setIsRefill(true)}
									>
										<span className='text-[15px] font-[900] text-[#000000]'>{t('open_case.refill_btn')}</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default OpenCaseBar
