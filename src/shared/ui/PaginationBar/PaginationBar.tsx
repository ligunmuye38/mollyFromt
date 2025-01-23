import { Pagination as NextPagination, PaginationItemType } from '@nextui-org/react'
import clsx from 'clsx'

import IconLeftArrowRounded from '@/shared/assets/icons/icon-arrow-left-rounded.svg'
import IconRightArrowRounded from '@/shared/assets/icons/icon-arrow-right-rounded.svg'

interface PaginationBarProps {
	total: number
	page?: number
	setPage?: (value: number) => void
}

const PaginationBar = ({ page, setPage, total }: PaginationBarProps) => {
	const renderItem = ({ ref, key, value, onNext, onPrevious, setPage, className }: any) => {
		if (value === PaginationItemType.NEXT) {
			return (
				<button
					key={key}
					className={clsx(className, 'h-8 w-8 min-w-8 !bg-[#1C2332]')}
					onClick={onNext}
				>
					<IconRightArrowRounded />
				</button>
			)
		}

		if (value === PaginationItemType.PREV) {
			return (
				<button
					key={key}
					className={clsx(className, 'h-8 w-8 min-w-8 !bg-[#1C2332]')}
					onClick={onPrevious}
				>
					<IconLeftArrowRounded />
				</button>
			)
		}

		if (value === PaginationItemType.DOTS) {
			return (
				<button
					key={key}
					className={clsx(className, '!bg-[#1C2332] text-white')}
				>
					...
				</button>
			)
		}

		// cursor is the default item
		return (
			<button
				key={key}
				ref={ref}
				className={clsx(className, '!bg-[#1C2332] text-white')}
				onClick={() => setPage(value)}
			>
				{value}
			</button>
		)
	}

	return (
		<NextPagination
			page={page}
			onChange={setPage}
			className='w-max'
			showControls
			showShadow
			initialPage={1}
			renderItem={renderItem}
			total={total}
			color='warning'
		/>
	)
}

export default PaginationBar
