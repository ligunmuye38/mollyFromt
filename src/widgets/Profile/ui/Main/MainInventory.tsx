'use client'

import { investoryItems } from '../../model/items'
import ProfileInventory from '../ProfileInventory'
import clsx from 'clsx'
import { useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconGun from '@/shared/assets/icons/icon-gun.svg'
import IconShopping from '@/shared/assets/icons/icon-shopping.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Main.module.sass'

const MainInventory = () => {
	// To get the chat hidden state(Desktop)
	const chatViewHidden = useCommonStore(state => state.chatViewHidden)

	const [sellingAmount, setSellingAmount] = useState<{
		selected: number
		amount: number
	}>()

	return (
		<div className={clsx('w-full', cls.user_main)}>
			<div className={clsx('flex w-full flex-col gap-2 p-5 3sm:!p-1.5', cls.user_main_inner)}>
				<div className='flex h-full items-center justify-between rounded-xl bg-[#111620] p-[14px]'>
					<div className='flex items-center gap-2'>
						<IconGun className='h-7 w-7 fill-none' />
						<div className='flex flex-col'>
							<span className='text-[16px] text-white'>Inventory</span>
							<span className='text-[12px] text-[#5A6786]'>all your items</span>
						</div>
					</div>
					<div className='flex gap-2'>
						<Button
							disableAnimation
							startContent={
								<div className='flex h-5 w-5 items-center justify-center rounded-sm bg-[#60719A]'>
									<IconCheck className='h-auto w-[14px] fill-black' />
								</div>
							}
							classNames={{
								base: 'bg-[#1E2536] p-[1px] rounded-lg',
								content: 'bg-[#1A202E] p-3 rounded-lg'
							}}
						>
							<span className='flex gap-1 text-[12px]'>
								<span className='text-[#60719A]'>Selected:</span>
								<span className='text-white'>{Number(sellingAmount?.selected ?? 0)}</span>
							</span>
						</Button>

						<Button
							startContent={<IconUpgrade className='h-5 w-5 fill-[#121722]' />}
							classNames={{
								base: [cls.upgrade_btn, !chatViewHidden ? '!hidden' : 'md:hidden'],
								content: [cls.upgrade_btn_inner, 'p-3']
							}}
						></Button>
						<Button
							startContent={<IconShopping className='h-5 w-5 fill-[#121722]' />}
							classNames={{
								base: [cls.shopping_btn, !chatViewHidden ? '!hidden' : 'md:hidden'],
								content: [cls.shopping_btn_inner, 'p-3']
							}}
						>
							<span className='text-[14px] text-[#121722]'>
								Sell
								{sellingAmount?.amount && <span> (${sellingAmount.amount})</span>}
							</span>
						</Button>
					</div>
				</div>
				<div className={clsx('w-full justify-between gap-2 md:flex', !chatViewHidden ? 'flex' : 'hidden')}>
					<Button
						startContent={<IconUpgrade className='h-5 w-5 fill-[#121722]' />}
						classNames={{
							base: [cls.upgrade_btn, 'w-1/2'],
							content: [cls.upgrade_btn_inner, 'p-3  flex justify-center items-center']
						}}
					>
						<span className='text-[14px] text-[#121722] xs:hidden'>Upgrade</span>
					</Button>
					<Button
						startContent={<IconShopping className='h-5 w-5 fill-[#121722]' />}
						classNames={{
							base: [cls.shopping_btn, 'w-1/2'],
							content: [cls.shopping_btn_inner, 'p-3 flex justify-center items-center']
						}}
					>
						<span className='text-[14px] text-[#121722] xs:hidden'>
							Sell{sellingAmount?.amount && <span> (${sellingAmount.amount})</span>}
						</span>
					</Button>
				</div>
				<div className='mt-2 flex w-full flex-wrap justify-between gap-0.5'>
					<ProfileInventory
						items={investoryItems}
						onSelect={setSellingAmount}
					/>
				</div>
			</div>
		</div>
	)
}

export default MainInventory
