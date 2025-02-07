'use client'

import { IInvestoryItemType } from '../model/types'
import { useEffect, useState } from 'react'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'

import IconBlod from '@/shared/assets/icons/icon-blod.svg'
import IconShopping from '@/shared/assets/icons/icon-shopping.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Profile.module.sass'

interface ProfileInventoryProps {
	items: IInvestoryItemType[]
	onSelect?: (value: { selected: number; amount: number }) => void
}

const ProfileInventory = ({ items, onSelect }: ProfileInventoryProps) => {
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

	useEffect(() => {
		const value = {
			selected: 0,
			amount: 0
		}
		items.forEach(item => {
			if (selectedId.includes(item.id)) {
				value.amount += Number(item.price.replace(',', '.'))
				value.selected++
			}
		})
		onSelect!(value)
	}, [items, onSelect, selectedId])

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

	return (
		<div className='mt-2 grid w-full auto-rows-auto grid-cols-[repeat(auto-fill,131px)] justify-between gap-0.5 2sm:grid-cols-3'>
			{' '}
			{cases}
		</div>
	)
}

export default ProfileInventory
