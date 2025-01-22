'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { useCommonStore } from '@/entities/Common/model/store'

import IconAngleRight from '@/shared/assets/icons/icon-angle-right-grey.svg'
import IconCancel from '@/shared/assets/icons/icon-cancel.svg'
import IconChat from '@/shared/assets/icons/icon-chat-grey.svg'
import IconChatUsers from '@/shared/assets/icons/icon-chat-users.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './Chat.module.sass'

export const ChatHeader = () => {
	const t = useTranslations()
	const breakpoints = useAppResponsive()
	const setViewChatHidden = useCommonStore(state => state.setViewChatHidden)

	return (
		<div
			className={clsx(
				cls.h,
				'flex h-12 shrink-0 items-center gap-3 pl-3 lg:mx-[30px] lg:h-auto lg:px-0 lg:pb-3 lg:pt-5'
			)}
		>
			<div className='flex items-center gap-1'>
				<IconChat className='h-[18px] w-[18px] shrink-0' />
				<span className='font-primary-book text-xs uppercase text-text-primary [-webkit-text-stroke:0.5px_#EDF2FF]'>
					{t('chat.chat')}
				</span>
			</div>
			<div className='ml-auto flex items-center gap-1'>
				<IconChatUsers className='h-4 w-4 shrink-0' />
				<div className='text-[10px] text-[#404F71]'>
					Online: <span className='font-primary-heavy text-primary'>74</span>
				</div>
			</div>
			<button
				type='button'
				onClick={() => {
					setViewChatHidden(true)
				}}
				className={cls.btn_close}
			>
				{breakpoints.lg ? (
					<IconAngleRight className='h-[18px] w-[18px]' />
				) : (
					<div className='flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#0C131B]'>
						<IconCancel className='h-2 w-2 fill-[#2F374A]' />
					</div>
				)}
			</button>
		</div>
	)
}
