import { BattleVariants, CaseBattleTypes } from '../../model/types'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection, Switch } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCrazyMode from '@/shared/assets/icons/icon-crazy-mode.svg'
import IconTrash from '@/shared/assets/icons/icon-trash.svg'
import IconPlayer from '@/shared/assets/icons/icon-user-rounded.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './Main.module.sass'

interface IMainHeaderProps {
	type?: CaseBattleTypes
}

enum Periods {
	DAY = 'day',
	WEEK = 'week',
	MONTH = 'month',
	YEAR = 'year',
	ALL_TIMES = 'all_times'
}

const MainHeader = ({ type = CaseBattleTypes.ACTIVE_BATTLES }: IMainHeaderProps) => {
	const t = useTranslations()
	const [selectedOption, setSelectedOption] = useState<Selection>(new Set(['one-vs-one']))
	const [selectedPeriod, setSelectedPeriod] = useState<Periods>(Periods.DAY)

	const battleVariants = () => {
		switch (new Set(selectedOption).values().next().value) {
			case BattleVariants.ONE_VS_ONE:
				return (
					<div className='flex justify-center gap-2'>
						<IconPlayer />
						<IconCaseBattle className='h-[20px] w-[20px] fill-[#3A445D]' />
						<IconPlayer />
					</div>
				)
			case BattleVariants.TWO_VS_TWO:
				return (
					<div className='flex justify-center gap-2'>
						<IconPlayer />
						<IconPlayer />
						<IconCaseBattle className='h-[20px] w-[20px] fill-[#3A445D]' />
						<IconPlayer />
						<IconPlayer />
					</div>
				)
		}
	}

	return (
		<>
			{type === CaseBattleTypes.ACTIVE_BATTLES ? (
				<div className={cls.main_header}>
					<div className={cls.main_header_inner}>
						<div className='flex items-center gap-[6px]'>
							<p>{t('case_battles.players')}</p>
							{battleVariants()}
							<Dropdown
								placement='bottom-end'
								className='bg-[#1A2130] dark'
							>
								<DropdownTrigger>
									<Button
										isIconOnly
										className='h-[20px] w-[20px] rounded-md bg-[#252C3F]'
									>
										<IconDown className='h-[20px] w-[20px] fill-[#404B65]' />
									</Button>
								</DropdownTrigger>
								<DropdownMenu
									disallowEmptySelection
									aria-label='Battle types'
									className='max-w-[300px] bg-[#1A2130] dark'
									selectedKeys={selectedOption}
									selectionMode='single'
									onSelectionChange={setSelectedOption}
								>
									<DropdownItem
										key={BattleVariants.ONE_VS_ONE}
										className='hover:!bg-[#313845] focus:!bg-[#313845]'
									>
										<div className='flex justify-center gap-2'>
											<IconPlayer />
											<IconCaseBattle className='h-[20px] w-[20px] fill-[#3A445D]' />
											<IconPlayer />
										</div>
									</DropdownItem>
									<DropdownItem
										key={BattleVariants.TWO_VS_TWO}
										className='hover:!bg-[#313845] focus:!bg-[#313845]'
									>
										<div className='flex justify-center gap-2'>
											<IconPlayer />
											<IconPlayer />
											<IconCaseBattle className='h-[20px] w-[20px] fill-[#3A445D]' />
											<IconPlayer />
											<IconPlayer />
										</div>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
						<div className='flex items-center gap-[6px]'>
							<IconCrazyMode className='w-[14px]' />
							<p>{t('case_battles.crazy_mode')}</p>
							<Switch
								color='default'
								classNames={{
									base: 'rounded-sm w-[30px]',
									wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
									thumb:
										"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
								}}
							/>
							<span className='text-[20px] text-[#232A3C]'>|</span>
							<Button
								classNames={{
									base: clsx(cls.hexagon_btn, cls.default, cls.sm, 'h-[32px] w-[108px]'),
									content: clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')
								}}
							>
								<IconTrash className={clsx(cls.hexagon_btn_inner_icon, cls.sm)} />
								{t('case_battles.clear_all')}
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div
					className='h-[48px] w-[538px] bg-[#283046] p-[2px]'
					style={{
						clipPath: 'polygon(12px 0px, calc(100% - 12px) 0px, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0px 50%)'
					}}
				>
					<div
						className='flex h-full w-full items-center justify-start gap-[60px] bg-[#171E2B] px-2'
						style={{
							clipPath:
								'polygon(12px 0px, calc(100% - 12px) 0px, calc(100% - 1px) 50%, calc(100% - 12px) 100%, 12px 100%, 1px 50%)'
						}}
					>
						{Object.values(Periods).map((value, index) => {
							if (selectedPeriod === value) {
								return (
									<div
										key={index}
										className='bg-[#222B3D] p-[1px] text-[12px] font-medium leading-4 text-white'
										style={{
											clipPath:
												'polygon(12px 0px, calc(100% - 12px) 0px, calc(100% - 1px) 50%, calc(100% - 12px) 100%, 12px 100%, 1px 50%)'
										}}
									>
										<div
											className='h-full w-full px-[44px] py-[8px]'
											style={{
												background: 'linear-gradient(270deg, #1C2331 21.28%, #191F2C 59.46%, #1C2331 100%)',
												clipPath:
													'polygon(12px 0px, calc(100% - 12px) 0px, calc(100% - 1px) 50%, calc(100% - 12px) 100%, 12px 100%, 1px 50%)'
											}}
										>
											{t(`case_battles.${value}`)}
										</div>
									</div>
								)
							}
							return (
								<p
									className='text-[12px] font-medium leading-4 text-[#60719A]'
									onClick={() => setSelectedPeriod(value)}
									key={index}
								>
									{t(`case_battles.${value}`)}
								</p>
							)
						})}
					</div>
				</div>
			)}
		</>
	)
}

export default MainHeader
