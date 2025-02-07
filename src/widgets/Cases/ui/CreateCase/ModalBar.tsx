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
			<div className='grid grid-cols-[40%_auto_145px_48px] gap-[10px] lg:grid-cols-[auto_145px] md:grid-cols-[auto_105px_32px]'>
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
						inputWrapper: [cls.box, '!border-[1px] w-full !h-[48px] md:!h-8'],
						input: [cls.box_value, cls.input_search],
						base: 'w-auto md:col-span-3 md:h-8',
						mainWrapper: ['w-full']
					}}
				/>
				<div className='flex flex-1 lg:order-2 md:order-1'>
					<SelectCaseType className='h-full w-full' />
				</div>
				<div className={clsx(cls.modal_body_bar_type, 'h-full lg:order-1 md:order-2 md:h-[32px] md:w-[105px]')}>
					<div className={clsx(cls.modal_body_bar_type_inner, 'flex h-full items-center px-[11px]')}>
						<span className='text-[12px] font-[500] text-[#60719A] md:text-[9px]'>
							{t('create_case.price_descending')}
						</span>
					</div>
				</div>
				<div className={clsx(cls.modal_body_bar_type, 'h-full lg:order-3 md:h-[32px]')}>
					<div
						className={clsx(
							cls.modal_body_bar_type_inner,
							'flex h-full items-center justify-center px-3 py-[7px] md:px-1 md:py-1'
						)}
					>
						<IconRefresh className='h-6 w-6 fill-[#60719A]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalBar
