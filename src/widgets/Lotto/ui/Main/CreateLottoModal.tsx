import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

import { caseItems } from '@/widgets/Cases/model/items'
import { ICaseItemType } from '@/widgets/Cases/model/types'

import IconBagTick from '@/shared/assets/icons/icon-bag-tick.svg'
import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconDollarCircle from '@/shared/assets/icons/icon-dollar-circle.svg'
import IconPeople from '@/shared/assets/icons/icon-profile-2user.svg'
import IconSearch from '@/shared/assets/icons/icon-search.svg'
import IconUnprotected from '@/shared/assets/icons/icon-unprotected.svg'
import Button from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import ToggleButton from '@/shared/ui/ToggleButton/ToggleButton'

import cls from './Main.module.sass'

const colors = {
	yellow: '#FDCD24',
	pink: '#FF00F5',
	purple: '#8000FF',
	blue: '#0038FF',
	limit_blue: '#35AAFF'
}

const CaseItem = ({ item }: { item: ICaseItemType }) => {
	const [selected, setSelected] = useState<boolean>(false)

	return (
		<div
			onClick={() => setSelected(v => !v)}
			className={clsx(
				'h-[215px] w-[194px] cursor-pointer rounded-[12px] p-[2px] 2sm:w-auto',
				selected
					? 'bg-[linear-gradient(0deg,_#10AA7C,_#10AA7C),_linear-gradient(180deg,_rgba(36,_253,_188,_0)_0%,_rgba(36,_253,_188,_0.65)_100%)]'
					: 'bg-[#161C28]'
			)}
		>
			<div className='flex h-full w-full flex-col items-center justify-between rounded-[12px] bg-[#121722] p-5 md:p-3'>
				<div className='flex w-full justify-between'>
					<p className='text-[13px] font-medium leading-[10px] text-[#2F374A]'>FT</p>
					<div
						className={`h-3 w-3 rounded-sm`}
						style={{
							background: colors[item.type],
							boxShadow: `0 0 8px ${colors[item.type]}54`
						}}
					></div>
				</div>
				<div
					className='h-[88px] w-[120px] backdrop-blur-md'
					style={{
						background: `radial-gradient(50% 50% at 50% 50%, ${colors[item.type]}54 0%, rgba(18, 23, 34, 0) 100%)`
					}}
				>
					<Image
						src={item.picUrl}
						width={120}
						height={88}
						alt='gun'
					/>
				</div>
				<div className='w-full'>
					<p className='w-full text-left text-[14px] font-medium text-[#2F374A] 2sm:text-[12px]'>
						AK-47 | Fire Serpent
					</p>
					<p className='w-full text-left text-[16px] font-bold text-[#D1D9EB] 2sm:text-[14px]'>$ 456,05</p>
				</div>
			</div>
		</div>
	)
}

const CreateLottoModal = () => {
	const t = useTranslations()

	return (
		<div className={cls.modal}>
			<div className='mb-5 flex gap-4 3sm:flex-col'>
				<Input
					value=''
					onChange={() => {
						return
					}}
					placeholder={t('lotto.search')}
					startContent={<IconSearch className='h-[15px] w-[15px] fill-[#60719A]' />}
					classNames={{
						inputWrapper: '!border-[#1E2536] !bg-[#1A202E] !rounded-[8px]',
						mainWrapper: 'w-full'
					}}
				/>
				<div className='flex h-[48px] w-full max-w-[355px] 3sm:max-w-full'>
					<div className='flex w-full items-center gap-2 rounded-l-[12px] border-1 border-[#232B3E] p-3'>
						<div className='w-max rounded-[100%] bg-[#353D51] p-1'>
							<IconDollarCircle />
						</div>
						<p className='text-[14px] font-bold text-white'>1.00</p>
					</div>
					<div className='flex w-full items-center gap-2 rounded-r-[12px] border-1 border-l-0 border-[#232B3E] p-3'>
						<div className='w-max rounded-[100%] bg-[#353D51] p-1'>
							<IconDollarCircle />
						</div>
						<p className='text-[14px] font-bold text-white'>500 000.00</p>
					</div>
				</div>
			</div>
			<div className='mb-5 grid auto-rows-auto grid-cols-[repeat(auto-fill,194px)] justify-between gap-[10px] md:grid-cols-2'>
				{caseItems.slice(0, 10).map((item, index) => (
					<CaseItem
						key={index}
						item={item}
					/>
				))}
			</div>
			<div
				className={clsx(
					'flex items-center justify-between gap-4 rounded-xl border-1 border-[#1A202E] py-[18px] pl-5 pr-[14px]'
				)}
			>
				<div className='flex items-center gap-4 lg:w-full lg:justify-center md:flex-col'>
					<div className='flex w-max items-center rounded-[8px] border-1 border-[#1E2536] bg-[#1A202E] px-3 py-[9px] md:w-full'>
						<IconBagTick className='mr-2 w-6 fill-[#60719A]' />
						<span className='text-[12px] font-medium leading-4 text-[#60719A]'>
							{t('lotto.cost_of_participation')}:{' '}
							<span className='font-medium text-white'>
								<span className='text-[#17E2A5]'>$</span>15.50
							</span>
						</span>
					</div>
					<div className='relative flex h-[44px] w-[170px] items-center gap-2 rounded-lg border-1 border-[#1E2536] px-[12px] py-[10px] md:w-full'>
						<p className='absolute -top-2 left-1/2 w-max -translate-x-1/2 bg-[#141925] px-1 text-[11px] font-medium text-[#60719A] md:left-6 md:translate-x-0'>
							{t('lotto.number_of_participants')}:
						</p>
						<IconPeople className='h-6 w-6 fill-[#60719A]' />
						<p className='text-[16px] text-white'>2</p>
					</div>
					<div className='flex h-[44px] items-center gap-2 rounded-lg border-1 border-[#1E2536] px-[12px] py-[10px] md:w-full'>
						<IconUnprotected className='h-6 w-6 fill-[#60719A]' />
						<p className='text-[14px] text-[#60719A]'>{t('lotto.lottery_privacy')}</p>
						<ToggleButton
							onToggle={() => {
								return
							}}
							value
						/>
					</div>
				</div>
				<div
					className='lg:hidden'
					style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C40)' }}
				>
					<Button
						classNames={{
							base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
							content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
						}}
					>
						<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
						<span className='text-[14px] font-[900] leading-4 text-[#121722]'>{t('lotto.create').toUpperCase()}</span>
					</Button>
				</div>
			</div>
			<div
				className='mt-4 flex justify-center'
				style={{ filter: 'drop-shadow(0px 0px 12px #10AA7C40)' }}
			>
				<Button
					classNames={{
						base: clsx(cls.hexagon_btn, cls.sm, 'h-[44px] w-[200px]'),
						content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
					}}
				>
					<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
					<span className='text-[14px] font-[900] leading-4 text-[#121722]'>{t('lotto.create').toUpperCase()}</span>
				</Button>
			</div>
		</div>
	)
}

export default CreateLottoModal
