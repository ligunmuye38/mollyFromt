import clsx from 'clsx'
import Image from 'next/image'

import cls from '../Cases.module.sass'

const DropChance = () => {
	return (
		<div className={clsx(cls.chance_item)}>
			<div className={clsx(cls.chance_item_inner, 'flex gap-[10px] p-[10px]')}>
				<div className='w-[100px]'>
					<div className={clsx('w-full rounded-md bg-[#121721] py-1')}>
						<div className={clsx('px-3 py-2', cls.chance_item_bg)}>
							<Image
								src={'/images/livefeed/skin-8.png'}
								width={75}
								height={55}
								alt='skin'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-1 flex-col justify-between gap-0.5'>
					<div className='flex flex-col gap-[2px]'>
						<span className='text-[10px] font-[500] text-[#576386]'>P2000</span>
						<span className='text-[12px] font-[500] text-white'>Blue Laminate</span>
						<div className='flex gap-0.5'>
							<span className='text-[11px] font-[600] text-[#17E2A5]'>$</span>
							<span className='text-[11px] font-[600] text-white'>13.35</span>
						</div>
					</div>
					<div className='flex w-full gap-2'>
						<div className={clsx(cls.chance_item_btn, 'w-[90px] sm:w-auto')}>
							<div className={clsx(cls.chance_item_btn_inner, 'flex items-center p-1.5 sm:px-2 sm:py-2.5')}>
								<div className='flex rounded-md bg-[#17E2A5] px-[9px] py-[5px] text-[14px] font-[900] text-[#141925] sm:hidden'>
									<div>%</div>
								</div>
								<div className='flex flex-1 items-center justify-center sm:gap-1'>
									<span className='hidden text-[14px] font-[700] text-white sm:flex'>%</span>
									<span className='text-[14px] font-[700] text-white'>14</span>
								</div>
							</div>
						</div>
						<div className={clsx(cls.chance_item_active, 'flex flex-1')}>
							<div className={clsx(cls.chance_item_active_inner, 'flex w-full items-center justify-center py-2.5')}>
								<div className='flex items-center gap-0.5'>
									<span className='text-[14px] font-[700] text-white'>+</span>
									<span className='text-[11px] font-[600] text-[#17E2A5]'>$</span>
									<span className='text-[14px] font-[700] text-white'>400.33</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DropChance
