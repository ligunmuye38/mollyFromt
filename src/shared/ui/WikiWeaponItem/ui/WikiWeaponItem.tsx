import Image from 'next/image'

import cls from './WikiWeaponItem.module.sass'

interface WikiWeaponItemProps {
	active: boolean
	onClick: () => void
}

export const WikiWeaponItem: React.FC<WikiWeaponItemProps> = ({ active, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`${cls.item} z-1 relative flex cursor-pointer flex-col items-center justify-center rounded-[14px] border border-solid bg-[#161B28] p-5 pt-[30px] ${active ? 'border-[#1F2534]' : 'border-[#1F2534]'}`}
		>
			<div
				className='img mb-[10px] flex justify-center'
				style={{
					background: 'radial-gradient(50% 50% at 50% 50%, rgba(200, 70, 70, 0.35) 0%, rgba(200, 70, 70, 0) 100%)'
				}}
			>
				<Image
					src='/images/skinsWiki/skins-wiki-example.png'
					width={184}
					height={138}
					alt=''
					className='!w-full max-w-[185px]'
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
			<button className='w-full rounded-lg border border-solid border-[#1D2535] bg-[#121722] py-3 text-xs font-bold leading-4 text-[#576587]'>
				$24 362.33 - $94 824.33
			</button>
		</div>
	)
}
