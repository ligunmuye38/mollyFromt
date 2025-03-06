import clsx from 'clsx'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import IconClose from '@/shared/assets/icons/icon-close-black.svg'
import IconTimer from '@/shared/assets/icons/icon-timer-4.svg'
import Button from '@/shared/ui/Button/Button'

function SuccessPrompt() {
	const pathname = usePathname()
	const isSuccess = useMemo(() => pathname.includes('/success'), [pathname])
	const [timer, setTimer] = useState<number>(9)
	const [isHidden, toggleIsHidden] = useState<boolean>(false)

	useEffect(() => {
		if (isSuccess) {
			const interval = setInterval(() => {
				setTimer(v => v - 1)
			}, 1000)

			return () => clearInterval(interval)
		}
	}, [isSuccess])

	useEffect(() => {
		if (timer === 0) toggleIsHidden(true)
	}, [timer])

	return (
		<div className='px-5 2sm:px-[10px]'>
			<div
				className={clsx(
					'w-full rounded-[14px] bg-[linear-gradient(180deg,_#1F2534_0%,_rgba(31,_37,_52,_0.25)_100%)] p-[3px]',
					{ hidden: isHidden || !isSuccess }
				)}
			>
				<div className='3m:py-1 flex h-full w-full items-center justify-between rounded-[12px] bg-[linear-gradient(180deg,_#191F2D_0%,_rgba(25,_31,_45,_0.25)_100%)] px-[23px] py-2 3sm:px-2'>
					<div
						style={{
							filter: 'drop-shadow(0px 0px 12px #FD3E2440)'
						}}
					>
						<Button
							hexagonAxis='x'
							hexagon
							hexagonAngleOffset={10}
							classNames={{
								base: '!p-[2px] bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_175.71%,_#FDCD24_202.67%),_linear-gradient(270deg,_rgba(253,_205,_36,_0)_-35.08%,_#FDCD24_3.33%)]',
								content:
									'text-[#292D32] text-[14px] leading-[14px] 3sm:text-[10px] 3sm:leading-[10px] font-bold w-full h-full px-[18px] 3sm:px-2 3sm:py-1 py-[7px] bg-[linear-gradient(0deg,_#E2B617,_#E2B617),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)]'
							}}
						>
							<div className='flex items-center justify-center gap-1'>
								<IconTimer className='h-5 w-5 fill-[#292D32] 3sm:h-4 3sm:w-4' />
								00:0{timer}
							</div>
						</Button>
					</div>
					<div className='flex items-center gap-6 3sm:gap-2'>
						<div className='h-[60px] w-[81px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md 3sm:h-[40px] 3sm:w-[60px]'>
							<Image
								src='/images/case/skin-2.png'
								width={81}
								height={60}
								alt='gun'
							/>
						</div>
						<div>
							<p className='text-[14px] font-medium text-[#60719A] 3sm:text-[10px]'>Upgrade Glock-18 Candy Apple</p>
							<p className='text-[18px] font-bold text-white 3sm:text-[12px]'>To Start a RUSH !</p>
						</div>
					</div>
					<Button
						onPress={() => setTimer(0)}
						hexagon
						hexagonAxis='y'
						hexagonAngleOffset={8}
						classNames={{
							base: 'w-[30px] h-[34px] !bg-[linear-gradient(180deg,_#191F2D_0%,_rgba(67,_81,_112,_0.5)_100%)]'
						}}
					>
						<IconClose className='h-[10px] w-[10px] fill-[#4F5A73]' />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default SuccessPrompt
