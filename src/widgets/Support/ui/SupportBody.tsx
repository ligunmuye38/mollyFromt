'use client'

import { supportItems } from '../model/item'
import { IChatMessage } from '../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { ChatBar } from '@/widgets/Chat/ui/ChatBar'
import { ChatMessage } from '@/widgets/Chat/ui/ChatMessage'

import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconChat from '@/shared/assets/icons/icon-chat.svg'
import IconMessage from '@/shared/assets/icons/icon-message.svg'
import Collapse from '@/shared/ui/Collapse/Collapse'

import cls from './Support.module.sass'

interface SupportBodyContentProps {
	messagesList: IChatMessage[]
}

interface SupportBodyHeaderProps {
	tikcetNumber: string
	subjectOfAppeal: string
	lastUpdate: string
	responseType: string
	response: string
}

const SupportBodyHeader = ({
	tikcetNumber,
	subjectOfAppeal,
	lastUpdate,
	responseType,
	response
}: SupportBodyHeaderProps) => {
	const t = useTranslations()

	return (
		<div className='min-h-[90px] w-full justify-between py-4'>
			<div className='flex h-full w-full items-center gap-6 px-5'>
				<div className='relative h-auto w-auto lg:hidden'>
					<div className={responseType == 'closed' ? '' : cls.chat_shadow}>
						<IconChat
							className={clsx(
								responseType == 'closed' ? 'fill-[#545778] text-[#545778]' : ['fill-[#FDCD24] text-[#FDCD24]']
							)}
						/>
					</div>
				</div>
				<div className='flex flex-1 flex-wrap items-center justify-between md:gap-3 2sm:justify-start 2sm:gap-4'>
					<div className='relative hidden h-auto w-auto lg:flex'>
						<div className={responseType == 'closed' ? '' : cls.chat_shadow}>
							<IconChat
								className={clsx(
									responseType == 'closed' ? 'fill-[#545778] text-[#545778]' : ['fill-[#FDCD24] text-[#FDCD24]']
								)}
							/>
						</div>
					</div>
					<div className={clsx('flex flex-col gap-2 3sm:items-start')}>
						<span className='text-[13px] font-[500] text-[#545778]'>{t('support_chat_header.id_ticket')}</span>
						<span className='text-[15px] font-[500] text-[#D1D9EB]'>{tikcetNumber}</span>
					</div>
					<div className={clsx('w-2/7 flex flex-col gap-2 3sm:items-start 2sm:w-full')}>
						<span className='text-[13px] font-[500] text-[#545778]'>{t('support_chat_header.subject_of_appeal')}</span>
						<span className='text-[15px] font-[500] text-[#D1D9EB] 3sm:text-start'>{t(subjectOfAppeal)}</span>
					</div>
					<div className='flex w-1/5 flex-col items-center justify-center gap-2 3sm:items-start 2sm:w-full'>
						<span className='text-[13px] font-[500] text-[#545778]'>{t('support_chat_header.last_update')}</span>
						<span className='text-[15px] font-[500] text-[#D1D9EB]'>{lastUpdate}</span>
					</div>
					<div className='flex w-1/4 flex-col gap-2 md:w-full md:justify-center 3sm:items-start 2sm:w-full'>
						<span className='text-[13px] font-[500] text-[#545778]'>{t('support_chat_header.status_of_the_req')}</span>

						<span className='flex items-center justify-center gap-3 md:justify-center md:gap-2'>
							<IconMessage
								className={clsx(
									responseType === 'response' && 'fill-[#24FDBC]',
									responseType === 'consideration' && 'fill-[#545778]',
									responseType === 'closed' && 'fill-[#E72121]'
								)}
							/>
							<span
								className={clsx(
									'text-[15px] font-[500] 3sm:text-start',
									responseType === 'closed' && 'text-[#df3131]',
									responseType === 'consideration' && 'text-[#545778]',
									responseType === 'response' && 'text-[#D1D9EB]'
								)}
							>
								{t(response)}
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const SupportBodyContent = ({ messagesList }: SupportBodyContentProps) => {
	return (
		<div className='relative flex h-full w-full flex-col gap-4 overflow-hidden px-4'>
			<div className='flex max-h-[322px] min-h-[270px] flex-col gap-4 overflow-auto'>
				{messagesList.map((item, index) => (
					<div
						key={index}
						className={clsx(
							'flex w-full',
							item.type != 'toadmin' ? 'justify-start pl-2 md:pb-2 md:pl-3 md:pr-2' : 'justify-end'
						)}
					>
						<ChatMessage
							{...item}
							className='w-1/2 md:w-full'
							titleClass={item.type == 'toadmin' ? clsx('!text-[#FDCD24]', cls.chat_admin_shadow) : ''}
							contentClass={item.type == 'toadmin' ? '!text-[#545778] !text-[13px]' : '!text-[#545778]'}
						/>
					</div>
				))}
			</div>
			<ChatBar
				className='!mx-0 !my-2 w-full'
				isEmoji={false}
			/>
		</div>
	)
}

const SupportBody = () => {
	return supportItems.map(item => {
		return (
			<Collapse
				key={item.id}
				headerIcon={<IconDown />}
				classNames={{
					base: 'w-full h-auto flex flex-col bg-[#0D1018] rounded-lg',
					content: 'p-0 gap-4 flex-col flex h-0 relative duration-300',
					headerBase: 'w-full h-auto rounded-lg px-4 flex items-center hover:cursor-pointer hover:bg-[#1a2030]',
					headerContent: 'w-full !justify-between',
					icon: 'w-8 fill-[#D1D9EB]  duration-200',
					iconVisible: 'rotate-180 duration-200',
					headerBaseInVisible: '',
					headerBaseVisible: '',
					contentVisible: 'h-[400px] duration-300 py-4',
					contentInvisible: 'h-0'
				}}
				header={
					<SupportBodyHeader
						tikcetNumber={item.ticketNumber}
						subjectOfAppeal={item.subjectOfAppeal}
						lastUpdate={item.lastUpdate}
						responseType={item.responseType}
						response={item.response}
					/>
				}
				line={false}
				content={<SupportBodyContent messagesList={item.messagesList} />}
			/>
		)
	})
}

export default SupportBody
