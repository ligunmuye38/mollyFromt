import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { caseItems } from '@/widgets/Cases/model/items'

import IconSearch from '@/shared/assets/icons/icon-search.svg'
import { Input } from '@/shared/ui/Input/Input'
import { Select } from '@/shared/ui/Select/Select'

import { CaseItem } from './Main'

const MobileItemsModal = () => {
	const t = useTranslations()
	const [type, toggleType] = useState<boolean>(false)
	const [selected, setSelected] = useState<number>()

	return (
		<div className='w-[calc(100vw_-_80px)]'>
			<div className='mb-4 flex w-full items-center text-[14px]'>
				<div
					onClick={() => toggleType(false)}
					className={clsx(
						'w-full cursor-pointer rounded-l-[12px] border-1 py-[10px] duration-250',
						type ? 'border-[#232B3E] bg-transparent' : 'border-[#17E2A5] bg-[#17E2A51A]'
					)}
				>
					<p className={clsx('text-center font-bold', type ? 'text-white' : 'text-[#17E2A5]')}>{t('inventory')}</p>
				</div>
				<div
					onClick={() => toggleType(true)}
					className={clsx(
						'w-full cursor-pointer rounded-r-[12px] border-1 py-[10px] duration-250',
						!type ? 'border-[#232B3E] bg-transparent' : 'border-[#17E2A5] bg-[#17E2A51A]'
					)}
				>
					<p className={clsx('text-center font-bold', !type ? 'text-white' : 'text-[#17E2A5]')}>{t('upgrade_items')}</p>
				</div>
			</div>
			<div className='mb-4 flex'>
				<Input
					onChange={() => {
						return
					}}
					value={t('search')}
					startContent={<IconSearch className='h-5 w-5 fill-[#60719A]' />}
				/>
				<Select
					onChangeValue={() => {
						return
					}}
					value={'all'}
					theme='theme-2'
					items={[{ label: 'Price', value: 'Price' }]}
					classNames={{
						base: 'w-[90px]',
						trigger: 'h-[42px] !rounded-[10px] !bg-[#181E2C] !border-[#232B3E] w-[90px]',
						itemInner: 'text-[#60719A]',
						selectorIcon: 'w-5 h-5'
					}}
				/>
			</div>
			<div className='grid auto-rows-auto grid-cols-3 justify-between gap-2'>
				{caseItems.map((item, index) => (
					<CaseItem
						item={item}
						selected={selected === index}
						onSelect={value => {
							setSelected(value ? index : undefined)
						}}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}

export default MobileItemsModal
