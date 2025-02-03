import { CaseBattleTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCup from '@/shared/assets/icons/icon-cup.svg'

import cls from './Main.module.sass'

interface IBattlesTypeSwitcherProps {
	className?: string
	type: CaseBattleTypes
	setType: (_: CaseBattleTypes) => void
}

const BattlesTypeSwitcher = ({ className, type, setType }: IBattlesTypeSwitcherProps) => {
	const t = useTranslations()

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
				<div
					className={clsx(
						cls.switcher_news_wrapper,
						type === CaseBattleTypes.ACTIVE_BATTLES ? 'opacity-100' : 'opacity-0',
						'duration-300'
					)}
				>
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
