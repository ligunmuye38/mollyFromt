'use client'

import { selectItems } from '../model/items'
import { ICaseItemType } from '../model/types'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import { useCommonStore } from '@/entities/Common/model/store'

import CaseSection from '@/shared/ui/CaseSection/ui/CaseSection'

import cls from './OpenCase.module.sass'

const CountCases = () => {
	const caseCount = useCommonStore(state => state.caseCount)

	const [cases, setCases] = useState<React.ReactNode[]>([])

	// Selected cases
	const setSelectedCaseItems = useCommonStore(state => state.setSelectedCaseItems)

	// Generate random number
	function getRandomNumber(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	// Case count hook
	useEffect(() => {
		switch (caseCount) {
			case 1:
				{
					const newCase1: any[] = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 1; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase1.push(
							<div
								className='relative flex h-auto w-auto items-center justify-center py-2'
								key={'case1' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[990px] items-center justify-center overflow-hidden md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
									/>
								</div>
								<div
									className={clsx('absolute z-[2] h-full w-[4px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}

					setSelectedCaseItems(selected)
					setCases(newCase1)
				}
				break

			case 2:
				{
					const newCase2 = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 2; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase2.push(
							<div
								className='relative flex h-auto w-auto py-2 md:w-1/2'
								key={'case2' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[555px] items-center justify-center overflow-hidden md:w-full md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
									/>
								</div>
								<div
									className={clsx('absolute z-[1] h-full w-[2px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}
					setSelectedCaseItems(selected)
					setCases(newCase2)
				}
				break

			case 3:
				{
					const newCase3 = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 3; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase3.push(
							<div
								className={clsx('relative flex h-auto w-auto py-2', i == 0 ? 'md:w-full' : 'md:w-1/2')}
								key={'case3' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[361px] items-center justify-center overflow-hidden md:w-full md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
										isBig={false}
									/>
								</div>
								<div
									className={clsx('absolute z-[1] h-full w-[1.3px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}
					setSelectedCaseItems(selected)
					setCases(newCase3)
				}
				break

			case 4:
				{
					const newCase4 = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 4; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase4.push(
							<div
								className='relative flex h-auto w-auto py-2 md:w-1/2'
								key={'case4' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[279px] items-center justify-center overflow-hidden md:w-full md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
										isBig={false}
									/>
								</div>
								<div
									className={clsx('absolute z-[1] h-full w-[1px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}

					setSelectedCaseItems(selected)
					setCases(newCase4)
				}

				break

			case 5:
				{
					const newCase5 = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 5; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase5.push(
							<div
								className={clsx('relative flex h-auto w-auto py-2', i == 2 ? 'md:w-full' : 'md:w-1/2')}
								key={'case5' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[220px] items-center justify-center overflow-hidden md:w-full md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
										isBig={false}
									/>
								</div>
								<div
									className={clsx('absolute z-[1] h-full w-[0.8px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}
					setSelectedCaseItems(selected)
					setCases(newCase5)
				}

				break

			case 10:
				{
					const newCase10 = []
					const selected: ICaseItemType[] = []
					for (let i = 0; i < 10; i++) {
						const selectedItem = getRandomNumber(0, selectItems.length - 1)
						selected.push(selectItems[selectedItem])
						newCase10.push(
							<div
								className='relative flex h-auto w-auto py-2 md:w-1/2'
								key={'case10' + i}
							>
								<div className='absolute z-[1] h-full w-full bg-black opacity-0'></div>
								<div
									className={clsx(
										'relative flex h-auto w-[220px] items-center justify-center overflow-hidden md:w-full md:!rounded-none',
										cls.section
									)}
								>
									<CaseSection
										selectedItem={selectedItem}
										className='h-auto'
										items={selectItems}
										isBig={false}
									/>
								</div>
								<div
									className={clsx('absolute z-[1] h-full w-[0.8px] bg-[#FFC600]', cls.center, cls.pointer_shadow)}
								></div>
							</div>
						)
					}

					setSelectedCaseItems(selected)
					setCases(newCase10)
				}

				break

			default:
				break
		}
	}, [caseCount, setSelectedCaseItems])

	return (
		<div className='relative flex h-auto w-full flex-wrap items-center justify-center gap-3 md:gap-0'>
			{cases.map(item => item)}
		</div>
	)
}

export default CountCases
