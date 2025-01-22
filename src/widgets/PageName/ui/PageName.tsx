import HeaderBg from '@/shared/assets/section-header-bg.svg'

import cls from './PageName.module.sass'

interface PageNameProps {
	title: string
}

export const PageName: React.FC<PageNameProps> = ({ title }) => {
	return (
		<div className={cls.h}>
			<div className={cls.bg}>
				<HeaderBg className={cls.bg_pic} />
			</div>
			<div className={cls.h_inner}>
				<h1 className={cls.title}>{title}</h1>
			</div>
		</div>
	)
}
