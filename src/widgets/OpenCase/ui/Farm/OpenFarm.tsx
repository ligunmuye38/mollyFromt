import { badgeItems, farmItems } from '../../model/items'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'
import { useCommonStore } from '@/entities/Common/model/store'

import IconTryagain from '@/shared/assets/icons/icon-try-again.svg'
import { CaseItemTheme } from '@/shared/const/rarity'
import BadgeTitle from '@/shared/ui/BadgeTitle/BadgeTitle'
import Button from '@/shared/ui/Button/Button'

import cls from '../OpenCase.module.sass'

const OpenFarm = () => {
	// For translation
	const t = useTranslations()
	const setOpenFarm = useCommonStore(state => state.setOpenFarm)

	// Build case item list
	const farms = farmItems.map((item, index) => (
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
		setOpenFarm(true)
	}

	return (
		<div className='flex flex-col items-center gap-5'>
			<div className='flex w-full flex-wrap justify-center gap-[45px] px-1 3sm:justify-between 3sm:gap-0'>
				{badgeItems.map(item => (
					<BadgeTitle
						icon={<item.icon className={item.iconClassName} />}
						title={item.title}
						content={item.content}
						key={item.title}
					/>
				))}
			</div>
			<div className='flex w-full flex-wrap justify-center gap-2.5'>{farms}</div>
			<div
				className={clsx(
					'relative flex h-[52px] min-w-[313px] items-center justify-center',
					cls.btn_hexagon_yellow_shadow
				)}
			>
				<div className={clsx('relative h-[48px] w-[313px]', cls.btn_hexagon_yellow)}>
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
							<span className='text-[15px] font-[900] text-[#000000]'>{t('case_farm.try_again')}</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OpenFarm
