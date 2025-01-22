'use client'

import { messagesList } from '../model/messages'
import { ScrollShadow } from '@nextui-org/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './Chat.module.sass'
import { ChatBar } from './ChatBar'
import { ChatHeader } from './ChatHeader'
import { ChatMessage } from './ChatMessage'

const Chat = () => {
	const { lg, xl } = useAppResponsive()

	const desktopAnimationVariants = {
		inactive: { width: 0 },
		active: { width: xl ? 320 : 280 }
	}
	const mobileAnimationVariants = {
		inactive: { opacity: 0, translateY: '20%' },
		active: { opacity: 1, translateY: 0 }
	}

	const chatViewHidden = useCommonStore(state => state.chatViewHidden)
	const setChatHidden = useCommonStore(state => state.setChatHidden)
	const setViewChatHidden = useCommonStore(state => state.setViewChatHidden)
	const [active, setActive] = useState(!chatViewHidden)

	const trackRef = useRef<HTMLDivElement>(null)

	const messages = messagesList.map((item, i) => (
		<ChatMessage
			key={i}
			{...item}
		/>
	))

	const scrollToBottom = () => {
		if (trackRef.current) {
			trackRef.current.scrollTop = trackRef.current.scrollHeight
		}
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	useEffect(() => {
		if (!lg) {
			setChatHidden(true)
			setViewChatHidden(true)
		}
	}, [lg, setChatHidden, setViewChatHidden])

	useEffect(() => {
		if (lg) {
			document.body.classList.remove('overflow-hidden')
		} else {
			if (chatViewHidden) document.body.classList.remove('overflow-hidden')
			else document.body.classList.add('overflow-hidden')
		}
	}, [chatViewHidden, lg])

	useEffect(() => {
		if (chatViewHidden) document.body.classList.add('chat-hidden')
		else document.body.classList.remove('chat-hidden')
	}, [chatViewHidden])

	return (
		<motion.div
			key={lg ? 'chat-desktop' : 'chat-mobile'}
			variants={lg ? desktopAnimationVariants : mobileAnimationVariants}
			initial={chatViewHidden ? 'inactive' : 'active'}
			animate={chatViewHidden ? 'inactive' : 'active'}
			transition={{ duration: 0.2, ease: 'easeOut' }}
			onAnimationComplete={variant => {
				if (variant === 'inactive') {
					setChatHidden(true)
					setActive(false)
				} else {
					setChatHidden(false)
				}
			}}
			onAnimationStart={variant => {
				if (variant === 'active') setActive(true)
			}}
			className={clsx(cls.base, active && cls.active)}
		>
			<div className='flex h-screen w-[320px] flex-col bg-[#10151E] xl:w-[280px] lg:h-full lg:w-full lg:bg-[#121722]'>
				<ChatHeader />
				{/* <div className='grow p-4 flex items-center justify-center'>
					<div className='text-base text-center text-text-primary'>Chat is currently offline</div>
				</div> */}
				<ScrollShadow
					ref={trackRef}
					hideScrollBar
					className={clsx('grow overflow-y-auto p-2.5', cls.track)}
				>
					<div className='flex flex-col gap-2.5'>{messages}</div>
				</ScrollShadow>
				<ChatBar />
			</div>
		</motion.div>
	)
}

export default Chat
