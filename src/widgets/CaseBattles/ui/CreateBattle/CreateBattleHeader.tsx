import { BattleVariants } from '../../model/types'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Selection, Switch } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import IconDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconBotMode from '@/shared/assets/icons/icon-bot-mode.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCrazyMode from '@/shared/assets/icons/icon-crazy-mode.svg'
import IconPrivateMode from '@/shared/assets/icons/icon-private-mode.svg'
import IconTrash from '@/shared/assets/icons/icon-trash.svg'
import IconPlayer from '@/shared/assets/icons/icon-user-rounded.svg'
import Button from '@/shared/ui/Button/Button'

import cls from './CreateBattle.module.sass'

const MainHeader = () => {
	const t = useTranslations()
	const [selectedOption, setSelectedOption] = useState<Selection>(new Set(['one-vs-one']))

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
					<IconCrazyMode />
					<p>{t('case_battles.bot_mode')}</p>
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
					<IconBotMode />
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
					<IconPrivateMode />
					<p>{t('case_battles.private_mode')}</p>
					<Switch
						color='default'
						classNames={{
							base: 'rounded-sm w-[30px]',
							wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
							thumb:
								"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
						}}
					/>
					<Button
						classNames={{
							base: clsx(cls.hexagon_btn, cls.default, cls.sm, 'h-[32px] w-[108px] ml-[10px]'),
							content: clsx(cls.hexagon_btn_inner, cls.default, cls.sm, '!gap-[6px]')
						}}
					>
						<IconTrash className={clsx(cls.hexagon_btn_inner_icon, cls.sm)} />
						{t('case_battles.clear_all')}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default MainHeader
