import { PartnershipTypes } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import IconBriefcase from '@/shared/assets/icons/icon-brifecase-timer.svg'
import IconGift from '@/shared/assets/icons/icon-gift-black.svg'

import cls from './Main.module.sass'

interface IPartnershipTypeSwitcherProps {
	className?: string
	type: PartnershipTypes
	setType: (_: PartnershipTypes) => void
}

const PartnershipTypeSwitcher = ({ className, type, setType }: IPartnershipTypeSwitcherProps) => {
	const t = useTranslations()

	return (
		<div className={clsx(cls.switcher_wrapper, className)}>
			<div
				className={clsx(
					cls.switcher_track_wrapper,
					type === PartnershipTypes.PARTNERSHIP ? 'left-1 w-[200px]' : 'left-[200px] w-[220px]'
				)}
			>
				<div className={cls.switcher_track_wrapper_inner}>
					<div className={cls.switcher_track}>
						<div className={cls.switcher_track_inner}>
							{type === PartnershipTypes.PARTNERSHIP ? (
								<>
									{' '}
									<IconGift className={cls.switcher_track_icon} />
									{t(PartnershipTypes.PARTNERSHIP).toUpperCase()}
								</>
							) : (
								<>
									<IconBriefcase className={cls.switcher_track_icon} />
									{t(PartnershipTypes.PARTNERSHIP_CASES).toUpperCase()}
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
						onClick={() => setType(PartnershipTypes.PARTNERSHIP)}
					>
						<IconGift className={cls.switcher_content_icon} />
						{t(PartnershipTypes.PARTNERSHIP).toUpperCase()}
					</div>
					<div
						className={clsx(cls.switcher_content, 'w-[220px]')}
						onClick={() => setType(PartnershipTypes.PARTNERSHIP_CASES)}
					>
						<IconBriefcase className={cls.switcher_content_icon} />
						{t(PartnershipTypes.PARTNERSHIP_CASES).toUpperCase()}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PartnershipTypeSwitcher
