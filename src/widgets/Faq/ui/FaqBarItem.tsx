import { FaqBarItemType } from '../model/type'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import cls from './Faq.module.sass'

const FaqBarItem = ({
	content,
	icon: Icons,
	active,
	onClick
}: FaqBarItemType & { active: boolean; onClick: () => void }) => {
	const t = useTranslations()

	return (
		<div
			className={clsx('h-[94px] w-full 2sm:h-[47px]', cls.faq, { [cls.active]: active }, cls.item)}
			onClick={onClick}
		>
			<div className={clsx('h-full w-full', cls.faq_border, cls.border_12)}>
				<div className={clsx(cls.faq_body, cls.border_12, 'flex h-full w-full items-center justify-center gap-3')}>
					<div className={clsx('h-8 w-8', cls.item_icon)}>
						<Icons className={clsx('h-8 w-8')} />
					</div>
					<span className={clsx(cls.faq_text)}>{t(content)}</span>
				</div>
			</div>
		</div>
	)
}

export default FaqBarItem
