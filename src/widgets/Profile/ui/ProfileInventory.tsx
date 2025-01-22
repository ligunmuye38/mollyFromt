'use client'

import { IInvestoryItemType } from '../model/types'
import { useState } from 'react'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'

import IconBlod from '@/shared/assets/icons/icon-blod.svg'
import IconShopping from '@/shared/assets/icons/icon-shopping.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Profile.module.sass'

interface ProfileInventoryProps {
	items: IInvestoryItemType[]
}

const ProfileInventory = ({ items }: ProfileInventoryProps) => {
	// Selected item id
	const [selectedId, setSelectedId] = useState<string[]>([])

	// Click handle function
	const handleClick = (id: string) => {
		setSelectedId(prev => {
			if (prev.includes(id)) {
				// Remove the id if it already exists
				return prev.filter(existingId => existingId !== id)
			} else {
				// Add the id if it does not exist
				return [...prev, id]
			}
		})
	}

	// Build item list
	const cases = items.map(item => (
		<CaseItem
			isHover={true}
			key={item.id}
			title={item.title}
			content={item.content}
			price={item.price}
			picUrl={item.picUrl}
			type={item.type}
			name={item.name}
			percent={item.percent}
			isActive={selectedId.includes(item.id) ? true : false}
			hoverContent={
				<div className='flex h-full w-full items-center justify-center gap-2'>
					<Button
						onClick={() => handleClick(item.id)}
						startContent={<IconShopping className='h-4 w-4 fill-[#292D32]' />}
						classNames={{
							base: [cls.shopping_btn],
							content: [cls.shopping_btn_inner, 'p-2']
						}}
					></Button>
					<Button
						onClick={() => handleClick(item.id)}
						startContent={<IconUpgrade className='h-4 w-4 fill-[#292D32]' />}
						classNames={{
							base: [cls.upgrade_btn],
							content: [cls.upgrade_btn_inner, 'p-2']
						}}
					></Button>
					<Button
						onClick={() => handleClick(item.id)}
						startContent={<IconBlod className='h-4 w-4 fill-[#292D32]' />}
						classNames={{
							base: [cls.blod_btn],
							content: [cls.blod_btn_inner, 'p-2']
						}}
					></Button>
				</div>
			}
		/>
	))

	return <div className='mt-2 flex w-full flex-wrap justify-between gap-0.5'>{cases}</div>
}

export default ProfileInventory
