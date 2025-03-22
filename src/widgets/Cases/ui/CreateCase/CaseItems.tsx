import { caseItems } from '../../model/items'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'

interface ICaseItemsProps {
	chances?: number[]
	onUpdate?: (_: number[]) => void
}

const CaseItems = ({
	chances = [],
	onUpdate = (_: number[]) => {
		return
	}
}: ICaseItemsProps) => {
	// Build case item list
	const cases = caseItems.map((item, index) =>
		chances.includes(index) ? (
			<></>
		) : (
			<CaseItem
				key={index}
				title={item.title}
				price={item.price}
				picUrl={item.picUrl}
				type={item.type}
				name={item.name}
				onClick={() => {
					onUpdate([...chances, index])
				}}
			/>
		)
	)
	return <div className='relative flex h-full flex-wrap justify-between gap-1 sm:justify-center'>{cases}</div>
}

export default CaseItems
