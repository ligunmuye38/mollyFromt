'use client'

import { farmItems } from '../../model/items'
import { useTranslations } from 'next-intl'

import CaseItem from '@/entities/CaseItem/ui/CaseItem'
import { useCommonStore } from '@/entities/Common/model/store'

const FarmContents = () => {
	// For translation
	const t = useTranslations()
	const openFarm = useCommonStore(state => state.openFarm)
	const setOpenFarm = useCommonStore(state => state.setOpenFarm)

	const hoverContent = (prices: string[], odds: string[], pricesTitle: string[]) => {
		return (
			<div className='flex w-full flex-col gap-[10px] p-3'>
				<div className='flex justify-between'>
					<span className='text-[8px] uppercase text-[#505C77]'>{t('case_farm.price')}</span>
					<span className='text-[8px] uppercase text-[#505C77]'>{t('case_farm.odds')}</span>
				</div>
				{pricesTitle.map((item, index) => (
					<div
						className='flex w-full justify-between'
						key={index}
					>
						<span className='flex gap-0.5'>
							<span className='text-[8px] uppercase text-white'>{item}</span>
							<span className='text-[8px] uppercase text-[#24FDBC]'>${prices[index]}</span>
						</span>
						<span className='text-[8px] uppercase text-white'>{odds[index]}%</span>
					</div>
				))}
			</div>
		)
	}

	// Item click function
	const clickHandle = () => {
		setOpenFarm(false)
	}

	// Build case item list
	const cases = farmItems.map((item, index) => (
		<CaseItem
			key={index}
			title={item.title}
			content={item.content}
			price={item.price}
			picUrl={item.picUrl}
			type={item.type}
			name={item.name}
			percent={item.percent}
			isHover={true}
			hoverContent={hoverContent(item.prices, item.oods, item.pricesTitle)}
			onClick={() => clickHandle()}
		/>
	))

	return (
		openFarm == true && (
			<div className='flex w-full flex-col items-center justify-center gap-5 px-3 py-3'>
				<span className='text-[18px] font-[500] text-[#D1D9EB]'>{t('open_case.case_content')}</span>
				<div className='flex flex-wrap justify-center gap-3'>{cases}</div>
			</div>
		)
	)
}

export default FarmContents
