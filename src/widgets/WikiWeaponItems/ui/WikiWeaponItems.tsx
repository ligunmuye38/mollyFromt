'use client'

import Image from 'next/image'
import { useState } from 'react'

import { WikiWeaponItem } from '@/shared/ui/WikiWeaponItem/ui/WikiWeaponItem'

import cls from './WikiWeaponItem.module.sass'

export const WikiWeaponItems = () => {
	const [activeCard, setActiveCard] = useState<number>(0)

	return (
		<div className='mt-[37px] flex w-full gap-5 3sm:flex-col'>
			<div className='w-[330px] flex-shrink-0 3sm:w-full'>
				<div
					className={`${cls.item} z-1 relative flex flex-col items-center justify-center rounded-[14px] border border-solid border-[#1F2534] bg-[#161B28] p-5 pt-[30px]`}
				>
					<div className='img mb-[10px] flex justify-center'>
						<Image
							src='/images/skinsWiki/skins-wiki-example.png'
							width={184}
							height={138}
							alt=''
							className='max-w-[185px]'
						/>
					</div>

					<span className='skin__name block text-xs font-medium leading-4 tracking-[0.24px] text-[#3B455C]'>
						Souvenir AWP
					</span>
					<strong className='skin__style block text-sm font-bold leading-4 tracking-[0.28px] text-white'>
						Dragon Lore
					</strong>
					<span className='skin__type block pb-[10px] text-xs font-medium uppercase leading-4 tracking-[0.24px] text-[#C94646]'>
						COVERT
					</span>
				</div>
				<div className=''>
					<div className='mt-[15px] rounded-[14px] border border-solid border-[#1F2534] bg-[#161B28] p-5'>
						<p className='pb-[25px] text-xs font-medium leading-5 text-[#576587]'>
							Sniper rifle featuring a scope. Based on the Accuracy International Arctic Warfare rifle developed in the
							UK. This is one of the most popular weapons in CS:GO.
						</p>
						<p className='pb-[25px] text-xs font-medium leading-5 text-[#576587]'>
							{' '}
							Among the main advantages of the AWP are very high damage and high accuracy at long distances.{' '}
						</p>
						<p className='pb-[25px] text-xs font-medium leading-5 text-[#576587]'>
							This rifle’s damage is enough to kill 5 opponents standing in a row with a single bullet.
						</p>
						<p className='text-xs font-medium leading-5 text-[#576587]'>
							{' '}
							Disadvantages include a high price, low rate of fire, and low kill award.
						</p>
					</div>

					<div className='mt-[15px] w-full rounded-[14px] border border-solid border-[#1F2534] bg-[#161B28] p-5'>
						<span className='block pb-[15px] text-lg font-bold leading-5 text-white'>Rarity stats</span>
						<div className='mb-[10px] flex items-center justify-center rounded-lg bg-[#0F131C] px-[12px] py-[16px]'>
							<div className='flex w-full items-center'>
								<div className='h-[8px] w-full max-w-[65px] rounded-full bg-[#B24ED7]'></div>
								<span className='pl-2 text-right text-xs font-bold leading-5 text-[#576587]'>15</span>
							</div>
							<span className='text-right text-xs font-bold leading-5 text-[#576587]'>Covert</span>
						</div>
					</div>
				</div>
			</div>
			<div className='grid flex-grow grid-cols-[repeat(4,2fr)] items-start gap-5 3md:grid-cols-[repeat(3,2fr)] md:grid-cols-[repeat(2,2fr)] md:gap-3 3sm:grid-cols-1'>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
					<WikiWeaponItem
						onClick={() => setActiveCard(index)}
						active={index === activeCard}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
