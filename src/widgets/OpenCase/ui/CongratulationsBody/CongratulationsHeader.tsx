import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconClose from '@/shared/assets/icons/icon-close-black.svg'
import IconLogo from '@/shared/assets/icons/icon-congratulation-logo.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from '../OpenCase.module.sass'

const CongratulationsHeader = () => {
	// For translation
	const t = useTranslations()
	const { closeModal } = useModal()

	return (
		<div className={clsx('absolute top-3 z-10 h-auto w-full overflow-hidden', cls.congratulation_logo)}>
			<IconLogo className='mx-auto flex' />
			<div className={clsx('absolute left-1/2 top-1/2', cls.center)}>
				<span className='text-[24px] text-[#141925] text-[700]'>{t('case_congratulation.title')}</span>
			</div>
			<Button
				onPress={() => closeModal()}
				classNames={{
					base: '!absolute top-4 right-8'
				}}
			>
				<div className='h-5 w-5 rounded-md bg-[#0D1018] pl-[6px] pt-[6px]'>
					<IconClose className='h-2 w-2 fill-[#2F374A]' />
				</div>
			</Button>
		</div>
	)
}

export default CongratulationsHeader
