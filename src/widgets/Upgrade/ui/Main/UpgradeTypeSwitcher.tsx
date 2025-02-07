import { UpgradeTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconMagicStar from '@/shared/assets/icons/icon-magic-star.svg'
import IconUpgrade from '@/shared/assets/icons/icon-upgrade.svg'

import cls from './Main.module.sass'

interface IUpgradeTypeSwitcherProps {
	className?: string
	type: UpgradeTypes
	setType: (_: UpgradeTypes) => void
}

const UpgradeTypeSwitcher = ({ className, type, setType }: IUpgradeTypeSwitcherProps) => {
	const t = useTranslations()

	return (
		<div className={clsx(cls.switcher_wrapper, className)}>
			<div
				className={clsx(
					cls.switcher_track_wrapper,
					type === UpgradeTypes.UPGRADE ? 'left-1 w-[200px]' : 'left-[200px] w-[220px]'
				)}
			>
				<div className={cls.switcher_track_wrapper_inner}>
					<div className={cls.switcher_track}>
						<div className={cls.switcher_track_inner}>
							{type === UpgradeTypes.UPGRADE ? (
								<>
									{' '}
									<IconUpgrade className={cls.switcher_track_icon} />
									{t(UpgradeTypes.UPGRADE).toUpperCase()}
								</>
							) : (
								<>
									<IconMagicStar className={cls.switcher_track_icon} />
									{t(UpgradeTypes.UPGRADE_STREAKS).toUpperCase()}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className={cls.switcher}>
				<div className={cls.switcher_inner}>
					<div
						className={clsx(cls.switcher_content, 'w-[200px]')}
						onClick={() => setType(UpgradeTypes.UPGRADE)}
					>
						<IconUpgrade className={cls.switcher_content_icon} />
						{t(UpgradeTypes.UPGRADE).toUpperCase()}
					</div>
					<div
						className={clsx(cls.switcher_content, 'w-[220px]')}
						onClick={() => setType(UpgradeTypes.UPGRADE_STREAKS)}
					>
						<IconMagicStar className={cls.switcher_content_icon} />
						{t(UpgradeTypes.UPGRADE_STREAKS).toUpperCase()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpgradeTypeSwitcher
