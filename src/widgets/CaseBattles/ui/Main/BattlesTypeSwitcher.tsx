import { CaseBattleTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCup from '@/shared/assets/icons/icon-cup.svg'

import cls from './Main.module.sass'

interface BattlesTypeSwitcherProps {
	className?: string
}

const BattlesTypeSwitcher = ({ className }: BattlesTypeSwitcherProps) => {
	const t = useTranslations()

	const [type, setType] = useState<CaseBattleTypes>(CaseBattleTypes.ACTIVE_BATTLES)

	return (
		<div className={clsx(cls.switcher_wrapper, className)}>
			<div
				className={clsx(
					cls.switcher_track_wrapper,
					type === CaseBattleTypes.ACTIVE_BATTLES ? 'left-1' : 'left-[157px]'
				)}
			>
				<div className={cls.switcher_track_wrapper_inner}>
					<div className={cls.switcher_track}>
						<div className={cls.switcher_track_inner}>
							{type === CaseBattleTypes.ACTIVE_BATTLES ? (
								<>
									{' '}
									<IconCaseBattle className={cls.switcher_track_icon} />
									{t(`case_battles.${CaseBattleTypes.ACTIVE_BATTLES}`)}
								</>
							) : (
								<>
									<IconCup className={cls.switcher_track_icon} />
									{t(`case_battles.${CaseBattleTypes.TOP_BATTLES}`)}
								</>
							)}
						</div>
					</div>
				</div>
				<div className={cls.switcher_news_wrapper}>
					<div className={cls.switcher_news}>
						<div className={cls.switcher_news_inner}>348</div>
					</div>
				</div>
			</div>
			<div className={cls.switcher}>
				<div className={cls.switcher_inner}>
					<div
						className={cls.switcher_content}
						onClick={() => setType(CaseBattleTypes.ACTIVE_BATTLES)}
					>
						<IconCaseBattle className={cls.switcher_content_icon} />
						{t(`case_battles.${CaseBattleTypes.ACTIVE_BATTLES}`)}
					</div>
					<div
						className={cls.switcher_content}
						onClick={() => setType(CaseBattleTypes.TOP_BATTLES)}
					>
						<IconCup className={cls.switcher_content_icon} />
						{t(`case_battles.${CaseBattleTypes.TOP_BATTLES}`)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BattlesTypeSwitcher
