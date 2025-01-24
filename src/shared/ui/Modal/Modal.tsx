'use client'

import clsx from 'clsx'
import React, { useRef } from 'react'

import Close from '@/shared/assets/icons/icon-modal-close.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Modal.module.sass'

interface ClassNamesConfig {
	body?: string
	modal?: string
}

interface ModalProps {
	onClose: () => void
	isOpen: boolean
	autoClose?: boolean
	children: React.ReactNode
	headerIcon: React.ReactNode
	headerTitle: string
	classNames: ClassNamesConfig
	closeButton?: boolean
}

export const Modal: React.FC<ModalProps> = ({
	onClose,
	isOpen,
	children,
	headerIcon,
	headerTitle,
	autoClose,
	classNames,
	closeButton = true
}) => {
	// Optionally handle autoClose logic here
	if (!isOpen) return null

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const modalRef = useRef<HTMLDivElement | null>(null)

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target != modalRef.current && autoClose == true) {
			onClose()
		}
	}

	return (
		<>
			<div className={clsx('fixed z-[302] h-screen w-screen overflow-y-auto', classNames.body)}>
				<div className={clsx(classNames.modal)}>
					<div
						onClick={handleBackdropClick}
						className={clsx(
							'fixed left-0 top-0 h-screen w-screen duration-150',
							cls.blur_background,
							isOpen ? 'visible bg-[#0D1018D9]' : 'invisible bg-none'
						)}
					></div>
					<div
						className='relative border-none p-3'
						ref={modalRef}
					>
						<div className={clsx(cls.modal)}>
							<div className={clsx(cls.header, 'flex h-auto min-h-[30px] w-auto items-center justify-between gap-4')}>
								<div className={clsx('flex items-center gap-3')}>
									<div className={clsx(cls.header_maxWidth)}>{headerIcon}</div>
									<span>{headerTitle}</span>
								</div>
								{closeButton == true && (
									<Button
										startContent={<Close />}
										className={clsx('flex min-h-[30px] min-w-[30px] items-center justify-center', cls.header_content)}
										onClick={onClose}
									/>
								)}
							</div>
							<div className={clsx(cls.body)}>{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
