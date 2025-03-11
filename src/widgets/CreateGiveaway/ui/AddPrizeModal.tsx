import { Popover, PopoverContent, PopoverTrigger, Switch } from '@nextui-org/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import IconArrowDown from '@/shared/assets/icons/icon-arrow-down.svg'
import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconBookmark from '@/shared/assets/icons/icon-bookmark.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open.svg'
import IconCheck from '@/shared/assets/icons/icon-check.svg'
// import IconFilter from '@/shared/assets/icons/icon-filter-2.svg'
import IconHexagonDefaultSmallVertical from '@/shared/assets/icons/icon-hexagon-default-sm-v.svg'
import IconHexagonGreenSmallVertical from '@/shared/assets/icons/icon-hexagon-green-sm-v.svg'
import IconRefresh from '@/shared/assets/icons/icon-refresh.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconShoppingCart from '@/shared/assets/icons/icon-shopping-cart.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'

import cls from './CreateGiveaway.module.sass'

enum Tabs {
	INVENTORY = 'inventory',
	MARKETPLACE = 'marketplace',
	CASES = 'cases'
}

const tabs = [
	{
		type: Tabs.INVENTORY,
		title: 'Inventory',
		icon: IconBookmark
	},
	{
		type: Tabs.MARKETPLACE,
		title: 'Marketplace',
		icon: IconShoppingCart
	},
	{
		type: Tabs.CASES,
		title: 'Cases',
		icon: IconCaseOpen
	}
]

const CaseItem = ({ selected, onSelect }: { selected?: boolean; onSelect: (_: boolean) => void }) => {
	return (
		<div
			onClick={() => onSelect(!selected)}
			className={clsx(
				'h-[200px] w-full rounded-[12px] p-[2px] xl:w-full 2md:h-[170px] 3sm:w-full',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#111620] p-[13px]'>
				<div className='flex w-full justify-between'>
					<p className='text-[12px] font-medium leading-[10px] text-[#2F374A]'>FT</p>
					<div className='h-3 w-3 rounded-sm bg-[#FF00F5] shadow-[0_0_4px_#FF00F54D]'></div>
				</div>
				<div className='h-[87px] w-[120px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_0,_245,_0.45)_0%,_rgba(18,_23,_34,_0)_100%)] backdrop-blur-md 2md:h-[67px] 2md:w-[81px]'>
					<Image
						src='/images/case/skin-2.png'
						width={120}
						height={87}
						alt='gun'
					/>
				</div>
				<div className='w-full'>
					<p className='w-full text-left text-[14px] font-medium text-[#2F374A] 2md:text-[10px]'>
						AK-47 | Fire Serpent
					</p>
					<p className='w-full text-left text-[16px] font-bold text-[#D1D9EB] md:text-[12px]'>$ 456,05</p>
				</div>
			</div>
		</div>
	)
}

interface CaseCardProps {
	selected: boolean
	onClick: () => void
}

const CaseCard = ({ selected, onClick }: CaseCardProps) => {
	const t = useTranslations()

	// useEffect(() => {
	// 	setAmount(defaultAmount)
	// }, [])

	return (
		<div
			onClick={onClick}
			className={clsx(cls.battle_card_new, { [cls.selected]: selected }, '!w-full overflow-hidden')}
		>
			<div className={cls.battle_card_new_inner}>
				<div className='absolute left-[15px] top-[15px]'>
					{selected ? (
						<>
							<IconHexagonGreenSmallVertical />
							<IconCheck className='absolute left-1/2 top-1/2 w-[14px] -translate-x-1/2 -translate-y-1/2 fill-[#141925]' />
						</>
					) : (
						<IconHexagonDefaultSmallVertical />
					)}
				</div>
				<Image
					className='3sm:h-[100px] 3sm:w-[100px]'
					src='/images/skinsWiki/skins-wki-exmaple-item.png'
					width={120}
					height={120}
					alt='Case Image'
				/>
				<p className={cls.card_title}>{t('case_accept.cases_magic')}</p>
				<div className='z-10 flex w-full justify-center 3sm:flex-col-reverse 3sm:items-center 3sm:gap-2'>
					<div className={cls.price_wrapper}>
						<div className={clsx(cls.price, '3sm:!h-[36px] 3sm:!w-[110px]')}>
							<div className={cls.price_inner}>$15.50</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function AddPrizeModal() {
	const t = useTranslations()
	const [activeTab, setActiveTab] = useState<Tabs>(Tabs.INVENTORY)
	const [canShowSelectedItems, toggleCanShowSelectedItems] = useState<boolean>(false)
	const [search, setSearch] = useState<string>('')
	const [casesType, toggleCasesType] = useState<boolean>(false)
	const [selectedCases, setSelectedCases] = useState<number[]>([])
	const [dir, toggleDir] = useState<boolean>(false)

	return (
		<div className={cls.modal}>
			<div className='mb-5 flex items-center justify-between lg:flex-col lg:gap-3'>
				<div className='relative flex w-max px-[4px] py-[3px] lg:w-full'>
					<div className='absolute left-0 top-0 h-full w-full bg-[linear-gradient(270deg,_#435273_0%,_rgba(209,_217,_235,_0)_25%,_rgba(209,_217,_235,_0)_75%,_#435273_100%)] p-[2px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'>
						<div className='h-full w-full bg-[linear-gradient(270deg,_#161c29_0%,_#141925_25%,_#141925_75%,_#161c29_100%)] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'></div>
					</div>
					{tabs.map(tab => (
						<div
							key={tab.type}
							className={clsx({ '[filter:drop-shadow(0_0_24px_#FD3E2459)]': activeTab === tab.type }, 'lg:w-full')}
						>
							<Button
								onPress={() => setActiveTab(tab.type)}
								classNames={{
									base: `duration-250 lg:w-full [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)] cursor-pointer p-[2px] ${activeTab === tab.type ? 'bg-[linear-gradient(90deg,_rgba(253,_205,_36,_0)_91.82%,_#FDCD24_106.13%),_linear-gradient(270deg,_#FDCD24_29.76%,_#FDCD24_50.16%)]' : 'bg-transparent'}`,
									content: `py-[6px] [clip-path:polygon(10px_0px,_calc(100%_-_10px)_0px,_100%_50%,_calc(100%_-_10px)_100%,_10px_100%,_0px_50%)] w-full h-full flex items-center justify-center text-[12px] font-bold ${activeTab === tab.type ? 'px-8 3sm:px-3 bg-[linear-gradient(0deg,_#E2B617,_#E2B617),_linear-gradient(180deg,_rgba(253,_205,_36,_0)_0%,_rgba(253,_205,_36,_0.65)_100%)]' : '3sm:px-2 bg-transparent px-5'}`
								}}
							>
								<tab.icon
									className={clsx(
										'h-6 w-6 3sm:h-4 3sm:w-4',
										activeTab === tab.type ? 'fill-[#121722]' : 'fill-[#435170]'
									)}
								/>
								<p
									className={clsx(
										'text-[12px] font-bold',
										activeTab === tab.type ? 'text-[#121722] [text-shadow:_0_1px_0_#FFD53F]' : 'text-[#435170]'
									)}
								>
									{tab.title}
								</p>
							</Button>
						</div>
					))}
				</div>
				<div className='flex items-center gap-2'>
					{activeTab === Tabs.INVENTORY && (
						<div className='flex items-center gap-[6px]'>
							<p className='text-[12px] font-medium text-[#60719A]'>{t('show_selected_items')}</p>
							<Switch
								isSelected={canShowSelectedItems}
								onValueChange={v => toggleCanShowSelectedItems(v)}
								color='default'
								classNames={{
									base: 'rounded-sm w-[30px]',
									wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
									thumb:
										"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
								}}
							/>
						</div>
					)}
					{activeTab === Tabs.MARKETPLACE && (
						<>
							{/* <Button
								classNames={{
									base: 'bg-[#273145A6] flex-shrink-0 h-max p-[1px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]',
									content:
										'flex h-full w-full py-[10px] items-center gap-3 bg-[#161c29] px-4 [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'
								}}
							>
								<IconFilter />
							</Button> */}
							<Input
								onChange={v => setSearch(v)}
								value={search}
								startContent={<IconSearch className='h-4 w-4 fill-[#60719A]' />}
								placeholder={t('search')}
								classNames={{
									mainWrapper:
										'[clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[#273145A6] p-[1px]',
									inputWrapper:
										'overflow-hidden [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[#161c29] !border-0'
								}}
							/>
						</>
					)}
					{activeTab === Tabs.CASES && (
						<>
							<Button
								classNames={{
									base: 'lg:hidden lg:w-full bg-[#273145A6] flex-shrink-0 h-max p-[1px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]',
									content:
										'flex h-full w-full py-[10px] items-center gap-3 bg-[#161c29] px-4 [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'
								}}
							>
								<p className={clsx('text-[12px]', casesType ? 'text-[#60719A]' : 'font-bold text-white')}>
									{t('giveaways.community_cases')}
								</p>
								<Switch
									isSelected={casesType}
									onValueChange={v => toggleCasesType(v)}
									color='default'
									classNames={{
										base: 'rounded-sm w-[30px]',
										wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
										thumb:
											"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
									}}
								/>
								<p className={clsx('text-[12px]', !casesType ? 'text-[#60719A]' : 'font-bold text-white')}>
									{t('giveaways.official_cases')}
								</p>
							</Button>
							<Popover placement='bottom'>
								<PopoverTrigger>
									<Button
										classNames={{
											base: 'lg:hidden bg-[#273145A6] flex-shrink-0 h-max p-[1px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]',
											content:
												'flex h-full w-full py-[10px] items-center gap-3 bg-[#161c29] px-4 [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'
										}}
									>
										<IconSearch className='h-4 w-4 fill-[#60719A]' />
									</Button>
								</PopoverTrigger>
								<PopoverContent className='p-0'>
									<Input
										onChange={value => setSearch(value)}
										value={search}
										placeholder={t('search')}
										startContent={<IconSearch className='h-5 w-5 fill-[#60719A]' />}
									/>
								</PopoverContent>
							</Popover>
							<Input
								onChange={v => setSearch(v)}
								value={search}
								startContent={<IconSearch className='h-4 w-4 fill-[#60719A]' />}
								placeholder={t('search')}
								classNames={{
									mainWrapper:
										'hidden lg:flex [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[#273145A6] p-[1px]',
									inputWrapper:
										'overflow-hidden [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)] bg-[#161c29] !border-0'
								}}
							/>
						</>
					)}
					<Button
						onPress={() => toggleDir(v => !v)}
						classNames={{
							base: 'bg-[#273145A6] flex-shrink-0 h-max p-[1px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]',
							content:
								'flex h-full w-full py-[10px] items-center gap-3 bg-[#161c29] px-5 [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'
						}}
					>
						<p className='text-[14px] font-medium text-[#60719A]'>{t('price')}</p>
						<div className='flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#252C3F]'>
							<IconArrowDown
								className={clsx('w-[14px] fill-[#60719A] duration-150', dir ? 'rotate-180' : 'rotate-0')}
							/>
						</div>
					</Button>
					<Button
						classNames={{
							base: 'w-[42px] flex-shrink-0 h-[48px] [clip-path:polygon(0%_25%,_0%_76%,_50%_100%,_100%_75%,_100%_25%,_50%_0%)] bg-[#273145A6] p-[1px]',
							content:
								'w-full h-full [clip-path:polygon(0%_25%,_0%_76%,_50%_100%,_100%_75%,_100%_25%,_50%_0%)] bg-[#161c29]'
						}}
					>
						<IconRefresh className='h-5 w-5 fill-[#60719A]' />
					</Button>
				</div>
				{activeTab === Tabs.CASES && (
					<div>
						<Button
							classNames={{
								base: 'hidden lg:flex lg:w-full bg-[#273145A6] flex-shrink-0 h-max p-[1px] [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]',
								content:
									'flex h-full w-full py-[10px] items-center gap-3 bg-[#161c29] px-4 [clip-path:polygon(12px_0px,_calc(100%_-_12px)_0px,_100%_50%,_calc(100%_-_12px)_100%,_12px_100%,_0px_50%)]'
							}}
						>
							<p className={clsx('text-[12px]', casesType ? 'text-[#60719A]' : 'font-bold text-white')}>
								{t('giveaways.community_cases')}
							</p>
							<Switch
								isSelected={casesType}
								onValueChange={v => toggleCasesType(v)}
								color='default'
								classNames={{
									base: 'rounded-sm w-[30px]',
									wrapper: 'rounded-[6px] h-4 bg-[#252C3F] w-[30px] group-data-[selected=true]:bg-[#252C3F]',
									thumb:
										"w-[10px] h-[10px] bg-[#17E2A5] after:contet-[''] after:w-1 after:h-1 after:bg-[#12AB7D] after:rounded-sm group-data-[selected=true]:ms-3"
								}}
							/>
							<p className={clsx('text-[12px]', !casesType ? 'text-[#60719A]' : 'font-bold text-white')}>
								{t('giveaways.official_cases')}
							</p>
						</Button>
					</div>
				)}
			</div>
			{activeTab === Tabs.CASES ? (
				<div className='app-scrollbar mb-5 grid max-h-[420px] grid-cols-5 gap-4 overflow-auto lg:gap-2 2md:max-h-[390px] md:grid-cols-[repeat(auto-fill,140px)] md:justify-between'>
					{Array.from(new Array(20)).map((_, index) => (
						<CaseCard
							key={index}
							selected={selectedCases.includes(index)}
							onClick={() =>
								setSelectedCases(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]))
							}
						/>
					))}
				</div>
			) : (
				<div className='app-scrollbar mb-5 grid max-h-[420px] grid-cols-5 gap-4 overflow-auto lg:gap-2 2md:max-h-[356px] md:grid-cols-[repeat(auto-fill,140px)] md:justify-between'>
					{Array.from(new Array(20)).map((_, index) => (
						<CaseItem
							key={index}
							selected={selectedCases.includes(index)}
							onSelect={() =>
								setSelectedCases(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]))
							}
						/>
					))}
				</div>
			)}
			<div className='flex justify-between rounded-xl border-1 border-[#1A202E] p-5 3sm:flex-col 3sm:items-center 3sm:gap-2 3sm:p-2'>
				<div className='flex w-[300px] items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] py-[9px] pl-3 pr-[22px] md:pr-2'>
					<IconBagTick className='mr-2 w-6 fill-[#60719A]' />
					<span className='text-[14px] font-medium leading-4 text-[#60719A]'>
						{t('case_battles.total_cost')}:{' '}
						<span className='font-bold text-white 2sm:text-[12px]'>
							<span className='text-[#17E2A5]'>$ </span>
							{15.5 * selectedCases.length} / <span className='text-[#17E2A5]'>$ </span>
							<span className='text-[#60719A]'>{1749.45}</span>
						</span>
					</span>
				</div>
				<div className='flex'>
					<div style={{ filter: 'drop-shadow(0 0 12px #10AA7C59)' }}>
						<Button
							classNames={{
								base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
								content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
							}}
						>
							<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
							<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
								{t('case_battles.add_cases').toUpperCase()}
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPrizeModal
