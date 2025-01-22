import Image from 'next/image'

import cls from './WikiSidebar.module.sass'

const WikiSidebar = () => {
	return (
		<aside className='rounded-[14px] border-[3px] border-solid border-[#1F2534] bg-[#191F2D] p-5 lg:inline-flex lg:max-w-[650px] 3sm:flex-col'>
			<div
				className={`${cls.skin} skin mb-[15px] rounded-[14px] bg-[#121722] p-5 pt-[25px] lg:w-full lg:max-w-[290px] 3sm:mx-auto`}
			>
				<div className={`${cls.img} + img flex justify-center`}>
					<Image
						src='/images/skinsWiki/skins-wiki-example.png'
						alt=''
					/>
				</div>
				<div className='info flex w-full items-end justify-between'>
					<div className='info__text'>
						<span className='skin__name block text-xs font-medium leading-4 tracking-[0.24px] text-[#3B455C]'>
							Souvenir AWP
						</span>
						<strong className='skin__style block text-sm font-bold leading-4 tracking-[0.28px] text-white'>
							Dragon Lore
						</strong>
						<span className='skin__type block text-xs font-medium uppercase leading-4 tracking-[0.24px] text-[#C94646]'>
							COVERT
						</span>
					</div>
					<div className='price text-xs font-bold leading-4 text-[#17E2A5]'>$ 456,05</div>
				</div>
			</div>
			<div className='lg:ml-5 lg:w-full lg:max-w-[290px] 3sm:mx-auto'>
				<div className={cls.filters}>
					<button className={cls.filters__btn + ' ' + cls.active}>Normal</button>
					<button className={cls.filters__btn}>StatTrek</button>
				</div>
				<div className='table w-full'>
					<div className='mb-[10px] flex w-full justify-between rounded-[8px] border border-solid border-[#1D2535] bg-[#121722] px-[15px] py-[14px] last:mb-0'>
						<span className='text-xs font-bold not-italic leading-4 text-white'>Battle-Scarred</span>
						<strong className='text-xs font-bold not-italic leading-4 text-[#17E2A5]'>$ 456,05</strong>
					</div>
					<div className='mb-[10px] flex w-full justify-between rounded-[8px] border border-solid border-[#1D2535] bg-[#121722] px-[15px] py-[14px] last:mb-0'>
						<span className='text-xs font-bold not-italic leading-4 text-white'>Battle-Scarred</span>
						<strong className='text-xs font-bold not-italic leading-4 text-[#17E2A5]'>$ 456,05</strong>
					</div>
					<div className='mb-[10px] flex w-full justify-between rounded-[8px] border border-solid border-[#1D2535] bg-[#121722] px-[15px] py-[14px] last:mb-0'>
						<span className='text-xs font-bold not-italic leading-4 text-white'>Battle-Scarred</span>
						<strong className='text-xs font-bold not-italic leading-4 text-[#17E2A5]'>$ 456,05</strong>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default WikiSidebar
