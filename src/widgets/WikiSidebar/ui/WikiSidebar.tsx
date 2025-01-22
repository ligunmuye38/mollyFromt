import Image from 'next/image'

import cls from './WikiSidebar.module.sass'

const WikiSidebar = () => {
	return (
		<aside className='rounded-[14px] border-[3px] border-solid border-[#1F2534] p-5 bg-[#191F2D] lg:inline-flex lg:max-w-[650px] 3sm:flex-col'>
			<div
				className={`${cls.skin} skin rounded-[14px] bg-[#121722] p-5 pt-[25px] mb-[15px] lg:max-w-[290px] lg:w-full 3sm:mx-auto`}
			>
				<div className={`${cls.img} + img flex justify-center`}>
					<Image
						src='/images/skinsWiki/skins-wiki-example.png'
						alt=''
					/>
				</div>
				<div className='info flex justify-between items-end w-full'>
					<div className='info__text '>
						<span className='skin__name block text-[#3B455C] text-xs font-medium leading-4 tracking-[0.24px]'>
							Souvenir AWP
						</span>
						<strong className='skin__style block text-white text-sm font-bold leading-4 tracking-[0.28px]'>
							Dragon Lore
						</strong>
						<span className='skin__type block text-[#C94646] text-xs font-medium leading-4 tracking-[0.24px] uppercase'>
							COVERT
						</span>
					</div>
					<div className='price text-[#17E2A5] text-xs font-bold leading-4'>$ 456,05</div>
				</div>
			</div>
			<div className='lg:w-full lg:max-w-[290px] lg:ml-5 3sm:mx-auto'>
				<div className={cls.filters}>
					<button className={cls.filters__btn + ' ' + cls.active}>Normal</button>
					<button className={cls.filters__btn}>StatTrek</button>
				</div>
				<div className='table w-full'>
					<div className='w-full rounded-[8px] bg-[#121722] border border-solid border-[#1D2535] px-[15px] py-[14px] flex justify-between mb-[10px] last:mb-0'>
						<span className='text-white text-xs not-italic font-bold leading-4'>Battle-Scarred</span>
						<strong className='text-[#17E2A5] text-xs not-italic font-bold leading-4'>$ 456,05</strong>
					</div>
					<div className='w-full rounded-[8px] bg-[#121722] border border-solid border-[#1D2535] px-[15px] py-[14px] flex justify-between mb-[10px] last:mb-0'>
						<span className='text-white text-xs not-italic font-bold leading-4'>Battle-Scarred</span>
						<strong className='text-[#17E2A5] text-xs not-italic font-bold leading-4'>$ 456,05</strong>
					</div>
					<div className='w-full rounded-[8px] bg-[#121722] border border-solid border-[#1D2535] px-[15px] py-[14px] flex justify-between mb-[10px] last:mb-0'>
						<span className='text-white text-xs not-italic font-bold leading-4'>Battle-Scarred</span>
						<strong className='text-[#17E2A5] text-xs not-italic font-bold leading-4'>$ 456,05</strong>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default WikiSidebar
