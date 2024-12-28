import React, { useRef } from 'react';

import Button from '@/shared/ui/Button/Button';
import Close from '@/shared/assets/icons/icon-modal-close.svg';

import clsx from 'clsx';
import cls from "./Modal.module.sass";

interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
    autoClose?: boolean;
    children: React.ReactNode;
    headerIcon: React.ReactNode;
    headerTitle: string;
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
    isOpen,
    children,
    headerIcon,
    headerTitle,
    autoClose
}) => {
    // Optionally handle autoClose logic here
    if (!isOpen) return null;

    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target != modalRef.current && autoClose == true) {
            onClose();
        }
    };

    return (
        <>
            <div className={clsx('fixed w-screen h-screen z-[102]')}>
                <div className='relative w-full h-full'>
                    <div onClick={handleBackdropClick} className={clsx('relative w-full h-full duration-150', cls.blur_background, isOpen ? 'visible bg-[#0D1018D9]' : 'invisible bg-none')}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none" ref={modalRef}>
                        <div className={clsx(cls.modal)}>
                            <div className={clsx(cls.header, 'flex justify-between items-center w-auto h-auto p-1 gap-4 min-h-[30px]')}>
                                <div className={clsx('flex gap-3')}>
                                    <div className={clsx(cls.header_maxWidth)}>
                                        {headerIcon}
                                    </div>
                                    <span>
                                        {headerTitle}
                                    </span>
                                </div>
                                <Button
                                    startContent={<Close />}
                                    className={clsx('flex justify-center items-center min-w-[30px] min-h-[30px]', cls.header_content)}
                                    onPress={onClose}
                                />
                            </div>
                            <div className={clsx(cls.body)}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};