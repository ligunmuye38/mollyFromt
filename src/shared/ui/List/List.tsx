import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { IListItem } from '@/widgets/ProvablyFair/model/type'

import ListItem from './ListItem'

interface ListProps {
	classNames?: {
		base?: string
		content?: string
	}
	items: IListItem[]
	axis?: string
	onClickItem?: (index: number) => void
	active?: number
}

const List: FC<ListProps> = ({ classNames, items, axis = 'y', active, onClickItem }) => {
	const t = useTranslations()

	return (
		<div
			className={clsx(
				'w-auto rounded-lg bg-[#1D2433] p-[2px]',
				classNames?.base,
				axis == 'x' && 'justify-between overflow-y-auto !rounded-none'
			)}
		>
			<div
				className={clsx(
					'flex w-auto flex-col gap-3 rounded-lg bg-[#181E2B] py-5',
					classNames?.content,
					axis == 'x' && '!flex-row !overflow-y-auto !rounded-none !px-3 !py-2'
				)}
			>
				{items.map((item, index) => (
					<ListItem
						isActive={active == index}
						onClick={onClickItem && (() => onClickItem(index))}
						content={t(item.title)}
						startIcon={item?.startIcon}
						endIcon={item?.endIcon}
						key={item.id}
						axis={axis}
					/>
				))}
			</div>
		</div>
	)
}

export default List
