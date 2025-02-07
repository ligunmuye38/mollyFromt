'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import IconNewTicket from '@/shared/assets/icons/icon-new-ticket.svg'
import IconQuestion from '@/shared/assets/icons/icon-question.svg'
import { useModal } from '@/shared/context/ModalContext'
import Button from '@/shared/ui/Button/Button'
import IntroBar from '@/shared/ui/IntroBar/IntroBar'

import CreateNewTicket from './CreateNewTicket'
import cls from './Support.module.sass'

const SupportHeader = () => {
	const { openModal } = useModal()

	const t = useTranslations()

	// For router
	const router = useRouter()

	// open create New Ticket modal function
	const createNewTicket = () => {
		openModal(
			<CreateNewTicket />,
			{},
			<span className='text-[30px] text-[#2F374A]'>+</span>,
			t('create_new_ticket.create_ticket'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	// Go faq function
	const goFaq = () => {
		router.push('/faq')
	}

	return (
		<IntroBar
			title={'sidebar.support'}
			icon={<IconQuestion />}
			content={'support_datas.title'}
			buttons={
				<div className='flex h-full flex-row items-center gap-3'>
					<Button
						onPress={createNewTicket}
						disableAnimation
						classNames={{
							base: clsx('w-[170px] md:w-[140px] h-[45px] flex items-center relative'),
							content: clsx('w-full h-full flex justify-center items-center')
						}}
					>
						<div className='absolute right-0 top-0 h-full w-full'>
							<IconNewTicket className={'h-full w-full'} />
						</div>
						<div className='z-[40] flex h-full w-full items-center justify-center gap-3 px-2'>
							<span className={clsx('text-[26px] text-[#FDCD24]')}>+</span>
							<span className={clsx('font-[Gotham Medium] block text-[12px] font-[700] text-[#D1D9EB]')}>
								{t('support_datas.new_ticket')}
							</span>
						</div>
					</Button>
					<Button
						theme='grey-4'
						strokeSize='reg'
						backdrop
						hexagon
						hexagonAxis='x'
						className='3sm:!hidden'
						classNames={{
							base: clsx('h-10 flex', cls.fnav_item),
							content: 'px-6 text-xs'
						}}
						startContent={
							<div className={clsx('h-[30px] w-full', cls.fnav_item_icon)}>
								<IconQuestion />
							</div>
						}
						onClick={goFaq}
					>
						{t('pages.faq')}
					</Button>
				</div>
			}
		/>
	)
}

export default SupportHeader
