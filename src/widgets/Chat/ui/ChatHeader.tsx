'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconAngleRight from '@/shared/assets/icons/icon-angle-right-grey.svg'
import IconChat from '@/shared/assets/icons/icon-chat-grey.svg'
import IconChatUsers from '@/shared/assets/icons/icon-chat-users.svg'
import IconClose from '@/shared/assets/icons/icon-close.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './Chat.module.sass'

interface ChatHeaderProps {
	className?: string
}

export const ChatHeader: FC<ChatHeaderProps> = ({ className }) => {
	const t = useTranslations()
	const breakpoints = useAppResponsive()
	const setViewChatHidden = useCommonStore(state => state.setViewChatHidden)
	return (
		<div
			className={clsx(
				cls.h,
				'shrink-0 h-12 flex items-center gap-3 pl-3 lg:h-auto lg:mx-[30px] lg:pt-5 lg:px-0 lg:pb-3'
			)}
		>
			<div className='flex items-center gap-1'>
				<IconChat className='shrink-0 w-[18px] h-[18px]' />
				<span className='font-primary-book text-xs uppercase text-text-primary [-webkit-text-stroke:0.5px_#EDF2FF]'>
					{t('chat.chat')}
				</span>
			</div>
			<div className='ml-auto flex items-center gap-1'>
				<IconChatUsers className='shrink-0 w-4 h-4' />
				<div className='text-[10px] text-[#404F71]'>
					Online: <span className='font-primary-heavy text-primary'>74</span>
				</div>
			</div>
			<button
				type='button'
				onClick={() => setViewChatHidden(true)}
				className={cls.btn_close}
			>
				{breakpoints.lg ? <IconAngleRight className='w-[18px] h-[18px]' /> : <IconClose className='w-2 h-2' />}
			</button>
		</div>
	)
}
