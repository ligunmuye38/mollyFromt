import Image from 'next/image'

import cls from './WikiWeaponItem.module.sass'

interface WikiWeaponItemProps {
	num: number
}

export const WikiWeaponItem: React.FC<WikiWeaponItemProps> = ({ num }) => {
	const active = num == 1

	return (
		<div
			className={`${cls.item} z-1 relative flex flex-col items-center justify-center rounded-[14px] border border-solid border-[#1F2534] bg-[#161B28] p-5 pt-[30px]`}
		>
			<div className='img mb-[10px] flex justify-center'>
				<Image
					src='/images/skinsWiki/skins-wiki-example.png'
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

			{!active && (
				<button className='w-full rounded-lg border border-solid border-[#1D2535] bg-[#121722] py-3 text-xs font-bold leading-4 text-[#576587]'>
					$24 362.33 - $94 824.33
				</button>
			)}

			{active && (
				<div className='absolute top-full z-10'>
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
			)}
		</div>
	)
}
