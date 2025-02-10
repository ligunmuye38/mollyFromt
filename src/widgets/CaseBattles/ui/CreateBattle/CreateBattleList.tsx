'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment, useState } from 'react'

import IconPlus from '@/shared/assets/icons/icon-black-plus.svg'
import IconCaseBattle from '@/shared/assets/icons/icon-case-battle.svg'
import IconCaseOpen from '@/shared/assets/icons/icon-case-open-green.svg'
import IconHexagonGreenSmall from '@/shared/assets/icons/icon-hexagon-green-sm.svg'
import { useModal } from '@/shared/context/ModalContext'
// import IconSort from '@/shared/assets/icons/icon-sort.svg'
import Button from '@/shared/ui/Button/Button'

// import PaginationBar from '@/shared/ui/PaginationBar/PaginationBar'
import cls from './CreateBattle.module.sass'
import CreateBattleModal from './CreateBattleModal'

const CaseCard = () => {
	const [amount, setAmount] = useState<number>(0)

	return (
		<div className={clsx(cls.create_battle_card_bg, 'w-[220px] 2sm:w-full')}>
			<div
				className={clsx(cls.create_battle_card_bg_inner, 'flex h-full flex-col items-center justify-center pb-[30px]')}
			>
				<Image
					src='/images/case/case-full-1.png'
					width={182}
					height={182}
					alt='image'
				/>
				<p className='my-[15px] text-[15px] font-medium leading-4 text-white'>Cases Magic</p>
				<div className={clsx(cls.case_card_price, '2sm:!w-[140px]')}>
					<div className={clsx(cls.case_card_price_inner, 'flex items-center px-4')}>
						<p className='text-[14px] font-[900] leading-4 text-white'>$15.50</p>
					</div>
					<div className={clsx(cls.case_card_price_btc, '2sm:!w-[70px]')}>
						<div
							className={clsx(cls.case_card_price_btc_inner, 'flex items-center justify-center gap-[6px] 2sm:gap-1')}
						>
							<p className='h-4 w-4 rounded-[4px] border-1 border-[#FDCD24] bg-[#E2B617] text-center text-[12px] font-[900] leading-4 text-[#10151E]'>
								B
							</p>
							<p className='text-[12px] font-bold leading-4 text-[#E2B517]'>5.15</p>
						</div>
					</div>
				</div>
				<div className={clsx(cls.spin, 'mt-[7px] !bg-[#242C3E]')}>
					<Button onPress={() => setAmount(amount == 0 ? amount : amount - 1)}>
						<IconHexagonGreenSmall className='h-[36px] w-[32px]' />
						<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#141925]'>-</span>
					</Button>
					<span>{amount}</span>
					<Button
						onPress={() => {
							setAmount(amount + 1)
						}}
					>
						<IconHexagonGreenSmall className='h-[36px] w-[32px]' />
						<span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#141925]'>+</span>
					</Button>
				</div>
			</div>
		</div>
	)
}

const MainList = () => {
	const t = useTranslations()
	const router = useRouter()
	const { closeModal, openModal } = useModal()
	const [items, setItems] = useState<number>(0)

	const onCreateCases = () => {
		openModal(
			<CreateBattleModal
				addCases={_items => {
					setItems(_items)
					closeModal()
				}}
			/>,
			{},
			<IconCaseBattle className='h-[22px] w-[22px] fill-[#19D099]' />,
			t('case_battles.create_new_battle'),
			{
				body: '',
				modal: 'relative w-full lg:h-full h-screen flex lg:items-start justify-center items-center'
			},
			true
		)
	}

	// const [page, setPage] = useState<number>(1)

	return (
		<>
			{!items ? (
				<div className={clsx(cls.create_battle_card_bg, 'h-[300px] w-full')}>
					<div
						className={clsx(cls.create_battle_card_bg_inner, 'flex h-full flex-col items-center justify-center gap-12')}
					>
						<div className='relative'>
							<div className={clsx(cls.hexagon, 'scale-[2] !bg-[#242C3E] !bg-none')}></div>
							<IconCaseOpen className='fill-[rgba(36, 253, 188, 0.65)] absolute left-1/2 top-1/2 h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2' />
						</div>
						<div style={{ filter: 'drop-shadow(0 0 12px #10AA7C59)' }}>
							<Button
								onPress={onCreateCases}
								classNames={{
									base: clsx(cls.hexagon_btn, cls.sm, 'h-[42px] w-[200px]'),
									content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
								}}
							>
								<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
								<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
									{t('case_battles.add_case').toUpperCase()}
								</span>
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div className='flex w-full flex-col items-center gap-6'>
					<div className='grid w-full auto-rows-auto grid-cols-[repeat(auto-fill,220px)] justify-between gap-3 2sm:grid-cols-2'>
						{Array.from(new Array(items)).map((_, index) => (
							<CaseCard key={index} />
						))}
						<div className={clsx(cls.create_battle_card_bg, 'h-full w-[220px] 2sm:w-full')}>
							<div
								className={clsx(
									cls.create_battle_card_bg_inner,
									'flex h-full flex-col items-center justify-center gap-12'
								)}
							>
								<div className='relative'>
									<div className={clsx(cls.hexagon, 'scale-[2] !bg-[#242C3E] !bg-none')}></div>
									<IconCaseOpen className='fill-[rgba(36, 253, 188, 0.65)] absolute left-1/2 top-1/2 h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2' />
								</div>
								<div style={{ filter: 'drop-shadow(0 0 12px #10AA7C59)' }}>
									<Button
										onPress={onCreateCases}
										classNames={{
											base: clsx(cls.hexagon_btn, cls.sm, 'h-[42px] w-[180px] 2sm:w-[140px]'),
											content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
										}}
									>
										<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
										<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
											{t('case_battles.add_case').toUpperCase()}
										</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div style={{ filter: 'drop-shadow(0 0 12px #10AA7C59)' }}>
						<Button
							onPress={() => router.push('/case-battles/123')}
							classNames={{
								base: clsx(cls.hexagon_btn, cls.sm, 'h-[42px] w-[200px]'),
								content: clsx(cls.hexagon_btn_inner, cls.sm, '!gap-[6px]')
							}}
						>
							<IconPlus className={clsx(cls.hexagon_btn_inner_icon, cls.sm, 'w-4 !fill-[#121722]')} />
							<span className='text-[14px] font-[900] leading-4 text-[#121722] [text-shadow:_0_1px_0_rgb(37_255_189_/_0.45)]'>
								{t('case_battles.create_for')} $15.50
							</span>
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default MainList
