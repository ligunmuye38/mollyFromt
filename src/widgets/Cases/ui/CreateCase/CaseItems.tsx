import { caseItems } from '../../model/items'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'

const CaseItems = () => {
	// Build case item list
	const cases = caseItems.map((item, index) => (
		<CaseItem
			key={index}
			title={item.title}
			price={item.price}
			picUrl={item.picUrl}
			type={item.type}
			name={item.name}
		/>
	))
	return <div className='relative flex h-full flex-wrap justify-between gap-1 sm:justify-center'>{cases}</div>
}

export default CaseItems
