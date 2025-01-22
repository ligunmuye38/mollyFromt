'use client'

import { bodyData, code, listItems } from '../model/item'
import { ClickSide } from '../model/type'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCheck from '@/shared/assets/icons/icon-check-2.svg'
import IconCopy from '@/shared/assets/icons/icon-copy.svg'
import IconScrollTop from '@/shared/assets/icons/icon-scroll-top.svg'
import SvgFooterBtn from '@/shared/assets/provably-fair-footer-btn.svg'
import { useAppResponsive } from '@/shared/lib/useResponsive'
import { Input } from '@/shared/ui/Input/Input'
import List from '@/shared/ui/List/List'

import cls from './ProvavlyFair.module.sass'
import SelectGame from './SelectGame'

const ProvablyFairBody = () => {
	// For translation
	const t = useTranslations()

	// For "set scroll top" state
	const setIsScrollTop = useCommonStore(state => state.setIsScrollTop)
	const setOnScroll = useCommonStore(state => state.setOnScroll)

	const [clickSide, setClickSide] = useState<ClickSide>('right')
	const [clientSeed, setClientSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2')
	const [serverSeed, setServerSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2')
	// To get isCopy state
	const [isCopy, setIsCopy] = useState<boolean>(false)
	// To get active number in list
	const [activeNumber, setActiveNumber] = useState<number>(-1)
	// On the top button state
	const [isTop, setIsTop] = useState<boolean>(false)

	// For responsive
	const breakpoints = useAppResponsive()

	// Create an array of refs
	const refs = useRef<(HTMLDivElement | null)[]>([])

	const leftClick = () => {
		setClickSide('left')
	}

	const rightClick = () => {
		setClickSide('right')
	}

	const copyText = async () => {
		try {
			await navigator.clipboard.writeText(code)
			setIsCopy(true)
			setTimeout(() => {
				setIsCopy(false)
			}, 2000)
		} catch (error) {
			console.error(error)
			alert('Error!!!')
		}
	}

	// The function to click list item
	const clickListItem = (index: number) => {
		if (refs.current[index + 3]) {
			refs.current[index + 3]?.scrollIntoView({ behavior: 'smooth' })
			setActiveNumber(index)
		} else {
			console.error('Element not found or is not an HTML element.')
		}
	}

	// update list item active state
	const updateActiveState = (id: string) => {
		let newIndex = -1
		for (let i = 0; i < bodyData.length; i++) {
			if (bodyData[i].id == id) {
				newIndex = i
				i = bodyData.length
			}
		}
		setActiveNumber(newIndex)
	}

	// Move scroll top of screen
	const topScroll = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	// Scroll function
	const scrollHandle = useCallback(() => {
		for (let i = 0; i < refs.current.length; i++) {
			const element = refs.current[i]
			if (element) {
				const rect = element.getBoundingClientRect()
				if (rect.top >= 0 && rect.top <= 20) {
					updateActiveState(element.id)
				}
			}
		}
	}, [])

	// Toggle button visibility based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			// Show the button if scrolled down more than 300 pixels
			if (window.scrollY > 10) {
				setIsTop(true)
			} else {
				setIsTop(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		setOnScroll(scrollHandle)

		setIsScrollTop(true)
		return () => {
			setIsScrollTop(false)
			window.removeEventListener('scroll', handleScroll)
			setOnScroll(() => {
				return
			})
		}
	}, [scrollHandle, setIsScrollTop, setOnScroll])

	return (
		<div className='relative flex h-auto w-full flex-row px-5 lg:flex-col lg:px-0'>
			<div className={clsx('sticky top-[30px] h-full min-w-[237px] lg:w-auto lg:overflow-auto')}>
				<List
					items={listItems}
					active={activeNumber}
					axis={breakpoints.lg ? 'y' : 'x'}
					onClickItem={(index: number) => clickListItem(index)}
				/>
			</div>
			<div className='flex h-auto w-full flex-1 flex-col gap-4 px-4'>
				<div
					className={clsx(cls.body)}
					id='fairly'
					ref={el => {
						refs.current[0] = el
					}}
				>
					<span className={clsx(cls.body_title)}>{t('fair_body_data1.title')}</span>
					<span className={clsx(cls.body_content)}>{t('fair_body_data1.content1')}</span>
					<span className={clsx(cls.body_content)}>{t('fair_body_data1.content2')}</span>
					<span className={clsx(cls.body_title)}>{t('fair_body_data1.footer')}</span>
				</div>
				<div
					className={clsx(cls.body)}
					id='overview'
					ref={el => {
						refs.current[1] = el
					}}
				>
					<span className={clsx(cls.body_title)}>{t('fair_body_data2.title')}</span>
					<span className={clsx(cls.body_content)}>{t('fair_body_data2.content')}</span>
					<div className={clsx('relative overflow-auto rounded-lg bg-[#121722] p-4 text-[#AEB2C0] shadow-md')}>
						<div
							className='absolute right-2 top-2 h-5 w-5'
							onClick={copyText}
						>
							{isCopy == false ? <IconCopy /> : <IconCheck className='fill-white' />}
						</div>
						<pre className={clsx('whitespace-pre-wrap break-words')}>
							<code className={clsx('block w-full overflow-auto whitespace-pre-wrap !font-normal')}>{code}</code>
						</pre>
					</div>
				</div>
				{bodyData.map((item, index) => (
					<div
						className={clsx(cls.body)}
						key={index}
						id={item.id}
						ref={el => {
							refs.current[3 + index] = el
						}}
					>
						<span className={clsx(cls.body_title)}>{item.title}</span>
						{item.contents.map((content, index) => (
							<span
								className={clsx(cls.body_content)}
								key={index}
							>
								{content}
							</span>
						))}
					</div>
				))}
				<div
					className={clsx(cls.body)}
					ref={el => {
						refs.current[2] = el
					}}
					id='footer'
				>
					<div className={'flex w-full justify-center'}>
						<div
							className={clsx(
								cls.footer_btn_left,
								clickSide == 'left' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]',
								'text-[12px] font-[900] hover:cursor-pointer'
							)}
							onClick={leftClick}
						>
							<div className={clsx(cls.footer_btn_left_inner)}>
								<div className={clsx(clickSide == 'left' && cls.footer_btn_left_inner_active)}>
									{t('fair_footer.seed')}
								</div>
							</div>
						</div>
						<div
							className={clsx(
								cls.footer_btn_right,
								clickSide == 'right' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]',
								'-ml-4 text-[12px] font-[900] hover:cursor-pointer'
							)}
							onClick={rightClick}
						>
							<div className={cls.footer_btn_right_inner}>
								<div className={clsx(clickSide == 'right' && cls.footer_btn_right_inner_active)}>
									{t('fair_footer.verification')}
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-[12px] uppercase text-[#5F6C87]'>{t('fair_footer.game')}</span>
						<SelectGame />
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-[12px] uppercase text-[#5F6C87]'>{t('fair_footer.client_seed')}</span>
						<Input
							value={clientSeed}
							onChange={v => {
								setClientSeed(v)
							}}
							theme='theme-1'
							placeholder={t('create_new_ticket.subject_placeholder')}
							classNames={{
								inputWrapper: [cls.box, '!bg-[#121722] !border-0 !rounded-[8px] !p-6'],
								input: [cls.box_value, 'w-full text-[14px] !text-white'],
								label: ['text-[10px]'],
								mainWrapper: 'w-full'
							}}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-[12px] uppercase text-[#5F6C87]'>{t('fair_footer.server_seed')}</span>
						<Input
							value={serverSeed}
							onChange={v => {
								setServerSeed(v)
							}}
							theme='theme-1'
							placeholder={t('create_new_ticket.subject_placeholder')}
							classNames={{
								inputWrapper: [cls.box, '!bg-[#121722] !rounded-[8px] !border-0 ] !p-6'],
								input: [cls.box_value, 'w-full text-[14px] !text-white'],
								label: ['text-[10px]'],
								mainWrapper: 'w-full'
							}}
						/>
					</div>
					<div className='relative flex justify-center'>
						<div className='relative flex h-full w-full justify-center hover:cursor-pointer sm:w-auto'>
							<span className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center text-[14px] font-[900] uppercase text-[#121722]'>
								{t('fair_footer.show_result')}
							</span>
							<SvgFooterBtn />
						</div>
					</div>
				</div>
			</div>
			{isTop && (
				<div
					onClick={topScroll}
					className='top-scroll fixed bottom-20 left-5 flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full hover:cursor-pointer'
				>
					<IconScrollTop className='h-[30px] w-[30px]' />
				</div>
			)}
		</div>
	)
}

export default ProvablyFairBody
