import { newBattleItems } from '../../model/items'
import { useState } from 'react'

import BattleCardNew from './BattleCardNew'
import cls from './CreateBattle.module.sass'

const CreateBattleModal = () => {
	const [selectedItems, setSelectedItems] = useState<number[]>([])
	const [amounts, setAmounts] = useState<Record<number, number>>({})

	return (
		<div className={cls.modal}>
			<div className='grid auto-rows-auto grid-cols-[repeat(auto-fill,240px)] justify-between gap-5 lg:justify-center'>
				{newBattleItems.map((item, index) => (
					<BattleCardNew
						amount={amounts[index] ?? 0}
						item={item}
						onSelect={(value: boolean) => {
							if (value) setSelectedItems(items => [...items, index])
							else setSelectedItems(items => items.filter(item => item !== index))
						}}
						selected={selectedItems.includes(index)}
						setAmount={value => {
							amounts[index] = value
							setAmounts({ ...amounts })
							if (value === 0) {
								setSelectedItems(items => items.filter(item => item !== index))
							}
						}}
						key={`New-Case-Type-${index}:${Date.now()}`}
					/>
				))}
			</div>
		</div>
	)
}

export default CreateBattleModal
