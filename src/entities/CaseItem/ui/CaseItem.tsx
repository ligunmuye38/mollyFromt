'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { ImageBgType } from '@/widgets/Cases/model/types'

import IconLogo from '@/shared/assets/icons/icon-caseitem-back-logo.svg'
import { CaseItemTheme } from '@/shared/const/rarity'

import cls from './CaseItem.module.sass'

interface CaseItemProps {
	className?: string
	title?: string
	content?: string
	percent?: number
	picUrl: string
	name?: string
	price?: string
	type: ImageBgType
	isHover?: boolean
	backTheme?: CaseItemTheme
	hoverContent?: React.ReactNode
	isOpen?: boolean
	isRotate?: boolean
	isActive?: boolean
	onClick?: () => void
}

const CaseItem = ({
	title,
	content,
	percent,
	picUrl,
	name,
	price,
	type,
	className,
	isHover = false,
	isRotate = true,
	hoverContent,
	isOpen = true,
	backTheme,
	isActive = false,
	onClick
}: CaseItemProps) => {
	// For translation
	const t = useTranslations()

	// Get background based on type
	const getBackground = (type: ImageBgType) => {
		switch (type) {
			case 'yellow':
				return cls.item_bg_yellow

			case 'pink':
				return cls.item_bg_pink

			case 'purple':
				return cls.item_bg_purple

			case 'blue':
				return cls.item_bg_blue

			case 'limit_blue':
				return cls.item_bg_limit_blue

			default:
				return cls.item_bg_yellow
		}
	}

	// Get mark background color
	const getMarkBackground = (type: ImageBgType) => {
		switch (type) {
			case 'yellow':
				return cls.item_mark_yellow

			case 'pink':
				return cls.item_mark_pink

			case 'purple':
				return cls.item_mark_purple

			case 'blue':
				return cls.item_mark_blue

			case 'limit_blue':
				return cls.item_mark_limit_blue

			default:
				return cls.item_mark_yellow
		}
	}

	const [isMobile, setIsMobile] = useState(false)

	const isMobileDevice = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

	useEffect(() => {
		setIsMobile(isMobileDevice().valueOf())
		console.log(isMobileDevice().valueOf())
	}, [])

	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isRotated, _setIsRotated] = useState<boolean>(isRotate)
	const [isOpened, setIsOpened] = useState<boolean>(isOpen)
	const [isRotation, setIsRotation] = useState<boolean>(false)

	const hoverHandle = (value: boolean) => {
		if (isHover == true && isOpened == true && isMobile == false) {
			setIsHovered(value)
		}
	}

	// click function
	const clickHandle = () => {
		if (isMobile == true && isHover == true && isHovered == false) {
			setIsHovered(true)
		} else {
			setIsHovered(false)
			if (isRotated == true) {
				if (isOpened == false) {
					setIsRotation(true)
					setTimeout(() => {
						setIsOpened(true)
					}, 150)
				} else if (isOpened == true) {
					if (onClick) {
						onClick()
					}
				}
			}
		}
	}

	return (
		<div
			className={clsx('h-auto w-auto hover:cursor-pointer', isRotation && cls.open_rotation)}
			onClick={() => clickHandle()}
			onMouseEnter={() => hoverHandle(true)}
			onMouseLeave={() => hoverHandle(false)}
		>
			<div className={clsx(cls.item_box, backTheme && cls[backTheme])}>
				{isRotated == true && (
					<>
						{isOpened == true && (
							<div
								className={clsx(
									'relative h-[153px] w-[133px] overflow-hidden rounded-[12px] p-[1px]',
									isActive ? 'bg-[#10AA7C]' : 'bg-[#161C28]'
								)}
							>
								<div
									className={clsx(
										'relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[12px] p-[13px]',
										cls.item_shadow,
										cls.item,
										className
									)}
								>
									<div className={clsx('flex items-start justify-between')}>
										<span className='text-[10px] font-[700] uppercase text-[#2F374A]'>{title}</span>
										<div className='flex items-start gap-2'>
											<div className={clsx('flex flex-col items-end justify-end gap-[3px]')}>
												<span className='text-[8px] font-[500] uppercase text-[#2F374A]'>{content}</span>
												<span className='text-[12px] font-[500] text-[#10AA7C]'>{percent}%</span>
											</div>
											<div className={clsx('mt-1 h-[8px] w-[8px] rounded-[2px]', getMarkBackground(type))}></div>
										</div>
									</div>
									<div className='absolute left-[13px] top-[29px] h-[76px] w-[107px]'>
										<div
											className={clsx('relative flex h-full w-full items-center justify-center', getBackground(type))}
										>
											<Image
												src={picUrl}
												height={59}
												width={80}
												alt='box'
											/>
										</div>
									</div>
									<div className='flex flex-col gap-1'>
										<span className='text-[10px] font-[500] text-[#2F374A]'>{name}</span>
										<span className='text-[12px] font-[500] text-[#D1D9EB]'>$ {price}</span>
									</div>
								</div>
								<div
									className={clsx(
										'absolute left-0 z-[1] h-full w-full bg-[#1E2536A6] duration-400',
										cls.hover_blur,
										isHovered == true ? 'top-0' : 'top-full'
									)}
								>
									{hoverContent && hoverContent}
								</div>
							</div>
						)}
						{isOpened == false && (
							<div
								className={clsx(
									'relative flex h-[153px] w-[133px] flex-col items-center justify-center rounded-[12px] p-[13px]',
									cls.item_back,
									backTheme && cls[backTheme]
								)}
							>
								<IconLogo />
							</div>
						)}
					</>
				)}
				{isRotated == false && (
					<div
						className={clsx(
							'relative flex h-[153px] w-[133px] flex-col items-center justify-center rounded-[12px] bg-[#141925] p-[13px]',
							cls.item_back
						)}
					>
						<div className={clsx(cls.item_open_hexagon)}>
							<div className={clsx(cls.item_open_hexagon_body)}>
								<div className={clsx(cls.item_open_hexagon_inner, 'flex items-center justify-center')}>
									<span className='text-12px font-[700] uppercase text-[#516080]'>{t('open')}</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default CaseItem
