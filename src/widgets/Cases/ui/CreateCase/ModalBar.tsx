import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconRefresh from '@/shared/assets/icons/icon-refresh.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import { Input } from '@/shared/ui/Input/Input'

import SelectCaseType from './SelectCaseType'

import cls from '../Cases.module.sass'

const ModalBar = () => {
	// For translation
	const t = useTranslations()

	// Get search keyword
	const [viewSearch, setViewSearch] = useState<string>('')

	return (
		<div className='flex w-full flex-col gap-[15px]'>
			<span className='w-full text-[14px] font-[500] text-white'>{t('create_case.select_up')}</span>
			<div className='flex h-auto w-full justify-between gap-2 2sm:flex-col 2sm:flex-wrap 2sm:justify-start'>
				<div className='flex flex-1 flex-row gap-2 lg:flex-col 2sm:flex-wrap 2sm:justify-start'>
					<Input
						value={viewSearch}
						onChange={v => {
							setViewSearch(v)
						}}
						theme='theme-1'
						placeholder={t('create_case.search')}
						strokeSize='reg'
						startContent={<IconSearch className={clsx(cls.box_icon, cls.input_search_icon)} />}
						classNames={{
							inputWrapper: [cls.box, '!border-[1px] w-full !h-[48px]'],
							input: [cls.box_value, cls.input_search],
							base: 'w-auto',
							mainWrapper: [' w-[278px] lg:w-full']
						}}
					/>
					<div className='flex flex-1'>
						<SelectCaseType className='h-full w-full' />
					</div>
				</div>
				<div className='flex h-full flex-row gap-2 lg:flex-col 2sm:flex-row 2sm:justify-center'>
					<div className={clsx(cls.modal_body_bar_type, 'h-full md:h-[48px]')}>
						<div className={clsx(cls.modal_body_bar_type_inner, 'flex h-full items-center px-3')}>
							<span className='text-[12px] font-[500] text-[#60719A]'>{t('create_case.price_descending')}</span>
						</div>
					</div>
					<div className={clsx(cls.modal_body_bar_type, 'h-full md:h-[48px]')}>
						<div
							className={clsx(cls.modal_body_bar_type_inner, 'flex h-full items-center justify-center px-3 py-[7px]')}
						>
							<IconRefresh className='h-6 w-6 fill-[#60719A]' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalBar
