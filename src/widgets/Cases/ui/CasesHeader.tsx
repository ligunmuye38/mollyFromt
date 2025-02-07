'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCases from '@/shared/assets/icons/icon-cases-header.svg'
import IconCreateModalLogo from '@/shared/assets/icons/icon-green-plus.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'

import cls from './Cases.module.sass'
import CreateCaseModal from './CreateCase/CreateCaseModal'

const CasesHeader = () => {
	// For translation
	const t = useTranslations()

	// For create case Modal
	const { openModal } = useModal()

	// Open create case Modal
	const createCase = () => {
		openModal(
			<CreateCaseModal />,
			{},
			<IconCreateModalLogo className='h-[20px] w-[20px]' />,
			t('create_case.title'),
			{
				body: 'lg:w-full',
				modal: 'relative w-full lg:h-full lg:w-screen h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	return (
		<div className={clsx('mx-10 flex lg:mx-5 2sm:!mt-10', cls.header_border)}>
			<div
				className={clsx(
					cls.header_body,
					'flex items-center justify-between pr-3 md:flex-col md:pb-3 md:pr-0 sm:justify-center'
				)}
			>
				<div className='relative flex h-[96px] items-center gap-4 md:text-center'>
					<div className='flex h-[96px] w-[96px] 2sm:absolute 2sm:-top-1/2 2sm:left-1/2 2sm:-translate-x-1/2'>
						<IconCases />
					</div>
					<div className='flex flex-col gap-[6px] 2sm:mt-4'>
						<span className='text-[14px] font-[700] uppercase text-[#BFC7D8]'>{t('cases_header.title')}</span>
						<span className='text-[12px] font-[500] text-[#566484]'>{t('cases_header.content')}</span>
					</div>
				</div>
				<div className={clsx(cls.shadow, 'relative !z-10 flex items-center justify-center py-[2px]')}>
					<Button
						theme='grey-4'
						strokeSize='reg'
						backdrop
						hexagon
						hexagonAxis='x'
						classNames={{
							base: clsx('h-10', cls.header_btn),
							content: clsx('px-6 text-xs', cls.header_btn_inner)
						}}
						startContent={<IconPlus className='h-[20px] w-[20px] fill-[#121722]' />}
						onClick={createCase}
					>
						<span className={clsx('text-[14px] font-[900] uppercase text-[#121722]', cls.header_btn_font)}>
							{t('cases_header.create_case')}
						</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CasesHeader
