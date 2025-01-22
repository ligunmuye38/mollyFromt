'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { CircularProgress } from '@nextui-org/react'
import clsx from 'clsx'
import Image from 'next/image'

import { useAppResponsive } from '@/shared/lib/useResponsive'

import cls from './User.module.sass'

const UserHeader = () => {
	// For responsive
	const breakpoints = useAppResponsive()

	return (
		<div className={clsx('h-auto w-full flex-wrap !p-0 lg:!p-1', !breakpoints.lg && cls.user_main)}>
			<div className={clsx('h-full w-full !p-0 lg:!p-5 3sm:!p-1.5', !breakpoints.lg && cls.user_main_inner)}>
				<div className='relative max-h-[500px] w-full'>
					<div className='h-full w-full overflow-hidden rounded-xl'>
						<Image
							src={'/images/profile/user-bg.png'}
							alt='bg'
							sizes='100%'
							fill
							className='!relative !h-full max-h-[200px] min-h-[200px] !w-full object-cover 3sm:hidden'
						/>
					</div>
					<div className={clsx('absolute left-0 top-0 h-full w-full rounded-[14px] 3sm:hidden', cls.image_over)}></div>
					<div className='absolute -bottom-8 left-4 flex w-full flex-wrap items-center gap-3 overflow-hidden 3sm:relative 3sm:bottom-0 3sm:left-0 3sm:justify-center 3sm:gap-1 3sm:overflow-visible'>
						<div className='flex items-center gap-3 3sm:gap-1'>
							<div
								className={clsx('relative flex h-[170px] w-[152px] items-center justify-center 3sm:h-auto 3sm:w-auto')}
							>
								<div className={clsx(cls.avatar_wrapper, 'h-[148px] w-[128px] 3sm:h-[72px] 3sm:w-[66px]')}>
									<div className={clsx(cls.avatar_wrapper_inner, '3sm:!p-1')}>
										<div className={clsx(cls.avatar_wrapper_inner_img, 'relative')}>
											<Image
												src={'/images/avatars/1.jpg'}
												alt='user avatar'
												className='h-[120px] w-[110px] 3sm:h-[57px] 3sm:w-[57px]'
												width={110}
												height={120}
											/>
										</div>
									</div>
								</div>
								<div
									className={clsx(
										cls.level_wrapper,
										'absolute bottom-4 right-[17px] 3sm:bottom-0.5 3sm:right-2 3sm:!h-[22px] 3sm:!w-[18px] 3sm:!p-[2px]'
									)}
								>
									<div className={clsx(cls.level_wrapper_inner_border)}>
										<div
											className={clsx(cls.level_wrapper_inner_body, 'flex h-full w-full items-center justify-center')}
										>
											<span className='text-[14px] font-[700] text-[#121722] 3sm:text-[10px]'>2</span>
										</div>
									</div>
								</div>
							</div>
							<div className='flex h-full w-auto items-center gap-4'>
								<div className='flex items-center gap-4'>
									<div className='flex flex-col'>
										<span className='ml-2 text-[16px] text-[#D1D9EB]'>Aleksandr</span>
									</div>
								</div>
							</div>
						</div>
						<div className='flex items-center gap-3'>
							<Popover
								placement='bottom'
								showArrow={true}
								classNames={{
									base: clsx(cls.base, cls['_with-arrow'], '-mt-3')
								}}
								offset={0}
							>
								<PopoverTrigger>
									<div className='relative h-auto w-auto'>
										<CircularProgress
											color='success'
											size='lg'
											value={70}
											classNames={{
												svg: 'w-[60px] h-[60px] rotate-180',
												indicator: 'stroke-[#10AA7C]',
												track: 'stroke-[#2C354A]'
											}}
											strokeWidth={1.5}
										></CircularProgress>
										<span className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center'>
											<span className='text-[18px] font-[700] text-white'>2</span>
											<span className='text-[11px] uppercase text-[#7082B0]'>lvl</span>
										</span>
									</div>
								</PopoverTrigger>
								<PopoverContent className='!rounded-md bg-[#2E354C] p-[1px]'>
									<div className='rounded-md bg-[#22283A] px-2 py-1'>
										<div className='text-[8px] text-white'>13941/184924</div>
									</div>
								</PopoverContent>
							</Popover>
							<div>
								<div className='relative flex h-auto w-auto gap-0'>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints?.['3sm'] ? 60 : 35}
										height={breakpoints?.['3sm'] ? 60 : 35}
										alt=''
									/>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints?.['3sm'] ? 60 : 35}
										height={breakpoints?.['3sm'] ? 60 : 35}
										alt=''
									/>
									<Image
										src={'/images/profile/item.png'}
										width={breakpoints?.['3sm'] ? 60 : 35}
										height={breakpoints?.['3sm'] ? 60 : 35}
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserHeader
