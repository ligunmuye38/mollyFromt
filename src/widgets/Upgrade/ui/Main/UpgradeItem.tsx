import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import IconAK47 from '@/shared/assets/icons/icon-ak-47.svg'
import IconClose from '@/shared/assets/icons/icon-close-black.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Button from '@/shared/ui/Button/Button'
import ToggleButton from '@/shared/ui/ToggleButton/ToggleButton'

import cls from './Main.module.sass'

const UpgradeItem = ({ selected, onClose }: { selected?: boolean; onClose: () => void }) => {
	const t = useTranslations()
	const pathname = usePathname()
	const isFailed = pathname.includes('/failed')
	const isSuccess = pathname.includes('/success')

	if (isSuccess) {
		return (
			<div className='relative h-[200px] w-full bg-[linear-gradient(270deg,_#1F2534_0%,_rgba(31,_37,_52,_0)_81.03%)] p-[3px] backdrop-blur-md [clip-path:polygon(0px_0px,_calc(100%_-_36px)_0px,_100%_50%,_calc(100%_-_36px)_100%,_0px_100%)]'>
				<div className='flex h-full w-full items-center justify-center bg-[linear-gradient(270deg,_#191F2D_0%,_rgba(25,_31,_45,_0.15)_100%)] [clip-path:polygon(0px_0px,_calc(100%_-_36px)_0px,_100%_50%,_calc(100%_-_36px)_100%,_0px_100%)]'>
					<div
						style={{
							filter: 'drop-shadow(0px 0px 24px #FD3E2459)'
						}}
					>
						<Button
							classNames={{
								base: clsx(cls.hexagon_btn, cls.yellow, 'h-[42px] w-[216px]'),
								content: clsx(cls.hexagon_btn_inner, cls.yellow, '!gap-0')
							}}
						>
							<IconUpgrade className={cls.hexagon_btn_inner_icon} />
							{t('upgrade').toUpperCase()} $50.00
						</Button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='relative h-[240px] w-full'>
			<div className='h-full w-full origin-top-right skew-y-3 overflow-hidden rounded-[12px] opacity-80 backdrop-blur-md'>
				<div className='h-full w-full origin-top-right -skew-y-6 rounded-[12px] bg-[linear-gradient(270deg,_#1F2534_0%,_rgba(64,_75,_101,_0.15)_81.03%)] p-[3px]'>
					{selected ? (
						<div className='h-full w-full rounded-[12px] bg-[linear-gradient(270deg,_rgba(206,_43,_45,_0.15)_0%,_rgba(25,_31,_45,_0.0225)_30%)]'></div>
					) : (
						<div className='h-full w-full rounded-[12px] bg-[linear-gradient(90deg,_#191F2D_0%,_rgba(18,_23,_35,_0.25)_100%)]'></div>
					)}
				</div>
				{selected ? (
					<div className='absolute right-0 top-4 h-[208px] w-[3px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(245,_45,_45,_0.6)_50%,_#1F2534_100%)]'></div>
				) : (
					<div className='absolute right-0 top-4 h-[208px] w-[3px] bg-[linear-gradient(270deg,_#191F2D_0%,_rgba(18,_23,_35,_0.25)_100%)]'></div>
				)}
			</div>
			{selected ? (
				<>
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(245,_45,_45,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)]'>
						<Image
							src='/images/livefeed/skin-10.png'
							height={138}
							width={188}
							alt='myitem'
						/>
					</div>
					<div className='absolute bottom-5 right-0 flex w-full rotate-3 items-end justify-between px-5'>
						<div className='h-[38px] w-[82px] bg-[#263147] p-[2px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
							<div className='flex h-full w-full items-center justify-center bg-[#1E2739] text-[12px] font-bold text-[#1AD19B] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)]'>
								$25.62
							</div>
						</div>
						<div>
							<p className='text-right text-[12px] font-medium text-[#FF912B]'>ST</p>
							<p className='text-right text-[14px] font-bold text-white'>Field-Tested</p>
							<p className='text-right text-[12px] font-medium text-[#735E8D]'>Field-Tested</p>
						</div>
					</div>
					<div className='absolute top-0 z-10 flex w-full origin-bottom-right -rotate-3'>
						<Button
							onPress={() => onClose()}
							className='-translate-x-1/2 -translate-y-1/2'
						>
							<div className='h-[30px] w-[30px] rotate-3 rounded-[8px] bg-[#0D1018] pl-[7px] pt-[7px]'>
								<IconClose className='h-4 w-4 fill-[#2F374A]' />
							</div>
						</Button>
					</div>
				</>
			) : (
				<>
					<div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center'>
						<IconAK47 className='mb-6 h-[44px] w-[167px] -scale-x-100 fill-[#566C9C] opacity-35' />
						<p className='text-[12px] font-bold text-[#FFFFFF]'>{t('select_an_item_to_upgrade_to')}</p>
						<p className='text-[12px] font-medium text-[#5E6D8D]'></p>
					</div>
					{!isFailed && (
						<div className='absolute bottom-0 right-0 flex w-full origin-[center_right] translate-y-1/2 rotate-3 justify-center gap-2'>
							{['X1', 'X2', 'X3', 'X4', 'X5', 'X10'].map((value, index) => (
								<Button
									key={index}
									className={clsx('rounded-[12px]', { 'shadow-[0px_0px_24px_#FD3E2459]': index === 4 })}
								>
									<div
										className={clsx(
											'flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border-2 font-bold',
											index === 4
												? 'border-[#FDCD24] bg-[#E2B617] text-[14px] text-[#121722] [text-shadow:0px_1px_0px_#FFD53F]'
												: 'border-[#1E2433] bg-[#181E2C] text-[12px] text-[#60719A]'
										)}
									>
										{value}
									</div>
								</Button>
							))}
						</div>
					)}
				</>
			)}
			<div className='absolute right-3 top-4 flex origin-top-right -rotate-3 items-center gap-2'>
				<p className='text-[13px] font-bold text-[#5F6C87]'>{t('lock_selected_items')}</p>
				<ToggleButton
					value
					onToggle={() => {
						return
					}}
				/>
			</div>
		</div>
	)
}

export default UpgradeItem
