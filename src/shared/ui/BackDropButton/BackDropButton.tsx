import clsx from 'clsx'
import { FC, SVGProps } from 'react'

import { BackDropTheme } from '@/shared/const/rarity'

import cls from './BackDropButton.module.sass'

interface classNamesInterface {
	body?: string
	inner?: string
}

interface BackDropButtonProps {
	theme: BackDropTheme
	icon: FC<SVGProps<SVGSVGElement>>
	content: string
	classNames?: classNamesInterface
}

const BackDropButton = ({ theme, icon: Icon, content, classNames }: BackDropButtonProps) => {
	return (
		<div className={clsx(cls.body, cls[theme], classNames?.body, 'hover:cursor-pointer')}>
			<div className={clsx(cls.body_inner, cls[theme])}>
				<div
					className={clsx(
						cls.body_inner_border,
						classNames?.inner,
						'flex h-full w-full flex-col items-center justify-center gap-2 px-[40px]'
					)}
				>
					<div className={clsx(cls.hexagon, cls[theme])}>
						<div className={clsx(cls.hexagon_body)}>
							<div className={clsx(cls.hexagon_body_inner, 'flex h-full w-full items-center justify-center')}>
								<Icon className={clsx('h-6 w-6', cls.hexagon_body_icon, cls[theme])} />
							</div>
						</div>
					</div>
					<span className='text-center text-[12px] font-[500] text-white md:text-[10px]'>{content}</span>
				</div>
			</div>
		</div>
	)
}

export default BackDropButton
