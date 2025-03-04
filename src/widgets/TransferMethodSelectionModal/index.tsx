import DepositModal from '../DepositModal/ui'
import WithdrawalModal from '../WithdrawalModal/ui'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef } from 'react'

import IconSkinReplacement from '@/shared/assets/icons/icon-skin-replacement.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

interface ITransferMethodSelectionModalProps {
	open: boolean
	onClose: () => void
}

function ModalContent() {
	const t = useTranslations()

	const { openModal } = useModal()
	const openModalRef = useRef(openModal)

	const handleTransferToBalance = useCallback(() => {
		openModalRef.current(
			<DepositModal />,
			{},
			null,
			'',
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true,
			true
		)
	}, [])

	const handleWithdrawToWallet = useCallback(() => {
		openModalRef.current(
			<WithdrawalModal />,
			{},
			null,
			'',
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true,
			true
		)
	}, [])

	return (
		<div className='rounded-[16px] border-2 border-[#161C28] bg-[#141925] p-5'>
			<div className='flex w-[calc(100vw_-_80px)] max-w-[480px] flex-col items-center'>
				<p className='mb-3 mt-5 text-[20px] font-bold leading-4 text-white'>{t('select_transfer_method')}</p>
				<p className='mb-[30px] max-w-[420px] text-center text-[14px] font-medium text-[#7785B3]'>
					{t('select_transfer_method_description')}
				</p>
				<Button
					onPress={handleTransferToBalance}
					classNames={{
						base: 'w-full mb-4',
						content: 'w-full'
					}}
				>
					<div
						className='w-full rounded-xl p-[1px]'
						style={{
							background:
								'linear-gradient(90deg, rgba(36, 253, 188, 0) 77.44%, #24FDBC 89.52%), linear-gradient(270deg, rgba(36, 253, 188, 0) 40.76%, #24FDBC 57.96%)'
						}}
					>
						<div
							className='flex h-full w-full items-center justify-center rounded-xl py-5 text-[16px] font-bold text-[#141925]'
							style={{
								background:
									'linear-gradient(0deg, #10AA7C, #10AA7C), linear-gradient(180deg, rgba(36, 253, 188, 0) 0%, rgba(36, 253, 188, 0.65) 100%)'
							}}
						>
							{t('transfer_to_balance').toUpperCase()}
						</div>
					</div>
				</Button>
				<Button
					onPress={handleWithdrawToWallet}
					classNames={{
						base: 'w-full',
						content: 'w-full'
					}}
				>
					<div
						className='w-full rounded-xl p-[1px]'
						style={{
							background:
								'linear-gradient(90deg, rgba(253, 205, 36, 0) 91.63%, #FDCD24 105.92%), linear-gradient(270deg, rgba(253, 205, 36, 0) 29.91%, #FDCD24 50.26%)'
						}}
					>
						<div
							className='flex h-full w-full items-center justify-center rounded-xl py-5 text-[16px] font-bold text-[#141925]'
							style={{
								background:
									'linear-gradient(0deg, #E2B617, #E2B617), linear-gradient(180deg, rgba(253, 205, 36, 0) 0%, rgba(253, 205, 36, 0.65) 100%)'
							}}
						>
							{t('withdraw_to_wallet').toUpperCase()}
						</div>
					</div>
				</Button>
			</div>
		</div>
	)
}

function TransferMethodSelectionModal({ open, onClose }: ITransferMethodSelectionModalProps) {
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
				true,
				true
			)
		}
	}, [open])

	return <></>
}

export default TransferMethodSelectionModal
