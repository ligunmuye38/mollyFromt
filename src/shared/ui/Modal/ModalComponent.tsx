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
		isCloseButton
	} = useModal()

	return (
		<Modal
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
