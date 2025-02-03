'use client'

import { useModal } from '@/shared/context/ModalContext'
import { Modal } from '@/shared/ui/Modal/Modal'

const ModalComponent: React.FC = () => {
	const {
		isOpen,
		closeModal,
		content,
		innerModalContent,
		isInnerModalOpen,
		options,
		headerIcon,
		headerTitle,
		classNames,
		noHeader,
		isCloseButton
	} = useModal()

	return (
		<Modal
			noHeader={noHeader}
			onClose={closeModal}
			autoClose={options.autoClose}
			isOpen={isOpen}
			innerModalContent={innerModalContent}
			isInnerModalOpen={isInnerModalOpen}
			headerIcon={headerIcon}
			headerTitle={headerTitle}
			classNames={classNames}
			closeButton={isCloseButton}
		>
			{content}
		</Modal>
	)
}

export default ModalComponent
