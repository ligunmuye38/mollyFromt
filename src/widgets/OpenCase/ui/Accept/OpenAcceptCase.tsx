import { acceptItems } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'
import { useCommonStore } from '@/entities/Common/model/store'

import IconDollar from '@/shared/assets/icons/icon-dollar.svg'
import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'
import Backshape from '@/shared/assets/open-case-backshape.svg'
import openCaseBg from '@/shared/assets/open-case-bg.png'
import { CaseItemTheme } from '@/shared/const/rarity'
import Button from '@/shared/ui/Button/Button'

import cls from '../OpenCase.module.sass'

const OpenFarm = () => {
	// For translation
	const t = useTranslations()
	const setOpenAcceptCase = useCommonStore(state => state.setOpenAcceptCase)

	// Build case item list
	const cases = acceptItems.map((item, index) => (
		<CaseItem
			key={index}
			title={item.title}
			content={item.content}
			price={item.price}
			picUrl={item.picUrl}
			type={item.type}
			name={item.name}
			percent={item.percent}
			isRotate={true}
			isOpen={false}
			backTheme={CaseItemTheme.GRADIENTGREEN}
		/>
	))

	// Try again function
	const tryAgain = () => {
		setOpenAcceptCase(true)
	}

	return (
		<div className='flex flex-col items-center gap-5'>
			<div className='px-1 3sm:justify-between 3sm:gap-0'>
				<div
					className={clsx(cls.inner, 'mb-4 flex w-full items-end justify-center')}
					style={{ backgroundImage: `url(${openCaseBg.src})` }}
				>
					<Backshape className={cls.backshape} />
					<div className={clsx(cls.backshape, 'flex')}>
						<Image
							src={'/images/case/skin-5.png'}
							alt='case'
							width={320}
							height={320}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<div className={cls.accept_selected_case_name}>{acceptItems[0].name}</div>
						<div className='flex justify-center gap-[10px]'>
							<span className={cls.accept_selected_case_price}>${acceptItems[0].price}</span>
							<span className={cls.accept_selected_case_title}>{acceptItems[0].title}</span>
							<span className={cls.accept_selected_case_title}>{acceptItems[0].percent}%</span>
						</div>
					</div>
				</div>
				<div className='flex w-full flex-wrap justify-center gap-[10px]'>
					<div
						className={clsx(
							'relative flex h-[52px] min-w-[193px] items-center justify-center',
							cls.btn_hexagon_yellow_shadow
						)}
					>
						<div className={clsx('relative h-[48px] w-[193px]', cls.btn_hexagon_yellow)}>
							<div className={clsx('relative h-full w-full', cls.btn_hexagon_yellow_inner)}>
								<Button
									fullWidth={true}
									hexagon={true}
									classNames={{
										base: 'w-full h-full'
									}}
									onClick={tryAgain}
									startContent={<IconTryagain className='h-[20px] w-[22px]' />}
								>
									<span className='text-[15px] font-[900] text-[#000000]'>{t('case_accept.try_again')}</span>
								</Button>
							</div>
						</div>
					</div>
					<div
						className={clsx(
							'relative flex h-[52px] min-w-[193px] items-center justify-center',
							cls.btn_hexagon_green_shadow
						)}
					>
						<div className={clsx('relative h-[48px] w-[193px]', cls.btn_hexagon_green)}>
							<div className={clsx('relative h-full w-full', cls.btn_hexagon_green_inner)}>
								<Button
									fullWidth={true}
									hexagon={true}
									classNames={{
										base: 'w-full h-full'
									}}
									onClick={tryAgain}
									startContent={<IconDollar className='h-[20px] w-[22px]' />}
								>
									<span className='text-[15px] font-[900] text-[#000000]'>{t('case_accept.sell_for')}</span>
								</Button>
							</div>
						</div>
					</div>
					<div className={clsx('relative flex h-[52px] min-w-[193px] items-center justify-center')}>
						<div className={clsx('relative h-[48px] w-[193px]', cls.btn_hexagon_default)}>
							<div className={clsx('relative h-full w-full', cls.btn_hexagon_default_inner)}>
								<Button
									fullWidth={true}
									hexagon={true}
									classNames={{
										base: 'w-full h-full'
									}}
									onClick={tryAgain}
									startContent={<IconUpgrade className='h-[20px] w-[22px] fill-[#677AA9]' />}
								>
									<span className='text-[15px] font-[900] text-[#677AA9]'>{t('case_accept.upgrade')}</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='flex w-full flex-wrap justify-center gap-2.5'>{cases}</div>
		</div>
	)
}

export default OpenFarm
