import { INewBattleCase } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import CicularBg from '@/shared/assets/cicular-bg.svg'
import IconCheck from '@/shared/assets/icons/icon-check.svg'
import IconHexagonDefaultSmallVertical from '@/shared/assets/icons/icon-hexagon-default-sm-v.svg'
import IconHexagonGreenSmallVertical from '@/shared/assets/icons/icon-hexagon-green-sm-v.svg'
import IconHexagonGreenSmall from '@/shared/assets/icons/icon-hexagon-green-sm.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './CreateBattle.module.sass'

interface BattleCardNewProps {
	item: INewBattleCase
	selected: boolean
	onSelect: (_: boolean) => void
	amount: number
	setAmount: (_: number) => void
}

const BattleCardNew = ({ amount, item, onSelect, selected, setAmount }: BattleCardNewProps) => {
	const t = useTranslations()
	const [isHover, toggleIsHover] = useState<boolean>(false)

	return (
		<div
			className={clsx(cls.battle_card_new, { [cls.selected]: selected }, 'overflow-hidden')}
			onClick={() => toggleIsHover(true)}
			onMouseLeave={() => setTimeout(() => toggleIsHover(false), 100)}
		>
			<div className={cls.battle_card_new_inner}>
				<div className='absolute left-[15px] top-[15px]'>
					{selected ? (
						<>
							<IconHexagonGreenSmallVertical />
							<IconCheck className='absolute left-1/2 top-1/2 w-[14px] -translate-x-1/2 -translate-y-1/2 fill-[#141925]' />
						</>
					) : (
						<IconHexagonDefaultSmallVertical />
					)}
				</div>
				<Image
					src={item.image}
					width={160}
					height={160}
					alt='Case Image'
				/>
				<p className={cls.title}>{item.title}</p>
				<div className='flex w-full justify-between'>
					<div className={cls.price_wrapper}>
						<div className={cls.price}>
							<div className={cls.price_inner}>${item.price}</div>
						</div>
					</div>
					<div className={cls.spin}>
						<Button onPress={() => setAmount(amount == 0 ? amount : amount - 1)}>
							<IconHexagonGreenSmall />
							<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#141925]'>-</span>
						</Button>
						<span>{amount}</span>
						<Button
							onPress={() => {
								if (!amount) toggleIsHover(true)
								else setAmount(amount + 1)
							}}
						>
							<IconHexagonGreenSmall />
							<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#141925]'>+</span>
						</Button>
					</div>
				</div>
			</div>
			<div
				className={`absolute left-0 h-full w-full ${isHover ? 'top-0' : 'top-full'} flex flex-col items-center justify-center bg-[#1E2434D9] backdrop-blur-[15px] duration-[250ms]`}
			>
				<CicularBg className='absolute' />
				{!selected && (
					<Button
						onPress={() => {
							setAmount(1)
							onSelect(true)
						}}
						classNames={{
							base: clsx(cls.hexagon_btn, 'h-[42px] w-[130px] mb-4 z-10'),
							content: clsx(cls.hexagon_btn_inner, '!gap-0')
						}}
					>
						{t('case_battles.add_case').toUpperCase()}
					</Button>
				)}
				<Button
					classNames={{
						base: clsx(cls.hexagon_btn, cls.default, 'h-[42px] w-[130px] z-10 !bg-none !bg-[#364058]'),
						content: clsx(cls.hexagon_btn_inner, cls.default, '!gap-0 !bg-none !bg-[#242C3F]')
					}}
				>
					<span className='font-bold text-[#60719A]'>{t('case_battles.view_drop').toUpperCase()}</span>
				</Button>
			</div>
		</div>
	)
}

export default BattleCardNew
