'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'

import IconUploadFile from '@/shared/assets/icons/icon-select-file.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import SelectProblem from './SelectProblem'
import cls from './Support.module.sass'

const CreateNewTicket = () => {
	// For translation
	const t = useTranslations()

	// Get subject
	const [subject, setSubject] = useState('')

	// Ref input
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	// File upload function
	const clickUplaod = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	}

	return (
		<div className={clsx(cls.modal, 'app-scrollbar max-h-[calc(100vh-150px)] gap-4 overflow-auto py-6')}>
			<div className='flex w-full flex-col gap-3'>
				<span className='text-[15px] font-[500] text-[#545778]'>{t('create_new_ticket.select_problem')}</span>
				<SelectProblem />
			</div>
			<div className='flex w-full flex-col gap-3'>
				<span className='text-[15px] font-[500] text-[#545778]'>{t('create_new_ticket.subject')}</span>
				<Input
					value={subject}
					onChange={v => {
						setSubject(v)
					}}
					theme='theme-1'
					placeholder={t('create_new_ticket.subject_placeholder')}
					classNames={{
						inputWrapper: [cls.box, '!bg-[#0D1018] !border-0 !rounded-[9px] !p-6'],
						input: [cls.box_value, 'w-full text-[14px]'],
						label: ['text-[10px]'],
						mainWrapper: 'w-full'
					}}
				/>
			</div>
			<div className='flex flex-col gap-3'>
				<span className='text-[15px] font-[500] text-[#545778]'>{t('create_new_ticket.describe')}</span>
				<textarea
					className={clsx('app-scrollbar max-h-[200px] min-h-[200px] rounded-lg border-0 bg-[#0D1018]', cls.bar_input)}
				/>
			</div>
			<div className='flex h-auto items-center justify-end gap-3 2sm:flex-col'>
				<div
					className='flex h-full w-auto items-center gap-3 hover:cursor-pointer'
					onClick={clickUplaod}
				>
					<div className='w-auto text-[14px] font-[500] text-white'>{t('create_new_ticket.max_size')}</div>
					<input
						type='file'
						ref={fileInputRef}
						style={{ display: 'none' }}
					/>
					<IconUploadFile className='h-5 w-5 fill-[#545778]' />
				</div>
				<div className={clsx(cls.button_shadow, 'z-10 flex h-[45px] w-auto items-center justify-center')}>
					<div className={clsx(cls.create_ticket, 'z-[10] h-[38px] w-[168px]')}>
						<div className={cls.create_ticket_inner}>
							<Button
								classNames={{
									base: 'relative w-full h-full'
								}}
							>
								<span className='flex items-center justify-center gap-1 font-primary-bold text-[12px] uppercase text-[#0D1018]'>
									<span className='font-primary-med text-[18px]'>+</span>
									<span>{t('create_new_ticket.create_ticket')}</span>
								</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='relative h-auto w-full text-wrap break-words rounded-lg border-[1px] border-[#1B2130] p-2'>
				<div className='relative h-full text-wrap font-[13px] text-[#545778]'>
					zip,rar,svg,txt,png,jpeg,jpg,mp4,mp3,pdf,docx,doc,xlsx,xls,webp
				</div>
			</div>
		</div>
	)
}

export default CreateNewTicket
