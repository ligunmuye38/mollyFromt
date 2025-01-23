'use client'

import { gameHistoryTypes } from '../../model/items'

import { useCommonStore } from '@/entities/Common/model/store'

import { ISelectItem, Select } from '@/shared/ui/Select/Select'

const GameHistoryTypeSwitcher = () => {
	const gameHistoryType = useCommonStore(state => state.gameHistoryType)
	const setGameHistoryType = useCommonStore(state => state.setGameHistoryType)

	const items = gameHistoryTypes.map(
		item =>
			({
				value: item.value,
				label: item.label,
				startContent: <item.icon className='h-[18px] w-[22px] fill-[#E1B514]' />
			}) as ISelectItem
	)

	return (
		<>
			<Select
				value={new Set([gameHistoryType])}
				onChangeValue={v => {
					setGameHistoryType(new Set(v).values().next().value?.toString() ?? '')
				}}
				theme='theme-2'
				items={items}
				classNames={{
					base: 'w-[200px] h-[42px]'
				}}
			/>
		</>
	)
}

export default GameHistoryTypeSwitcher
