import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Select } from '@/shared/ui/Select/Select'

import cls from './Giveaways.module.sass'

const sortOptions = [
	{ value: 'Default', label: 'Default' },
	{ value: 'Price:Ascending', label: 'Price:Ascending' },
	{ value: 'Price:Descending', label: 'Price:Descending' }
]

const GiveawaysHeader = () => {
	const t = useTranslations()
	const [selectedBalanceFilters, setSelectedBalanceFilters] = useState<string[]>([])

	return (
		<div className={clsx(cls.giveaways_header)}>
			<div className={clsx(cls.giveaways_header_inner, 'lg:!px-2')}>
				<div className='flex items-center'>
					<div className='mr-2 h-3 w-3 rounded-xl bg-[#1EC69373] p-[3px]'>
						<div className='h-[6px] w-[6px] rounded-md bg-[#1EC693]'></div>
					</div>
					<p className='text-[12px] font-medium leading-4 text-[#60719A]'>
						<span>{t('giveaways.total_giveaways_drawn')}: </span>
						<span className='text-white'>94</span>
					</p>
				</div>
				<div className='flex items-center'>
					<Select
						value={new Set(selectedBalanceFilters)}
						onChangeValue={v => setSelectedBalanceFilters(Array.from(new Set(v)).map(value => value.toString()))}
						items={sortOptions}
						theme='theme-2'
						placeholder={t('profile_achievements.sort_by')}
						classNames={{
							base: 'w-[100px]',
							trigger: 'rounded-lg !border-0 !bg-transparent',
							selectorIcon: 'w-5 h-5',
							value: '!text-[12px] !text-[#60719A] font-medium text-right'
						}}
					/>
					<p className='mr-2 text-[24px] text-[#232A3C]'>|</p>
					<div className='flex items-center gap-2'>
						<Checkbox
							theme='theme-2'
							name={t('giveaways.participants_limit')}
							value='participants_limit'
						/>
						<p className='text-[12px] font-medium leading-4 text-[#60719A]'>{t('giveaways.participants_limit')}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GiveawaysHeader
