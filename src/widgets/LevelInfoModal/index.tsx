import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'

import IconInfo from '@/shared/assets/icons/icon-info-2.svg'
import IconInfo2 from '@/shared/assets/icons/icon-info.svg'
import IconLevel from '@/shared/assets/icons/icon-level.svg'
import { useModal } from '@/shared/context/ModalContext'

interface ILevelInfoModalProps {
	open: boolean
	onClose: () => void
}

const ModalContent = () => {
	const t = useTranslations()

	return (
		<div className='w-[1020px] lg:w-[768px] md:w-[calc(100vw_-_80px)]'>
			<div className='mb-5 flex items-center gap-2 rounded-xl border-1 border-[#F4AD5C59] bg-[#F4AD5C26] p-3 lg:items-start'>
				<IconInfo2 className='h-[30px] w-[30px] fill-[#F4AD5C]' />
				<p className='text-[14px] font-medium leading-4'>{t('level_info_description')}</p>
			</div>
			<div className='mb-[10px] grid grid-cols-4 rounded-lg bg-[#191F2D] p-[13px] text-[12px] leading-3 text-[#414B63] md:grid-cols-3 md:text-[10px]'>
				<p className='text-left'>{t('level').toUpperCase()}</p>
				<p className='text-center'>{t('level_progress').toUpperCase()}</p>
				<p className='text-center'>{t('referral_bonus').toUpperCase()}</p>
				<p className='text-right md:hidden'>{t('your_earnings').toUpperCase()}</p>
			</div>
			<div className='flex flex-col gap-[10px]'>
				{Array.from(new Array(7)).map((_, index) => (
					<div
						key={index}
						className={clsx(
							'grid h-[48px] grid-cols-4 items-center justify-center rounded-xl bg-[#1B2232] px-[15px] md:grid-cols-3',
							index === 5 ? 'border-2 border-[#24FDBCA6]' : 'border-2 border-[#1B2232]',
							'text-[14px] md:text-[10px]'
						)}
						style={{
							background:
								index === 5
									? 'linear-gradient(0deg, rgba(16, 170, 124, 0.15), rgba(16, 170, 124, 0.15)), linear-gradient(180deg, rgba(36, 253, 188, 0) 0%, rgba(36, 253, 188, 0.0975) 100%)'
									: ''
						}}
					>
						<div className='flex items-center gap-2'>
							<IconLevel />
							<p className='font-bold text-white'>
								{index + 1} {t('level').toUpperCase()}
							</p>
						</div>
						<p className='text-center font-bold text-white'>
							<span className='text-[#17E2A5]'>$</span> 100 <span className='text-[#465067]'>/</span>{' '}
							<span className='text-[#17E2A5]'>$</span> 1000.00
						</p>
						<p className='text-center font-bold text-white'>
							<span className='text-[#17E2A5]'>UP</span> To 10% <span className='text-[#465067]'>/</span>{' '}
							<span className='text-[#17E2A5]'>$</span> 0.30
						</p>
						<p className='text-right text-[14px] font-bold text-white md:hidden'>
							1 <span className='text-[#17E2A5]'>%</span>
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

function LevelInfoModal({ open, onClose }: ILevelInfoModalProps) {
	const t = useTranslations()
	const { openModal, isOpen } = useModal()

	const translationsRef = useRef(t)
	const openModalRef = useRef(openModal)
	const onCloseRef = useRef(onClose)

	useEffect(() => {
		if (!isOpen) onCloseRef.current()
	}, [isOpen])

	useEffect(() => {
		if (open) {
			openModalRef.current(
				<ModalContent />,
				{},
				<IconInfo />,
				translationsRef.current('level_info').toUpperCase(),
				{
					body: '',
					modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
				},
				true
			)
		}
	}, [open])

	return <></>
}

export default LevelInfoModal
