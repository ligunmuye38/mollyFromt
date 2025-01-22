import clsx from 'clsx'

import IconArrow from '@/shared/assets/icons/icon-arrow-down-2.svg'
import Button from '@/shared/ui/Button/Button'

interface ListItemProps {
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	title: string
	onClick: () => void
	isActived: boolean
}

const ListItme = ({ icon: Icon, title, isActived, onClick }: ListItemProps) => {
	// Click function
	const clickHandle = () => {
		onClick()
	}

	return (
		<div className='h-full w-full'>
			<div
				className={clsx(
					'flex items-center justify-between hover:cursor-pointer lg:hidden',
					isActived == false ? 'bg-[#171e29]' : 'bg-[#1E2535]'
				)}
			>
				<Button
					classNames={{
						base: 'w-full h-full px-[15px] py-[13px] flex justify-between',
						content: 'w-full h-full flex !justify-between'
					}}
					onClick={clickHandle}
					endContent={
						<div className={clsx('rounded-lg p-1', isActived == false ? 'bg-[#1C2333]' : 'bg-[#252C3D]')}>
							<IconArrow className={clsx('-rotate-90', isActived == false ? 'fill-[#333C58]' : 'fill-[#7785B3]')} />
						</div>
					}
				>
					<div className='flex items-center gap-2'>
						<Icon
							className={clsx(
								'h-[25px] w-[24px] fill-[#5A6786]',
								isActived == false ? 'fill-[#5A6786]' : 'fill-[#95AADB]'
							)}
						/>
						<span className={clsx('text-[14px]', isActived == false ? 'text-[#5A6786]' : 'text-[#95AADB]')}>
							{title}
						</span>
					</div>
				</Button>
			</div>
			<div className='hidden w-full lg:flex'>
				<div
					className={clsx(
						'max-h-[65px] min-h-[65px] w-full rounded-[10px] p-[1px] lg:min-w-[82px]',
						isActived == true ? 'bg-[#17C993]' : 'bg-[#191F2D80]'
					)}
				>
					<div className={clsx('h-full w-full rounded-[10px]', isActived == true ? 'bg-[#0A372A]' : 'bg-[#191F2D80]')}>
						<Button
							classNames={{
								base: 'w-full h-full flex pt-[5px] justify-between',
								content: 'w-full h-full flex !justify-center flex-col'
							}}
							onClick={clickHandle}
						>
							<div className='relative flex h-full flex-col items-center'>
								<Icon
									className={clsx(
										'lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]',
										isActived == false ? 'fill-[#5A6786]' : 'fill-[#19CF99]'
									)}
								/>
								<div className='flex h-full flex-1 items-center justify-center'>
									<span
										className={clsx(
											'lg:text-[14px] md:text-[12px] 2sm:text-[10px]',
											isActived == false ? 'text-[#5A6786]' : 'text-[#FFFFFF]'
										)}
									>
										{title}
									</span>
								</div>
							</div>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListItme
