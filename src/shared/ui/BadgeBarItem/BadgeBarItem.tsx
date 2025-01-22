import { CircularProgress } from '@nextui-org/react'
import clsx from 'clsx'

import { TitleType } from '@/widgets/Profile/model/types'

interface BadgeBarItemProps {
	title: string
	content: string
	icon?: React.FC<React.SVGProps<SVGSVGElement>>
	titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>
	titleType?: TitleType
	isUpperContent?: boolean
}

const BadgeBarItem = ({
	title,
	content,
	icon: Icon,
	titleType = 'bg',
	titleIcon: TitleIcon,
	isUpperContent = false
}: BadgeBarItemProps) => {
	return (
		<div className={clsx('h-full rounded-xl bg-[#22293A] p-[1px]')}>
			<div
				className={clsx(
					'relative flex h-full items-center gap-4 rounded-xl bg-[#1D2332]',
					Icon ? 'p-4 sm:!px-0' : 'px-4 py-2'
				)}
			>
				{Icon ? (
					<div className='flex gap-4 sm:flex sm:h-full sm:w-full sm:items-center sm:justify-center'>
						<div className='w-auto sm:absolute sm:-top-1/2 sm:z-10 sm:translate-y-1/2'>
							<div className='rounded-[10px] bg-[#242C3E] p-[1px]'>
								<div className='rounded-[10px] bg-[#1A202E] p-3 sm:p-2'>
									{<Icon className='h-6 w-6 fill-[#5A6786]' />}
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-0.5 sm:mt-3 sm:text-center'>
							<span className='font-[Gotham Medium] text-[16px] text-white'>{title}</span>
							<span className={clsx('text-[12px] text-[#5A6786]', isUpperContent == true && 'uppercase')}>
								{content}
							</span>
						</div>
					</div>
				) : (
					<div className='flex h-full w-full flex-col items-center justify-center'>
						<div className='flex w-full flex-col items-center justify-center gap-1'>
							{titleType == 'bg' && (
								<div
									className={clsx(
										'flex w-[69px] items-center justify-center gap-1 rounded-md bg-[#252C3D] py-[10px]',
										TitleIcon && '!w-[83px]'
									)}
								>
									{TitleIcon && <TitleIcon className='h-4 w-4 fill-white' />}
									<span className='font-primary-med text-[12px] text-white'>{title}</span>
								</div>
							)}
							{titleType == 'level' && (
								<div className='relative h-auto w-auto'>
									<CircularProgress
										color='success'
										size='lg'
										value={30}
										classNames={{
											svg: 'w-[40px] h-[40px] rotate-90',
											indicator: 'stroke-[#10AA7C]',
											track: 'stroke-[#2C354A]'
										}}
										strokeWidth={2}
									></CircularProgress>
									<span className='absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center'>
										<span className='text-[9px] font-[700] text-white'>{title}</span>
										<span className='text-[6px] uppercase text-[#7082B0]'>lvl</span>
									</span>
								</div>
							)}
							<span
								className={clsx(
									'text-center font-primary-med text-[10px] text-[#5A6786]',
									isUpperContent == true && 'uppercase'
								)}
							>
								{content}
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default BadgeBarItem
