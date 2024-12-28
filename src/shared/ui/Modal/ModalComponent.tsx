"use client"
import { Modal } from '@/shared/ui/Modal/Modal';
import { useModal } from '@/shared/context/ModalContext';


const ModalComponent: React.FC = () => {
    const { isOpen, closeModal, content, options, headerIcon, headerTitle } = useModal();

    return (
        <Modal onClose={closeModal} autoClose={options.autoClose} isOpen={isOpen} headerIcon={headerIcon} headerTitle={headerTitle}>
            {content}
        </Modal>
    );
};

export default ModalComponent;