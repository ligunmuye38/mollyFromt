// import clsx from 'clsx'
import { PublicDate } from '../PublicDate/PublicDate'
import React from 'react'

import cls from './BlogCardView.module.sass'

interface BlogCardViewProps {
	title: string
	picUrl: string
	date: string
}

export const BlogCardView: React.FC<BlogCardViewProps> = ({ title, picUrl }) => {
	return (
		// <div className={clsx(cls.card, cls[config.theme || 'default'], className)}>
		<div className={cls.card}>
			<div
				className={cls.pic}
				style={{ backgroundImage: `url(${picUrl})` }}
			></div>
			<div className={cls.text}>
				<p>{title}</p>
				<PublicDate>6 Jun. 2024</PublicDate>
			</div>
		</div>
	)
}
