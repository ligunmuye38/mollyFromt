'use client'

import { caseItems } from '../../model/items'
import { ICaseItemType } from '../../model/types'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import IconLogo from '@/shared/assets/icons/icon-hexagon-logo.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './CaseSelectSection.module.sass'

const colors = {
	yellow: '#FDCD24',
	pink: '#FF00F5',
	purple: '#8000FF',
	blue: '#0038FF',
	limit_blue: '#35AAFF'
}

const CaseItem = ({
	item,
	selected,
	onSelect,
	status
}: {
	item: ICaseItemType
	status: 'WAITING' | 'PENDING' | 'DONE'
	selected?: boolean
	onSelect: () => void
}) => {
	const t = useTranslations()
	const [internalStatus, setInternalStatus] = useState<'WAITING' | 'PENDING' | 'DONE'>('WAITING')

	useEffect(() => {
		if (status === 'DONE' && !selected) {
			setTimeout(() => setInternalStatus(status), 1500)
		} else {
			setInternalStatus(status)
		}
	}, [selected, status])

	return (
		<div
			onClick={() => {
				if (status === 'WAITING') onSelect()
			}}
			className={clsx(
				'h-[160px] w-[140px] rounded-[12px] bg-[#161C28] p-[2px] xl:w-full 3sm:w-full',
				{ [cls.waiting]: internalStatus === 'PENDING' },
				{ [cls.done]: internalStatus === 'DONE' }
			)}
		>
			<div
				className={clsx(
					'flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#141925] p-[13px]',
					{
						'flex flex-col !justify-center': internalStatus !== 'DONE'
					}
				)}
			>
				{internalStatus === 'WAITING' && (
					<>
						<Button
							hexagon
							hexagonAxis='x'
							onPress={() => {
								if (status === 'WAITING') onSelect()
							}}
							classNames={{
								base: 'w-full bg-[#343F57] p-[1px] h-8',
								content:
									'w-full h-full bg-[linear-gradient(90deg,_#242d3d_0%,_#1b212f_50%,_#242d3d_100%)] text-[12px] font-bold text-[#516080]'
							}}
						>
							{t('open').toUpperCase()}
						</Button>
					</>
				)}
				{internalStatus === 'PENDING' && <IconLogo className={cls.jump} />}
				{internalStatus === 'DONE' && (
					<>
						<div className='flex w-full justify-between'>
							<p className='text-[10px] font-medium leading-[10px] text-[#2F374A]'>FT</p>
							<div
								className='h-2 w-2 rounded-sm'
								style={{
									background: colors[item.type],
									boxShadow: `0 0 8px ${colors[item.type]}54`
								}}
							></div>
						</div>
						<div
							className='h-[60px] w-[81px] backdrop-blur-md'
							style={{
								background: `radial-gradient(50% 50% at 50% 50%, ${colors[item.type]}54 0%, rgba(18, 23, 34, 0) 100%)`
							}}
						>
							<Image
								src={item.picUrl}
								width={81}
								height={60}
								alt='gun'
							/>
						</div>
						<div>
							<p className='w-full text-left text-[10px] font-medium text-[#2F374A]'>{item.name}</p>
							<p className='w-full text-left text-[12px] font-bold text-[#D1D9EB]'>$ {item.price}</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

const CaseSelectSection = () => {
	const [selected, setSelected] = useState<number | undefined>()
	const [status, setStatus] = useState<'WAITING' | 'PENDING' | 'DONE'>('WAITING')
	const searchParams = useSearchParams()

	useEffect(() => {
		if (searchParams.get('case_id') === undefined || searchParams.get('case_id') === null) {
			setStatus('WAITING')
			setSelected(undefined)
		}
	}, [searchParams])

	return (
		<div className='mx-5 rounded-[18px] bg-[linear-gradient(180deg,_#191F2D_0%,_rgba(25,_31,_45,_0.25)_100%)] p-[14px]'>
			<div className='grid grid-cols-[repeat(auto-fill,140px)] justify-between gap-5'>
				{caseItems.map((item, index) => (
					<CaseItem
						key={index}
						item={item}
						selected={selected === index}
						onSelect={() => {
							setSelected(index)
							setStatus('PENDING')
							setTimeout(() => {
								setStatus('DONE')
								window.history.pushState({}, '', `/case/accept?case_id=${index}`)
							}, 3000)
						}}
						status={status}
					/>
				))}
			</div>
		</div>
	)
}

export default CaseSelectSection
