"use client"
import { useTranslations } from "next-intl"
import Button from '@/shared/ui/Button/Button'

import { useModal } from "@/shared/context/ModalContext"
import SignInModal from "@/widgets/auth/SignInModal"
import SignUpModal from "@/widgets/auth/SignUpModal"
import ForgetPassword from "@/widgets/auth/ForgetPasswordModal"

import HeaderIcon from '@/shared/assets/icons/icon-auth.svg'

import cls from './Header.module.sass'





export const SignIn = () => {
    const { openModal } = useModal();


    const t = useTranslations()

    const signInModal = () => {
        openModal(
            <SignInModal onClickForgetPassword={foregetPassword} onClickSignUp={signUpModal} />,
            {},
            <HeaderIcon />,
            t('auth.sigin_btn_text')
        );
    };

    const signUpModal = () => {
        openModal(
            <SignUpModal onClickSignIn={signInModal} />,
            {},
            <HeaderIcon />,
            t('auth.signup_btn_text')
        );
    }

    const foregetPassword = () => {
        openModal(
            <ForgetPassword />,
            {},
            <HeaderIcon />,
            t('auth.password_recovery')
        );
    }

    return (
        <>
            <Button
                strokeSize='thin'
                theme='grey-2'
                classNames={{
                    base: [cls.btn, 'lg:w-full', 'text-black'], content: [cls.btn_content, cls.bg_gradent_gray, 'text-black']
                }}
                onPress={signInModal}
            >
                <span className="text-[#151A26]">
                    {t('auth.signin')}
                </span>
            </Button >
        </>
    );
}