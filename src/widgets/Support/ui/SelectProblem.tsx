'use client'

import { problems } from '../model/item'
import { Selection } from '@nextui-org/react'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

import { ISelectItem, Select } from '@/shared/ui/Select/Select'

const SelectProblem = () => {
	const t = useTranslations()

	const locale = useLocale()

	const [value, setValue] = React.useState<Selection>(new Set([locale]))

	const changeLocale = (value: Selection) => {
		const newValue = Array.from(value)[0] ? value : new Set([locale])
		setValue(newValue)
	}

	const items = problems.map(
		item =>
			({
				value: t(item.id),
				label: t(item.type)
			}) as ISelectItem
	)

	return (
		<>
			<Select
				value={value}
				onChangeValue={changeLocale}
				theme='theme-3'
				items={items}
				classNames={{
					itemLabel: 'text-[#D1D9EB]',
					trigger: clsx('!rounded-[9px] !border-none gap-1 !py-[14px] !h-[48px] !px-[18px]')
				}}
			/>
		</>
	)
}

export default SelectProblem
