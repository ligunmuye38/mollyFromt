'use client'

import React, { ReactNode, createContext, useContext, useState } from 'react'

interface ModalOptions {
	autoClose?: boolean
	onClose?: () => void
}

interface ClassNamesConfig {
	body?: string
	modal?: string
}

interface ModalContextType {
	openModal: (
		content: ReactNode,
		options?: ModalOptions,
		headerIcon?: ReactNode,
		headerTitle?: string,
		classNames?: ClassNamesConfig,
		closeButton?: boolean,
		noHeader?: boolean
	) => void
	closeModal: () => void
	isOpen: boolean
	isInnerModalOpen: boolean
	content: ReactNode
	innerModalContent: ReactNode
	options: ModalOptions
	headerIcon: ReactNode | null
	headerTitle: string
	classNames: ClassNamesConfig
	isCloseButton?: boolean
	openInnerModal: (_: ReactNode) => void
	closeInnerModal: () => void
	noHeader: boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [content, setContent] = useState<ReactNode>(null)
	const [innerModalContent, setInnerModalContent] = useState<ReactNode>(null)
	const [isInnerModalOpen, toggleIsInnerModalOpen] = useState<boolean>(false)
	const [options, setOptions] = useState<ModalOptions>({})
	const [headerIcon, setHeaderIcon] = useState<ReactNode | null>(null)
	const [headerTitle, setHeaderTitle] = useState<string>('')
	const [classNames, setClassNames] = useState<ClassNamesConfig>({ body: '', modal: '' })
	const [isCloseButton, setIsCloseButton] = useState<boolean>(true)
	const [noHeader, setNoHeader] = useState<boolean>(false)

	const openInnerModal = (content: ReactNode) => {
		setInnerModalContent(content)
		toggleIsInnerModalOpen(true)
	}

	const closeInnerModal = () => {
		toggleIsInnerModalOpen(false)
		setInnerModalContent(null)
	}

	const openModal = (
		content: ReactNode,
		options: ModalOptions = {},
		headerIcon: ReactNode | null = null,
		headerTitle: string = '',
		classNames: ClassNamesConfig = { body: '', modal: '' },
		closeButton?: boolean,
		noHeader?: boolean
	) => {
		setContent(content)
		setOptions(options)
		setHeaderIcon(headerIcon)
		setHeaderTitle(headerTitle)
		setIsOpen(true)
		setClassNames(classNames)
		setNoHeader(Boolean(noHeader))
		if (closeButton == true || closeButton == false) {
			setIsCloseButton(closeButton)
		}
	}

	const closeModal = () => {
		if (options.onClose) options.onClose()
		setIsOpen(false)
		setContent(null)
		setHeaderIcon(null)
		setHeaderTitle('')
	}

	return (
		<ModalContext.Provider
			value={{
				openModal,
				closeModal,
				isOpen,
				content,
				options,
				headerIcon,
				headerTitle,
				classNames,
				isCloseButton,
				openInnerModal,
				closeInnerModal,
				innerModalContent,
				isInnerModalOpen,
				noHeader
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export const useModal = (): ModalContextType => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider')
	}
	return context
}
