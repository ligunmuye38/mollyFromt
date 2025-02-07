import { LottoTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconLotteryTicket from '@/shared/assets/icons/icon-lottery-ticket.svg'
import IconRadar from '@/shared/assets/icons/icon-radar.svg'

import cls from './Main.module.sass'

interface ILottoTypeSwitcherProps {
	className?: string
	type: LottoTypes
	setType: (_: LottoTypes) => void
}

const LottoTypeSwitcher = ({ className, type, setType }: ILottoTypeSwitcherProps) => {
	const t = useTranslations()

	return (
		<div className={clsx(cls.switcher_wrapper, className)}>
			<div className={clsx(cls.switcher_track_wrapper, type === LottoTypes.ACTIVE_LOTTO ? 'left-1' : 'left-[157px]')}>
				<div className={cls.switcher_track_wrapper_inner}>
					<div className={cls.switcher_track}>
						<div className={cls.switcher_track_inner}>
							{type === LottoTypes.ACTIVE_LOTTO ? (
								<>
									{' '}
									<IconLotteryTicket className={cls.switcher_track_icon} />
									{t(`lotto.${LottoTypes.ACTIVE_LOTTO}`)}
								</>
							) : (
								<>
									<IconRadar className={cls.switcher_track_icon} />
									{t(`lotto.${LottoTypes.HISTORY_LOTTO}`)}
								</>
							)}
						</div>
					</div>
				</div>
				<div
					className={clsx(
						cls.switcher_news_wrapper,
						type === LottoTypes.ACTIVE_LOTTO ? 'opacity-100' : 'opacity-0',
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
						onClick={() => setType(LottoTypes.ACTIVE_LOTTO)}
					>
						<IconLotteryTicket className={cls.switcher_content_icon} />
						{t(`lotto.${LottoTypes.ACTIVE_LOTTO}`)}
					</div>
					<div
						className={cls.switcher_content}
						onClick={() => setType(LottoTypes.HISTORY_LOTTO)}
					>
						<IconRadar className={cls.switcher_content_icon} />
						{t(`lotto.${LottoTypes.HISTORY_LOTTO}`)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LottoTypeSwitcher
