import Image from 'next/image'

import cls from './WikiWeaponItem.module.sass'

interface WikiWeaponItemProps {
	num: number
}

export const WikiWeaponItem: React.FC<WikiWeaponItemProps> = ({ num }) => {
	const active = num == 1

	return (
		<div
			className={`${cls.item} relative z-1 p-5 pt-[30px] flex justify-center flex-col items-center border rounded-[14px] border-solid border-[#1F2534] bg-[#161B28]`}
		>
			<div className='img flex justify-center mb-[10px]'>
				<Image
					src='/images/skinsWiki/skins-wiki-example.png'
					alt=''
					className='max-w-[185px]'
				/>
			</div>

			<span className='skin__name block text-[#3B455C] text-xs font-medium leading-4 tracking-[0.24px]'>
				Souvenir AWP
			</span>
			<strong className='skin__style block text-white text-sm font-bold leading-4 tracking-[0.28px]'>
				Dragon Lore
			</strong>
			<span className='skin__type block text-[#C94646] text-xs font-medium leading-4 tracking-[0.24px] uppercase pb-[10px]'>
				COVERT
			</span>

			{!active && (
				<button className='border rounded-lg border-solid border-[#1D2535] bg-[#121722] w-full py-3 text-[#576587] text-xs font-bold leading-4'>
					$24 362.33 - $94 824.33
				</button>
			)}

			{active && (
				<div className='absolute top-full z-10'>
					<div className='p-5 mt-[15px] border rounded-[14px] border-solid border-[#1F2534] bg-[#161B28]'>
						<p className='text-[#576587] text-xs font-medium leading-5 pb-[25px]'>
							Sniper rifle featuring a scope. Based on the Accuracy International Arctic Warfare rifle developed in the
							UK. This is one of the most popular weapons in CS:GO.
						</p>
						<p className='text-[#576587] text-xs font-medium leading-5 pb-[25px]'>
							{' '}
							Among the main advantages of the AWP are very high damage and high accuracy at long distances.{' '}
						</p>
						<p className='text-[#576587] text-xs font-medium leading-5 pb-[25px]'>
							This rifle’s damage is enough to kill 5 opponents standing in a row with a single bullet.
						</p>
						<p className='text-[#576587] text-xs font-medium leading-5'>
							{' '}
							Disadvantages include a high price, low rate of fire, and low kill award.
						</p>
					</div>

					<div className='w-full p-5 mt-[15px] border rounded-[14px] border-solid border-[#1F2534] bg-[#161B28] '>
						<span className='text-white text-lg font-bold leading-5 pb-[15px] block'>Rarity stats</span>
						<div className='rounded-lg bg-[#0F131C] px-[12px] py-[16px] flex justify-center items-center mb-[10px]'>
							<div className='flex w-full items-center'>
								<div className='max-w-[65px] w-full h-[8px] rounded-full bg-[#B24ED7]'></div>
								<span className='text-[#576587] text-right text-xs font-bold leading-5 pl-2'>15</span>
							</div>
							<span className='text-[#576587] text-right text-xs font-bold leading-5'>Covert</span>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
