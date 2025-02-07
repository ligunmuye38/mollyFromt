import Image from 'next/image'

import cls from './WikiCases.module.sass'

export const WikiCases = () => {
	return (
		<>
			<div className={cls.cases}>
				<h2 className={cls.title}>Cases Containing Dragon Lore</h2>
				<div className='grid grid-cols-[repeat(4,2fr)] gap-[15px] md:grid-cols-[repeat(3,2fr)]'>
					<div className='flex flex-col items-center rounded-[14px] border border-solid border-[#21293B] bg-[#21293B] p-5 pt-[10px]'>
						<Image
							src='/images/skinsWiki/skins-wki-exmaple-item.png'
							width={128}
							height={128}
							alt=''
							className='pb-[14px]'
						/>
						<h4 className='pb-[16px] text-[15px] font-medium not-italic leading-4 text-white'>Cases Magic</h4>
						<button className={cls.btn}>
							<div className={cls.btn__inner}>$15.50</div>
						</button>
					</div>
					<div className='flex flex-col items-center rounded-[14px] border border-solid border-[#21293B] bg-[#21293B] p-5 pt-[10px]'>
						<Image
							src='/images/skinsWiki/skins-wki-exmaple-item.png'
							width={128}
							height={128}
							alt=''
							className='pb-[14px]'
						/>
						<h4 className='pb-[16px] text-[15px] font-medium not-italic leading-4 text-white'>Cases Magic</h4>
						<button className={cls.btn}>
							<div className={cls.btn__inner}>$15.50</div>
						</button>
					</div>
					<div className='flex flex-col items-center rounded-[14px] border border-solid border-[#21293B] bg-[#21293B] p-5 pt-[10px]'>
						<Image
							src='/images/skinsWiki/skins-wki-exmaple-item.png'
							width={128}
							height={128}
							alt=''
							className='pb-[14px]'
						/>
						<h4 className='pb-[16px] text-[15px] font-medium not-italic leading-4 text-white'>Cases Magic</h4>
						<button className={cls.btn}>
							<div className={cls.btn__inner}>$15.50</div>
						</button>
					</div>
					<div className='flex flex-col items-center rounded-[14px] border border-solid border-[#21293B] bg-[#21293B] p-5 pt-[10px]'>
						<Image
							src='/images/skinsWiki/skins-wki-exmaple-item.png'
							width={128}
							height={128}
							alt=''
							className='pb-[14px]'
						/>
						<h4 className='pb-[16px] text-[15px] font-medium not-italic leading-4 text-white'>Cases Magic</h4>
						<button className={cls.btn}>
							<div className={cls.btn__inner}>$15.50</div>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
