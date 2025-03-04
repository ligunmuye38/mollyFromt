import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconSkinReplacement from '@/shared/assets/icons/icon-skin-replacement.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from './SkinReplacementModal.module.sass'

interface ISkinReplacementModalProps {
	open: boolean
	onClose: () => void
}

const CaseItem = ({ selected, onSelect }: { selected?: boolean; onSelect: (_: boolean) => void }) => {
	return (
		<div
			onClick={() => onSelect(!selected)}
			className={clsx(
				'h-[215px] w-full rounded-[12px] p-[2px] xl:w-full lg:h-[200px] md:h-[160px] 3sm:w-full 2sm:h-[140px]',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#111620] p-[13px]'>
				<div className='flex w-full justify-between'>
					<p className='text-[13px] font-medium leading-[10px] text-[#2F374A] md:text-[10px]'>FT</p>
					<div className='h-3 w-3 rounded-sm bg-[#FF00F5] shadow-[0_0_4px_#FF00F54D] md:h-2 md:w-2'></div>
				</div>
				<div className='h-[87px] w-[120px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md md:h-[60px] md:w-[81px]'>
					<Image
						src='/images/case/skin-2.png'
						className='h-[87px] w-[120px] md:h-[60px] md:w-[81px]'
						width={81}
						height={60}
						alt='gun'
					/>
				</div>
				<div>
					<p className='w-full text-left text-[14px] font-medium text-[#2F374A] md:text-[10px]'>AK-47 | Fire Serpent</p>
					<p className='w-full text-left text-[16px] font-bold text-[#D1D9EB] md:text-[12px]'>$ 456,05</p>
				</div>
			</div>
		</div>
	)
}

function ModalContent() {
	const t = useTranslations()

	const [selectedCase, setSelectedCase] = useState<number>()

	return (
		<div className='w-[1060px] lg:w-[688px] md:w-[560px] 3sm:w-[calc(100vw_-_80px)]'>
			<div className='mb-2 flex items-center gap-4 lg:flex-col'>
				{selectedCase && (
					<div className='h-[87px] w-[120px] flex-shrink-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md md:h-[60px] md:w-[81px]'>
						<Image
							src='/images/case/skin-2.png'
							className='h-[87px] w-[120px] md:h-[60px] md:w-[81px]'
							width={81}
							height={60}
							alt='gun'
						/>
					</div>
				)}
				<p className='text-[12px] font-medium leading-4 text-[#AFB4C0] lg:text-center md:mb-5'>
					{t('skin_replacement_description').split(t('skin_replacement_description_bold'))[0]}
					<span className='text-[#E4B920]'>{t('skin_replacement_description_bold')}</span>
					{t('skin_replacement_description').split(t('skin_replacement_description_bold'))[1]}
				</p>
			</div>
			<div className='app-scrollbar mb-5 grid max-h-[418px] grid-cols-5 gap-[10px] overflow-y-auto lg:grid-cols-4 3sm:grid-cols-3 2sm:gap-1'>
				{Array.from(new Array(20)).map((_, index) => (
					<CaseItem
						key={index}
						selected={selectedCase === index}
						onSelect={() => setSelectedCase(index)}
					/>
				))}
			</div>
			<div className='flex items-center justify-between gap-2 rounded-[12px] border-1 border-[#1A202E] px-5 py-[18px] md:flex-col md:p-2'>
				<div className='flex w-max items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] px-3 py-[9px] 2sm:w-full'>
					<IconBagTick className='mr-2 w-6 fill-[#60719A]' />
					<span className='text-[12px] font-medium leading-4 text-[#60719A] 3sm:text-[10px]'>
						{t('balance_refunded')}:{' '}
						<span className='font-medium text-white'>
							<span className='text-[#17E2A5]'>$</span>15.50
						</span>
					</span>
				</div>
				<Button
					classNames={{
						base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px] 2sm:w-full'),
						content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
					}}
				>
					<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
					<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
						{t('choose').toUpperCase()}
					</span>
				</Button>
			</div>
		</div>
	)
}

function SkinReplacementModal({ open, onClose }: ISkinReplacementModalProps) {
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
				<IconSkinReplacement />,
				translationsRef.current('skin_replacement').toUpperCase(),
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

export default SkinReplacementModal
