import { caseItems } from '../model/items'
import { useTranslations } from 'next-intl'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'

const CaseContents = () => {
	// For translation
	const t = useTranslations()

	// Build case item list
	const cases = caseItems.map((item, index) => (
		<CaseItem
			key={index}
			title={item.title}
			content={item.content}
			price={item.price}
			picUrl={item.picUrl}
			type={item.type}
			name={item.name}
			percent={item.percent}
		/>
	))

	return (
		<div className='flex w-full flex-col items-center justify-center gap-5 px-3 py-3'>
			<span className='text-[18px] font-[500] text-[#D1D9EB]'>{t('open_case.case_content')}</span>
			<div className='flex flex-wrap justify-center gap-3'>{cases}</div>
		</div>
	)
}

export default CaseContents
