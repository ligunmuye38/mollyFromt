import { newBattleItems } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconWallet from '@/shared/assets/icons/icon-wallet.svg'
import Button from '@/shared/ui/Button/Button'

import BattleCardNew from './BattleCardNew'
import cls from './CreateBattle.module.sass'

const CreateBattleModal = () => {
	const t = useTranslations()

	const [selectedItems, setSelectedItems] = useState<number[]>([])
	const [amounts, setAmounts] = useState<Record<number, number>>({})

	return (
		<div className={cls.modal}>
			<div className='mb-5 grid auto-rows-auto grid-cols-[repeat(auto-fill,240px)] justify-between gap-5 lg:justify-center'>
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
			<div className='flex items-center gap-4 rounded-[12px] border border-[#1A202E] px-5 py-[18px]'>
				<div className='flex items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] py-[9px] pl-3 pr-5'>
					<IconCaseOpen className='mr-2 w-6 fill-[#60719A]' />
					<span className='text-[14px] font-medium leading-4 text-[#60719A]'>
						{t('case_battles.total_case')}: <span className='font-bold text-white'>1</span>
					</span>
				</div>
				<div className='flex items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] py-[9px] pl-3 pr-[22px]'>
					<IconBagTick className='mr-2 w-6 fill-[#60719A]' />
					<span className='text-[14px] font-medium leading-4 text-[#60719A]'>
						{t('case_battles.total_cost')}:{' '}
						<span className='font-bold text-white'>
							<span className='text-[#17E2A5]'>$</span>15.50
						</span>
					</span>
				</div>
				<div className='flex items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] py-[9px] pl-3 pr-[15px]'>
					<IconWallet className='mr-2 w-6 fill-[#60719A]' />
					<span className='text-[14px] font-medium leading-4 text-[#60719A]'>
						{t('case_battles.user_balance')}:{' '}
						<span className='font-bold text-white'>
							<span className='text-[#17E2A5]'>$</span>1740.00
						</span>
					</span>
				</div>
				<div className='flex flex-grow justify-end'>
					<div style={{ filter: 'drop-shadow(0 0 12px #10AA7C59)' }}>
						<Button
							classNames={{
								base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
								content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
							}}
						>
							<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
							<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
								{t('case_battles.add_cases').toUpperCase()}
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateBattleModal
